
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
        <h1 className="text-lg font-bold text-slate-800 tracking-tight">LegalLink <span className="text-indigo-600">Citation</span></h1>
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
    localStorage.setItem('citation_history_v4', JSON.stringify(history.slice(0, 30)));
  }, [history]);

  const handleConvert = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      const formatted = await processCitation(input, targetLang, citationStyle, provider);
      const newCitation: Citation = {
        id: Date.now().toString(),
        original: input,
        formatted,
        style: citationStyle,
        provider: provider,
        timestamp: Date.now(),
      };
      setHistory(prev => [newCitation, ...prev]);
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

  const getPlaceholder = () => {
    switch (citationStyle) {
      case CitationStyle.LEGAL:
        return "输入法律文献描述，例如：王利明《民法学》第六版，人大出版社，第200页...";
      case CitationStyle.SOCIAL_SCIENCE:
        return "输入社科文献描述，例如：费孝通《乡土中国》，上海人民出版社，1948年...";
      case CitationStyle.GB7714:
        return "输入国标文献描述，例如：[1] 陈登原. 国史旧闻: 第1卷[M]. 北京: 中华书局, 2000...";
      default:
        return "输入文献描述...";
    }
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-1 overflow-hidden max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Input and Config */}
        <div className="lg:col-span-7 flex flex-col space-y-4 overflow-hidden">
          {/* Welcome Banner - Compact */}
          <section className="bg-slate-900 rounded-xl p-5 text-white shadow-lg relative overflow-hidden flex-shrink-0">
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-1 flex items-center">
                智能引注转换
                <span className="ml-2 px-2 py-0.5 bg-indigo-500 text-[9px] uppercase tracking-widest rounded-md">PRO</span>
              </h2>
              <p className="text-slate-400 text-xs font-light">
                集成 DeepSeek-Chat 与 Gemini 3 Pro，支持模糊语义自动补全与格式校对。
              </p>
            </div>
          </section>

          {/* Configuration Area */}
          <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col flex-1 min-h-0 overflow-hidden">
            <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
              {/* Engine Select */}
              <div>
                <label className="text-xs font-bold text-slate-500 mb-2 flex items-center uppercase tracking-wider">
                  AI 引擎
                </label>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                  <button
                    onClick={() => setProvider(AIProvider.DEEPSEEK)}
                    className={`flex-1 py-1.5 text-[10px] font-bold rounded-md transition-all ${
                      provider === AIProvider.DEEPSEEK 
                      ? 'bg-white text-purple-600 shadow-sm' 
                      : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    DeepSeek
                  </button>
                  <button
                    onClick={() => setProvider(AIProvider.GEMINI)}
                    className={`flex-1 py-1.5 text-[10px] font-bold rounded-md transition-all ${
                      provider === AIProvider.GEMINI 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    Gemini
                  </button>
                </div>
              </div>
              
              {/* Language Select */}
              <div>
                <label className="text-xs font-bold text-slate-500 mb-2 flex items-center uppercase tracking-wider">
                  目标语言
                </label>
                <div className="flex bg-slate-100 p-1 rounded-lg space-x-1">
                  {Object.values(TargetLanguage).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setTargetLang(lang)}
                      className={`flex-1 py-1.5 text-[9px] font-black rounded-md transition-all ${
                        targetLang === lang ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Style Select */}
            <div className="mb-4 flex-shrink-0">
              <label className="text-xs font-bold text-slate-500 mb-2 block uppercase tracking-wider">引用标准</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: CitationStyle.LEGAL, label: '法学引注手册' },
                  { id: CitationStyle.SOCIAL_SCIENCE, label: '中国社会科学' },
                  { id: CitationStyle.GB7714, label: 'GB/T 7714' }
                ].map(style => (
                  <button
                    key={style.id}
                    onClick={() => setCitationStyle(style.id)}
                    className={`py-2 text-[11px] font-bold rounded-lg border transition-all ${
                      citationStyle === style.id 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="flex-1 flex flex-col min-h-0">
              <textarea
                className="flex-1 w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none text-slate-700 text-sm leading-relaxed citation-font shadow-inner overflow-y-auto"
                placeholder={getPlaceholder()}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              
              {error && (
                <div className="mt-2 p-2 bg-red-50 text-red-600 text-[10px] rounded-md border border-red-100 flex items-center flex-shrink-0">
                  <svg className="w-3 h-3 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <button
                onClick={handleConvert}
                disabled={isLoading || !input.trim()}
                className={`mt-4 w-full py-3 rounded-xl font-black text-white tracking-widest transition-all flex items-center justify-center space-x-2 uppercase text-xs flex-shrink-0 ${
                  isLoading || !input.trim() 
                  ? 'bg-slate-300 cursor-not-allowed' 
                  : provider === AIProvider.DEEPSEEK 
                    ? 'bg-purple-600 hover:bg-purple-700 shadow-lg active:scale-[0.98]'
                    : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg active:scale-[0.98]'
                }`}
              >
                {isLoading ? (
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>转换并生成</span>
                  </>
                )}
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: History */}
        <div className="lg:col-span-5 flex flex-col overflow-hidden min-h-0">
          <div className="flex items-center justify-between mb-3 flex-shrink-0 px-1">
            <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center">
              <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              最近历史
            </h2>
            {history.length > 0 && (
              <button onClick={clearHistory} className="text-[10px] text-slate-400 hover:text-red-500 font-bold transition-colors">清除记录</button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar min-h-0 pb-4">
            {history.length === 0 ? (
              <div className="bg-white rounded-xl border-2 border-dashed border-slate-200 h-full flex items-center justify-center text-slate-400 px-6 text-center">
                <div className="space-y-2">
                  <div className="text-xl opacity-20">🗂️</div>
                  <p className="text-[10px] font-medium italic">完成转换后，结果将在此处沉淀</p>
                </div>
              </div>
            ) : (
              history.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:border-indigo-200 transition-all">
                  <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                    <div className="flex space-x-1.5">
                      <span className={`text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-widest ${
                        item.style === CitationStyle.LEGAL ? 'bg-indigo-100 text-indigo-700' : 
                        item.style === CitationStyle.SOCIAL_SCIENCE ? 'bg-emerald-100 text-emerald-700' : 
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {item.style === CitationStyle.LEGAL ? 'Legal' : item.style === CitationStyle.SOCIAL_SCIENCE ? 'SSCP' : 'GB7714'}
                      </span>
                      <span className={`text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-widest ${
                        item.provider === AIProvider.DEEPSEEK ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {item.provider}
                      </span>
                    </div>
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(item.formatted);
                      }} 
                      className="p-1 hover:bg-white rounded border border-transparent hover:border-slate-200 text-slate-400 hover:text-indigo-600 transition-all"
                      title="复制到剪贴板"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-3.5 space-y-1.5">
                    <div className="text-[10px] text-slate-400 line-clamp-1 font-light italic bg-slate-50/50 p-1 rounded">
                      “{item.original}”
                    </div>
                    <div className="citation-font text-slate-800 leading-relaxed text-xs select-all">
                      {item.formatted}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-500 py-3 px-6 border-t border-slate-800 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[9px] font-bold tracking-widest uppercase">
          <p>© 2025 LegalLink Citation Service. 小Q</p>
          <div className="flex space-x-4">
            <span className="flex items-center">
              <span className={`w-1 h-1 rounded-full mr-1.5 animate-pulse ${provider === AIProvider.DEEPSEEK ? 'bg-purple-500' : 'bg-blue-500'}`}></span>
              Engine Ready
            </span>
            <span className="text-slate-800">|</span>
            <a href="#" className="hover:text-white transition-colors">Manual</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
