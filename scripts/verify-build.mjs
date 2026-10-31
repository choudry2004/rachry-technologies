import fs from 'node:fs';
import assert from 'node:assert/strict';
const sitemap=fs.readFileSync('dist/sitemap.xml','utf8');
const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
assert.equal(urls.length,11);assert.equal(new Set(urls).size,11);
const titles=new Set();const descriptions=new Set();
for(const url of urls){const path=new URL(url).pathname;const file=path==='/'?'dist/index.html':`dist${path}.html`;const html=fs.readFileSync(file,'utf8');
 assert.ok(html.includes(`rel="canonical" href="${url}"`),file);
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert.ok(title);assert.ok(!titles.has(title));titles.add(title);
 const desc=html.match(/name="description" content="([^"]+)"/)?.[1];assert.ok(desc);assert.ok(!descriptions.has(desc));descriptions.add(desc);
 assert.equal((html.match(/<title>/g)||[]).length,1);
 assert.ok(html.includes('name="robots" content="index, follow"'));
 const schema=JSON.parse(html.match(/id="page-schema">([^<]+)<\/script>/)?.[1]);assert.equal(schema['@context'],'https://schema.org');
 assert.ok(html.includes('twitter:card'));assert.ok(html.includes('og:image'));
}
assert.ok(!sitemap.includes('/404'));assert.ok(fs.readFileSync('dist/robots.txt','utf8').includes('https://rachrytechnolgies.in/sitemap.xml'));
console.log('PASS: 11 unique route heads, canonicals, JSON-LD, sharing metadata, sitemap and robots.');

// Inspect crawler-visible content, internal links and assets without executing JavaScript.
for (const url of urls) {
 const path = new URL(url).pathname;
 const html = fs.readFileSync(path === '/' ? 'dist/index.html' : `dist${path}.html`, 'utf8');
 const body = html.split('<div id="root">')[1];
 assert.ok(body && body.length > 2000, `Missing prerendered body: ${path}`);
 assert.equal((body.match(/<h1[ >]/g) || []).length, 1, `Expected one H1: ${path}`);
 assert.ok(!body.includes('Loading page?'), `Unresolved Suspense: ${path}`);
 for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
  const value = match[1].replaceAll('&amp;', '&');
  if (value.startsWith('#') && value.length > 1) assert.ok(html.includes(`id="${value.slice(1)}"`), `Broken anchor ${path} ${value}`);
  if (!value.startsWith('/') || value.startsWith('//')) continue;
  const [target, hash] = value.split('#');
  const targetFile = target === '/' ? 'dist/index.html' : urls.includes('https://rachrytechnolgies.in'+target) ? `dist${target}.html` : 'dist'+target;
  assert.ok(fs.existsSync(targetFile), `Missing target: ${path} ${value}`);
  if (hash && targetFile.endsWith('.html')) assert.ok(fs.readFileSync(targetFile,'utf8').includes(`id="${hash}"`), `Broken cross-page anchor: ${value}`);
 }
}
const errorHtml = fs.readFileSync('dist/404.html', 'utf8');
assert.ok(errorHtml.includes('noindex, follow'));
assert.ok(errorHtml.includes('PAGE NOT FOUND'));
const hosting=JSON.parse(fs.readFileSync('vercel.json','utf8'));
assert.ok(!hosting.rewrites, 'Catch-all SPA rewrite would hide real 404 responses');
assert.equal(hosting.cleanUrls,true);
assert.equal(hosting.trailingSlash,false);
console.log('PASS: prerendered content, single H1, internal anchors, all linked local assets, noindex 404 and static hosting configuration.');

// Owner-confirmed business positioning must be visible in crawler-readable copy.
const home = fs.readFileSync('dist/index.html', 'utf8');
const about = fs.readFileSync('dist/about.html', 'utf8');
assert.ok(home.includes('Our Own Products'));
assert.ok(home.includes('aptitude learning platform'));
assert.ok(home.includes('in development'));
assert.ok(about.includes('Product names and launch details are not yet final.'));
assert.match(home, /<video[^>]*autoPlay[^>]*>/i);
assert.ok(home.includes('hero-bg-'));
assert.ok(home.includes('aria-controls="nav-what"'));
assert.ok(home.includes('id="mobile-navigation" inert=""'));
console.log('PASS: product-development messaging, original autoplay hero video and collapsed navigation semantics.');
