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
		systemMode: 'सिस्टम',
		guide: 'Guide',
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
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
			high: 'High Reliability',
			medium: 'Moderate Reliability',
			low: 'Low Reliability',
			poor: 'Reliability Issues'
		},
		advice: {
			high: 'Adoption recommended. Sufficient verification has been conducted.',
			medium: 'Additional confirmation recommended. Be cautious with important decisions.',
			low: 'Caution required. Further verification is needed.',
			poor: 'Rejection recommended. Look for reliable information sources.'
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

	// Checklist items (placeholder - needs translation)
	checklistItems: {
		'source-authority': {
			title: 'Publication from authoritative sources',
			description:
				'Government agencies, academic institutions, professional organizations, peer-reviewed papers, reliable media, etc.',
			guideTitle: '🏛️ Criteria for Authoritative Sources',
			guideContent:
				'Government/Public institutions: Ministries, statistical bureaus, central banks, courts, etc.',
			examplesGood: ['Ministry of Health statistical data', 'Nature journal peer-reviewed papers'],
			examplesBad: ['Personal blog information', 'Anonymous forum posts']
		},
		'source-primary': {
			title: 'Primary source verification',
			description: 'Direct information from the source, not hearsay or secondhand reports',
			guideTitle: '🎯 How to Identify Primary Sources',
			guideContent:
				'Primary sources: Research papers by authors themselves, witness testimonies, official announcements',
			examplesGood: [
				'Papers published by researchers themselves',
				'Company earnings announcements'
			],
			examplesBad: ['According to experts', 'A certain survey without clear attribution']
		},
		'source-multiple': {
			title: 'Multiple independent sources',
			description: 'Similar reports or confirmations from different positions/organizations',
			guideTitle: '🔄 How to Verify Independence',
			guideContent:
				'Independent sources: Sources with different organizations, funding, and interests',
			examplesGood: ['Government announcement + academic research + multiple media reports'],
			examplesBad: ['Multiple media within the same corporate group']
		},
		'warning-anonymous': {
			title: 'Not anonymous or unattributed information',
			description: 'Creator/publisher can be clearly identified',
			guideTitle: '🔍 Key Points for Source Identification',
			guideContent: 'Required information: Real name of creator, affiliation, contact information',
			examplesGood: ['According to Prof. X (University Medical School)'],
			examplesBad: ['According to a certain doctor', 'Anonymous expert']
		},
		'warning-sensational': {
			title: 'Few sensational or inflammatory expressions',
			description: 'Calm and objective description, no excessive emotional appeals',
			guideTitle: '⚠️ How to Identify Sensational Expressions',
			guideContent: 'Warning expressions: Absolutely, Completely, Shocking, Stunning',
			examplesGood: ['Research showed improvement in 75% of subjects'],
			examplesBad: ['Shocking truth doctors never tell!']
		},
		'warning-logical': {
			title: 'No logical contradictions',
			description: 'Content is consistent with no obvious logical leaps',
			guideTitle: '🧠 How to Check Logical Consistency',
			guideContent: 'Check if premises and conclusions are properly connected',
			examplesGood: ['Statistically significant analysis considering other factors'],
			examplesBad: ['A and B happened together so A caused B']
		},
		'time-recent': {
			title: 'Information freshness',
			description: 'Publication date is specified and content maintains appropriate freshness',
			guideTitle: '⏰ Judging Appropriate Information Freshness',
			guideContent: 'Field-specific standards for freshness requirements',
			examplesGood: ['Published December 2024', 'Last updated: January 2025'],
			examplesBad: ['No date listed', '5-year-old technical information']
		},
		'time-update': {
			title: 'Update and correction history',
			description: 'Content is updated as necessary with transparent corrections',
			guideTitle: '📝 Checking Transparent Updates and Corrections',
			guideContent: 'Good update characteristics include clear description of updates',
			examplesGood: ['Clear correction history'],
			examplesBad: ['No correction records']
		},
		'expert-knowledge': {
			title: 'Appropriate expertise',
			description: 'Creator has sufficient knowledge/experience in the relevant field',
			guideTitle: '🎓 How to Verify Expertise',
			guideContent: 'Check items: Degrees/qualifications in related fields',
			examplesGood: ['Infectious disease specialist explaining vaccines'],
			examplesBad: ['Celebrity outside their field making medical claims']
		},
		'detail-sufficient': {
			title: 'Sufficient detail and evidence',
			description:
				'Process leading to conclusions and supporting evidence are appropriately explained',
			guideTitle: '📋 Judging Sufficiency of Evidence',
			guideContent: 'Required elements: Specific data supporting claims',
			examplesGood: ['Sample size, statistical methods, confidence intervals included'],
			examplesBad: ['Only states effect proven without details']
		},
		'citation-proper': {
			title: 'Proper citations and references',
			description: 'Reliable sources are shown for important claims',
			guideTitle: '📚 Standards for Proper Citations',
			guideContent: 'Content requiring citation: Statistical data/numbers',
			examplesGood: ['According to research with proper citation'],
			examplesBad: ['According to research (source unclear)']
		},
		'citation-accessible': {
			title: 'Verifiability of cited sources',
			description: 'Cited sources can actually be accessed and verified',
			guideTitle: '🌐 Checking Citation Accessibility',
			guideContent: 'Ideal state: Direct links or DOI',
			examplesGood: ['With URL links', 'Papers with DOI numbers'],
			examplesBad: ['According to internal materials']
		},
		'cross-check': {
			title: 'Cross-reference with other sources',
			description: 'Similar content can be confirmed by multiple independent sources',
			guideTitle: '🔍 Effective Cross-checking Methods',
			guideContent: 'Step-by-step verification process',
			examplesGood: ['Similar results in multiple peer-reviewed papers'],
			examplesBad: ['Only one source']
		},
		'fact-check': {
			title: 'Verification by fact-checking organizations',
			description: 'Verification exists from reliable fact-checking institutions',
			guideTitle: '✅ Reliable Fact-checking Organizations',
			guideContent: 'International organizations: Snopes, PolitiFact, AFP Fact Check',
			examplesGood: ['Multiple fact-checking organizations judged as true'],
			examplesBad: ['Judged as false information by fact-checking']
		},
		'data-verifiable': {
			title: 'Verifiable data',
			description: 'Data supporting claims can be objectively verified',
			guideTitle: '📈 Checking Data Verifiability',
			guideContent: 'Elements to verify: Data source, collection methods',
			examplesGood: ['Government statistics data'],
			examplesBad: ['Internal data only']
		},
		methodology: {
			title: 'Validity of methods/methodology',
			description: 'Research or survey methodology is appropriate and reproducible',
			guideTitle: '🔬 Evaluating Methodological Validity',
			guideContent: 'Evaluation points: Research design appropriateness',
			examplesGood: ['Double-blind trials', 'Appropriate control group setting'],
			examplesBad: ['No methodology description']
		},
		'bias-disclosure': {
			title: 'Disclosure of conflicts of interest',
			description: 'Financial, political, and personal interests are appropriately disclosed',
			guideTitle: '💰 Items to Check for Conflicts of Interest',
			guideContent: 'Interests to disclose: Research funding sources',
			examplesGood: ['COI clearly stated'],
			examplesBad: ['No COI disclosure']
		},
		'balanced-view': {
			title: 'Balanced perspective',
			description: 'Different positions and opposing views are also considered',
			guideTitle: '⚖️ Perspectives for Balance Evaluation',
			guideContent: 'Check points: Introduction of opposing/critical views',
			examplesGood: ['Comparison of multiple research results'],
			examplesBad: ['Only listing supporting evidence']
		},
		'context-adequate': {
			title: 'Sufficient background information',
			description:
				'Background and context necessary for understanding the information are provided',
			guideTitle: '🌍 Items to Check for Contextual Information',
			guideContent: 'Necessary background information: Historical background/previous research',
			examplesGood: ['Past similar cases', 'Historical background explanation'],
			examplesBad: ['Single numbers only', 'No background information']
		},
		'scope-clear': {
			title: 'Clear scope of application',
			description: 'Applicable scope and limitations of information are clearly shown',
			guideTitle: '🎯 Clarifying Scope of Application',
			guideContent: 'Scope to clarify: Target people/regions/periods',
			examplesGood: ['Clear limitation statements'],
			examplesBad: ['Unlimited generalization of limited research results']
		}
	}
};

export default translations;
