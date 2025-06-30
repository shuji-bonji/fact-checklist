/**
 * Hindi translation file template
 * Hindi (hi) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'hi' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-30',
	translator: 'Claude AI (Anthropic)',
	completeness: 100
};

// Hindi translations - template structure with basic translations
export const translations: TranslationKeys = {
	common: {
		loading: 'लोड हो रहा है...',
		error: 'एक त्रुटि हुई',
		success: 'सफल',
		cancel: 'रद्द करें',
		save: 'सेव करें',
		delete: 'डिलीट करें',
		edit: 'संपादित करें',
		close: 'बंद करें',
		back: 'वापस',
		next: 'अगला',
		previous: 'पिछला',
		search: 'खोजें',
		clear: 'साफ़ करें',
		reset: 'रीसेट करें',
		copy: 'कॉपी करें',
		download: 'डाउनलोड करें',
		share: 'साझा करें',
		print: 'प्रिंट करें',
		export: 'निर्यात करें',
		import: 'आयात करें',
		settings: 'सेटिंग्स',
		help: 'सहायता',
		about: 'के बारे में',
		privacy: 'गोपनीयता',
		terms: 'नियम',
		home: 'होम',
		menu: 'मेन्यू',
		languages: 'भाषाएं',
		darkMode: 'डार्क मोड',
		lightMode: 'लाइट मोड',
		systemMode: 'सिस्टम',
		guide: 'गाइड',
		showGuide: 'गाइड दिखाएं',
		rip: {
			high: 'उच्च जोखिम',
			medium: 'मध्यम जोखिम',
			low: 'कम जोखिम'
		}
	},
	app: {
		title: 'व्यावहारिक तथ्य-जांच चेकलिस्ट',
		subtitle: 'जानकारी की विश्वसनीयता का वैज्ञानिक मूल्यांकन के लिए एक व्यापक प्रणाली',
		description: 'जानकारी की विश्वसनीयता का वैज्ञानिक और व्यवस्थित मूल्यांकन के लिए एक चेकलिस्ट',
		version: '1.0.0',
		author: 'तथ्य-जांच चेकलिस्ट टीम',
		copyright: '© 2025 तथ्य-जांच चेकलिस्ट टीम',
		poweredBy: 'द्वारा संचालित'
	},
	navigation: {
		home: 'होम',
		about: 'के बारे में',
		help: 'सहायता और उपयोग',
		privacy: 'गोपनीयता',
		checklist: 'चेकलिस्ट',
		history: 'इतिहास',
		settings: 'सेटिंग्स'
	},
	checklist: {
		title: 'चेकलिस्ट जानकारी',
		description: 'चेकलिस्ट विवरण',
		newChecklist: 'नई चेकलिस्ट',
		createChecklist: 'चेकलिस्ट बनाएं',
		editChecklist: 'चेकलिस्ट संपादित करें',
		deleteChecklist: 'चेकलिस्ट हटाएं',
		completeChecklist: 'मूल्यांकन पूरा करें',
		checklistTitle: 'शीर्षक',
		checklistDescription: 'लक्षित जानकारी का अवलोकन',
		targetInfo: 'लक्षित जानकारी',
		targetInfoPlaceholder: 'उदाहरण: COVID-19 वैक्सीन की प्रभावशीलता पर लेख',
		evaluationNotes: 'मूल्यांकन नोट्स और अतिरिक्त सत्यापन आइटम',
		evaluationNotesPlaceholder:
			'कोई भी प्रश्न, सत्यापन के लिए आइटम, सामान्य छाप आदि रिकॉर्ड करें...',
		score: 'मूल्यांकन स्कोर',
		confidenceLevel: 'विश्वास स्तर',
		finalJudgment: 'अंतिम निर्णय',
		judgment: {
			accept: 'स्वीकार करें',
			caution: 'सावधानी',
			reject: 'अस्वीकार करें',
			pending: 'लंबित'
		},
		judgmentAdvice: {
			accept: 'अपनाने की सिफारिश की जाती है। पर्याप्त सत्यापन किया गया है।',
			caution: 'अतिरिक्त सत्यापन की सिफारिश की जाती है। महत्वपूर्ण निर्णयों के साथ सावधान रहें।',
			reject: 'अस्वीकार करने की सिफारिश की जाती है। अधिक विश्वसनीय स्रोत खोजें।'
		},
		confidence: {
			high: 'उच्च विश्वसनीयता',
			medium: 'मध्यम विश्वसनीयता',
			low: 'कम विश्वसनीयता',
			poor: 'विश्वसनीयता संबंधी समस्याएं'
		},
		advice: {
			high: 'अपनाने की सिफारिश की जाती है। पर्याप्त सत्यापन किया गया है।',
			medium: 'अतिरिक्त पुष्टि की सिफारिश की जाती है। महत्वपूर्ण निर्णयों में सावधानी बरतें।',
			low: 'सावधानी आवश्यक है। अधिक सत्यापन की आवश्यकता है।',
			poor: 'अस्वीकार करने की सिफारिश की जाती है। विश्वसनीय जानकारी स्रोत खोजें।'
		}
	},
	categories: {
		critical: {
			name: 'महत्वपूर्ण मूल्यांकन (आवश्यक)',
			description: 'बुनियादी जानकारी विश्वसनीयता निर्धारित करने के लिए सबसे महत्वपूर्ण आइटम',
			emoji: '🚨'
		},
		detailed: {
			name: 'विस्तृत मूल्यांकन (महत्वपूर्ण)',
			description: 'जानकारी की गुणवत्ता और विशेषज्ञता का मूल्यांकन करने के लिए आइटम',
			emoji: '📝'
		},
		verification: {
			name: 'सत्यापन और क्रॉस-चेकिंग',
			description: 'जानकारी की सत्यापनीयता और समर्थन की पुष्टि के लिए आइटम',
			emoji: '🔍'
		},
		context: {
			name: 'संदर्भ और पूर्वाग्रह मूल्यांकन',
			description: 'पूर्वाग्रह की उपयुक्तता और संदर्भ का मूल्यांकन करने के लिए आइटम',
			emoji: '🌐'
		}
	},
	export: {
		title: 'निर्यात करें',
		description: 'चेकलिस्ट को विभिन्न प्रारूपों में निर्यात करें',
		format: 'प्रारूप',
		options: 'विकल्प',
		includeGuides: 'गाइड शामिल करें',
		includeNotes: 'नोट्स शामिल करें',
		includeSummary: 'सारांश शामिल करें',
		sectionBreaks: 'सेक्शन ब्रेक',
		pdfModes: {
			pixelPerfect: 'पिक्सेल परफेक्ट',
			reliableFont: 'फ़ॉन्ट विश्वसनीयता फोकस',
			textBased: 'टेक्स्ट आधारित'
		},
		formats: {
			pdf: 'PDF',
			html: 'HTML',
			json: 'JSON',
			markdown: 'Markdown'
		},
		progress: {
			initializing: 'प्रारंभ हो रहा है...',
			generating: 'जेनरेट हो रहा है...',
			processing: 'प्रोसेसिंग...',
			finalizing: 'अंतिम रूप दे रहा है...',
			completed: 'पूर्ण',
			failed: 'असफल'
		}
	},
	history: {
		title: 'मूल्यांकन इतिहास',
		description: 'पिछले मूल्यांकन परिणाम',
		empty: 'कोई इतिहास उपलब्ध नहीं',
		lastEvaluated: 'अंतिम मूल्यांकन',
		viewResults: 'परिणाम देखें',
		deleteHistory: 'इतिहास हटाएं',
		clearAll: 'सभी साफ़ करें',
		recent: 'हाल के मूल्यांकन',
		viewAll: 'सभी दिखाएं',
		createFirst: 'आइए अपनी पहली चेकलिस्ट बनाते हैं!'
	},
	errors: {
		general: 'एक अप्रत्याशित त्रुटि हुई',
		network: 'एक नेटवर्क त्रुटि हुई',
		storage: 'एक स्टोरेज त्रुटि हुई',
		export: 'निर्यात असफल',
		import: 'आयात असफल',
		invalidData: 'अवैध डेटा',
		unsupportedFeature: 'असमर्थित सुविधा',
		permissionDenied: 'अनुमति अस्वीकृत',
		fileNotFound: 'फ़ाइल नहीं मिली',
		fileTooLarge: 'फ़ाइल बहुत बड़ी',
		invalidFileFormat: 'अवैध फ़ाइल प्रारूप'
	},
	success: {
		saved: 'सेव किया गया',
		exported: 'निर्यात किया गया',
		imported: 'आयात किया गया',
		deleted: 'हटाया गया',
		copied: 'कॉपी किया गया',
		shared: 'साझा किया गया'
	},
	confirmations: {
		delete: 'क्या आप वाकई हटाना चाहते हैं?',
		reset: 'रीसेट करें?',
		clearHistory: 'सभी इतिहास साफ़ करें?',
		overwrite: 'अधिलेखित करें?',
		discard: 'परिवर्तन छोड़ें?'
	},
	help: {
		title: 'सहायता और उपयोग',
		overview: 'अवलोकन',
		howToUse: 'कैसे उपयोग करें',
		categories: 'श्रेणियां',
		scoring: 'स्कोर गणना',
		features: 'सुविधाएं',
		troubleshooting: 'समस्या निवारण',
		faq: 'अक्सर पूछे जाने वाले प्रश्न'
	},
	accessibility: {
		skipToContent: 'सामग्री पर जाएं',
		mainNavigation: 'मुख्य नेवीगेशन',
		searchForm: 'खोज फॉर्म',
		languageSelector: 'भाषा चयनकर्ता',
		themeToggle: 'थीम टॉगल',
		closeDialog: 'डायलॉग बंद करें',
		openMenu: 'मेन्यू खोलें',
		expandSection: 'सेक्शन का विस्तार करें',
		collapseSection: 'सेक्शन को संकुचित करें'
	},
	datetime: {
		justNow: 'अभी-अभी',
		minutesAgo: 'मिनट पहले',
		hoursAgo: 'घंटे पहले',
		daysAgo: 'दिन पहले',
		weeksAgo: 'सप्ताह पहले',
		monthsAgo: 'महीने पहले',
		yearsAgo: 'साल पहले',
		createdAt: 'बनाया गया',
		updatedAt: 'अपडेट किया गया',
		completedAt: 'पूरा किया गया'
	},
	units: {
		items: 'आइटम',
		percent: '%',
		score: 'स्कोर',
		total: 'कुल',
		completed: 'पूर्ण',
		remaining: 'शेष',
		of: 'का'
	},

	// फ़ॉर्म
	forms: {
		titleLabel: 'शीर्षक',
		titlePlaceholder: 'मूल्यांकन की जाने वाली जानकारी या स्रोत का शीर्षक दर्ज करें',
		descriptionLabel: 'लक्षित जानकारी का अवलोकन',
		descriptionPlaceholder: 'मूल्यांकन की जाने वाली जानकारी की सामग्री का संक्षिप्त वर्णन करें',
		notesLabel: 'मूल्यांकन नोट्स और अतिरिक्त सत्यापन आइटम',
		notesPlaceholder: 'कोई भी प्रश्न, सत्यापन के लिए आइटम, सामान्य छाप आदि रिकॉर्ड करें...'
	},

	// UI टेक्स्ट
	ui: {
		quickStartGuide: '💡 तेजी से शुरू करने के लिए इस गाइड का उपयोग करें!',
		guideModeDetailed: '🔍 विस्तृत गाइड मोड',
		guideModeNormal: '📝 सामान्य मोड',
		completeEvaluation: 'मूल्यांकन पूरा करें'
	},

	// Checklist items (Hindi translation)
	checklistItems: {
		'source-authority': {
			title: 'प्रामाणिक स्रोतों से प्रकाशन',
			description:
				'सरकारी एजेंसियां, शैक्षणिक संस्थान, पेशेवर संगठन, peer-reviewed पत्रिकाएं, विश्वसनीय मीडिया आदि',
			guideTitle: '🏛️ प्रामाणिक स्रोतों के मापदंड',
			guideContent:
				'सरकारी/सार्वजनिक संस्थान: मंत्रालय, सांख्यिकी विभाग, RBI, न्यायालय, PIB आदि\nशैक्षणिक संस्थान: IIT, IIM, AIIMS, ICMR, UGC मान्यता प्राप्त विश्वविद्यालय\nअंतर्राष्ट्रीय संगठन: WHO, UN, World Bank, IMF\nपेशेवर संगठन: Medical Council of India, Bar Council, ICAI',
			examplesGood: [
				'स्वास्थ्य मंत्रालय की आधिकारिक सांख्यिकी',
				'Current Science जैसी peer-reviewed जर्नल',
				'ICMR द्वारा प्रकाशित शोध',
				'RBI की मौद्रिक नीति रिपोर्ट'
			],
			examplesBad: [
				'व्यक्तिगत ब्लॉग की जानकारी',
				'WhatsApp forward संदेश',
				'अज्ञात सोशल मीडिया पोस्ट',
				'बिना स्रोत के वायरल संदेश'
			]
		},
		'source-primary': {
			title: 'प्राथमिक स्रोत सत्यापन',
			description: 'स्रोत से सीधी जानकारी, सुनी-सुनाई या दूसरे हाथ की रिपोर्ट नहीं',
			guideTitle: '🎯 प्राथमिक स्रोतों की पहचान कैसे करें',
			guideContent:
				'प्राथमिक स्रोत: शोधकर्ताओं के मूल शोध पत्र, प्रत्यक्षदर्शी गवाही, आधिकारिक घोषणाएं\nउदाहरण: सरकारी प्रेस विज्ञप्ति, कंपनी की वार्षिक रिपोर्ट, न्यायालय के आदेश, मूल शोध डेटा',
			examplesGood: [
				'शोधकर्ताओं द्वारा स्वयं प्रकाशित पेपर',
				'कंपनी की आधिकारिक वित्तीय घोषणाएं',
				'सुप्रीम कोर्ट के फैसले का पूरा टेक्स्ट',
				'सरकारी विभाग की प्रेस रिलीज़'
			],
			examplesBad: [
				'"विशेषज्ञों के अनुसार" बिना नाम',
				'"एक सर्वेक्षण के अनुसार" बिना विवरण',
				'सोशल मीडिया पर वायरल स्क्रीनशॉट',
				'तीसरे व्यक्ति द्वारा बताई गई बात'
			]
		},
		'source-multiple': {
			title: 'कई स्वतंत्र स्रोत',
			description: 'विभिन्न संगठनों/पदों से समान रिपोर्ट या पुष्टि',
			guideTitle: '🔄 स्वतंत्रता की पुष्टि कैसे करें',
			guideContent:
				'स्वतंत्र स्रोत: अलग-अलग संगठन, funding, और हितों वाले स्रोत\nजांच करें: क्या स्रोत एक-दूसरे से जुड़े तो नहीं हैं?\nक्या सभी स्रोत एक ही मूल स्रोत से जानकारी ले रहे हैं?',
			examplesGood: [
				'सरकारी घोषणा + शैक्षणिक शोध + विभिन्न मीडिया रिपोर्ट',
				'The Hindu + Indian Express + The Wire की अलग-अलग जांच',
				'ICMR + WHO + स्वतंत्र विशेषज्ञों की पुष्टि',
				'विभिन्न राज्य सरकारों के समान आंकड़े'
			],
			examplesBad: [
				'एक ही मीडिया समूह के विभिन्न चैनल',
				'सभी स्रोत एक ही प्रेस रिलीज़ को quote कर रहे हों',
				'केवल सरकारी स्रोत या केवल विपक्षी स्रोत',
				'एक ही funding source वाले संगठन'
			]
		},
		'warning-anonymous': {
			title: 'गुमनाम या बिना श्रेय की जानकारी नहीं',
			description: 'रचनाकार/प्रकाशक की स्पष्ट पहचान हो सकती है',
			guideTitle: '🔍 स्रोत पहचान के मुख्य बिंदु',
			guideContent:
				'आवश्यक जानकारी: रचनाकार का वास्तविक नाम, संबद्धता, संपर्क जानकारी\nलेखक की योग्यता और विशेषज्ञता\nसंस्था का पता और पंजीकरण विवरण',
			examplesGood: [
				'डॉ. रणदीप गुलेरिया (AIIMS निदेशक) के अनुसार',
				'प्रो. के. विजयराघवन (पूर्व PSA) का बयान',
				'Alt News के सह-संस्थापक प्रतीक सिन्हा की रिपोर्ट',
				'BOOM के मोहम्मद जुबैर द्वारा fact-check'
			],
			examplesBad: [
				'"एक डॉक्टर के अनुसार" बिना नाम',
				'"विशेषज्ञों का कहना है" बिना विवरण',
				'WhatsApp पर गुमनाम संदेश',
				'"अंदर के सूत्र" बिना पहचान'
			]
		},
		'warning-sensational': {
			title: 'सनसनीखेज या भड़काऊ अभिव्यक्तियों का अभाव',
			description: 'शांत और वस्तुनिष्ठ वर्णन, अत्यधिक भावनात्मक अपील नहीं',
			guideTitle: '⚠️ सनसनीखेज अभिव्यक्तियों की पहचान',
			guideContent:
				'चेतावनी शब्द: चौंकाने वाला, अविश्वसनीय, 100% गारंटी, चमत्कार, तुरंत\nभावनात्मक manipulation: डर, गुस्सा, या अत्यधिक उत्साह पैदा करने वाले शब्द\nअतिशयोक्ति: सबसे बड़ा, सबसे खराब, कभी नहीं, हमेशा',
			examplesGood: [
				'शोध में 75% विषयों में सुधार दिखा',
				'ICMR के अध्ययन के अनुसार 3.2% वृद्धि',
				'सांख्यिकीय रूप से महत्वपूर्ण परिणाम (p<0.05)',
				'विशेषज्ञों ने सावधानी बरतने की सलाह दी'
			],
			examplesBad: [
				'चौंकाने वाला सच जो डॉक्टर नहीं बताते!',
				'यह एक चमत्कार है! 100% गारंटी!',
				'Breaking: देश में तबाही मचने वाली है!',
				'Viral हो रहा है ये खतरनाक वीडियो!'
			]
		},
		'warning-logical': {
			title: 'तार्किक विरोधाभास नहीं',
			description: 'सामग्री में संगति है और कोई स्पष्ट तार्किक छलांग नहीं',
			guideTitle: '🧠 तार्किक संगति की जांच कैसे करें',
			guideContent:
				'जांचें: क्या आधार और निष्कर्ष ठीक से जुड़े हैं?\nक्या कारण-प्रभाव संबंध तर्कसंगत है?\nक्या सभी तथ्य एक-दूसरे से मेल खाते हैं?\nक्या कोई hidden assumptions तो नहीं हैं?',
			examplesGood: [
				'अन्य कारकों को ध्यान में रखते हुए सांख्यिकीय विश्लेषण',
				'control group के साथ तुलनात्मक अध्ययन',
				'कारण-प्रभाव की स्पष्ट व्याख्या',
				'सभी variables को consider करते हुए निष्कर्ष'
			],
			examplesBad: [
				'A और B साथ हुए इसलिए A ने B का कारण बना',
				'हल्दी खाने वाले कम बीमार पड़ते हैं, इसलिए हल्दी सभी बीमारियों का इलाज है',
				'पहले ये था फिर वो हुआ, इसलिए इसकी वजह से वो हुआ',
				'Cherry-picked data से व्यापक निष्कर्ष'
			]
		},
		'time-recent': {
			title: 'जानकारी की ताज़गी',
			description: 'प्रकाशन तिथि निर्दिष्ट है और सामग्री उपयुक्त ताज़गी बनाए रखती है',
			guideTitle: '⏰ उपयुक्त जानकारी ताज़गी का आकलन',
			guideContent:
				'क्षेत्र-विशिष्ट ताज़गी आवश्यकताएं:\nचिकित्सा/स्वास्थ्य: 1-2 वर्ष\nतकनीक: 6 महीने-1 वर्ष\nकानून/नीति: नवीनतम संशोधन\nसमाचार: 24-48 घंटे',
			examplesGood: [
				'प्रकाशित: जनवरी 2025',
				'अंतिम अपडेट: 30 जनवरी 2025',
				'Budget 2025 की ताज़ा जानकारी',
				'आज जारी की गई सरकारी घोषणा'
			],
			examplesBad: [
				'कोई तारीख नहीं दी गई',
				'5 साल पुरानी तकनीकी जानकारी',
				'2020 की COVID guidelines को 2025 में share करना',
				'पुराने कानून के आधार पर सलाह'
			]
		},
		'time-update': {
			title: 'अपडेट और सुधार इतिहास',
			description: 'आवश्यकतानुसार सामग्री अपडेट की जाती है और पारदर्शी सुधार होते हैं',
			guideTitle: '📝 पारदर्शी अपडेट और सुधार की जांच',
			guideContent:
				'अच्छे अपडेट की विशेषताएं:\nस्पष्ट रूप से बताया गया कि क्या बदला गया\nपिछले versions का record\nगलतियों की स्वीकृति और सुधार\nअपडेट की तारीख और कारण',
			examplesGood: [
				'सुधार: पिछले आंकड़े में त्रुटि थी, सही आंकड़ा है...',
				'Version history के साथ Wikipedia लेख',
				"Editor's note के साथ अपडेट किए गए लेख",
				'Changelog के साथ सरकारी दस्तावेज़'
			],
			examplesBad: [
				'चुपचाप बदली गई जानकारी',
				'कोई सुधार record नहीं',
				'गलत जानकारी को बिना acknowledgment के हटाना',
				'Stealth editing बिना notice के'
			]
		},
		'expert-knowledge': {
			title: 'उपयुक्त विशेषज्ञता',
			description: 'रचनाकार के पास संबंधित क्षेत्र में पर्याप्त ज्ञान/अनुभव है',
			guideTitle: '🎓 विशेषज्ञता की पुष्टि कैसे करें',
			guideContent:
				'जांच बिंदु:\nसंबंधित क्षेत्र में डिग्री/योग्यता\nपेशेवर अनुभव और track record\nPeer-reviewed publications\nपेशेवर संगठनों में सदस्यता\nक्षेत्र में मान्यता',
			examplesGood: [
				'संक्रामक रोग विशेषज्ञ द्वारा vaccine की व्याख्या',
				'अर्थशास्त्री द्वारा बजट विश्लेषण',
				'Supreme Court वकील द्वारा कानूनी राय',
				'IIT प्रोफेसर द्वारा तकनीकी विषय'
			],
			examplesBad: [
				'अभिनेता द्वारा चिकित्सा सलाह',
				'राजनेता द्वारा वैज्ञानिक दावे बिना विशेषज्ञता के',
				'Self-proclaimed विशेषज्ञ बिना credentials',
				'YouTube influencer द्वारा स्वास्थ्य सलाह'
			]
		},
		'detail-sufficient': {
			title: 'पर्याप्त विवरण और साक्ष्य',
			description:
				'निष्कर्ष तक पहुंचने की प्रक्रिया और समर्थन करने वाले साक्ष्य उचित रूप से समझाए गए हैं',
			guideTitle: '📋 साक्ष्य की पर्याप्तता का आकलन',
			guideContent:
				'आवश्यक तत्व:\nदावों का समर्थन करने वाला विशिष्ट डेटा\nMethodology का स्पष्ट विवरण\nSample size और selection criteria\nLimitations की स्वीकृति',
			examplesGood: [
				'Sample size (n=1000), सांख्यिकीय methods, confidence intervals शामिल',
				'Step-by-step प्रक्रिया विवरण के साथ',
				'Raw data या source data की उपलब्धता',
				'Peer review process का उल्लेख'
			],
			examplesBad: [
				'केवल "प्रभाव सिद्ध हुआ" बिना विवरण के',
				'"कई लोगों ने फायदा उठाया" बिना संख्या',
				'"शोध से पता चला" बिना methodology',
				'Vague claims बिना specific evidence'
			]
		},
		'citation-proper': {
			title: 'उचित citations और संदर्भ',
			description: 'महत्वपूर्ण दावों के लिए विश्वसनीय स्रोत दिखाए गए हैं',
			guideTitle: '📚 उचित Citations के मानक',
			guideContent:
				'Citation की आवश्यकता वाली सामग्री:\nसांख्यिकीय डेटा/संख्याएं\nवैज्ञानिक दावे\nऐतिहासिक तथ्य\nकिसी और के विचार या शोध\nControversial statements',
			examplesGood: [
				'ICMR के अध्ययन के अनुसार (Kumar et al., 2024)',
				'RBI बुलेटिन, जनवरी 2025, पृष्ठ 45',
				'Economic Survey 2024-25, Chapter 3',
				'Lancet journal में प्रकाशित (DOI: 10.1016/...)'
			],
			examplesBad: [
				'"शोध के अनुसार" (स्रोत अस्पष्ट)',
				'"विशेषज्ञों का मानना है" बिना नाम',
				'"अध्ययन में पाया गया" बिना reference',
				'Wikipedia से copy-paste बिना attribution'
			]
		},
		'citation-accessible': {
			title: 'उद्धृत स्रोतों की सत्यापनीयता',
			description: 'उद्धृत स्रोत वास्तव में accessed और verified किए जा सकते हैं',
			guideTitle: '🌐 Citation पहुंच की जांच',
			guideContent:
				'आदर्श स्थिति:\nDirect links या DOI\nPublicly accessible documents\nLibrary या archive में उपलब्ध\nOfficial websites पर मौजूद',
			examplesGood: [
				'URL links के साथ',
				'DOI numbers वाले papers',
				'सरकारी वेबसाइट का direct link',
				'Open access journals में प्रकाशित'
			],
			examplesBad: [
				'"आंतरिक सामग्री के अनुसार"',
				'Private या paid databases बिना access',
				'Broken links या 404 errors',
				'"Personal communication" बिना सत्यापन'
			]
		},
		'cross-check': {
			title: 'अन्य स्रोतों के साथ cross-reference',
			description: 'समान सामग्री की कई स्वतंत्र स्रोतों द्वारा पुष्टि की जा सकती है',
			guideTitle: '🔍 प्रभावी Cross-checking Methods',
			guideContent:
				'चरणबद्ध सत्यापन प्रक्रिया:\n1. मूल दावे की पहचान\n2. स्वतंत्र स्रोतों की खोज\n3. विरोधाभासी जानकारी की जांच\n4. समान निष्कर्ष की पुष्टि',
			examplesGood: [
				'कई peer-reviewed papers में समान परिणाम',
				'The Hindu + Indian Express + Times of India की समान reporting',
				'WHO + ICMR + CDC के similar guidelines',
				'विभिन्न opinion polls में consistent trends'
			],
			examplesBad: [
				'केवल एक स्रोत',
				'सभी स्रोत एक ही मूल report को cite कर रहे हैं',
				'Conflicting information को ignore करना',
				'Cherry-picking केवल supporting sources'
			]
		},
		'fact-check': {
			title: 'Fact-checking संगठनों द्वारा सत्यापन',
			description: 'विश्वसनीय fact-checking संस्थानों से सत्यापन मौजूद है',
			guideTitle: '✅ विश्वसनीय Fact-checking संगठन',
			guideContent:
				'भारतीय संगठन: Alt News, BOOM, The Quint WebQoof, Fact Checker, Vishvas News\nअंतर्राष्ट्रीय संगठन: Snopes, PolitiFact, AFP Fact Check, BBC Reality Check\nमान्यता: IFCN (International Fact-Checking Network) certified',
			examplesGood: [
				'Alt News द्वारा "True" rating',
				'BOOM द्वारा सत्यापित factcheck',
				'The Quint WebQoof की detailed investigation',
				'कई fact-checkers द्वारा समान निष्कर्ष'
			],
			examplesBad: [
				'Fact-checking द्वारा "False" का निर्णय',
				'Multiple fact-checkers द्वारा "Misleading" rating',
				'सत्यापित fake news या manipulated content',
				'Debunked misinformation को फिर से share करना'
			]
		},
		'data-verifiable': {
			title: 'सत्यापनीय डेटा',
			description: 'दावों का समर्थन करने वाला डेटा वस्तुनिष्ठ रूप से सत्यापित किया जा सकता है',
			guideTitle: '📈 डेटा सत्यापनीयता की जांच',
			guideContent:
				'सत्यापन तत्व:\nडेटा स्रोत और संग्रह methods\nSample size और representativeness\nMethodology transparency\nRaw data की उपलब्धता\nPeer review या third-party validation',
			examplesGood: [
				'सरकारी सांख्यिकी डेटा (NSO, RBI)',
				'Census data या official surveys',
				'Publicly available datasets',
				'Peer-reviewed research में प्रयुक्त डेटा'
			],
			examplesBad: [
				'केवल आंतरिक डेटा',
				'Source या methodology के बिना statistics',
				'Unverified online polls',
				'Anecdotal evidence को data के रूप में present करना'
			]
		},
		methodology: {
			title: 'Methods/methodology की वैधता',
			description: 'शोध या सर्वेक्षण methodology उपयुक्त और reproducible है',
			guideTitle: '🔬 Methodological वैधता का मूल्यांकन',
			guideContent:
				'मूल्यांकन बिंदु:\nResearch design की उपयुक्तता\nSample selection और size\nControl groups का उपयोग\nBias को minimize करने के तरीके\nReproducibility और transparency',
			examplesGood: [
				'Double-blind trials',
				'उपयुक्त control group setting',
				'Randomized controlled studies',
				'Clearly defined inclusion/exclusion criteria'
			],
			examplesBad: [
				'कोई methodology विवरण नहीं',
				'Biased sample selection',
				'Leading questions in surveys',
				'Cherry-picked data analysis'
			]
		},
		'bias-disclosure': {
			title: 'हितों के टकराव का प्रकटीकरण',
			description: 'वित्तीय, राजनीतिक, और व्यक्तिगत हित उचित रूप से प्रकट किए गए हैं',
			guideTitle: '💰 हितों के टकराव की जांच के लिए आइटम',
			guideContent:
				'प्रकट करने योग्य हित:\nअनुसंधान funding sources\nकंपनी या संगठन से वित्तीय संबंध\nराजनीतिक या वैचारिक संबद्धता\nPersonal stakes या benefits\nSponsorship या advertising revenue',
			examplesGood: [
				'COI स्पष्ट रूप से बताया गया',
				'"यह शोध XYZ कंपनी द्वारा funded है"',
				'पत्रकार ने अपनी political affiliation बताई',
				'Transparency notice में सभी financial ties'
			],
			examplesBad: [
				'कोई COI disclosure नहीं',
				'छुपाई गई funding sources',
				'Political bias को स्वीकार न करना',
				'Financial incentives का खुलासा न करना'
			]
		},
		'balanced-view': {
			title: 'संतुलित दृष्टिकोण',
			description: 'विभिन्न पदों और विरोधी विचारों पर भी विचार किया गया है',
			guideTitle: '⚖️ संतुलन मूल्यांकन के लिए दृष्टिकोण',
			guideContent:
				'जांच बिंदु:\nविरोधी/आलोचनात्मक विचारों का परिचय\nMultiple stakeholders की राय\nLimitations की स्वीकृति\nCounterarguments का address करना\nNuanced approach rather than black/white',
			examplesGood: [
				'कई शोध परिणामों की तुलना',
				'विशेषज्ञों के अलग-अलग मत दिखाना',
				'"हालांकि, आलोचकों का कहना है..."',
				'Both sides के arguments को fairly present करना'
			],
			examplesBad: [
				'केवल supporting evidence को list करना',
				'Counter-arguments को ignore करना',
				'One-sided presentation',
				'Opposing views को misrepresent करना'
			]
		},
		'context-adequate': {
			title: 'पर्याप्त पृष्ठभूमि जानकारी',
			description: 'जानकारी को समझने के लिए आवश्यक पृष्ठभूमि और संदर्भ प्रदान किया गया है',
			guideTitle: '🌍 संदर्भीय जानकारी के लिए जांच आइटम',
			guideContent:
				'आवश्यक पृष्ठभूमि जानकारी:\nऐतिहासिक पृष्ठभूमि/पिछला शोध\nCurrent situation का context\nRelevant policies या regulations\nSocial, economic, political background\nComparative data या benchmarks',
			examplesGood: [
				'पिछले समान मामले',
				'ऐतिहासिक पृष्ठभूमि की व्याख्या',
				'Indian context में global trends की तुलना',
				'Policy background के साथ current events'
			],
			examplesBad: [
				'केवल एकल संख्याएं',
				'कोई पृष्ठभूमि जानकारी नहीं',
				'Context के बिना isolated statistics',
				'Without cultural या social context'
			]
		},
		'scope-clear': {
			title: 'लागू होने के दायरे की स्पष्टता',
			description: 'जानकारी का लागू होने वाला दायरा और सीमाएं स्पष्ट रूप से दिखाई गई हैं',
			guideTitle: '🎯 लागू होने के दायरे की स्पष्टता',
			guideContent:
				'स्पष्ट करने योग्य दायरा:\nTarget लोग/क्षेत्र/कालावधि\nGeographical limitations\nAge groups या demographics\nSpecific conditions या circumstances\nTemporal limitations',
			examplesGood: [
				'स्पष्ट सीमा कथन',
				'"यह अध्ययन केवल भारतीय आबादी पर लागू है"',
				'"18-65 आयु वर्ग के लिए परिणाम"',
				'"शहरी क्षेत्रों में किए गए सर्वेक्षण के आधार पर"'
			],
			examplesBad: [
				'सीमित शोध परिणामों का असीमित सामान्यीकरण',
				'Scope की कोई स्पष्टता नहीं',
				'Global claims based on limited local data',
				'All demographics के लिए generalize करना बिना evidence'
			]
		}
	}
};

export default translations;
