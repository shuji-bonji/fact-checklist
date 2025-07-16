// scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://shuji-bonji.github.io/fact-checklist';
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/intro/', priority: '0.9', changefreq: 'monthly' },
  { path: '/about/', priority: '0.8', changefreq: 'monthly' },
  { path: '/help/', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy/', priority: '0.5', changefreq: 'yearly' }
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .map(
    route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  const sitemapPath = path.join(__dirname, '../static/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.error('✅ sitemap.xml generated successfully');
}

generateSitemap();
