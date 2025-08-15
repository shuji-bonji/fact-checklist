import type { RequestHandler } from './$types';
import { availableLanguages, type LanguageCode } from '$lib/i18n';

const SITE_URL = 'https://shuji-bonji.github.io/fact-checklist';

const pages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/help', priority: 0.7, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' }
];

export const GET: RequestHandler = async () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .flatMap(page =>
    availableLanguages.map((lang: LanguageCode) => {
      const url = lang === 'ja' ? `${SITE_URL}${page.path}` : `${SITE_URL}/${lang}${page.path}`;

      const alternates = availableLanguages
        .filter((l: LanguageCode) => l !== lang)
        .map((altLang: LanguageCode) => {
          const altUrl =
            altLang === 'ja' ? `${SITE_URL}${page.path}` : `${SITE_URL}/${altLang}${page.path}`;
          return `    <xhtml:link rel="alternate" hreflang="${altLang === 'zh-TW' ? 'zh-Hant' : altLang}" href="${altUrl}"/>`;
        })
        .join('\n');

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternates}
  </url>`;
    })
  )
  .join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
};
