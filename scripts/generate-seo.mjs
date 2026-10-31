import fs from 'node:fs';
import assert from 'node:assert/strict';
import { render, routePaths } from '../dist-ssr/entry-server.js';
import { pages, SITE_URL } from '../src/config/seo.js';
import { createPageSchema } from '../src/lib/seo-schema.js';

assert.deepEqual([...routePaths].sort(), pages.map(page => page.path).sort(), 'Route and SEO registries must match');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const template = fs.readFileSync('dist/index.html', 'utf8')
 .replace(/<title>[\s\S]*?<\/title>/, '')
 .replace(/<meta\s+(?:name|property)="(?:description|robots|og:[^"]*|twitter:[^"]*)"[\s\S]*?>/g, '')
 .replace(/<link\s+rel="canonical"[\s\S]*?>/g, '');
const notFound = { path: '/404', title: 'Page not found | Rachry Technologies', description: 'The requested page could not be found.', noindex: true };
const meta = (attribute, name, value) => `<meta ${attribute}="${name}" content="${escape(value)}">`;

for (const page of [...pages, notFound]) {
 const body = await render(page.path);
 const url = `${SITE_URL}${page.path}`;
 const image = `${SITE_URL}/social-preview.png`;
 const head = [
  `<title>${escape(page.title)}</title>`,
  `<link rel="canonical" href="${url}">`,
  meta('name', 'description', page.description),
  meta('name', 'robots', page.noindex ? 'noindex, follow' : 'index, follow'),
  meta('property', 'og:title', page.title),
  meta('property', 'og:description', page.description),
  meta('property', 'og:url', url),
  meta('property', 'og:type', 'website'),
  meta('property', 'og:site_name', 'Rachry Technologies'),
  meta('property', 'og:locale', 'en_IN'),
  meta('property', 'og:image', image),
  meta('property', 'og:image:alt', 'Rachry Technologies logo'),
  meta('name', 'twitter:card', 'summary_large_image'),
  meta('name', 'twitter:title', page.title),
  meta('name', 'twitter:description', page.description),
  meta('name', 'twitter:image', image),
  meta('name', 'twitter:image:alt', 'Rachry Technologies logo'),
  `<script type="application/ld+json" id="page-schema">${JSON.stringify(createPageSchema(page)).replaceAll('<', '\\u003c')}</script>`,
 ].join('\n');
 const html = template.replace('</head>', `${head}\n</head>`)
  .replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
 const file = page.path === '/' ? 'dist/index.html' : `dist${page.path}.html`;
 fs.mkdirSync(file.slice(0, file.lastIndexOf('/')), { recursive: true });
 fs.writeFileSync(file, html);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${SITE_URL}${page.path}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync('dist/sitemap.xml', sitemap);
console.log(`Prerendered ${pages.length} public pages plus 404 with shared SEO metadata.`);
