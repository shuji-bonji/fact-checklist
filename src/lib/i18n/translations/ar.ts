/**
 * Arabic translation file template
 * Arabic (ar) - Template for translation (RTL)
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'ar' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'للترجمة',
	completeness: 0
};

export const translations: TranslationKeys = {
	common: {
		loading: 'جارٍ التحميل...',
		error: 'حدث خطأ',
		success: 'نجح',
		cancel: 'إلغاء',
		save: 'حفظ',
		delete: 'حذف',
		edit: 'تحرير',
		close: 'إغلاق',
		back: 'رجوع',
		next: 'التالي',
		previous: 'السابق',
		search: 'بحث',
		clear: 'مسح',
		reset: 'إعادة تعيين',
		copy: 'نسخ',
		download: 'تحميل',
		share: 'مشاركة',
		print: 'طباعة',
		export: 'تصدير',
		import: 'استيراد',
		settings: 'الإعدادات',
		help: 'مساعدة',
		about: 'حول',
		privacy: 'الخصوصية',
		terms: 'الشروط',
		home: 'الرئيسية',
		menu: 'القائمة',
		languages: 'اللغات',
		darkMode: 'الوضع المظلم',
		lightMode: 'الوضع الفاتح',
		systemMode: 'النظام',
		guide: 'Guide',
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
		}
	},
	app: {
		title: 'قائمة التحقق العملية من الحقائق',
		subtitle: 'نظام شامل لتقييم موثوقية المعلومات علمياً',
		description: 'قائمة تحقق لتقييم موثوقية المعلومات علمياً ومنهجياً',
		version: '1.0.0',
		author: 'فريق قائمة التحقق من الحقائق',
		copyright: '© 2025 فريق قائمة التحقق من الحقائق',
		poweredBy: 'مدعوم من'
	},
	navigation: {
		home: 'الرئيسية',
		about: 'حول',
		help: 'المساعدة والاستخدام',
		privacy: 'الخصوصية',
		checklist: 'قائمة التحقق',
		history: 'التاريخ',
		settings: 'الإعدادات'
	},
	checklist: {
		title: 'معلومات قائمة التحقق',
		description: 'تفاصيل قائمة التحقق',
		newChecklist: 'قائمة تحقق جديدة',
		createChecklist: 'إنشاء قائمة تحقق',
		editChecklist: 'تحرير قائمة التحقق',
		deleteChecklist: 'حذف قائمة التحقق',
		completeChecklist: 'إكمال التقييم',
		checklistTitle: 'العنوان',
		checklistDescription: 'نظرة عامة على المعلومات المستهدفة',
		targetInfo: 'المعلومات المستهدفة',
		targetInfoPlaceholder: 'مثال: مقال حول فعالية لقاح كوفيد-19',
		evaluationNotes: 'ملاحظات التقييم وعناصر التحقق الإضافية',
		evaluationNotesPlaceholder: 'سجل أي أسئلة، عناصر للتحقق، انطباعات عامة، إلخ...',
		score: 'نتيجة التقييم',
		confidenceLevel: 'مستوى الثقة',
		finalJudgment: 'الحكم النهائي',
		judgment: {
			accept: 'قبول',
			caution: 'تحذير',
			reject: 'رفض',
			pending: 'معلق'
		},
		judgmentAdvice: {
			accept: 'يُنصح بالاعتماد. تم إجراء تحقق كافٍ.',
			caution: 'يُنصح بالتحقق الإضافي. كن حذراً مع القرارات المهمة.',
			reject: 'يُنصح بالرفض. ابحث عن مصادر أكثر موثوقية.'
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
			name: 'التقييم الحاسم (مطلوب)',
			description: 'العناصر الأكثر أهمية لتحديد الموثوقية الأساسية للمعلومات',
			emoji: '🚨'
		},
		detailed: {
			name: 'التقييم التفصيلي (مهم)',
			description: 'عناصر لتقييم جودة وخبرة المعلومات',
			emoji: '📝'
		},
		verification: {
			name: 'التحقق والفحص المتقاطع',
			description: 'عناصر لتأكيد قابلية التحقق ودعم المعلومات',
			emoji: '🔍'
		},
		context: {
			name: 'تقييم السياق والتحيز',
			description: 'عناصر لتقييم ملاءمة التحيز والسياق',
			emoji: '🌐'
		}
	},
	export: {
		title: 'تصدير',
		description: 'تصدير قائمة التحقق بتنسيقات مختلفة',
		format: 'التنسيق',
		options: 'الخيارات',
		includeGuides: 'تضمين الأدلة',
		includeNotes: 'تضمين الملاحظات',
		includeSummary: 'تضمين الملخص',
		sectionBreaks: 'فواصل الأقسام',
		pdfModes: {
			pixelPerfect: 'مثالي البكسل',
			reliableFont: 'تركيز موثوقية الخط',
			textBased: 'مبني على النص'
		},
		formats: {
			pdf: 'PDF',
			html: 'HTML',
			json: 'JSON',
			markdown: 'Markdown'
		},
		progress: {
			initializing: 'جارٍ التهيئة...',
			generating: 'جارٍ الإنشاء...',
			processing: 'جارٍ المعالجة...',
			finalizing: 'جارٍ الإنهاء...',
			completed: 'مكتمل',
			failed: 'فشل'
		}
	},
	history: {
		title: 'تاريخ التقييم',
		description: 'نتائج التقييم السابقة',
		empty: 'لا يوجد تاريخ متاح',
		lastEvaluated: 'آخر تقييم',
		viewResults: 'عرض النتائج',
		deleteHistory: 'حذف التاريخ',
		clearAll: 'مسح الكل',
		recent: 'التقييمات الحديثة',
		viewAll: 'عرض الكل',
		createFirst: 'لننشئ قائمة التحقق الأولى!'
	},
	errors: {
		general: 'حدث خطأ غير متوقع',
		network: 'حدث خطأ في الشبكة',
		storage: 'حدث خطأ في التخزين',
		export: 'فشل التصدير',
		import: 'فشل الاستيراد',
		invalidData: 'بيانات غير صحيحة',
		unsupportedFeature: 'ميزة غير مدعومة',
		permissionDenied: 'تم رفض الإذن',
		fileNotFound: 'الملف غير موجود',
		fileTooLarge: 'الملف كبير جداً',
		invalidFileFormat: 'تنسيق ملف غير صحيح'
	},
	success: {
		saved: 'تم الحفظ',
		exported: 'تم التصدير',
		imported: 'تم الاستيراد',
		deleted: 'تم الحذف',
		copied: 'تم النسخ',
		shared: 'تم المشاركة'
	},
	confirmations: {
		delete: 'هل أنت متأكد من أنك تريد الحذف؟',
		reset: 'إعادة تعيين؟',
		clearHistory: 'مسح كل التاريخ؟',
		overwrite: 'الكتابة فوق؟',
		discard: 'تجاهل التغييرات؟'
	},
	help: {
		title: 'المساعدة والاستخدام',
		overview: 'نظرة عامة',
		howToUse: 'كيفية الاستخدام',
		categories: 'الفئات',
		scoring: 'حساب النتيجة',
		features: 'المميزات',
		troubleshooting: 'استكشاف الأخطاء وإصلاحها',
		faq: 'الأسئلة الشائعة'
	},
	accessibility: {
		skipToContent: 'تخطي إلى المحتوى',
		mainNavigation: 'التنقل الرئيسي',
		searchForm: 'نموذج البحث',
		languageSelector: 'محدد اللغة',
		themeToggle: 'تبديل الموضوع',
		closeDialog: 'إغلاق الحوار',
		openMenu: 'فتح القائمة',
		expandSection: 'توسيع القسم',
		collapseSection: 'طي القسم'
	},
	datetime: {
		justNow: 'الآن',
		minutesAgo: 'منذ دقائق',
		hoursAgo: 'منذ ساعات',
		daysAgo: 'منذ أيام',
		weeksAgo: 'منذ أسابيع',
		monthsAgo: 'منذ أشهر',
		yearsAgo: 'منذ سنوات',
		createdAt: 'تم الإنشاء في',
		updatedAt: 'تم التحديث في',
		completedAt: 'تم الإكمال في'
	},
	units: {
		items: 'عناصر',
		percent: '%',
		score: 'نتيجة',
		total: 'المجموع',
		completed: 'مكتمل',
		remaining: 'متبقي',
		of: 'من'
	},

	// النماذج
	forms: {
		titleLabel: 'العنوان',
		titlePlaceholder: 'أدخل عنوان المعلومات أو المصدر المراد تقييمه',
		descriptionLabel: 'نظرة عامة على المعلومات المستهدفة',
		descriptionPlaceholder: 'صف بإيجاز محتوى المعلومات المراد تقييمها',
		notesLabel: 'ملاحظات التقييم وعناصر التحقق الإضافية',
		notesPlaceholder: 'سجل أي أسئلة، عناصر للتحقق، انطباعات عامة، إلخ...'
	},

	// نص واجهة المستخدم
	ui: {
		quickStartGuide: '💡 استخدم هذا الدليل للبدء بسرعة!',
		guideModeDetailed: '🔍 وضع الدليل التفصيلي',
		guideModeNormal: '📝 الوضع العادي',
		completeEvaluation: 'إكمال التقييم'
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
