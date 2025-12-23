import React, { useState, useEffect } from 'react';
import { TargetLanguage, Citation, CitationStyle, AIProvider } from './types';
import { processCitation } from './services/aiService';

const Header: React.FC = () => (
  <header className="bg-white border-b border-slate-200 flex-shrink-0 z-20 sticky top-0">
    <div className="max-w-[1600px] mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h1 className="text-base lg:text-lg font-black text-slate-800 tracking-tight text-nowrap">法学引注<span className="text-indigo-600">转换器</span></h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-2 text-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">实时数据比对中</span>
        </div>
        <a 
          href="https://www.smallsmallq.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center space-x-2 bg-slate-50 p-1 pr-3 rounded-full border border-slate-200 hover:border-indigo-200 transition-all shrink-0"
        >
          <img src="https://i.postimg.cc/zvQ41bSP/logo.png" alt="Q" className="w-7 h-7 rounded-full shadow-sm object-cover"/>
          <span className="text-[11px] font-bold text-slate-600 group-hover:text-indigo-600 transition-colors">小Q工具箱</span>
        </a>
      </div>
    </div>
  </header>
);

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPass = process.env.APP_PASSWORD;
    if (!correctPass || pass === correctPass) {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 lg:p-10 animate-glow">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-100 mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-xl font-black text-slate-800 tracking-wider">学术访问授权</h2>
          <p className="text-slate-400 text-xs mt-2 uppercase tracking-[0.2em]">Authorized Access Only</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input 
              type="password"
              placeholder="请输入访问密码"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className={`w-full bg-slate-50 border ${error ? 'border-red-500 animate-shake' : 'border-slate-200'} rounded-2xl py-4 px-6 text-center text-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-bold placeholder:font-normal placeholder:text-slate-300`}
              autoFocus
            />
            {error && (
              <p className="absolute -bottom-6 left-0 right-0 text-center text-[10px] text-red-500 font-bold uppercase tracking-widest">
                密码校验失败，请重新输入
              </p>
            )}
          </div>
          <button 
            type="submit"
            className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-slate-200 active:scale-[0.98] uppercase text-[11px] tracking-[0.3em]"
          >
            进入系统
          </button>
        </form>
        
        <div className="mt-10 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
            法学引注转换工具<br/>
            © 2025 工具仅供学习，请再次核查
          </p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [input, setInput] = useState('');
  const [citationStyle, setCitationStyle] = useState<CitationStyle>(CitationStyle.LEGAL);
  // Default to DEEPSEEK as requested by user
  const [provider, setProvider] = useState<AIProvider>(AIProvider.DEEPSEEK);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<Citation[]>([]);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  const DEFAULT_EXAMPLE = `Charles A. Reich, The New Property, 73 Yale Law Journal 733 (1964).
申卫星、刘云：《法学研究新范式：计算法学的内涵、范畴与方法》，载《法学研究》2020年第5期，第3-23页。
生成式人工智能的知识产权法律因应与制度创新》，载《法制博览》2025年第32期，第130-132页。
Shumailov I, Shumaylov Z, Zhao Y, et al. AI models collapse when trained on recursively generated data[J]. Nature, 2024, 631(8022): 755-759.`;

  useEffect(() => {
    const auth = sessionStorage.getItem('legallink_auth');
    setIsAuthenticated(auth === 'true');
    const saved = localStorage.getItem('law_citation_v10');
    if (saved) try { setHistory(JSON.parse(saved)); } catch (e) {}
  }, []);

  useEffect(() => {
    localStorage.setItem('law_citation_v10', JSON.stringify(history.slice(0, 50)));
  }, [history]);

  const handleLogin = () => {
    sessionStorage.setItem('legallink_auth', 'true');
    setIsAuthenticated(true);
  };

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
      if (window.innerWidth < 1024) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } catch (err: any) { 
      alert(err.message || '转换错误，请检查网络或 API 配置'); 
    } finally { 
      setIsLoading(false); 
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    if (!text) return;
    const cleanText = text.replace(/\*/g, '');
    navigator.clipboard.writeText(cleanText);
    setCopyFeedback(id);
    setTimeout(() => setCopyFeedback(null), 1500);
  };

  const renderFormattedText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*[^*]+\*)/g);
    return (
      <span>
        {parts.map((part, index) => {
          if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
            return <i key={index} className="italic font-serif">{part.slice(1, -1)}</i>;
          }
          return <span key={index}>{part}</span>;
        })}
      </span>
    );
  };

  if (isAuthenticated === null) return null;
  if (!isAuthenticated) return <Login onLogin={handleLogin} />;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 lg:h-screen">
      <Header />
      
      <main className="max-w-[1600px] mx-auto w-full p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 lg:overflow-hidden min-h-0">
        <div className="lg:col-span-4 flex flex-col space-y-4 lg:space-y-5 lg:h-full lg:overflow-hidden">
          <section className="bg-slate-900 rounded-2xl p-4 lg:p-5 text-white shadow-xl shadow-slate-200 relative overflow-hidden animate-glow flex-shrink-0">
            <div className="relative z-10">
              <h2 className="text-base lg:text-lg font-black mb-1 flex items-center tracking-wider">
                转换与等级识别
              </h2>
              <p className="text-slate-400 text-[9px] lg:text-xs leading-relaxed opacity-90 font-medium">
                支持 CLSCI、CSSCI、华政负面清单及全网预警。
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-indigo-600/30 rounded-full blur-3xl"></div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 lg:p-5 flex flex-col lg:flex-1 lg:min-h-0 transition-all hover:shadow-md h-auto">
            <div className="grid grid-cols-2 gap-3 mb-3 flex-shrink-0">
              <div>
                <label className="text-[9px] font-black text-slate-400 mb-1 block uppercase tracking-widest">AI 引擎</label>
                <div className="flex bg-slate-100 p-0.5 rounded-lg">
                  {[AIProvider.GEMINI, AIProvider.DEEPSEEK].map(p => (
                    <button 
                      key={p} 
                      onClick={() => setProvider(p)}
                      className={`flex-1 py-1 text-[8px] lg:text-[9px] font-bold rounded-md transition-all ${provider === p ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      {p.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[9px] font-black text-slate-400 mb-1 block uppercase tracking-widest">引注格式</label>
                <select 
                  value={citationStyle} 
                  onChange={(e) => setCitationStyle(e.target.value as CitationStyle)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg text-[8px] lg:text-[9px] font-bold py-1 px-2 focus:ring-1 focus:ring-indigo-500 text-slate-900 outline-none cursor-pointer"
                >
                  <option value={CitationStyle.LEGAL}>《法学引注手册》</option>
                  <option value={CitationStyle.SOCIAL_SCIENCE}>《中国社会科学》</option>
                  <option value={CitationStyle.GB7714}>GB/T 7714</option>
                </select>
              </div>
            </div>

            <textarea
              className="w-full lg:flex-1 p-3 lg:p-4 bg-slate-50 border border-slate-200 rounded-xl text-[14px] text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none custom-scrollbar shadow-inner leading-relaxed min-h-[160px] lg:min-h-[100px]"
              placeholder="请粘贴原始文献条目..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="mt-3 flex items-center justify-between flex-shrink-0">
              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">测试用例</label>
              <button
                onClick={() => setInput(DEFAULT_EXAMPLE)}
                className="px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-[8px] lg:text-[9px] font-black text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all shadow-sm active:scale-[0.95]"
              >
                载入默认示例
              </button>
            </div>
            
            <button
              onClick={handleConvert}
              disabled={isLoading || !input.trim()}
              className={`mt-4 w-full py-4 rounded-xl font-black text-white transition-all uppercase text-[10px] lg:text-[11px] tracking-[0.2em] shadow-lg flex items-center justify-center space-x-2 flex-shrink-0 z-10 ${isLoading ? 'bg-slate-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]'}`}
            >
              {isLoading && (
                <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              <span>{isLoading ? '同步中...' : '立即转换引注'}</span>
            </button>
          </section>
        </div>

        <div className="lg:col-span-8 flex flex-col lg:h-full lg:overflow-hidden min-h-0">
          <div className="flex items-center justify-between mb-2 px-1 flex-shrink-0">
            <h2 className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center">
              监测报告
              <span className="ml-2 w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </h2>
            {history.length > 0 && (
              <button onClick={() => setHistory([])} className="text-[9px] font-bold text-slate-400 hover:text-red-500 transition-colors flex items-center space-x-1">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>清空记录</span>
              </button>
            )}
          </div>

          <div className="flex-1 lg:overflow-y-auto custom-scrollbar space-y-4 pr-1">
            {history.length === 0 ? (
              <div className="bg-white border border-slate-200 border-dashed rounded-3xl h-[200px] lg:h-full flex flex-col items-center justify-center text-slate-300 space-y-6">
                <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
                  <svg className="w-6 h-6 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                </div>
                <div className="text-center px-4">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-1 text-slate-400">等待处理文献</p>
                  <p className="text-[8px] opacity-60">在上方输入后，系统将实时比对官方数据库并标注等级</p>
                </div>
              </div>
            ) : (
              history.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => copyToClipboard(item.formatted, item.id)}
                  className={`group relative p-4 lg:p-6 rounded-2xl border-2 transition-all cursor-pointer ${item.rankDetail?.isNegative ? 'bg-white border-red-500 shadow-xl shadow-red-50 ring-2 ring-red-100' : 'bg-white border-slate-100 hover:border-indigo-400 hover:shadow-lg'}`}
                >
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {item.rankDetail?.isNegative ? (
                      <span className="text-[8px] px-2 py-0.5 rounded bg-red-600 text-white font-black uppercase tracking-widest flex items-center shadow-lg shadow-red-100">
                        风险 / 负面
                      </span>
                    ) : (
                      <span className="text-[8px] px-2 py-0.5 rounded bg-slate-800 text-white font-black uppercase tracking-widest">
                        官方标准
                      </span>
                    )}
                    
                    {item.rankDetail?.tags?.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className={`text-[8px] px-2 py-0.5 rounded-md font-bold flex items-center border ${
                          tag.type === 'negative' ? 'bg-red-50 text-red-700 border-red-200' : 
                          tag.type === 'legal_core' ? 'bg-indigo-600 text-white border-transparent' :
                          'bg-indigo-50 text-indigo-700 border-indigo-100'
                        }`}
                      >
                        {tag.label} {tag.value && `· ${tag.value}`}
                      </span>
                    ))}
                  </div>

                  <div className={`leading-relaxed text-[14px] lg:text-[15px] antialiased ${item.rankDetail?.isNegative ? 'text-red-600 font-bold italic' : 'text-slate-800'}`}>
                    {renderFormattedText(item.formatted)}
                  </div>

                  {copyFeedback === item.id && (
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg animate-bounce">
                      已复制
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white text-slate-400 py-2.5 px-6 lg:px-8 border-t border-slate-200 flex-shrink-0">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center text-[8px] font-black tracking-widest uppercase">
          <div className="flex items-center space-x-2">
            <span className="text-indigo-600">法学引注转换工具</span>
            <span className="opacity-20">|</span>
            <span>© 2025 工具仅供学习，请再次核查</span>
            <span className="opacity-20 hidden sm:inline">|</span>
            <span className="hidden sm:inline">联系我: gongyunbo@stu.xjtu.edu.cn</span>
          </div>
          <div className="hidden sm:block opacity-60">
            支持 CLSCI / 法C扩 / CSSCI集刊 / 华政负面清单
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;