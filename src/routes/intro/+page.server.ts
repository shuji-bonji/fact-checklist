import type { PageServerLoad } from './$types';
import type { LanguageCode } from '$lib/i18n/types';
import { detectLanguage, getLocaleString } from '$lib/utils/language-detection';

/**
 * intro ページ用の単一言語メタデータを生成（重複回避）
 */
async function generateIntroMeta(
  language: LanguageCode,
  _url: URL
): Promise<{
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
}> {
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

    // エラー時のフォールバック（全12言語対応）
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
        title: '偽情報・誤情報だらけの世界を生き抜く、ファクトチェックシート - Fact Checklist',
        description:
          '政府のSNS規制が進む中、情報の信頼性を自分の目と頭で見極めるためのシンプルなチェックリスト。AIやメディアを鵜呑みにせず、科学的・体系的に情報を評価するPWAアプリ。',
        keywords:
          '事実確認,ファクトチェック,情報検証,信頼性評価,PWA,情報リテラシー,偽情報対策,SNS規制,言論統制,情報の質,AIファクトチェック',
        siteName: 'ファクトチェックシート',
        ogTitle: '偽情報・誤情報だらけの世界を生き抜く、ファクトチェックシート - Fact Checklist',
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
      },
      fr: {
        title:
          'Liste de Contrôle pour Survivre dans un Monde Plein de Désinformation - Fact Checklist',
        description:
          'Une liste de contrôle simple pour évaluer la fiabilité des informations avec vos propres yeux et votre esprit tandis que les réglementations gouvernementales sur les SNS progressent.',
        keywords:
          'vérification-faits,vérification,information,fiabilité,PWA,littératie-médiatique,désinformation,réglementation-SNS,contrôle-information',
        siteName: 'Liste de Contrôle de Vérification des Faits Pratique',
        ogTitle:
          'Liste de Contrôle pour Survivre dans un Monde Plein de Désinformation - Fact Checklist',
        ogDescription:
          'Une liste de contrôle simple pour évaluer la fiabilité des informations avec vos propres yeux et votre esprit tandis que les réglementations gouvernementales sur les SNS progressent.',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'fr_FR',
        language: 'fr'
      },
      'zh-TW': {
        title: '在充滿錯誤資訊的世界中生存的實用事實查核清單 - Fact Checklist',
        description:
          '隨著政府SNS法規的推進，用自己的眼睛和頭腦評估資訊可靠性的簡單檢查清單。一個科學系統地評估資訊的PWA應用程式。',
        keywords: '事實查核,驗證,資訊,可靠性,PWA,媒體素養,錯誤資訊,SNS法規,資訊控制',
        siteName: '實用事實查核清單',
        ogTitle: '在充滿錯誤資訊的世界中生存的實用事實查核清單 - Fact Checklist',
        ogDescription:
          '隨著政府SNS法規的推進，用自己的眼睛和頭腦評估資訊可靠性的簡單檢查清單。一個科學系統地評估資訊的PWA應用程式。',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'zh_TW',
        language: 'zh-TW'
      },
      es: {
        title:
          'Lista de Verificación Práctica para Sobrevivir en un Mundo Lleno de Desinformación - Fact Checklist',
        description:
          'Una lista de verificación simple para evaluar la fiabilidad de la información con tus propios ojos y mente mientras avanzan las regulaciones gubernamentales de SNS.',
        keywords:
          'verificación-hechos,verificación,información,fiabilidad,PWA,alfabetización-mediática,desinformación,regulación-SNS,control-información',
        siteName: 'Lista de Verificación de Hechos Práctica',
        ogTitle:
          'Lista de Verificación Práctica para Sobrevivir en un Mundo Lleno de Desinformación - Fact Checklist',
        ogDescription:
          'Una lista de verificación simple para evaluar la fiabilidad de la información con tus propios ojos y mente mientras avanzan las regulaciones gubernamentales de SNS.',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'es_ES',
        language: 'es'
      },
      pt: {
        title:
          'Lista de Verificação Prática para Sobreviver em um Mundo Cheio de Desinformação - Fact Checklist',
        description:
          'Uma lista de verificação simples para avaliar a confiabilidade das informações com seus próprios olhos e mente enquanto as regulamentações governamentais de SNS avançam.',
        keywords:
          'verificação-fatos,verificação,informação,confiabilidade,PWA,alfabetização-midiática,desinformação,regulamentação-SNS,controle-informação',
        siteName: 'Lista de Verificação de Fatos Prática',
        ogTitle:
          'Lista de Verificação Prática para Sobreviver em um Mundo Cheio de Desinformação - Fact Checklist',
        ogDescription:
          'Uma lista de verificação simples para avaliar a confiabilidade das informações com seus próprios olhos e mente enquanto as regulamentações governamentais de SNS avançam.',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'pt_PT',
        language: 'pt'
      },
      hi: {
        title:
          'गलत जानकारी से भरी दुनिया में जीवित रहने के लिए व्यावहारिक तथ्य जांच चेकलिस्ट - Fact Checklist',
        description:
          'सरकारी SNS नियम आगे बढ़ने के साथ अपनी आंखों और दिमाग से जानकारी की विश्वसनीयता का मूल्यांकन करने के लिए एक सरल चेकलिस्ट।',
        keywords:
          'तथ्य-जांच,सत्यापन,जानकारी,विश्वसनीयता,PWA,मीडिया-साक्षरता,गलत-जानकारी,SNS-नियम,जानकारी-नियंत्रण',
        siteName: 'व्यावहारिक तथ्य जांच चेकलिस्ट',
        ogTitle:
          'गलत जानकारी से भरी दुनिया में जीवित रहने के लिए व्यावहारिक तथ्य जांच चेकलिस्ट - Fact Checklist',
        ogDescription:
          'सरकारी SNS नियम आगे बढ़ने के साथ अपनी आंखों और दिमाग से जानकारी की विश्वसनीयता का मूल्यांकन करने के लिए एक सरल चेकलिस्ट।',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'hi_IN',
        language: 'hi'
      },
      de: {
        title:
          'Praktische Faktencheck-Checkliste zum Überleben in einer Welt voller Fehlinformationen - Fact Checklist',
        description:
          'Eine einfache Checkliste zur Bewertung der Informationszuverlässigkeit mit den eigenen Augen und dem eigenen Verstand, während staatliche SNS-Regulierungen voranschreiten.',
        keywords:
          'faktencheck,überprüfung,information,zuverlässigkeit,PWA,medienkompetenz,desinformation,SNS-regulierung,informationskontrolle',
        siteName: 'Praktische Faktencheck-Checkliste',
        ogTitle:
          'Praktische Faktencheck-Checkliste zum Überleben in einer Welt voller Fehlinformationen - Fact Checklist',
        ogDescription:
          'Eine einfache Checkliste zur Bewertung der Informationszuverlässigkeit mit den eigenen Augen und dem eigenen Verstand, während staatliche SNS-Regulierungen voranschreiten.',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'de_DE',
        language: 'de'
      },
      it: {
        title:
          'Checklist Pratica di Verifica dei Fatti per Sopravvivere in un Mondo Pieno di Disinformazione - Fact Checklist',
        description:
          "Una checklist semplice per valutare l'affidabilità delle informazioni con i propri occhi e la propria mente mentre avanzano le regolamentazioni governative sui SNS.",
        keywords:
          'verifica-fatti,verifica,informazione,affidabilità,PWA,alfabetizzazione-mediatica,disinformazione,regolamentazione-SNS,controllo-informazione',
        siteName: 'Checklist di Verifica dei Fatti Pratica',
        ogTitle:
          'Checklist Pratica di Verifica dei Fatti per Sopravvivere in un Mondo Pieno di Disinformazione - Fact Checklist',
        ogDescription:
          "Una checklist semplice per valutare l'affidabilità delle informazioni con i propri occhi e la propria mente mentre avanzano le regolamentazioni governative sui SNS.",
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'it_IT',
        language: 'it'
      },
      ar: {
        title: 'قائمة التحقق العملية للبقاء في عالم مليء بالمعلومات المضللة - Fact Checklist',
        description:
          'قائمة تحقق بسيطة لتقييم موثوقية المعلومات بعينيك وعقلك بينما تتقدم اللوائح الحكومية لشبكات التواصل الاجتماعي.',
        keywords:
          'تحقق-الحقائق,تحقق,معلومات,موثوقية,PWA,محو-أمية-إعلامية,معلومات-مضللة,لوائح-شبكات-التواصل,تحكم-المعلومات',
        siteName: 'قائمة التحقق من الحقائق العملية',
        ogTitle: 'قائمة التحقق العملية للبقاء في عالم مليء بالمعلومات المضللة - Fact Checklist',
        ogDescription:
          'قائمة تحقق بسيطة لتقييم موثوقية المعلومات بعينيك وعقلك بينما تتقدم اللوائح الحكومية لشبكات التواصل الاجتماعي.',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'ar_SA',
        language: 'ar'
      },
      id: {
        title:
          'Daftar Periksa Praktis untuk Bertahan Hidup di Dunia yang Penuh Disinformasi - Fact Checklist',
        description:
          'Daftar periksa sederhana untuk mengevaluasi keandalan informasi dengan mata dan pikiran Anda sendiri saat regulasi pemerintah SNS berkembang.',
        keywords:
          'pemeriksaan-fakta,verifikasi,informasi,keandalan,PWA,literasi-media,disinformasi,regulasi-SNS,kontrol-informasi',
        siteName: 'Daftar Periksa Fakta Praktis',
        ogTitle:
          'Daftar Periksa Praktis untuk Bertahan Hidup di Dunia yang Penuh Disinformasi - Fact Checklist',
        ogDescription:
          'Daftar periksa sederhana untuk mengevaluasi keandalan informasi dengan mata dan pikiran Anda sendiri saat regulasi pemerintah SNS berkembang.',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'id_ID',
        language: 'id'
      },
      ko: {
        title:
          '잘못된 정보로 가득한 세상에서 살아남기 위한 실용적 팩트체크 체크리스트 - Fact Checklist',
        description:
          '정부의 SNS 규제가 진행되는 가운데 자신의 눈과 두뇌로 정보의 신뢰성을 평가하기 위한 간단한 체크리스트.',
        keywords: '팩트체크,검증,정보,신뢰성,PWA,미디어리터러시,잘못된정보,SNS규제,정보통제',
        siteName: '실용적 팩트체크 체크리스트',
        ogTitle:
          '잘못된 정보로 가득한 세상에서 살아남기 위한 실용적 팩트체크 체크리스트 - Fact Checklist',
        ogDescription:
          '정부의 SNS 규제가 진행되는 가운데 자신의 눈과 두뇌로 정보의 신뢰성을 평가하기 위한 간단한 체크리스트.',
        ogImage: 'https://fact-checklist.vercel.app/og-image-intro.png',
        ogUrl: 'https://fact-checklist.vercel.app/intro',
        url: 'https://fact-checklist.vercel.app/intro',
        image: 'https://fact-checklist.vercel.app/og-image-intro.png',
        type: 'article',
        locale: 'ko_KR',
        language: 'ko'
      }
    };

    const fallback = fallbackMeta[language] ?? fallbackMeta['ja'];

    // fallbackMeta.ja は常に存在するため、fallback は never undefined
    if (!fallback) {
      throw new Error('Fallback metadata is missing');
    }

    return fallback;
  }
}

export const load: PageServerLoad = async ({ url: _url, request }) => {
  // デバッグログ（Vercel環境で確認用）
  // console.log('[SSR] Intro page server load running');
  // console.log('[SSR] URL:', _url.toString());

  // 静的ビルド時はAccept-Languageヘッダーが空の場合がある
  const acceptLanguage = request.headers.get('accept-language') ?? '';
  // console.log('[SSR] Accept-Language:', acceptLanguage);

  // 単一言語のみ決定（重複回避）、デフォルトは日本語
  const detectedLanguage = detectLanguage(acceptLanguage);
  // console.log('[SSR] Detected language:', detectedLanguage);

  // 検出した言語のメタデータのみ生成
  const meta = await generateIntroMeta(detectedLanguage, _url);

  return {
    meta,
    detectedLanguage
  };
};
