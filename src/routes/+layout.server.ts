import type { LayoutServerLoad } from './$types';
import type { LanguageCode } from '$lib/i18n/types';
import { detectLanguage, getLocaleString } from '$lib/utils/language-detection';

interface MetaData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogUrl: string;
  url: string;
  image: string;
  type: string;
  siteName: string;
  locale: string;
  language: string;
}

/**
 * 単一言語のメタデータを生成（重複回避）
 */
async function generateSingleLanguageMeta(language: LanguageCode, _url: URL): Promise<MetaData> {
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

    const baseUrl = 'https://shuji-bonji.github.io/fact-checklist';
    const ogImageUrl = `${baseUrl}/og-image.png`;

    return {
      title: translations.pages.home.title,
      description: translations.pages.home.description,
      keywords: translations.pages.home.keywords,
      ogTitle: translations.pages.home.title,
      ogDescription: translations.pages.home.description,
      ogImage: ogImageUrl,
      ogUrl: baseUrl,
      url: baseUrl,
      image: ogImageUrl,
      type: 'website',
      siteName: translations.app.title,
      locale: getLocaleString(language),
      language
    };
  } catch (error) {
    console.error(`Failed to load translations for ${language}:`, error);

    // エラー時のフォールバック（日本語または英語のみ、他言語は日本語にフォールバック）
    const fallbackMeta: Record<string, MetaData> = {
      ja: {
        title: 'Fact Checklist - 実用的事実確認チェックシート',
        description:
          '20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。',
        keywords: '事実確認,ファクトチェック,情報検証,信頼性評価,PWA,情報リテラシー,偽情報対策',
        siteName: '実用的事実確認チェックシート',
        ogTitle: 'Fact Checklist - 実用的事実確認チェックシート',
        ogDescription:
          '20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。',
        ogImage: 'https://shuji-bonji.github.io/fact-checklist/og-image.png',
        ogUrl: 'https://shuji-bonji.github.io/fact-checklist',
        url: 'https://shuji-bonji.github.io/fact-checklist',
        image: 'https://shuji-bonji.github.io/fact-checklist/og-image.png',
        type: 'website',
        locale: 'ja_JP',
        language: 'ja'
      },
      en: {
        title: 'Fact Checklist - Practical Fact-Check Tool',
        description:
          'Systematically evaluate information reliability with a 20-item checklist. A PWA app to assess information with your own eyes and mind, without relying on AI or government.',
        keywords:
          'fact-check,verification,information,reliability,PWA,media literacy,misinformation',
        siteName: 'Practical Fact-Check Checklist',
        ogTitle: 'Fact Checklist - Practical Fact-Check Tool',
        ogDescription:
          'Systematically evaluate information reliability with a 20-item checklist. A PWA app to assess information with your own eyes and mind, without relying on AI or government.',
        ogImage: 'https://shuji-bonji.github.io/fact-checklist/og-image.png',
        ogUrl: 'https://shuji-bonji.github.io/fact-checklist',
        url: 'https://shuji-bonji.github.io/fact-checklist',
        image: 'https://shuji-bonji.github.io/fact-checklist/og-image.png',
        type: 'website',
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

export const load: LayoutServerLoad = async ({ url: _url, request }) => {
  // デバッグログ（Vercel環境で確認用）
  console.log('[SSR] Layout server load running');
  console.log('[SSR] URL:', _url.toString());

  // 静的ビルド時はAccept-Languageヘッダーが空の場合がある
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  console.log('[SSR] Accept-Language:', acceptLanguage);

  // 単一言語のみ決定（重複回避）、デフォルトは日本語
  const detectedLanguage = detectLanguage(acceptLanguage);
  console.log('[SSR] Detected language:', detectedLanguage);

  // 検出した言語のメタデータのみ生成
  const meta = await generateSingleLanguageMeta(detectedLanguage, _url);

  return {
    meta,
    detectedLanguage
  } satisfies { meta: MetaData; detectedLanguage: LanguageCode };
};
