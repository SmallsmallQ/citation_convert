
import React, { useState, useEffect } from 'react';
import { TargetLanguage, Citation, CitationStyle } from './types';
import { processCitation } from './services/geminiService';

const Header: React.FC = () => (
  <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center shadow-lg shadow-indigo-200">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">LegalLink <span className="text-indigo-600">Citation</span></h1>
      </div>
      <div className="hidden md:block text-sm text-slate-500 font-medium">
        学术引注 · 智能转换系统
      </div>
    </div>
  </header>
);

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [targetLang, setTargetLang] = useState<TargetLanguage>(TargetLanguage.ZH);
  const [citationStyle, setCitationStyle] = useState<CitationStyle>(CitationStyle.LEGAL);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<Citation[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('citation_history_v3');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load history");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('citation_history_v3', JSON.stringify(history.slice(0, 30)));
  }, [history]);

  const handleConvert = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    setError(null);
    try {
      const formatted = await processCitation(input, targetLang, citationStyle);
      const newCitation: Citation = {
        id: Date.now().toString(),
        original: input,
        formatted,
        style: citationStyle,
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
      localStorage.removeItem('citation_history_v3');
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-5xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          {/* Project Introduction Section */}
          <section className="bg-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                智能学术引注转换
                <span className="ml-3 px-2 py-0.5 bg-indigo-500 text-[10px] uppercase tracking-widest rounded-full">Pro</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                LegalLink 是一款深度集成了 <span className="text-white font-medium">Gemini 3 Pro</span> 智能推理能力的引注转换系统。支持通过模糊的自然语言描述直接生成符合《法学引注手册》、《中国社会科学》引证规范以及 GB/T 7714-2015 国标格式的专业引文。无论法律案例、古籍析出还是多语言文献，LegalLink 都能确保学术引用的精准度。
              </p>
            </div>
            {/* Background Accent */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-600 rounded-full blur-3xl opacity-20"></div>
          </section>

          <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="space-y-5 mb-6">
              <div>
                <label className="text-sm font-bold text-slate-700 mb-3 block">选择引用样式</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setCitationStyle(CitationStyle.LEGAL)}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold rounded-lg border transition-all ${
                      citationStyle === CitationStyle.LEGAL 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    法学引注手册
                  </button>
                  <button
                    onClick={() => setCitationStyle(CitationStyle.SOCIAL_SCIENCE)}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold rounded-lg border transition-all ${
                      citationStyle === CitationStyle.SOCIAL_SCIENCE 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    中国社会科学
                  </button>
                  <button
                    onClick={() => setCitationStyle(CitationStyle.GB7714)}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold rounded-lg border transition-all ${
                      citationStyle === CitationStyle.GB7714 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    GB/T 7714
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="text-sm font-bold text-slate-700">文献自然语言描述</label>
                <div className="flex bg-slate-100 p-1 rounded-lg space-x-1">
                  {Object.values(TargetLanguage).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setTargetLang(lang)}
                      className={`px-2 py-0.5 text-[10px] font-black rounded-md transition-all ${
                        targetLang === lang ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <textarea
              className="w-full h-44 p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none text-slate-700 leading-relaxed citation-font"
              placeholder={getPlaceholder()}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            
            {error && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 text-xs rounded-lg flex items-start">
                <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={handleConvert}
              disabled={isLoading || !input.trim()}
              className={`mt-6 w-full py-4 px-6 rounded-xl font-black text-white tracking-widest transition-all flex items-center justify-center space-x-3 uppercase text-sm ${
                isLoading || !input.trim() ? 'bg-slate-300 cursor-not-allowed' : 'bg-slate-900 hover:bg-black shadow-xl shadow-slate-200 active:scale-95'
              }`}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                  <span>一键转换标准引注</span>
                </>
              )}
            </button>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="text-[10px] font-black text-blue-600 uppercase mb-1">Legal</p>
              <p className="text-[11px] text-blue-800 leading-snug">法学专属，支持指导案例与法规条文。</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
              <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">Social Sci</p>
              <p className="text-[11px] text-emerald-800 leading-snug">综合规范，严谨处理出版社与古籍。</p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="text-[10px] font-black text-amber-600 uppercase mb-1">GB 7714</p>
              <p className="text-[11px] text-amber-800 leading-snug">国标规范，支持[M]/[J]等文献标识。</p>
            </div>
          </section>
        </div>

        <div className="lg:col-span-5 flex flex-col space-y-4 min-h-0">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-800">转换历史</h2>
            {history.length > 0 && (
              <button onClick={clearHistory} className="text-xs text-slate-400 hover:text-red-500 font-medium transition-colors">清除记录</button>
            )}
          </div>

          <div className="flex-grow space-y-4 overflow-y-auto max-h-[calc(100vh-250px)] pb-8 pr-2 custom-scrollbar">
            {history.length === 0 ? (
              <div className="bg-white rounded-xl border border-dashed border-slate-300 py-16 text-center text-slate-400">
                <p className="text-xs font-medium">还没有转换记录，开始输入吧</p>
              </div>
            ) : (
              history.map((item) => (
                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-md transition-all">
                  <div className="px-3 py-2 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-widest ${
                      item.style === CitationStyle.LEGAL ? 'bg-indigo-100 text-indigo-700' : 
                      item.style === CitationStyle.SOCIAL_SCIENCE ? 'bg-emerald-100 text-emerald-700' : 
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {item.style === CitationStyle.LEGAL ? 'Legal' : item.style === CitationStyle.SOCIAL_SCIENCE ? 'SSCP' : 'GB7714'}
                    </span>
                    <button onClick={() => {
                      navigator.clipboard.writeText(item.formatted);
                    }} className="p-1.5 hover:bg-indigo-100 rounded text-indigo-600 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>
                  <div