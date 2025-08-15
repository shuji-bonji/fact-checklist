import type { RequestHandler } from './$types';
import { availableLanguages, type LanguageCode } from '$lib/i18n';

// サイトのベースURLを決定
// Vercelでは環境変数VERCEL_URLが自動的に設定される
// デフォルトはVercelの本番URL
function getSiteUrl(): string {
  // SvelteKitでは環境変数はビルド時に静的に解決される
  // Vercelデプロイメント用のURLを返す
  return 'https://fact-checklist.vercel.app';
}

const pages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/help', priority: 0.7, changefreq: 'monthly' },
  { path: '/privacy', priority: 0.5, changefreq: 'yearly' },
  { path: '/terms', priority: 0.5, changefreq: 'yearly' },
  { path: '/intro', priority: 0.6, changefreq: 'monthly' }
];

export const GET: RequestHandler = async () => {
  // サイトURLを決定
  const SITE_URL = getSiteUrl();

  // 実際の最終更新日を使用
  const lastmod = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .flatMap(page =>
    availableLanguages.map((lang: LanguageCode) => {
      const url = lang === 'ja' ? `${SITE_URL}${page.path}` : `${SITE_URL}/${lang}${page.path}`;

      // すべての言語バージョンへのリンクを生成（自分自身も含む）
      const alternates = availableLanguages
        .map((altLang: LanguageCode) => {
          const altUrl =
            altLang === 'ja' ? `${SITE_URL}${page.path}` : `${SITE_URL}/${altLang}${page.path}`;
          // zh-TWはzh-Hantとして、言語-地域コードを使用
          const hreflang = altLang === 'zh-TW' ? 'zh-Hant-TW' : altLang;
          return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${altUrl}"/>`;
        })
        .join('\n');

      // x-defaultリンクを追加（デフォルト言語として日本語を使用）
      const xDefaultUrl = `${SITE_URL}${page.path}`;
      const xDefaultLink = `    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefaultUrl}"/>`;

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternates}
${xDefaultLink}
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
