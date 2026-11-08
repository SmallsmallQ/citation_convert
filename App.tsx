import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { TargetLanguage, Citation, CitationStyle, AIProvider } from './types';
import { splitInputLines } from './services/citationRules.js';
import { STYLE_LABELS } from './constants';
import './app.css';

const CslEditor = lazy(() => import('./components/CslEditor'));
const STORAGE_KEY = 'law_citation_v10';
const EXAMPLE = `Charles A. Reich, The New Property, 73 Yale Law Journal 733, 737-738 (1964).
申卫星、刘云：《法学研究新范式：计算法学的内涵、范畴与方法》，载《法学研究》2020年第5期，第3-23页。
王名扬：《美国行政法》,中国法制出版社1995年版，第18页。
《民法典》第1224条第1款。`;

function loadHistory(): Citation[] {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(data) ? data.filter(item => item && typeof item.id === 'string' && typeof item.formatted === 'string' && typeof item.original === 'string').slice(0, 200) : [];
  } catch { return []; }
}
const cleanText = (text: string) => text.replace(/\*([^*]+)\*/g, '$1');
function FormattedText({ text }: { text: string }) {
  return <>{text.split(/(\*[^*]+\*)/g).map((part, index) => part.startsWith('*') && part.endsWith('*') ? <i key={index}>{part.slice(1, -1)}</i> : <React.Fragment key={index}>{part}</React.Fragment>)}</>;
}
function download(content: string, extension: string) {
  const url = URL.createObjectURL(new Blob([content], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url; link.download = `法学引注_${new Date().toLocaleDateString('sv-SE')}.${extension}`;
  link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function App() {
  const [mode, setMode] = useState<'text' | 'csl'>('text');
  const [cslOpened, setCslOpened] = useState(false);
  const [input, setInput] = useState('');
  const [style, setStyle] = useState(CitationStyle.LEGAL);
  const [provider, setProvider] = useState(AIProvider.DEEPSEEK);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<Citation[]>(loadHistory);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [search, setSearch] = useState('');
  const [warningsOnly, setWarningsOnly] = useState(false);
  const [numbered, setNumbered] = useState(false);
  const [undo, setUndo] = useState<Citation[]>([]);
  const resultRef = useRef<HTMLElement>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 200))); }
    catch { setError('浏览器存储不可用，本次记录无法自动保存，请及时导出。'); }
  }, [history]);
  useEffect(() => () => { if (copyTimer.current) clearTimeout(copyTimer.current); }, []);

  const addResults = (results: Citation[]) => {
    setHistory(prev => [...results, ...prev].slice(0, 200)); setSearch(''); setWarningsOnly(false);
    setNotice(`已生成 ${results.length} 条引注`);
    if (copyTimer.current) clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setNotice(''), 2000);
    if (window.innerWidth <= 620) resultRef.current?.scrollIntoView({ block: 'start' });
  };
  const convert = async () => {
    if (!input.trim() || isLoading) return;
    const lines = splitInputLines(input);
    if (lines.length > 200) { setError('每次最多转换 200 条文献，请分批处理。'); return; }
    setIsLoading(true); setError('');
    try {
      const { processCitation } = await import('./services/aiService');
      const results = await processCitation(input, TargetLanguage.ZH, style, provider);
      addResults(results.map((result, index) => ({
        id: crypto.randomUUID(), original: lines[index], formatted: result.text,
        level: result.level, docType: result.docType, docTypeLabel: result.docTypeLabel,
        rankDetail: result.rankDetail, source: result.source,
        warnings: result.source === 'ai' ? ['AI 辅助转换，请核对字段与引用定位。'] : [],
        style, provider, timestamp: Date.now(),
      })));
    } catch (err) { setError((err as Error).message || '转换失败，请重试。'); }
    finally { setIsLoading(false); }
  };
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(cleanText(text));
      setNotice('已复制');
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setNotice(''), 2000);
    } catch { setError('复制失败，请使用导出或手动选择文字复制。'); }
  };
  const filtered = history.filter(item => (!warningsOnly || item.warnings?.length) && `${item.formatted} ${item.original}`.toLowerCase().includes(search.toLowerCase()));
  const exportText = (markdown = false) => filtered.map((item, index) => `${numbered ? `〔${index + 1}〕` : ''}${markdown ? item.formatted : cleanText(item.formatted)}`).join('\n');
  const warningCount = history.filter(item => item.warnings?.length).length;

  return <div className="app">
    <header className="site-header">
      <a className="brand" href="#"><span className="brand-icon" aria-hidden="true">「」</span><span>法学引注<span className="brand-light">转换器</span></span></a>
      <div className="header-links"><a href="https://www.smallsmallq.com/projects" target="_blank" rel="noreferrer">小Q工具箱 ↗</a></div>
    </header>
    <main>
      <div className="workspace">
        <section className="input-panel" aria-label="文献输入">
          <div className="tabs" role="tablist" aria-label="输入方式">
            <button id="text-tab" role="tab" aria-controls="text-panel" aria-selected={mode === 'text'} onClick={() => setMode('text')}>文本转换</button>
            <button id="csl-tab" role="tab" aria-controls="csl-panel" aria-selected={mode === 'csl'} onClick={() => { setCslOpened(true); setMode('csl'); }}>CSL 精确引注</button>
          </div>
          <div id="text-panel" role="tabpanel" aria-labelledby="text-tab" hidden={mode !== 'text'}>
            <div className="panel-body">
              <div className="settings"><label>引注体例<select value={style} disabled={isLoading} onChange={e => setStyle(e.target.value as CitationStyle)}>{Object.entries(STYLE_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
                <label>AI 辅助<select value={provider} disabled={isLoading} onChange={e => setProvider(e.target.value as AIProvider)}><option value={AIProvider.DEEPSEEK}>DeepSeek</option><option value={AIProvider.GEMINI}>Gemini</option></select></label></div>
              <div className="input-toolbar"><label htmlFor="citation-input">原始文献</label><button className="text-button" disabled={isLoading} onClick={() => setInput(EXAMPLE)}>载入示例</button></div>
              <textarea id="citation-input" value={input} disabled={isLoading} onChange={e => setInput(e.target.value)} placeholder={'每行一条，粘贴原始文献…\n\n王名扬：《美国行政法》，中国法制出版社1995年版，第18页。'} onKeyDown={e => { if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); void convert(); } }} />
              <div className="input-meta"><span>{splitInputLines(input).length} 条文献</span><span>⌘ / Ctrl + Enter</span></div>
              {error && <p className="error" role="alert">{error}</p>}
              <button className="button primary generate" disabled={isLoading || !input.trim()} onClick={() => void convert()}>{isLoading ? '正在转换…' : '转换引注'}<span aria-hidden="true">↗</span></button>
            </div>
          </div>
          <div id="csl-panel" role="tabpanel" aria-labelledby="csl-tab" hidden={mode !== 'csl'}>
            {cslOpened && <Suspense fallback={<p className="panel-body">正在载入引注样式…</p>}><CslEditor onGenerate={addResults} /></Suspense>}
          </div>
        </section>
        <section className="results-panel" ref={resultRef} aria-label="引注结果" aria-busy={isLoading}>
          <div className="results-heading"><h2>引注结果 <span>{history.length || ''}</span></h2>{history.length > 0 && <button className="text-button clear" onClick={() => { setUndo(history); setHistory([]); }}>清空</button>}</div>
          {history.length > 0 && <>
            <div className="results-toolbar"><input type="search" aria-label="搜索引注" placeholder="搜索文献…" value={search} onChange={e => setSearch(e.target.value)} />{warningCount > 0 && <button className={`filter ${warningsOnly ? 'active' : ''}`} aria-pressed={warningsOnly} onClick={() => setWarningsOnly(v => !v)}>待核对 {warningCount}</button>}</div>
            <div className="export-toolbar"><label><input type="checkbox" checked={numbered} onChange={e => setNumbered(e.target.checked)} /> 添加编号</label><div><button className="text-button" disabled={!filtered.length} onClick={() => void copy(exportText())}>复制{search || warningsOnly ? '筛选结果' : '全部'}</button><button className="text-button" disabled={!filtered.length} onClick={() => download(exportText(), 'txt')}>TXT ↓</button><button className="text-button" disabled={!filtered.length} title="保留斜体标记" onClick={() => download(exportText(true), 'md')}>Markdown ↓</button></div></div>
          </>}
          <div className="result-list">
            {history.length === 0 ? <div className="empty-state"><p>转换结果将显示在这里</p></div> : !filtered.length ? <div className="empty-state"><p>没有匹配的引注</p><button className="text-button" onClick={() => { setSearch(''); setWarningsOnly(false); }}>显示全部</button></div> : filtered.map((item, index) => <article className="citation-card" key={item.id}>
              <span className="number citation-number">{index + 1}</span>
              <p className="citation-text"><FormattedText text={item.formatted} /></p>
              <div className="citation-actions"><details className="original"><summary>{item.warnings?.length ? `核对 · ${item.warnings.length}` : '核对'}</summary>
                {!!item.warnings?.length && <ul className="warnings">{item.warnings.map((warning, i) => <li key={i}>{warning}</li>)}</ul>}
                <pre>{item.original}</pre><span className="original-style">{STYLE_LABELS[item.style]}{item.source ? ` · ${item.source === 'csl' ? 'CSL' : item.source === 'rules' ? '本地规则' : 'AI 辅助'}` : ''}</span>
              </details><button className="text-button" onClick={() => void copy(item.formatted)}>复制</button>
              {item.rankDetail?.tags?.length ? <div className="rank-tags">{Array.from(new Set(item.rankDetail.tags.map(tag => tag.label))).map(label => <span className={item.rankDetail!.tags.some(tag => tag.label === label && tag.type === 'negative') ? 'negative' : ''} key={label}>{label}</span>)}</div> : null}
              </div>
            </article>)}
          </div>
          {undo.length > 0 && history.length === 0 && <button className="text-button clear" onClick={() => { setHistory(undo); setUndo([]); }}>撤销清空</button>}
          {error && mode === 'csl' && <p className="error" role="alert">{error}</p>}
        </section>
      </div>
    </main>
    <div className={`toast ${notice ? 'visible' : ''}`} role="status" aria-live="polite">{notice}</div>
  </div>;
}
