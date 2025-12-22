
import React, { useState, useEffect } from 'react';
import { TargetLanguage, Citation, CitationStyle, AIProvider } from './types';
import { processCitation } from './services/aiService';

const Header: React.FC = () => (
  <header className="bg-white border-b border-slate-200 flex-shrink-0">
    <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center shadow-lg shadow-indigo-200">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="text-lg font-bold text-slate-800 tracking-tight">法学引注<span className="text-indigo-600">转换器</span></h1>
      </div>
      <div className="hidden md:block text-xs text-slate-400 font-medium">
        学术引注 · 专业级多模型转换系统
      </div>
    </div>
  </header>
);

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [targetLang, setTargetLang] = useState<TargetLanguage>(TargetLanguage.ZH);
  const [citationStyle, setCitationStyle] = useState<CitationStyle>(CitationStyle.LEGAL);
  const [provider, setProvider] = useState<AIProvider>(AIProvider.DEEPSEEK);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<Citation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('citation_history_v4');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load history");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('citation_history_v4', JSON.stringify(history.slice(0, 100)));
  }, [history]);

  const handleConvert = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      const results = await processCitation(input, targetLang, citationStyle, provider);
      
      const newCitations: Citation[] = results.map((formatted, index) => ({
        id: (Date.now() + index).toString(),
        original: input.split('\n')[index] || input, // 尝试对应原始行
        formatted,
        style: citationStyle,
        provider: provider,
        timestamp: Date.now(),
      }));

      setHistory(prev => [...newCitations, ...prev]);
      setInput('');
    } catch (err: any) {
      setError(err.message || '转换过程中出现错误');
    } finally {
      setIsLoading(false);
    }
  };

  const clearHistory = () => {
    if (confirm('确定要清除所有历史记录吗？')) {
      setHistory([]);
      localStorage.removeItem('citation_history_v4');
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(id);
    setTimeout(() => setCopyFeedback(null), 1500);
  };

  const copyAllHistory = () => {
    const allText = history.map(item => item.formatted).join('\n');
    navigator.clipboard.writeText(allText);
    setCopyFeedback('all');
    setTimeout(() => setCopyFeedback(null), 1500);
  };

  const getPlaceholder = () => {
    switch (citationStyle) {
      case CitationStyle.LEGAL:
        return "输入一个或多个文献描述（每行一个效果更佳）...\n范例：王利明《民法学》第六版，第200页";
      case CitationStyle.SOCIAL_SCIENCE:
        return "输入一个或多个文献描述...\n范例：费孝通《乡土中国》，1948年";
      case CitationStyle.GB7714:
        return "输入一个或多个文献描述...\n范例：陈登原. 国史旧闻. 北京: 中华书局, 2000";
      default:
        return "输入文献描述...";
    }
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 overflow-hidden max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col space-y-4 overflow-hidden">
          <section className="bg-slate-900 rounded-xl p-5 text-white shadow-lg relative overflow-hidden flex-shrink-0">
            <h2 className="text-xl font-bold mb-1 flex items-center">
              法学引注转换器
              <span className="ml-2 px-2 py-0.5 bg-indigo-500 text-[9px] uppercase tracking-widest rounded-md">BATCH FLASH</span>
            </h2>
            <p className="text-slate-400 text-[10px] font-light">
              支持批量处理。识别多条描述并自动按序排版。
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col flex-1 min-h-0 overflow-hidden">
            <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
              <div>
                <label className="text-[10px] font-bold text-slate-500 mb-1.5 block uppercase tracking-wider">AI 引擎</label>
                <div className="flex bg-slate-100 p-0.5 rounded-lg">
                  {[AIProvider.DEEPSEEK, AIProvider.GEMINI].map(p => (
                    <button
                      key={p}
                      onClick={() => setProvider(p)}
                      className={`flex-1 py-1 text-[10px] font-bold rounded-md transition-all ${
                        provider === p ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {p.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-[10px] font-bold text-slate-500 mb-1.5 block uppercase tracking-wider">目标语言</label>
                <div className="flex bg-slate-100 p-0.5 rounded-lg space-x-1">
                  {Object.values(TargetLanguage).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setTargetLang(lang)}
                      className={`flex-1 py-1 text-[9px] font-black rounded-md transition-all ${
                        targetLang === lang ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-4 flex-shrink-0">
              <label className="text-[10px] font-bold text-slate-500 mb-1.5 block uppercase tracking-wider">引用标准</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: CitationStyle.LEGAL, label: '法学手册' },
                  { id: CitationStyle.SOCIAL_SCIENCE, label: '社科规范' },
                  { id: CitationStyle.GB7714, label: 'GB/T 7714' }
                ].map(style => (
                  <button
                    key={style.id}
                    onClick={() => setCitationStyle(style.id)}
                    className={`py-1.5 text-[10px] font-bold rounded-lg border transition-all ${
                      citationStyle === style.id 
                      ? 'bg-indigo-600 border-indigo-600 text-white' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col min-h-0">
              <textarea
                className="flex-1 w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none text-slate-700 text-sm leading-relaxed citation-font shadow-inner custom-scrollbar"
                placeholder={getPlaceholder()}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              
              {error && (
                <div className="mt-2 p-2 bg-red-50 text-red-600 text-[10px] rounded-md border border-red-100 flex items-center">
                  <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{error}</span>
                </div>
              )}

              <button
                onClick={handleConvert}
                disabled={isLoading || !input.trim()}
                className={`mt-4 w-full py-3 rounded-xl font-black text-white tracking-widest transition-all flex items-center justify-center space-x-2 uppercase text-xs ${
                  isLoading || !input.trim() ? 'bg-slate-300' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]'
                }`}
              >
                {isLoading ? '正在转换所有项...' : '批量生成标准引注'}
              </button>
            </div>
          </section>
        </div>

        {/* Right Column - History Optimized */}
        <div className="lg:col-span-7 flex flex-col overflow-hidden min-h-0">
          <div className="flex items-center justify-between mb-2 flex-shrink-0 px-2">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-widest flex items-center">
              最近历史 (按条排列)
            </h2>
            <div className="flex items-center space-x-4">
              {history.length > 0 && (
                <>
                  <button 
                    onClick={copyAllHistory} 
                    className={`text-[10px] font-bold transition-all px-2 py-1 rounded bg-indigo-50 hover:bg-indigo-100 ${copyFeedback === 'all' ? 'text-green-600' : 'text-indigo-600'}`}
                  >
                    {copyFeedback === 'all' ? '已复制全部列表 ✓' : '复制全部列表'}
                  </button>
                  <button onClick={clearHistory} className="text-[10px] text-slate-400 hover:text-red-500 font-bold">清空</button>
                </>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-1 rounded-xl border border-slate-200 bg-white shadow-inner p-1 custom-scrollbar min-h-0">
            {history.length === 0 ? (
              <div className="h-full flex items-center justify-center text-slate-300 text-[10px] italic px-10 text-center">
                转换成功的引注将在此按行排列，一次可以输入多个文献描述，转换后会自动分开，点击单行即可复制
              </div>
            ) : (
              history.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`group relative p-3 rounded-lg flex flex-col transition-all cursor-pointer border border-transparent hover:border-indigo-100 hover:bg-slate-50 ${copyFeedback === item.id ? 'bg-green-50 border-green-200 shadow-sm' : ''}`}
                  onClick={() => copyToClipboard(item.formatted, item.id)}
                >
                  <div className="flex items-center justify-between mb-1 opacity-60">
                    <div className="flex items-center space-x-2">
                      <span className="text-[9px] font-black text-slate-400">{String(index + 1).padStart(2, '0')}</span>
                      <span className={`text-[7px] px-1 py-0.5 rounded-sm font-black uppercase tracking-widest ${
                        item.style === CitationStyle.LEGAL ? 'bg-indigo-50 text-indigo-500' : 
                        item.style === CitationStyle.SOCIAL_SCIENCE ? 'bg-emerald-50 text-emerald-500' : 
                        'bg-amber-50 text-amber-500'
                      }`}>
                        {item.style === CitationStyle.LEGAL ? 'Legal' : item.style === CitationStyle.SOCIAL_SCIENCE ? 'SSCP' : 'GB7714'}
                      </span>
                    </div>
                    <span className="text-[8px] text-slate-300 font-mono">
                      {copyFeedback === item.id ? 'COPIED!' : item.provider}
                    </span>
                  </div>

                  <div className="citation-font text-slate-800 leading-normal text-sm break-all">
                    {item.formatted}
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="mt-2 text-center text-[9px] text-slate-400 tracking-wide font-medium uppercase">
            点击任意一行即可快速复制到剪贴板
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-500 py-3 px-6 border-t border-slate-800 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[9px] font-bold tracking-widest uppercase">
          <p>© 2025 法学引注转换器. 小Q</p>
          <div className="flex space-x-4">
            <span className="flex items-center">
              <span className={`w-1 h-1 rounded-full mr-1.5 animate-pulse ${provider === AIProvider.DEEPSEEK ? 'bg-purple-500' : 'bg-blue-500'}`}></span>
              Engine Ready (Batch Support)
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
