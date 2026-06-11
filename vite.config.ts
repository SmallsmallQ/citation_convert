import { defineConfig, loadEnv, type Plugin } from 'vite';

const readBody = (req: any) =>
  new Promise<string>((resolve, reject) => {
    let body = '';
    req.on('data', (chunk: Buffer) => {
      body += chunk.toString();
    });
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });

const sendJson = (res: any, status: number, payload: unknown) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
};

const apiProxyPlugin = (env: Record<string, string>): Plugin => {
  const deepSeekKey = env.DEEPSEEK_API_KEY || env.DEEPSEEK_KEY;
  const easyScholarSecret =
    env.EASY_SCHOLAR_SECRET ||
    env.EASYSCHOLAR_SECRET ||
    env.EASY_SCHOLAR_API_KEY ||
    env.SCHOLAR_API_KEY;

  const middleware = async (req: any, res: any, next: () => void) => {
    const url = new URL(req.url || '/', 'http://localhost');

    if (url.pathname === '/api/deepseek/chat/completions') {
      if (!deepSeekKey) {
        sendJson(res, 500, { error: { message: 'DeepSeek API Key 未配置。请设置 DEEPSEEK_API_KEY。' } });
        return;
      }

      try {
        const upstream = await fetch('https://api.deepseek.com/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${deepSeekKey}`,
          },
          body: await readBody(req),
        });
        res.statusCode = upstream.status;
        res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json; charset=utf-8');
        res.end(await upstream.text());
      } catch (error: any) {
        sendJson(res, 502, { error: { message: error?.message || 'DeepSeek API 请求失败。' } });
      }
      return;
    }

    if (url.pathname === '/api/easyscholar/rank') {
      if (!easyScholarSecret) {
        sendJson(res, 200, { code: 200, data: null });
        return;
      }

      const publicationName = url.searchParams.get('publicationName') || '';
      const upstreamUrl = new URL('https://www.easyscholar.cc/open/getPublicationRank');
      upstreamUrl.searchParams.set('secretKey', easyScholarSecret);
      upstreamUrl.searchParams.set('publicationName', publicationName);

      try {
        const upstream = await fetch(upstreamUrl);
        res.statusCode = upstream.status;
        res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json; charset=utf-8');
        res.end(await upstream.text());
      } catch (error: any) {
        sendJson(res, 502, { code: 502, message: error?.message || 'easyScholar API 请求失败。' });
      }
      return;
    }

    next();
  };

  return {
    name: 'local-api-proxy',
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [apiProxyPlugin(env)],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY || env.GEMINI_API_KEY || ''),
    },
    build: {
      outDir: 'dist',
      target: 'esnext',
    },
  };
});
