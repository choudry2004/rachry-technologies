import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, sep, extname } from 'node:path';
import { pathToFileURL } from 'node:url';
const root = resolve('dist');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.png':'image/png','.svg':'image/svg+xml','.mp4':'video/mp4','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
export function createPreviewServer() {
 return createServer((req,res)=>{
  let path;
  try { path=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch {res.writeHead(400).end();return;}
  if(path!=='/'&&path.endsWith('/')){res.writeHead(308,{Location:path.replace(/\/+$/,'')+new URL(req.url,'http://localhost').search}).end();return;}
  if(path.endsWith('.html')&&path!=='/404.html'){res.writeHead(308,{Location:path==='/index.html'?'/':path.slice(0,-5)}).end();return;}
  const candidate=resolve(root,'.'+(path==='/'?'/index.html':path));
  if(!candidate.startsWith(root+sep)){res.writeHead(403).end();return;}
  let file=existsSync(candidate)&&statSync(candidate).isFile()?candidate:candidate+'.html';
  const found=existsSync(file)&&statSync(file).isFile();
  if(!found)file=resolve(root,'404.html');
  res.writeHead(found?200:404,{'Content-Type':types[extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});
  res.end(req.method==='HEAD'?undefined:readFileSync(file));
 });
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){createPreviewServer().listen(4173,'127.0.0.1',()=>console.log('Local static preview: http://127.0.0.1:4173'));}
