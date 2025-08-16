import type { LayoutServerLoad } from './$types';
import { availableLanguages } from '$lib/i18n';
import type { LanguageCode as Language } from '$lib/i18n';
import type { MetaData, LayoutServerData } from '$lib/types/layout';

// SEO最適化されたメタデータ（12言語対応）
const metaDataByLanguage: Record<Language, MetaData> = {
  ja: {
    title: 'Fact Checklist - ファクトチェックシート | 信頼性評価ツール',
    description:
      '20項目の科学的チェックリストで情報の信頼性を体系的に評価。AIや政府に頼らず、自分の目と頭で情報を見極める無料PWAアプリ。偽情報対策・情報リテラシー向上に。',
    keywords:
      '事実確認,ファクトチェック,情報検証,信頼性評価,PWA,情報リテラシー,偽情報対策,フェイクニュース対策,メディアリテラシー,批判的思考',
    ogTitle: 'Fact Checklist - ファクトチェックシート',
    ogDescription:
      '20項目のチェックリストで情報の信頼性を科学的に評価。偽情報から身を守るための無料ツール。',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - 事実確認チェックシート',
    twitterDescription: '偽情報から身を守る！20項目の科学的チェックリストで情報の信頼性を評価',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: '情報の信頼性を評価する実用的チェックリストツール',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'JPY'
      },
      author: {
        '@type': 'Person',
        name: 'shuji-bonji'
      },
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0]
    })
  },
  en: {
    title: 'Fact Checklist - Practical Fact-Checking Tool | Information Reliability Assessment',
    description:
      'Systematically evaluate information reliability with a 20-item scientific checklist. Free PWA app to identify misinformation without relying on AI or government fact-checkers.',
    keywords:
      'fact checking,information verification,reliability assessment,PWA,information literacy,misinformation prevention,fake news detection,media literacy,critical thinking,fact verification',
    ogTitle: 'Fact Checklist - Practical Fact-Checking Tool',
    ogDescription:
      'Evaluate information reliability with a 20-item scientific checklist. Free tool to protect yourself from misinformation.',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/en',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - Information Verification Tool',
    twitterDescription:
      'Protect yourself from misinformation! Evaluate information reliability with a 20-item scientific checklist',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/en',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: 'Practical tool for evaluating information reliability',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      }
    })
  },
  fr: {
    title: 'Fact Checklist - Outil de Vérification des Faits | Évaluation de la Fiabilité',
    description:
      'Évaluez systématiquement la fiabilité des informations avec une liste de 20 critères scientifiques. Application PWA gratuite pour identifier la désinformation.',
    keywords:
      'vérification des faits,vérification information,évaluation fiabilité,PWA,littératie informationnelle,prévention désinformation,détection fake news,éducation aux médias,pensée critique',
    ogTitle: 'Fact Checklist - Outil de Vérification des Faits',
    ogDescription:
      'Évaluez la fiabilité des informations avec 20 critères scientifiques. Outil gratuit contre la désinformation.',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/fr',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - Vérification des Faits',
    twitterDescription:
      'Protégez-vous de la désinformation! Évaluez la fiabilité avec 20 critères scientifiques',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/fr',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: 'Outil pratique pour évaluer la fiabilité des informations',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      }
    })
  },
  'zh-TW': {
    title: 'Fact Checklist - 實用事實查核工具 | 資訊可靠性評估',
    description:
      '使用20項科學檢查清單系統性評估資訊可靠性。免費PWA應用程式，無需依賴AI或政府查核，協助識別錯誤資訊。',
    keywords:
      '事實查核,資訊驗證,可靠性評估,PWA,資訊素養,防止錯誤資訊,假新聞偵測,媒體素養,批判性思考,事實驗證',
    ogTitle: 'Fact Checklist - 實用事實查核工具',
    ogDescription: '使用20項科學檢查清單評估資訊可靠性。免費工具保護您免受錯誤資訊影響。',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/zh-TW',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - 事實查核工具',
    twitterDescription: '保護自己免受錯誤資訊！使用20項科學檢查清單評估資訊可靠性',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/zh-TW',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: '評估資訊可靠性的實用工具',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'TWD'
      }
    })
  },
  es: {
    title: 'Fact Checklist - Herramienta de Verificación de Hechos | Evaluación de Fiabilidad',
    description:
      'Evalúa sistemáticamente la fiabilidad de la información con una lista de 20 criterios científicos. App PWA gratuita para identificar desinformación.',
    keywords:
      'verificación de hechos,verificación información,evaluación fiabilidad,PWA,alfabetización informacional,prevención desinformación,detección noticias falsas,alfabetización mediática,pensamiento crítico',
    ogTitle: 'Fact Checklist - Herramienta de Verificación de Hechos',
    ogDescription:
      'Evalúa la fiabilidad de la información con 20 criterios científicos. Herramienta gratuita contra la desinformación.',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/es',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - Verificación de Hechos',
    twitterDescription:
      '¡Protégete de la desinformación! Evalúa la fiabilidad con 20 criterios científicos',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/es',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: 'Herramienta práctica para evaluar la fiabilidad de la información',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      }
    })
  },
  pt: {
    title: 'Fact Checklist - Ferramenta de Verificação de Fatos | Avaliação de Confiabilidade',
    description:
      'Avalie sistematicamente a confiabilidade das informações com uma lista de 20 critérios científicos. App PWA gratuito para identificar desinformação.',
    keywords:
      'verificação de fatos,verificação informação,avaliação confiabilidade,PWA,literacia informacional,prevenção desinformação,detecção notícias falsas,literacia mediática,pensamento crítico',
    ogTitle: 'Fact Checklist - Ferramenta de Verificação de Fatos',
    ogDescription:
      'Avalie a confiabilidade das informações com 20 critérios científicos. Ferramenta gratuita contra desinformação.',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/pt',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - Verificação de Fatos',
    twitterDescription:
      'Proteja-se da desinformação! Avalie a confiabilidade com 20 critérios científicos',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/pt',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: 'Ferramenta prática para avaliar a confiabilidade das informações',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'BRL'
      }
    })
  },
  hi: {
    title: 'Fact Checklist - तथ्य जांच उपकरण | सूचना विश्वसनीयता मूल्यांकन',
    description:
      '20-बिंदु वैज्ञानिक चेकलिस्ट के साथ सूचना विश्वसनीयता का व्यवस्थित मूल्यांकन करें। गलत सूचना की पहचान के लिए मुफ्त PWA ऐप।',
    keywords:
      'तथ्य जांच,सूचना सत्यापन,विश्वसनीयता मूल्यांकन,PWA,सूचना साक्षरता,गलत सूचना रोकथाम,फेक न्यूज़ पहचान,मीडिया साक्षरता,आलोचनात्मक सोच',
    ogTitle: 'Fact Checklist - तथ्य जांच उपकरण',
    ogDescription:
      '20 वैज्ञानिक मानदंडों के साथ सूचना विश्वसनीयता का मूल्यांकन करें। गलत सूचना से बचने का मुफ्त उपकरण।',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/hi',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - तथ्य जांच',
    twitterDescription:
      'गलत सूचना से बचें! 20 वैज्ञानिक मानदंडों के साथ विश्वसनीयता का मूल्यांकन करें',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/hi',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: 'सूचना विश्वसनीयता का मूल्यांकन करने के लिए व्यावहारिक उपकरण',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR'
      }
    })
  },
  de: {
    title: 'Fact Checklist - Faktencheck-Tool | Bewertung der Informationszuverlässigkeit',
    description:
      'Bewerten Sie systematisch die Zuverlässigkeit von Informationen mit einer 20-Punkte-Checkliste. Kostenlose PWA-App zur Identifizierung von Fehlinformationen.',
    keywords:
      'Faktencheck,Informationsverifikation,Zuverlässigkeitsbewertung,PWA,Informationskompetenz,Fehlinformationsprävention,Fake News Erkennung,Medienkompetenz,kritisches Denken',
    ogTitle: 'Fact Checklist - Faktencheck-Tool',
    ogDescription:
      'Bewerten Sie die Informationszuverlässigkeit mit 20 wissenschaftlichen Kriterien. Kostenloses Tool gegen Fehlinformationen.',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/de',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - Faktencheck',
    twitterDescription:
      'Schützen Sie sich vor Fehlinformationen! Bewerten Sie Zuverlässigkeit mit 20 wissenschaftlichen Kriterien',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/de',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: 'Praktisches Tool zur Bewertung der Informationszuverlässigkeit',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      }
    })
  },
  it: {
    title: 'Fact Checklist - Strumento di Verifica dei Fatti | Valutazione Affidabilità',
    description:
      "Valuta sistematicamente l'affidabilità delle informazioni con una checklist scientifica di 20 punti. App PWA gratuita per identificare la disinformazione.",
    keywords:
      'verifica fatti,verifica informazioni,valutazione affidabilità,PWA,alfabetizzazione informativa,prevenzione disinformazione,rilevamento fake news,alfabetizzazione mediatica,pensiero critico',
    ogTitle: 'Fact Checklist - Strumento di Verifica dei Fatti',
    ogDescription:
      "Valuta l'affidabilità delle informazioni con 20 criteri scientifici. Strumento gratuito contro la disinformazione.",
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/it',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - Verifica dei Fatti',
    twitterDescription:
      "Proteggiti dalla disinformazione! Valuta l'affidabilità con 20 criteri scientifici",
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/it',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: "Strumento pratico per valutare l'affidabilità delle informazioni",
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      }
    })
  },
  ar: {
    title: 'Fact Checklist - أداة التحقق من الحقائق | تقييم موثوقية المعلومات',
    description:
      'قيّم موثوقية المعلومات بشكل منهجي باستخدام قائمة تحقق علمية من 20 نقطة. تطبيق PWA مجاني لتحديد المعلومات المضللة.',
    keywords:
      'التحقق من الحقائق,التحقق من المعلومات,تقييم الموثوقية,PWA,محو الأمية المعلوماتية,منع المعلومات المضللة,كشف الأخبار الكاذبة,محو الأمية الإعلامية,التفكير النقدي',
    ogTitle: 'Fact Checklist - أداة التحقق من الحقائق',
    ogDescription:
      'قيّم موثوقية المعلومات باستخدام 20 معيارًا علميًا. أداة مجانية ضد المعلومات المضللة.',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/ar',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - التحقق من الحقائق',
    twitterDescription: 'احم نفسك من المعلومات المضللة! قيّم الموثوقية باستخدام 20 معيارًا علميًا',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/ar',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: 'أداة عملية لتقييم موثوقية المعلومات',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'AED'
      }
    })
  },
  id: {
    title: 'Fact Checklist - Alat Pemeriksaan Fakta | Penilaian Keandalan Informasi',
    description:
      'Evaluasi keandalan informasi secara sistematis dengan daftar periksa ilmiah 20 poin. Aplikasi PWA gratis untuk mengidentifikasi misinformasi.',
    keywords:
      'pemeriksaan fakta,verifikasi informasi,penilaian keandalan,PWA,literasi informasi,pencegahan misinformasi,deteksi berita palsu,literasi media,pemikiran kritis',
    ogTitle: 'Fact Checklist - Alat Pemeriksaan Fakta',
    ogDescription:
      'Evaluasi keandalan informasi dengan 20 kriteria ilmiah. Alat gratis melawan misinformasi.',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/id',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - Pemeriksaan Fakta',
    twitterDescription:
      'Lindungi diri dari misinformasi! Evaluasi keandalan dengan 20 kriteria ilmiah',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/id',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: 'Alat praktis untuk mengevaluasi keandalan informasi',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'IDR'
      }
    })
  },
  ko: {
    title: 'Fact Checklist - 실용적 팩트체크 도구 | 정보 신뢰성 평가',
    description:
      '20개 항목의 과학적 체크리스트로 정보의 신뢰성을 체계적으로 평가합니다. AI나 정부에 의존하지 않고 잘못된 정보를 식별하는 무료 PWA 앱.',
    keywords:
      '팩트체크,정보 검증,신뢰성 평가,PWA,정보 리터러시,잘못된 정보 예방,가짜뉴스 탐지,미디어 리터러시,비판적 사고',
    ogTitle: 'Fact Checklist - 실용적 팩트체크 도구',
    ogDescription:
      '20개 과학적 기준으로 정보 신뢰성을 평가합니다. 잘못된 정보로부터 보호하는 무료 도구.',
    ogImage: 'https://fact-checklist.vercel.app/og-image.png',
    ogUrl: 'https://fact-checklist.vercel.app/ko',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Fact Checklist - 팩트체크 도구',
    twitterDescription: '잘못된 정보로부터 자신을 보호하세요! 20개 과학적 기준으로 신뢰성 평가',
    twitterImage: 'https://fact-checklist.vercel.app/og-image.png',
    canonicalUrl: 'https://fact-checklist.vercel.app/ko',
    alternateLinks: [],
    structuredData: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Fact Checklist',
      description: '정보 신뢰성을 평가하는 실용적인 도구',
      url: 'https://fact-checklist.vercel.app',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'KRW'
      }
    })
  }
};

