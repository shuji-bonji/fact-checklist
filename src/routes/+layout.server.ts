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
 * 
 * Note: introページなど、ページ専用のserver.tsがある場合は
 * layout.server.tsでのメタタグ生成をスキップして重複を防ぐ
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

    const baseUrl = 'https://fact-checklist.vercel.app';
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

    // エラー時のフォールバック（全12言語対応）
    const fallbackMeta: Record<string, MetaData> = {
      ja: {
        title: 'Fact Checklist - 実用的事実確認チェックシート',
        description: '20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。',
        keywords: '事実確認,ファクトチェック,情報検証,信頼性評価,PWA,情報リテラシー,偽情報対策',
        siteName: '実用的事実確認チェックシート',
        ogTitle: 'Fact Checklist - 実用的事実確認チェックシート',
        ogDescription: '20項目のチェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極めるPWAアプリ。',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'ja_JP',
        language: 'ja'
      },
      en: {
        title: 'Fact Checklist - Practical Fact-Check Tool',
        description: 'Systematically evaluate information reliability with a 20-item checklist. A PWA app to assess information with your own eyes and mind, without relying on AI or government.',
        keywords: 'fact-check,verification,information,reliability,PWA,media literacy,misinformation',
        siteName: 'Practical Fact-Check Checklist',
        ogTitle: 'Fact Checklist - Practical Fact-Check Tool',
        ogDescription: 'Systematically evaluate information reliability with a 20-item checklist. A PWA app to assess information with your own eyes and mind, without relying on AI or government.',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'en_US',
        language: 'en'
      },
      fr: {
        title: 'Fact Checklist - Outil de Vérification des Faits',
        description: 'Évaluez systématiquement la fiabilité des informations avec une liste de contrôle de 20 éléments. Une application PWA pour évaluer les informations avec vos propres yeux et votre esprit.',
        keywords: 'vérification-faits,vérification,information,fiabilité,PWA,littératie-médiatique,désinformation',
        siteName: 'Liste de Contrôle de Vérification des Faits',
        ogTitle: 'Fact Checklist - Outil de Vérification des Faits',
        ogDescription: 'Évaluez systématiquement la fiabilité des informations avec une liste de contrôle de 20 éléments. Une application PWA pour évaluer les informations avec vos propres yeux et votre esprit.',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'fr_FR',
        language: 'fr'
      },
      'zh-TW': {
        title: 'Fact Checklist - 實用事實查核工具',
        description: '使用20項檢查清單系統性地評估資訊可靠性。一個PWA應用程式，用自己的眼睛和頭腦來評估資訊，不依賴AI或政府。',
        keywords: '事實查核,驗證,資訊,可靠性,PWA,媒體素養,錯誤資訊',
        siteName: '實用事實查核清單',
        ogTitle: 'Fact Checklist - 實用事實查核工具',
        ogDescription: '使用20項檢查清單系統性地評估資訊可靠性。一個PWA應用程式，用自己的眼睛和頭腦來評估資訊，不依賴AI或政府。',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'zh_TW',
        language: 'zh-TW'
      },
      es: {
        title: 'Fact Checklist - Herramienta de Verificación de Hechos',
        description: 'Evalúa sistemáticamente la fiabilidad de la información con una lista de verificación de 20 elementos. Una aplicación PWA para evaluar información con tus propios ojos y mente.',
        keywords: 'verificación-hechos,verificación,información,fiabilidad,PWA,alfabetización-mediática,desinformación',
        siteName: 'Lista de Verificación de Hechos Práctica',
        ogTitle: 'Fact Checklist - Herramienta de Verificación de Hechos',
        ogDescription: 'Evalúa sistemáticamente la fiabilidad de la información con una lista de verificación de 20 elementos. Una aplicación PWA para evaluar información con tus propios ojos y mente.',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'es_ES',
        language: 'es'
      },
      pt: {
        title: 'Fact Checklist - Ferramenta de Verificação de Fatos',
        description: 'Avalie sistematicamente a confiabilidade das informações com uma lista de verificação de 20 itens. Um aplicativo PWA para avaliar informações com seus próprios olhos e mente.',
        keywords: 'verificação-fatos,verificação,informação,confiabilidade,PWA,alfabetização-midiática,desinformação',
        siteName: 'Lista de Verificação de Fatos Prática',
        ogTitle: 'Fact Checklist - Ferramenta de Verificação de Fatos',
        ogDescription: 'Avalie sistematicamente a confiabilidade das informações com uma lista de verificação de 20 itens. Um aplicativo PWA para avaliar informações com seus próprios olhos e mente.',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'pt_PT',
        language: 'pt'
      },
      hi: {
        title: 'Fact Checklist - तथ्य जांच उपकरण',
        description: '20-आइटम चेकलिस्ट के साथ जानकारी की विश्वसनीयता का व्यवस्थित मूल्यांकन करें। अपनी आंखों और दिमाग से जानकारी का आकलन करने के लिए एक PWA ऐप।',
        keywords: 'तथ्य-जांच,सत्यापन,जानकारी,विश्वसनीयता,PWA,मीडिया-साक्षरता,गलत-जानकारी',
        siteName: 'व्यावहारिक तथ्य जांच चेकलिस्ट',
        ogTitle: 'Fact Checklist - तथ्य जांच उपकरण',
        ogDescription: '20-आइटम चेकलिस्ट के साथ जानकारी की विश्वसनीयता का व्यवस्थित मूल्यांकन करें। अपनी आंखों और दिमाग से जानकारी का आकलन करने के लिए एक PWA ऐप।',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'hi_IN',
        language: 'hi'
      },
      de: {
        title: 'Fact Checklist - Praktisches Faktencheck-Tool',
        description: 'Bewerten Sie systematisch die Zuverlässigkeit von Informationen mit einer 20-Punkte-Checkliste. Eine PWA-App zur Bewertung von Informationen mit den eigenen Augen und dem eigenen Verstand.',
        keywords: 'faktencheck,überprüfung,information,zuverlässigkeit,PWA,medienkompetenz,desinformation',
        siteName: 'Praktische Faktencheck-Checkliste',
        ogTitle: 'Fact Checklist - Praktisches Faktencheck-Tool',
        ogDescription: 'Bewerten Sie systematisch die Zuverlässigkeit von Informationen mit einer 20-Punkte-Checkliste. Eine PWA-App zur Bewertung von Informationen mit den eigenen Augen und dem eigenen Verstand.',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'de_DE',
        language: 'de'
      },
      it: {
        title: 'Fact Checklist - Strumento di Verifica dei Fatti',
        description: 'Valuta sistematicamente l\'affidabilità delle informazioni con una checklist di 20 elementi. Un\'app PWA per valutare le informazioni con i propri occhi e la propria mente.',
        keywords: 'verifica-fatti,verifica,informazione,affidabilità,PWA,alfabetizzazione-mediatica,disinformazione',
        siteName: 'Checklist di Verifica dei Fatti Pratica',
        ogTitle: 'Fact Checklist - Strumento di Verifica dei Fatti',
        ogDescription: 'Valuta sistematicamente l\'affidabilità delle informazioni con una checklist di 20 elementi. Un\'app PWA per valutare le informazioni con i propri occhi e la propria mente.',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'it_IT',
        language: 'it'
      },
      ar: {
        title: 'Fact Checklist - أداة التحقق من الحقائق',
        description: 'قم بتقييم موثوقية المعلومات بشكل منهجي باستخدام قائمة تحقق من 20 عنصرًا. تطبيق PWA لتقييم المعلومات بعينيك وعقلك.',
        keywords: 'تحقق-الحقائق,تحقق,معلومات,موثوقية,PWA,محو-أمية-إعلامية,معلومات-مضللة',
        siteName: 'قائمة التحقق من الحقائق العملية',
        ogTitle: 'Fact Checklist - أداة التحقق من الحقائق',
        ogDescription: 'قم بتقييم موثوقية المعلومات بشكل منهجي باستخدام قائمة تحقق من 20 عنصرًا. تطبيق PWA لتقييم المعلومات بعينيك وعقلك.',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'ar_SA',
        language: 'ar'
      },
      id: {
        title: 'Fact Checklist - Alat Pemeriksaan Fakta',
        description: 'Evaluasi keandalan informasi secara sistematis dengan daftar periksa 20 item. Aplikasi PWA untuk menilai informasi dengan mata dan pikiran Anda sendiri.',
        keywords: 'pemeriksaan-fakta,verifikasi,informasi,keandalan,PWA,literasi-media,disinformasi',
        siteName: 'Daftar Periksa Fakta Praktis',
        ogTitle: 'Fact Checklist - Alat Pemeriksaan Fakta',
        ogDescription: 'Evaluasi keandalan informasi secara sistematis dengan daftar periksa 20 item. Aplikasi PWA untuk menilai informasi dengan mata dan pikiran Anda sendiri.',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'id_ID',
        language: 'id'
      },
      ko: {
        title: 'Fact Checklist - 팩트체크 도구',
        description: '20개 항목의 체크리스트로 정보의 신뢰성을 체계적으로 평가하세요. 자신의 눈과 두뇌로 정보를 평가하는 PWA 앱입니다.',
        keywords: '팩트체크,검증,정보,신뢰성,PWA,미디어리터러시,잘못된정보',
        siteName: '실용적 팩트체크 체크리스트',
        ogTitle: 'Fact Checklist - 팩트체크 도구',
        ogDescription: '20개 항목의 체크리스트로 정보의 신뢰성을 체계적으로 평가하세요. 자신의 눈과 두뇌로 정보를 평가하는 PWA 앱입니다.',
        ogImage: 'https://fact-checklist.vercel.app/og-image.png',
        ogUrl: 'https://fact-checklist.vercel.app',
        url: 'https://fact-checklist.vercel.app',
        image: 'https://fact-checklist.vercel.app/og-image.png',
        type: 'website',
        locale: 'ko_KR',
        language: 'ko'
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

  // introページの場合はメタタグ生成をスキップ（重複回避）
  console.log('[SSR] Checking pathname:', _url.pathname);
  const isIntroPage = _url.pathname === '/intro' || _url.pathname === '/intro/';
  console.log('[SSR] Is intro page:', isIntroPage);
  
  if (isIntroPage) {
    console.log('[SSR] Skipping meta generation for intro page - handled by page-specific server');
    return {
      meta: null,
      detectedLanguage
    };
  }

  // 他のページでは通常のメタタグ生成
  const meta = await generateSingleLanguageMeta(detectedLanguage, _url);

  return {
    meta,
    detectedLanguage
  } satisfies { meta: MetaData | null; detectedLanguage: LanguageCode };
};
