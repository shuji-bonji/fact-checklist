/**
 * Traditional Chinese translation file template
 * Traditional Chinese (zh-TW) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'zh-TW' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: '待翻譯',
	completeness: 0
};

export const translations: TranslationKeys = {
	// 通用介面
	common: {
		loading: '載入中...',
		error: '發生錯誤',
		success: '成功',
		cancel: '取消',
		save: '儲存',
		delete: '刪除',
		edit: '編輯',
		close: '關閉',
		back: '返回',
		next: '下一個',
		previous: '上一個',
		search: '搜尋',
		clear: '清除',
		reset: '重設',
		copy: '複製',
		download: '下載',
		share: '分享',
		print: '列印',
		export: '匯出',
		import: '匯入',
		settings: '設定',
		help: '說明',
		about: '關於',
		privacy: '隱私',
		terms: '條款',
		home: '首頁',
		menu: '選單',
		languages: '語言',
		darkMode: '深色模式',
		lightMode: '淺色模式',
		systemMode: '系統',
		guide: 'Guide',
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
		}
	},

	// 應用程式特定
	app: {
		title: '實用事實查核檢查表',
		subtitle: '科學評估資訊可靠性的綜合系統',
		description: '科學系統性評估資訊可靠性的檢查表',
		version: '1.0.0',
		author: '事實查核檢查表團隊',
		copyright: '© 2025 事實查核檢查表團隊',
		poweredBy: '技術支援'
	},

	// 導航
	navigation: {
		home: '首頁',
		about: '關於',
		help: '說明與使用',
		privacy: '隱私',
		checklist: '檢查表',
		history: '歷史記錄',
		settings: '設定'
	},

	// 檢查表相關
	checklist: {
		title: '檢查表資訊',
		description: '檢查表詳細資訊',
		newChecklist: '新檢查表',
		createChecklist: '建立檢查表',
		editChecklist: '編輯檢查表',
		deleteChecklist: '刪除檢查表',
		completeChecklist: '完成評估',
		checklistTitle: '標題',
		checklistDescription: '目標資訊概述',
		targetInfo: '目標資訊',
		targetInfoPlaceholder: '例如：新冠疫苗效力相關文章',
		evaluationNotes: '評估筆記與額外驗證項目',
		evaluationNotesPlaceholder: '記錄任何疑問、需要驗證的項目、整體印象等...',
		score: '評估分數',
		confidenceLevel: '信心程度',
		finalJudgment: '最終判斷',
		judgment: {
			accept: '接受',
			caution: '謹慎',
			reject: '拒絕',
			pending: '待定'
		},
		judgmentAdvice: {
			accept: '建議採用。已進行充分驗證。',
			caution: '建議額外驗證。重要決定請謹慎。',
			reject: '建議拒絕。尋找更可靠的來源。'
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

	// 檢查項目類別
	categories: {
		critical: {
			name: '關鍵評估（必需）',
			description: '判斷基本資訊可靠性的最重要項目',
			emoji: '🚨'
		},
		detailed: {
			name: '詳細評估（重要）',
			description: '評估資訊質量和專業性的項目',
			emoji: '📝'
		},
		verification: {
			name: '驗證與交叉檢查',
			description: '確認資訊可驗證性和支持的項目',
			emoji: '🔍'
		},
		context: {
			name: '背景與偏見評估',
			description: '評估偏見適當性和背景的項目',
			emoji: '🌐'
		}
	},

	// 匯出功能
	export: {
		title: '匯出',
		description: '以各種格式匯出檢查表',
		format: '格式',
		options: '選項',
		includeGuides: '包含指南',
		includeNotes: '包含筆記',
		includeSummary: '包含摘要',
		sectionBreaks: '章節分隔',
		pdfModes: {
			pixelPerfect: '像素完美',
			reliableFont: '字體可靠性優先',
			textBased: '基於文字'
		},
		formats: {
			pdf: 'PDF',
			html: 'HTML',
			json: 'JSON',
			markdown: 'Markdown'
		},
		progress: {
			initializing: '初始化中...',
			generating: '產生中...',
			processing: '處理中...',
			finalizing: '完成中...',
			completed: '完成',
			failed: '失敗'
		}
	},

	// 歷史記錄
	history: {
		title: '評估歷史',
		description: '過去的評估結果',
		empty: '沒有歷史記錄',
		lastEvaluated: '最後評估',
		viewResults: '查看結果',
		deleteHistory: '刪除歷史',
		clearAll: '全部清除',
		recent: '最近的評估',
		viewAll: '查看全部',
		createFirst: '讓我們建立你的第一個檢查表！'
	},

	// 錯誤訊息
	errors: {
		general: '發生意外錯誤',
		network: '發生網路錯誤',
		storage: '發生儲存錯誤',
		export: '匯出失敗',
		import: '匯入失敗',
		invalidData: '無效資料',
		unsupportedFeature: '不支援的功能',
		permissionDenied: '權限被拒絕',
		fileNotFound: '找不到檔案',
		fileTooLarge: '檔案太大',
		invalidFileFormat: '無效的檔案格式'
	},

	// 成功訊息
	success: {
		saved: '已儲存',
		exported: '已匯出',
		imported: '已匯入',
		deleted: '已刪除',
		copied: '已複製',
		shared: '已分享'
	},

	// 確認訊息
	confirmations: {
		delete: '確定要刪除嗎？',
		reset: '重設？',
		clearHistory: '清除所有歷史記錄？',
		overwrite: '覆寫？',
		discard: '放棄更改？'
	},

	// 說明與指南
	help: {
		title: '說明與使用',
		overview: '概述',
		howToUse: '如何使用',
		categories: '類別',
		scoring: '分數計算',
		features: '功能',
		troubleshooting: '疑難排解',
		faq: '常見問題'
	},

	// 無障礙
	accessibility: {
		skipToContent: '跳至內容',
		mainNavigation: '主要導航',
		searchForm: '搜尋表單',
		languageSelector: '語言選擇器',
		themeToggle: '主題切換',
		closeDialog: '關閉對話框',
		openMenu: '開啟選單',
		expandSection: '展開部分',
		collapseSection: '收合部分'
	},

	// 日期與時間
	datetime: {
		justNow: '剛剛',
		minutesAgo: '分鐘前',
		hoursAgo: '小時前',
		daysAgo: '天前',
		weeksAgo: '週前',
		monthsAgo: '月前',
		yearsAgo: '年前',
		createdAt: '建立於',
		updatedAt: '更新於',
		completedAt: '完成於'
	},

	// 單位與數字
	units: {
		items: '項目',
		percent: '%',
		score: '分數',
		total: '總計',
		completed: '已完成',
		remaining: '剩餘',
		of: '/'
	},

	// 表單相關
	forms: {
		titleLabel: '標題',
		titlePlaceholder: '請輸入要評估的資訊或來源的標題',
		descriptionLabel: '目標資訊概述',
		descriptionPlaceholder: '請簡要描述要評估的資訊內容',
		notesLabel: '評估筆記與額外驗證項目',
		notesPlaceholder: '記錄任何疑問、需要驗證的項目、整體印象等...'
	},

	// UI 文字
	ui: {
		quickStartGuide: '💡 使用此指南快速開始！',
		guideModeDetailed: '🔍 詳細指南模式',
		guideModeNormal: '📝 一般模式',
		completeEvaluation: '完成評估'
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
