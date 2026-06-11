export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ code: 405, message: 'Method Not Allowed' });
    return;
  }

  const secretKey =
    process.env.EASY_SCHOLAR_SECRET ||
    process.env.EASYSCHOLAR_SECRET ||
    process.env.EASY_SCHOLAR_API_KEY ||
    process.env.SCHOLAR_API_KEY;
  if (!secretKey) {
    res.status(200).json({ code: 200, data: null });
    return;
  }

  const publicationName = String(req.query.publicationName || '');
  if (!publicationName) {
    res.status(200).json({ code: 200, data: null });
    return;
  }

  const upstreamUrl = new URL('https://www.easyscholar.cc/open/getPublicationRank');
  upstreamUrl.searchParams.set('secretKey', secretKey);
  upstreamUrl.searchParams.set('publicationName', publicationName);

  try {
    const upstream = await fetch(upstreamUrl);
    const contentType = upstream.headers.get('content-type') || 'application/json; charset=utf-8';
    res.status(upstream.status);
    res.setHeader('Content-Type', contentType);
    res.send(await upstream.text());
  } catch (error) {
    res.status(502).json({ code: 502, message: error?.message || 'easyScholar API 请求失败。' });
  }
}
