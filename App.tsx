
import React, { useState, useEffect } from 'react';
import { TargetLanguage, Citation, CitationStyle, AIProvider } from './types';
import { processCitation } from './services/aiService';

const Header: React.FC = () => (
  <header className="bg-white border-b border-slate-200 flex-shrink-0 z-10">
    <div className="max-w-[1600px] mx-auto px-6 h-14 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="text-lg font-black text-slate-800 tracking-tight">法学引注<span className="text-indigo-600">转换器</span></h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">easyScholar 实时多维数据比对中</span>
        </div>
        <a 
          href="https://www.smallsmallq.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 bg-slate-50 p-1 pr-3 rounded-full border border-slate-200 hover:border-indigo-200 transition-all"
        >
          <img src="https://i.postimg.cc/zvQ41bSP/logo.png" alt="Q" className="w-7 h-7 rounded-full shadow-sm object-cover"/>
          <span className="text-[11px] font-bold text-slate-600 group-hover:text-indigo-600 transition-colors">小Q工具箱</span>
        </a>
      </div>
    </div>
  </header>
);

const App: React.FC = () => {
  const [input, setInput] = useState('');
  const [citationStyle, setCitationStyle] = useState<CitationStyle>(CitationStyle.LEGAL);
  const [provider, setProvider] = useState<AIProvider>(AIProvider.DEEPSEEK);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<Citation[]>([]);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('law_citation_v10');
    if (saved) try { setHistory(JSON.parse(saved)); } catch (e) {}
  }, []);

  useEffect(() => {
    localStorage.setItem('law_citation_v10', JSON.stringify(history.slice(0, 50)));
  }, [history]);

  const handleConvert = async () => {
    if (!input.trim()) return;
    setIsLoading(true);
    try {
      const results = await processCitation(input, TargetLanguage.ZH, citationStyle, provider);
      const newCitations: Citation[] = results.map((res, index) => ({
        id: (Date.now() + index).toString(),
        original: input.split('\n')[index] || input,
        formatted: res.text,
        level: res.level,
        rankDetail: res.rankDetail,
        style: citationStyle,
        provider: provider,
        timestamp: Date.now(),
      }));
      setHistory(prev => [...newCitations, ...prev]);
      setInput('');
    } catch (err: any) { 
      alert(err.message || '转换错误，请检查网络或 API 配置'); 
    } finally { 
      setIsLoading(false); 
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback(id);
    setTimeout(() => setCopyFeedback(null), 1500);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-slate-50 text-slate-900">
      <Header />
      
      <main className="flex-1 overflow-hidden max-w-[1600px] mx-auto w-full p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 输入面板 */}
        <div className="lg:col-span-4 xl:col-span-4 flex flex-col space-y-6 overflow-hidden">
          <section className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl shadow-slate-200 relative overflow-hidden animate-glow">
            <div className="relative z-10">
              <h2 className="text-xl font-black mb-2 flex items-center tracking-wider">
                法学引注转换与识别
              </h2>
              <p className="text-slate-400 text-xs leading-relaxed opacity-90 font-medium">
                同步华政 2024 负面清单、CLSCI、CSSCI 集刊及法 C 扩官方库。
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-indigo-600/30 rounded-full blur-3xl"></div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col flex-1 overflow-hidden transition-all hover:shadow-md">
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="text-[10px] font-black text-slate-400 mb-2 block uppercase tracking-widest">AI 转换引擎</label>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  {[AIProvider.GEMINI, AIProvider.DEEPSEEK].map(p => (
                    <button 
                      key={p} 
                      onClick={() => setProvider(p)}
                      className={`flex-1 py-2 text-[10px] font-bold rounded-lg transition-all ${provider === p ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      {p.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 mb-2 block uppercase tracking-widest">引注格式</label>
                <select 
                  value={citationStyle} 
                  onChange={(e) => setCitationStyle(e.target.value as CitationStyle)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl text-[11px] font-bold py-2.5 px-4 focus:ring-2 focus:ring-indigo-500 text-slate-900 outline-none transition-all cursor-pointer hover:border-indigo-300"
                >
                  <option value={CitationStyle.LEGAL}>《法学引注手册》</option>
                  <option value={CitationStyle.SOCIAL_SCIENCE}>《中国社会科学》引注规范</option>
                  <option value={CitationStyle.GB7714}>GB/T 7714-2015</option>
                </select>
              </div>
            </div>

            <textarea
              className="flex-1 w-full p-5 bg-slate-50 border border-slate-200 rounded-2xl text-[15.5px] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none custom-scrollbar shadow-inner leading-relaxed"
              placeholder="粘贴原始文献内容..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            
            <button
              onClick={handleConvert}
              disabled={isLoading || !input.trim()}
              className={`mt-6 w-full py-4 rounded-2xl font-black text-white transition-all uppercase text-[11px] tracking-[0.2em] shadow-lg flex items-center justify-center space-x-2 ${isLoading ? 'bg-slate-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] shadow-indigo-100'}`}
            >
              {isLoading && (
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              <span>{isLoading ? '检索官方库等级中...' : '立即转换引注格式'}</span>
            </button>
          </section>
        </div>

        {/* 结果面板 */}
        <div className="lg:col-span-8 xl:col-span-8 flex flex-col overflow-hidden min-h-0">
          <div className="flex items-center justify-between mb-4 px-2">
            <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] flex items-center">
              实时监测报告
              <span className="ml-2 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </h2>
            {history.length > 0 && (
              <button onClick={() => setHistory([])} className="text-[10px] font-bold text-slate-400 hover:text-red-500 transition-colors flex items-center space-x-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>清空记录</span>
              </button>
            )}
          </div>

          <div className="flex-1 overflow-y-auto space-y-5 rounded-2xl border border-slate-200 bg-white p-6 custom-scrollbar shadow-inner">
            {history.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-300 space-y-6 py-20">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                  <svg className="w-10 h-10 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] mb-1">等待处理文献</p>
                  <p className="text-[10px] opacity-60">请在左侧粘贴文献条目</p>
                </div>
              </div>
            ) : (
              history.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => copyToClipboard(item.formatted, item.id)}
                  className={`group relative p-6 rounded-2xl border-2 transition-all cursor-pointer ${item.rankDetail?.isNegative ? 'bg-white border-red-500 shadow-xl shadow-red-50 ring-2 ring-red-100' : 'bg-white border-slate-100 hover:border-indigo-400 hover:shadow-lg'}`}
                >
                  {/* 标签行 */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {item.rankDetail?.isNegative ? (
                      <span className="text-[9px] px-2.5 py-1 rounded bg-red-600 text-white font-black uppercase tracking-widest flex items-center shadow-lg shadow-red-100">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"/></svg>
                        高危·预警 / 负面
                      </span>
                    ) : (
                      <span className="text-[9px] px-2 py-1 rounded bg-slate-800 text-white font-black uppercase tracking-widest">
                        官方核心库
                      </span>
                    )}
                    
                    {item.rankDetail?.tags?.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className={`text-[9px] px-2.5 py-1 rounded-md font-bold flex items-center border transition-all ${
                          tag.type === 'negative' ? 'bg-red-50 text-red-700 border-red-200' : 
                          tag.type === 'legal_core' ? 'bg-indigo-600 text-white border-transparent' :
                          'bg-indigo-50 text-indigo-700 border-indigo-100'
                        }`}
                      >
                        {tag.label} {tag.value && `· ${tag.value}`}
                        <i className="ml-1 opacity-40 text-[7px] font-black not-italic">官</i>
                      </span>
                    ))}
                  </div>

                  {/* 格式化后的引注正文 */}
                  <div className={`leading-relaxed text-[16px] antialiased ${item.rankDetail?.isNegative ? 'text-red-600 font-bold' : 'text-slate-800'}`}>
                    {item.formatted}
                  </div>

                  {/* 复制反馈 */}
                  {copyFeedback === item.id && (
                    <div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg animate-bounce">
                      已复制
                    </div>
                  )}

                  {/* 风险警告详情 */}
                  {item.rankDetail?.isNegative && (
                    <div className="mt-4 pt-3 border-t border-red-100 text-red-600 flex items-start space-x-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"/></svg>
                      <span className="text-[10px] font-bold uppercase tracking-[0.1em] leading-tight">
                        注意：出版物命中华政负面清单或中科院、easyScholar 预警名单，建议谨慎引用。
                      </span>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
          <div className="mt-4 text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.4em] py-2">
            点击结果条目即可一键复制到剪贴板
          </div>
        </div>
      </main>

      {/* 页脚整合看板 */}
      <footer className="bg-white text-slate-400 py-3 px-8 border-t border-slate-200 flex-shrink-0 z-10">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black tracking-widest uppercase">
          <div className="flex items-center space-x-3">
            <span className="text-indigo-600">LegalLink Pro v10.5</span>
            <span className="opacity-20">|</span>
            <span className="text-slate-400">© 2025 专业法学文献引注工具</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span>集成 CLSCI / 法 C 扩 / CSSCI 集刊</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span>同步华政负面清单及全网预警名录</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
