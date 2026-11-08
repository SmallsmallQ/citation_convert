import React, { useState } from 'react';
import { getCslWarnings, LOCATOR_LABELS, parseCslInput, renderReferences } from '../services/cslService';
import { Citation, CitationStyle, AIProvider, CslItem, CslReference } from '../types';

const EXAMPLE = JSON.stringify([
  { id: 'book-1', type: 'book', language: 'zh-CN', author: [{ literal: '王名扬' }], title: '美国行政法', publisher: '中国法制出版社', issued: { 'date-parts': [[1995]] } },
  { id: 'article-1', type: 'article-journal', language: 'en-US', author: [{ given: 'Charles A.', family: 'Reich' }], title: 'The New Property', 'container-title': 'Yale Law Journal', volume: '73', page: '733-787', issued: { 'date-parts': [[1964]] } },
  { id: 'law-1', type: 'legislation', language: 'zh-CN', title: '中华人民共和国民法典', section: '1224' },
], null, 2);
const languages = { 'zh-CN': '中文', 'en-US': 'English', 'de-DE': 'Deutsch', 'fr-FR': 'Français', 'ja-JP': '日本語' };

export default function CslEditor({ onGenerate }: { onGenerate: (items: Citation[]) => void }) {
  const [json, setJson] = useState('');
  const [items, setItems] = useState<CslItem[]>([]);
  const [references, setReferences] = useState<CslReference[]>([]);
  const [error, setError] = useState('');
  const [dirty, setDirty] = useState(false);

  const parse = (value: string) => {
    try {
      const parsed = parseCslInput(value) as CslItem[];
      setItems(parsed);
      setReferences(parsed.map(item => ({ key: crypto.randomUUID(), id: item.id, locator: '', label: 'page' })));
      setError(''); setDirty(false);
    } catch (err) { setError((err as Error).message); }
  };
  const importFile = async (file?: File) => {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { setError('文件超过 2 MB，请分批导入。'); return; }
    try { const value = await file.text(); setJson(value); setDirty(true); parse(value); }
    catch { setError('文件读取失败，请重新选择。'); }
  };
  const generate = () => {
    try {
      const rendered = renderReferences(items, references);
      onGenerate(references.map((ref, index) => {
        const item = items.find(item => item.id === ref.id)!;
        return {
          id: crypto.randomUUID(), original: JSON.stringify(item, null, 2), formatted: rendered[index],
          style: CitationStyle.LEGAL, provider: AIProvider.DEEPSEEK, source: 'csl',
          timestamp: Date.now(), warnings: getCslWarnings(item, ref.locator),
        };
      }));
      setError('');
    } catch (err) { setError(`无法生成引注：${(err as Error).message}`); }
  };
  const updateReference = (key: string, patch: Partial<CslReference>) => setReferences(prev => prev.map(ref => ref.key === key ? { ...ref, ...patch } : ref));

  return <div className="csl-editor">
    <div className="input-toolbar">
      <label className="button secondary upload">导入 CSL JSON<input type="file" accept=".json,application/json" onChange={e => { void importFile(e.target.files?.[0]); e.target.value = ''; }} /></label>
      <button className="text-button" onClick={() => { setJson(EXAMPLE); parse(EXAMPLE); }}>载入示例</button>
    </div>
    <textarea aria-label="CSL JSON 文献数据" className="json-input" value={json} onChange={e => { setJson(e.target.value); setDirty(true); }} placeholder={'粘贴 CSL JSON，或从 Zotero 选择“导出条目 → CSL JSON”。\n\n[{ "id": "1", "type": "book", "language": "zh-CN", "title": "…" }]'} spellCheck={false} />
    <button className="button secondary parse-button" disabled={!json.trim()} onClick={() => parse(json)}>{dirty && items.length ? '更新文献' : '解析文献'}</button>
    {items.length > 0 && <div className="reference-list">
      {references.map((ref, index) => {
        const item = items.find(item => item.id === ref.id)!;
        return <div className="reference-editor" key={ref.key}>
          <div className="reference-title"><span className="number">{String(index + 1).padStart(2, '0')}</span><strong>{item.title || '未填写标题'}</strong>
            <button className="icon-button" title="移除此处引用" aria-label={`移除第 ${index + 1} 处引用`} disabled={dirty} onClick={() => setReferences(prev => prev.filter(r => r.key !== ref.key))}>×</button>
          </div>
          <div className="reference-fields">
            <select aria-label={`第 ${index + 1} 条文献语言`} disabled={dirty} value={item.language || ''} onChange={e => setItems(prev => prev.map(i => i.id === item.id ? { ...i, language: e.target.value } : i))}>
              <option value="">默认（英文）</option>
              {!Object.hasOwn(languages, item.language || '') && item.language && <option value={item.language}>{item.language}</option>}
              {Object.entries(languages).map(([code, label]) => <option key={code} value={code}>{label}</option>)}
            </select>
            <select aria-label={`第 ${index + 1} 处定位类型`} disabled={dirty} value={ref.label} onChange={e => updateReference(ref.key, { label: e.target.value })}>
              {Object.entries(LOCATOR_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
            <input aria-label={`第 ${index + 1} 处引用定位`} disabled={dirty} value={ref.locator} onChange={e => updateReference(ref.key, { locator: e.target.value })} placeholder={ref.label === 'page' ? '如 18-20' : '如 1224'} />
          </div>
          <button className="text-button repeat" disabled={dirty || references.length >= 200} onClick={() => setReferences(prev => [...prev, { ...ref, key: crypto.randomUUID(), locator: '' }])}>＋ 再次引用</button>
        </div>;
      })}
    </div>}
    {dirty && items.length > 0 && <p className="inline-note">JSON 已修改，请先更新文献。</p>}
    {error && <p className="error" role="alert">{error}</p>}
    <button className="button primary generate" disabled={!references.length || dirty} onClick={generate}>生成{references.length ? ` ${references.length} 条` : ''}引注 <span aria-hidden="true">↗</span></button>
    <details className="field-guide"><summary>字段填写说明</summary><p>语言默认英文，中文请填写 zh-CN。page 记录文献起止页；上方定位填写本次引用页码。</p><p>指导性案例：collection-title、collection-number、available-date。公报案例：container-title、issue、available-date。裁判文书：authority、number、genre。</p><p>德文法律评注使用 chapter，标题留空；祝贺或纪念文集将文集名放入 collection-title。法文及英国案例仍需人工核对。</p></details>
  </div>;
}
