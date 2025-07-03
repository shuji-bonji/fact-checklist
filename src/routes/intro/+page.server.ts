import type { PageServerLoad } from './$types';
import type { LanguageCode } from '$lib/i18n/types';
import { detectLanguage, getLocaleString } from '$lib/utils/language-detection';

/**
 * intro ページ用の単一言語メタデータを生成（重複回避）
 */
async function generateIntroMeta(language: LanguageCode, _url: URL) {
  try {
    // 静的インポートマップを使用（SSR対応）
    const translationModules = {
      ja: () => import('$lib/i18n/translations/ja'),
      en: () => import('$lib/i18n/translations/en'),
      fr: () => import('$lib/i18n/translations/fr'),
      'zh-TW': () => import('$lib/i18n/translations/zh-TW'),
      es: () => import('$lib/i18n/translations/es'),
      pt: () => import('$lib/i18n/translations/pt'),
      hi: () => import('$lib/i18n/translations/hi'),
      de: () => import('$lib/i18n/translations/de'),
      it: () => import('$lib/i18n/translations/it'),
      ar: () => import('$lib/i18n/translations/ar'),
      id: () => import('$lib/i18n/translations/id'),
      ko: () => import('$lib/i18n/translations/ko')
    };

    const translationModule = await translationModules[language]();
    const translations = translationModule.translations;

    const baseUrl = 'https://fact-checklist.vercel.app';
    const ogImageUrl = `${baseUrl}/og-image-intro.png`;

    return {
      title: translations.pages.intro.title,
      description: translations.pages.intro.description,
      keywords: translations.pages.intro.keywords,
      ogTitle: translations.pages.intro.title,
      ogDescription: translations.pages.intro.description,
      ogImage: ogImageUrl,
      ogUrl: `${baseUrl}/intro`,
      url: `${baseUrl}/intro`,
      image: ogImageUrl,
      type: 'article',
      siteName: translations.app.title,
      locale: getLocaleString(language),
      language
    };
  } catch (error) {
    console.error(`Failed to load translations for ${language}:`, error);

    // エラー時のフォールバック（日本語または英語のみ、他言語は日本語にフォールバック）
    const fallbackMeta: Record<
      string,
      {
        title: string;
        description: string;
        keywords: string;
        siteName: string;
        ogTitle: string;
        ogDescription: string;
        ogImage: string;
        ogUrl: string;
        url: string;
        image: string;
        type: string;
        locale: string;
        language: string;
      }
    > = {
      ja: {
        title:
          '偽情報・誤情報だらけの世界を生き抜く、実用的ファクトチェックシート - Fact Checklist',
        description:
          '政府のSNS規制が進む中、情報の信頼性を自分の目と頭で見極めるためのシンプルなチェックリスト。AIやメディアを鵜呑みにせず、科学的・体系的に情報を評価するPWAアプリ。',
        keywords:
          '事実確認,ファクトチェック,情報検証,信頼性評価,PWA,情報リテラシー,偽情報対策,SNS規制,言論統制,情報の質,AIファクトチェック',
        siteName: '実用的事実確認チェックシート',
        ogTitle:
          '偽情報・誤情報だらけの世界を生き抜く、実用的ファクトチェックシート - Fact Checklist',
        ogDescription:
          '政府のSNS規制が進む中、情報の信頼性を自分の目と頭で見極めるためのシンプルなチェックリスト。AIやメディアを鵜呑みにせず、科学的・体系的に情報を評価するPWAアプリ。',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'ja_JP',
        language: 'ja'
      },
      en: {
        title:
          'Practical Fact-Check Checklist for Surviving in a World Full of Misinformation - Fact Checklist',
        description:
          'A simple checklist to evaluate information reliability with your own eyes and mind as government SNS regulations advance. A PWA app to scientifically and systematically assess information without taking AI or media at face value.',
        keywords:
          'fact-check,verification,information,reliability,PWA,media literacy,misinformation,SNS regulation,information control,AI fact-checking',
        siteName: 'Practical Fact-Check Checklist',
        ogTitle:
          'Practical Fact-Check Checklist for Surviving in a World Full of Misinformation - Fact Checklist',
        ogDescription:
          'A simple checklist to evaluate information reliability with your own eyes and mind as government SNS regulations advance. A PWA app to scientifically and systematically assess information without taking AI or media at face value.',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'en_US',
        language: 'en'
      }
    };

    const fallback = fallbackMeta[language] ?? fallbackMeta.ja;

    // fallbackMeta.ja は常に存在するため、fallback は never undefined
    if (!fallback) {
      throw new Error('Fallback metadata is missing');
    }

    return fallback;
  }
}

export const load: PageServerLoad = async ({ url: _url, request }) => {
  // デバッグログ（Vercel環境で確認用）
  console.log('[SSR] Intro page server load running');
  console.log('[SSR] URL:', _url.toString());

  // 静的ビルド時はAccept-Languageヘッダーが空の場合がある
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  console.log('[SSR] Accept-Language:', acceptLanguage);

  // 単一言語のみ決定（重複回避）、デフォルトは日本語
  const detectedLanguage = detectLanguage(acceptLanguage);
  console.log('[SSR] Detected language:', detectedLanguage);

  // 検出した言語のメタデータのみ生成
  const meta = await generateIntroMeta(detectedLanguage, _url);

  return {
    meta,
    detectedLanguage
  };
};
