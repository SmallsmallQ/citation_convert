
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // 确保代码中的 process.env 能读取到环境变量
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env.DEEPSEEK_API_KEY': JSON.stringify(process.env.DEEPSEEK_API_KEY),
    'process.env.APP_PASSWORD': JSON.stringify(process.env.APP_PASSWORD),
  },
  build: {
    outDir: 'dist',
    target: 'esnext'
  }
});
