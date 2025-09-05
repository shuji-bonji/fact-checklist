import type { PageServerLoad } from './$types';
import type { LanguageCode } from '$lib/i18n';
import { availableLanguages } from '$lib/i18n';

// トップページのSSR対応
// 初期表示で翻訳済みコンテンツを提供するため、サーバー側で言語を確定
export const load: PageServerLoad = async ({ cookies, locals, url }) => {
  // 言語の決定（+layout.server.tsと同じロジック）
  const pathLang = url.pathname.split('/')[1] as LanguageCode;
  const cookieLang = cookies.get('language') as LanguageCode;
  const browserLang = locals.language; // hooks.serverから

  const currentLang: LanguageCode =
    pathLang !== undefined && availableLanguages.includes(pathLang)
      ? pathLang
      : cookieLang !== undefined && availableLanguages.includes(cookieLang)
        ? cookieLang
        : browserLang !== undefined && availableLanguages.includes(browserLang)
          ? browserLang
          : 'ja';

  // SSRで言語を渡すことで、クライアント側の初期化を高速化
  return {
    currentLang,
    timestamp: Date.now() // キャッシュバスティング用
  };
};
