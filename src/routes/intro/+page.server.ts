import type { PageServerLoad } from './$types';
import { SUPPORTED_LANGUAGES, type LanguageCode } from '$lib/i18n/types';

/**
 * Accept-Language ヘッダーを解析して最適な言語を決定
 */
function parseAcceptLanguage(acceptLanguage: string | null): LanguageCode {
  if (!acceptLanguage) {
    return 'ja'; // デフォルト言語
  }

  // Accept-Language ヘッダーをパース
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, q] = lang.trim().split(';q=');
      return {
        code: (code || '').toLowerCase(),
        quality: q ? parseFloat(q) : 1.0
      };
    })
    .sort((a, b) => b.quality - a.quality);

  // 対応言語リスト
  const supportedLanguageCodes = Object.keys(SUPPORTED_LANGUAGES) as LanguageCode[];
  
  // 対応言語を優先順位で確認
  for (const lang of languages) {
    const langCode = lang.code.split('-')[0] as LanguageCode;
    
    // 完全一致をチェック
    if (supportedLanguageCodes.includes(lang.code as LanguageCode)) {
      return lang.code as LanguageCode;
    }
    
    // 基本言語コードをチェック
    if (supportedLanguageCodes.includes(langCode)) {
      return langCode;
    }
    
    // 特殊ケース: 中国語の地域バリエーション
    if (lang.code.startsWith('zh-tw') || lang.code.startsWith('zh-hant')) {
      return 'zh-TW';
    }
    if (lang.code.startsWith('zh')) {
      return 'zh-TW'; // デフォルトで繁体字中国語
    }
  }

  return 'ja'; // フォールバック
}

/**
 * intro ページ用のメタデータを生成
 */
async function generateIntroMetadata(language: LanguageCode) {
  try {
    // 静的インポートマップを使用（SSR対応）
    const translationModules = {
      ja: () => import('$lib/i18n/translations/ja.js'),
      en: () => import('$lib/i18n/translations/en.js'),
      fr: () => import('$lib/i18n/translations/fr.js'),
      'zh-TW': () => import('$lib/i18n/translations/zh-TW.js'),
      es: () => import('$lib/i18n/translations/es.js'),
      pt: () => import('$lib/i18n/translations/pt.js'),
      hi: () => import('$lib/i18n/translations/hi.js'),
      de: () => import('$lib/i18n/translations/de.js'),
      it: () => import('$lib/i18n/translations/it.js'),
      ar: () => import('$lib/i18n/translations/ar.js'),
      id: () => import('$lib/i18n/translations/id.js'),
      ko: () => import('$lib/i18n/translations/ko.js')
    };

    const translationModule = await translationModules[language]();
    const translations = translationModule.translations;
    
    const baseUrl = 'https://shuji-bonji.github.io/fact-checklist';
    const ogImageUrl = `${baseUrl}/og-image-intro.png`;
    
    return {
      title: translations.pages.intro.title,
      description: translations.pages.intro.description,
      keywords: translations.pages.intro.keywords,
      ogTitle: translations.pages.intro.title,
      ogDescription: translations.pages.intro.description,
      ogImage: ogImageUrl,
      ogUrl: `${baseUrl}/intro`,
      language: language,
      siteName: translations.app.title
    };
  } catch (error) {
    console.error(`Failed to load translations for ${language}:`, error);
    
    // エラー時のフォールバック（日本語）
    return {
      title: '偽情報・誤情報だらけの世界を生き抜く、実用的ファクトチェックシート - Fact Checklist',
      description: '政府のSNS規制が進む中、情報の信頼性を自分の目と頭で見極めるためのシンプルなチェックリスト。AIやメディアを鵜呑みにせず、科学的・体系的に情報を評価するPWAアプリ。',
      keywords: '事実確認,ファクトチェック,情報検証,信頼性評価,PWA,情報リテラシー,偽情報対策,SNS規制,言論統制,情報の質,AIファクトチェック',
      ogTitle: '偽情報・誤情報だらけの世界を生き抜く、実用的ファクトチェックシート - Fact Checklist',
      ogDescription: '政府のSNS規制が進む中、情報の信頼性を自分の目と頭で見極めるためのシンプルなチェックリスト。AIやメディアを鵜呑みにせず、科学的・体系的に情報を評価するPWAアプリ。',
      ogImage: 'https://shuji-bonji.github.io/fact-checklist/og-image-intro.png',
      ogUrl: 'https://shuji-bonji.github.io/fact-checklist/intro',
      language: 'ja',
      siteName: '実用的事実確認チェックシート'
    };
  }
}

export const load: PageServerLoad = async ({ request }) => {
  const acceptLanguage = request.headers.get('accept-language');
  const detectedLanguage = parseAcceptLanguage(acceptLanguage);
  const metadata = await generateIntroMetadata(detectedLanguage);
  
  return {
    meta: metadata,
    detectedLanguage
  };
};