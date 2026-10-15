import type { APIRoute } from 'astro';

// Sitio de una sola página: el sitemap tiene una única URL.
export const GET: APIRoute = ({ site }) => {
  const url = new URL('/', site).href;
  const today = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
