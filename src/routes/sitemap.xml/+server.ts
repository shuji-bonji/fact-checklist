import type { RequestHandler } from './$types';
import type { LanguageCode } from '$lib/i18n/types';

/**
 * 動的サイトマップ生成
 * - 多言語URL対応
 * - 全ページの自動検出
 * - lastmod自動更新
 */

interface SitemapUrl {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

interface StaticRoute {
  path: string;
  priority: number;
  changefreq: SitemapUrl['changefreq'];
  multilingual: boolean;
}

const SUPPORTED_LANGUAGES: LanguageCode[] = [
  'ja',
  'en',
  'fr',
  'zh-TW',
  'es',
  'pt',
  'hi',
  'de',
  'it',
  'ar',
  'id',
  'ko'
];

const BASE_URL = 'https://fact-checklist.vercel.app';

/**
 * 静的ページのルート定義
 */
const STATIC_ROUTES: StaticRoute[] = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly' as const,
    multilingual: true
  },
  {
    path: '/intro/',
    priority: 0.9,
    changefreq: 'monthly' as const,
    multilingual: true
  },
  {
    path: '/about/',
    priority: 0.8,
    changefreq: 'monthly' as const,
    multilingual: true
  },
  {
    path: '/help/',
    priority: 0.7,
    changefreq: 'monthly' as const,
    multilingual: true
  },
  {
    path: '/privacy/',
    priority: 0.5,
    changefreq: 'yearly' as const,
    multilingual: true
  }
];

/**
 * サイトマップURLを生成
 */
function generateSitemapUrls(): SitemapUrl[] {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  // 静的ページのURL生成
  for (const route of STATIC_ROUTES) {
    if (route.multilingual) {
      // 多言語対応ページ - 各言語のURLを生成
      for (const lang of SUPPORTED_LANGUAGES) {
        const langParam = lang === 'ja' ? '' : `?lang=${lang}`;
        const fullUrl = `${BASE_URL}${route.path}${langParam}`;
        urls.push({
          url: fullUrl,
          lastmod: currentDate,
          changefreq: route.changefreq,
          priority: route.priority
        } as SitemapUrl);
      }
    } else {
      // 単一言語ページ
      const fullUrl = `${BASE_URL}${route.path}`;
      urls.push({
        url: fullUrl,
        lastmod: currentDate,
        changefreq: route.changefreq,
        priority: route.priority
      } as SitemapUrl);
    }
  }

  // TODO: 動的ルート（/checklist/[id]）の追加は将来的に実装
  // 現在はlocalStorageベースで、サーバーサイドからアクセスできないため、
  // 将来的にデータベースやAPI経由でチェックリストIDを取得する場合に対応

  return urls;
}

/**
 * XMLサイトマップを生成
 */
function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlEntries = urls
    .map(
      ({ url, lastmod, changefreq, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

export const GET: RequestHandler = async () => {
  try {
    const urls = generateSitemapUrls();
    const sitemap = generateSitemapXml(urls);

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600' // 1時間キャッシュ
      }
    });
  } catch (error) {
    console.error('Sitemap generation failed:', error);

    // エラー時はMinimalサイトマップを返す
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new Response(fallbackSitemap, {
      status: 500,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'no-cache'
      }
    });
  }
};

// POSTメソッドは不要のため実装しない
// プリレンダリング用にGETメソッドのみ対応
export const prerender = true;
