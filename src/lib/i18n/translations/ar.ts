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
		systemMode: 'النظام'
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
		recent: 'التقييمات الحديثة'
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
	}
};

export default translations;
