import type { APIRoute } from 'astro';

// La página principal y la hoja de vida imprimible.
export const GET: APIRoute = ({ site }) => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = ['/', '/cv']
    .map((path) => `  <url>\n    <loc>${new URL(path, site).href}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
