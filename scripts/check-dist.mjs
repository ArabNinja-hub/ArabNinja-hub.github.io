import { readFile, access } from 'node:fs/promises';
import { resolve, relative, isAbsolute } from 'node:path';

const dist = resolve('dist');
const html = await readFile(resolve(dist, 'index.html'), 'utf8');
if (/\/src\/|\.jsx(?:["'?#\s>]|$)|\/@vite\/client/i.test(html)) {
  throw new Error('Production HTML contains a development source reference');
}

const moduleScript = /<script\b[^>]*\btype=["']module["'][^>]*\bsrc=["'](\/assets\/[^"']+\.js)["']/i.exec(html);
const stylesheet = /<link\b[^>]*\brel=["']stylesheet["'][^>]*\bhref=["'](\/assets\/[^"']+\.css)["']/i.exec(html);
if (!moduleScript || !stylesheet) {
  throw new Error('Production HTML must reference a generated module and stylesheet in /assets/');
}

for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) {
  const reference = match[1];
  if (!reference.startsWith('/') || reference.startsWith('//')) continue;
  const path = resolve(dist, decodeURIComponent(reference.split(/[?#]/, 1)[0]).slice(1));
  const local = relative(dist, path);
  if (local.startsWith('..') || isAbsolute(local)) throw new Error(`Invalid local reference: ${reference}`);
  await access(path).catch(() => { throw new Error(`Missing production asset: ${reference}`); });
}
console.log(`Verified dist/index.html, ${moduleScript[1]}, ${stylesheet[1]}, and all local HTML references.`);
