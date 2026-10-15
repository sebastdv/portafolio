// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Cambia esta URL cuando tengas tu dominio definitivo (la usan el SEO, Open Graph y el sitemap).
  site: 'https://sebastdv.vercel.app',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
