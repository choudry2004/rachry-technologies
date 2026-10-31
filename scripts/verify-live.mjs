import fs from 'node:fs';
import { pages, SITE_URL } from '../src/config/seo.js';
import { company } from '../src/content/company.js';

const checks = [];
async function inspect(path, userAgent) {
 const url = SITE_URL + path;
 try {
  const response = await fetch(url, { headers: userAgent ? { 'User-Agent': userAgent } : {}, signal: AbortSignal.timeout(20000) });
  const html = await response.text();
  return { path, status: response.status, finalUrl: response.url, bytes: Buffer.byteLength(html), html, xRobots: response.headers.get('x-robots-tag') || '' };
 } catch (error) { return { path, status: null, error: error.message, html: '' }; }
}
const results = await Promise.all(pages.map(page => inspect(page.path)));
for (const page of pages) {
 const result = results.find(result => result.path === page.path);
 const html = result.html;
 const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/)?.[1];
 const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim();
 checks.push({ path: page.path, status: result.status, bytes: result.bytes, title, canonical,
  pass: result.status === 200 && canonical === SITE_URL + page.path && /<h1[ >]/.test(html) && !/noindex/i.test(result.xRobots),
  hasPrerenderedHeading: /<h1[ >]/.test(html), error: result.error });
}
const [robots, sitemap, missing, botContact, botInternship] = await Promise.all([
 inspect('/robots.txt'), inspect('/sitemap.xml'), inspect('/seo-verification-missing-url-20261031'),
 inspect('/contact', 'OAI-SearchBot/1.4'), inspect('/internship', 'OAI-SearchBot/1.4'),
]);
const listedUrls = [...sitemap.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const summary = {
 checkedAt: new Date().toISOString(), base: SITE_URL, routes: checks,
 contactEmailVisibleInSource: results.find(result => result.path === '/contact')?.html.includes(company.email),
 sitemap: { status: sitemap.status, urls: listedUrls, missing: pages.filter(page => !listedUrls.includes(SITE_URL + page.path)).map(page => page.path) },
 robots: { status: robots.status, content: robots.html },
 missingUrl: { status: missing.status, pass: missing.status === 404 },
 botUserAgentChecks: [botContact, botInternship].map(result => ({ path: result.path, status: result.status, hasPrerenderedHeading: /<h1[ >]/.test(result.html) })),
 limits: 'A user-agent check is not proof that actual OpenAI crawler IPs are allowed; verify host logs. No Search Console or indexing account access is tested.',
};
fs.writeFileSync('docs/LIVE-SEO-AUDIT.json', JSON.stringify(summary, null, 2) + '\n');
const failures = checks.filter(check => !check.pass).length;
console.log(`${checks.length} live routes inspected; ${failures} fail source-content/canonical/status checks.`);
console.log(`Contact email in HTML: ${summary.contactEmailVisibleInSource}. Missing sitemap routes: ${summary.sitemap.missing.join(', ') || 'none'}. Unknown URL status: ${missing.status}.`);
console.log('Report: docs/LIVE-SEO-AUDIT.json');
if (failures || summary.sitemap.missing.length || !summary.missingUrl.pass || !summary.contactEmailVisibleInSource) process.exitCode = 1;
