/**
 * Hindi translation file template
 * Hindi (hi) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'hi' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'अनुवाद की जाना है',
	completeness: 0
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
		systemMode: 'सिस्टम'
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
		recent: 'हाल के मूल्यांकन'
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
	}
};

export default translations;
