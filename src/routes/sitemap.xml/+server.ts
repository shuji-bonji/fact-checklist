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
  { path: '/intro', priority: 0.6, changefreq: 'monthly' }
];

export const prerender = true;
export const config = {
  isr: false
};

export const GET: RequestHandler = async () => {
  // サイトURLを決定
  const SITE_URL = getSiteUrl();

  // Git履歴から各ページの最終更新日を取得（ビルド時に生成されたJSONから）
  let lastModMap = new Map<string, string>();
  const defaultLastmod = new Date().toISOString().split('T')[0];

  try {
    // Dynamic import to avoid Node.js dependencies in runtime
    const gitLastmodData = await import('$lib/data/git-lastmod.json');
    const data = gitLastmodData.default !== undefined ? gitLastmodData.default : gitLastmodData;
    if (data !== null && data !== undefined && typeof data === 'object') {
      lastModMap = new Map<string, string>(Object.entries(data as Record<string, string>));
    }
  } catch (error) {
    // ファイルが存在しない場合はデフォルトの日付を使用
    console.warn('Could not load git-lastmod.json, using default dates:', error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(page => {
    const url = `${SITE_URL}${page.path}`;

    // すべての言語バージョンへのリンクを生成（すべて同じURLで、言語はクエリパラメータで管理）
    const alternates = availableLanguages
      .map((lang: LanguageCode) => {
        // zh-TWはzh-Hantとして、言語-地域コードを使用
        const hreflang = lang === 'zh-TW' ? 'zh-Hant-TW' : lang;
        return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${url}"/>`;
      })
      .join('\n');

    // x-defaultリンクを追加（デフォルト言語として日本語を使用）
    const xDefaultLink = `    <xhtml:link rel="alternate" hreflang="x-default" href="${url}"/>`;

    // このページ固有の最終更新日を取得（なければデフォルトを使用）
    const pageLastmod = lastModMap.get(page.path) ?? defaultLastmod;

    return `  <url>
    <loc>${url}</loc>
    <lastmod>${pageLastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternates}
${xDefaultLink}
  </url>`;
  })
  .join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'max-age=3600',
      'X-Content-Type-Options': 'nosniff'
    }
  });
};
