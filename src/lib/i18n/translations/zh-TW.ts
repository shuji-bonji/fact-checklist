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
		systemMode: '系統'
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
		recent: '最近的評估'
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
	}
};

export default translations;
