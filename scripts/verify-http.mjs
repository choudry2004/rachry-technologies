import assert from 'node:assert/strict';
import { createPreviewServer } from './preview.mjs';
import { pages } from '../src/config/seo.js';
const server=createPreviewServer();
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const base=`http://127.0.0.1:${server.address().port}`;
try {
 for(const page of pages){const r=await fetch(base+page.path);assert.equal(r.status,200,page.path);assert.ok((await r.text()).includes('<h1'),page.path);}
 const missing=await fetch(base+'/this-page-does-not-exist');assert.equal(missing.status,404);assert.ok((await missing.text()).includes('noindex, follow'));
 const trailing=await fetch(base+'/about/',{redirect:'manual'});assert.equal(trailing.status,308);assert.equal(trailing.headers.get('location'),'/about');
 const alias=await fetch(base+'/about.html',{redirect:'manual'});assert.equal(alias.status,308);assert.equal(alias.headers.get('location'),'/about');
 console.log('PASS: local HTTP 200 for 11 routes, HTTP 404 for unknown URL, canonical URL redirects. Vercel production still requires post-deploy verification.');
} finally {server.close();server.closeAllConnections();}