export const load: LayoutServerLoad<LayoutServerData> = async ({ url, cookies, locals }) => {
  // 言語の決定（優先順位）
  // 1. URLパス（/en/、/fr/ など）
  // 2. Cookie（ユーザーが選択した言語）
  // 3. ブラウザ言語設定（Accept-Language）
  // 4. デフォルト（ja）
  const pathLang = url.pathname.split('/')[1] as Language;
  const cookieLang = cookies.get('language') as Language;
  const browserLang = locals.language; // hooks.serverから

  const currentLang: Language =
    pathLang !== undefined && availableLanguages.includes(pathLang)
      ? pathLang
      : cookieLang !== undefined && availableLanguages.includes(cookieLang)
        ? cookieLang
        : browserLang !== undefined && availableLanguages.includes(browserLang)
          ? browserLang
          : 'ja';

  // メタデータを取得
  const meta = metaDataByLanguage[currentLang];

  // alternate linksを生成
  meta.alternateLinks = availableLanguages.map((lang: Language) => ({
    lang: lang === 'zh-TW' ? 'zh-Hant' : lang,
    url: `https://fact-checklist.vercel.app${lang === 'ja' ? '' : `/${lang}`}`
  }));

  // URLを更新
  const currentPath = url.pathname === '/' ? '' : url.pathname;
  meta.canonicalUrl = `https://fact-checklist.vercel.app${currentPath}`;
  meta.ogUrl = meta.canonicalUrl;

  const result: LayoutServerData = {
    meta,
    currentLang,
    currentUrl: url.href
  };

  return result;
};
