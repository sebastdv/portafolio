# Portafolio de Sebastián Ardila Santos

Sitio estático de una sola página hecho con Astro 7, TypeScript y Tailwind CSS 4.

## Editar el contenido

Todo el texto vive en [`src/data/profile.ts`](src/data/profile.ts): perfil, experiencia, citara, otros proyectos (`projects`), IA, habilidades, educación, contacto y SEO. Los componentes y la hoja de vida (`/cv`) solo leen ese archivo.

Para agregar la demo publicada de un proyecto, ponle `demo: { label, href }` en `projects`.

Archivos que agregas tú en `public/`:

| Archivo | Para qué |
| --- | --- |
| `public/CV_Sebastian_Ardila.pdf` | Botón "Descargar CV". Mientras no exista, el botón dice "Ver CV" y abre `/cv`, una versión imprimible generada de `profile.ts`: ábrela y usa "Guardar como PDF" para crear este archivo. |
| `public/citara/demo.gif` | Captura o GIF de citara. Si usas otro nombre o formato, cambia `featured.media.src` en `profile.ts`. Mientras no exista, se muestra un espacio marcado. |

La URL pública está en `astro.config.mjs` (`site`). Cámbiala si usas otro dominio: la usan la URL canónica, Open Graph, `sitemap.xml` y `robots.txt`.

## Comandos

```bash
npm install
npm run dev       # desarrollo en http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
npm run check     # chequeo de tipos
```

## Estructura

```
src/
├─ data/profile.ts            contenido
├─ layouts/Base.astro         head, SEO, tema, aparición al hacer scroll
├─ components/                Nav, ThemeToggle, Section, TagList, Icon, ArchitectureDiagram
│  └─ sections/               Hero, About, Experience, Citara, Projects, AiWorkflow, Skills, Education, Contact, Footer
├─ pages/                     index, cv (hoja de vida imprimible), sitemap.xml, robots.txt
└─ styles/global.css          tokens de color, fuentes y Tailwind
public/                       fuentes Geist (autoalojadas), favicon, og.png
```

## Publicar en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. En vercel.com, entra con GitHub, pulsa **Add New → Project** e importa el repositorio.
3. Vercel detecta Astro solo (build `npm run build`, salida `dist`). Pulsa **Deploy**.
4. Si el dominio final no es `https://sebastdv.vercel.app`, actualiza `site` en `astro.config.mjs` y vuelve a subir los cambios.
