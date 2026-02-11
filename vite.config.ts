import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // 确保代码中的 process.env 能读取到环境变量
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env.DEEPSEEK_API_KEY': JSON.stringify(process.env.DEEPSEEK_API_KEY),
    'process.env.EASY_SCHOLAR_SECRET': JSON.stringify(process.env.EASY_SCHOLAR_SECRET || 'af4bba72f2b0473f9b7be5587213c229'), // Default provided for demo if env not set
  },
  build: {
    outDir: 'dist',
    target: 'esnext'
  }
});