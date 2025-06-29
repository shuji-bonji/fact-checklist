/**
 * Traditional Chinese translation file template
 * Traditional Chinese (zh-TW) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'zh-TW' as const,
	version: '1.0.0',
	lastUpdated: '2025-06-29',
	translator: 'Claude AI',
	completeness: 100
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
		guide: '指南',
		showGuide: '顯示指南',
		rip: {
			high: '高風險',
			medium: '中等風險',
			low: '低風險'
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
			high: '高可靠性',
			medium: '中等可靠性',
			low: '低可靠性',
			poor: '可靠性問題'
		},
		advice: {
			high: '建議採用。已進行充分驗證。',
			medium: '建議額外確認。重要決定請謹慎。',
			low: '需要謹慎。需要進一步驗證。',
			poor: '建議拒絕。尋找可靠的資訊來源。'
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

	// 檢查清單項目 - 繁體中文翻譯
	checklistItems: {
		'source-authority': {
			title: '權威來源發布',
			description: '政府機關、學術機構、專業組織、同儕評議論文、可靠媒體等',
			guideTitle: '🏛️ 權威來源的判斷標準',
			guideContent:
				'政府/公共機構：各部會、統計局、央行、法院等。學術機構：大學、研究所、智庫等。專業組織：醫學會、工程師學會等。媒體：具有新聞專業標準的媒體機構。',
			examplesGood: ['衛生福利部統計資料', '自然期刊同儕評議論文', '台灣大學研究報告'],
			examplesBad: ['個人部落格資訊', '匿名論壇發文', '來路不明的網路文章']
		},
		'source-primary': {
			title: '第一手來源確認',
			description: '來自源頭的直接資訊，非道聽塗說或轉述報導',
			guideTitle: '🎯 如何識別第一手來源',
			guideContent:
				'第一手來源：作者本人發表的研究論文、當事人的證詞、官方正式公告、親眼目擊的報告、實驗數據的原始記錄等。',
			examplesGood: ['研究者本人發表的論文', '公司財報公告', '政府部門正式聲明'],
			examplesBad: ['據專家表示', '某項調查顯示（無明確出處）', '網路傳言']
		},
		'source-multiple': {
			title: '多重獨立來源',
			description: '不同立場/組織的類似報導或確認',
			guideTitle: '🔄 如何確認來源獨立性',
			guideContent:
				'獨立來源：不同組織、不同資金來源、不同利益關係的消息來源。檢查是否存在共同的資金來源或利益關係。',
			examplesGood: ['政府公告 + 學術研究 + 多家媒體報導', '不同國家的研究機構得出相似結論'],
			examplesBad: ['同一企業集團內的多家媒體', '引用相同單一來源的多篇報導']
		},
		'warning-anonymous': {
			title: '非匿名或無來源資訊',
			description: '創作者/發布者可以清楚識別',
			guideTitle: '🔍 來源識別的重點',
			guideContent:
				'必要資訊：創作者真實姓名、所屬機構、聯絡方式、專業背景。如果是機構發布，需要明確的機構名稱和負責人資訊。',
			examplesGood: ['台大醫學院X教授表示', '中研院Y研究員發表', '衛福部疾管署聲明'],
			examplesBad: ['某位醫師表示', '匿名專家', '據了解', '有消息指出']
		},
		'warning-sensational': {
			title: '少煽動性或誇大表達',
			description: '冷靜客觀的描述，無過度情緒化訴求',
			guideTitle: '⚠️ 如何識別煽動性表達',
			guideContent:
				'警示用詞：絕對、完全、震驚、驚人、史上最強、神奇、立即見效等。客觀表達應該使用：研究顯示、數據表明、證據支持等中性詞彙。',
			examplesGood: ['研究顯示75%的受試者有改善', '統計資料顯示相關性', '根據臨床試驗結果'],
			examplesBad: ['醫生絕不告訴你的驚人真相！', '史上最強效果！', '震撼醫界的發現！']
		},
		'warning-logical': {
			title: '無邏輯矛盾',
			description: '內容前後一致，無明顯邏輯跳躍',
			guideTitle: '🧠 如何檢查邏輯一致性',
			guideContent:
				'檢查前提與結論是否合理連接、是否存在邏輯謬誤、因果關係是否成立、推論過程是否合理。常見謬誤：相關性不等於因果性。',
			examplesGood: ['考慮其他因素的統計顯著性分析', '控制變因的對照實驗', '多角度驗證的結論'],
			examplesBad: ['A和B同時發生所以A導致B', '少數案例推廣到全體', '忽略其他可能因素']
		},
		'time-recent': {
			title: '資訊時效性',
			description: '發布日期明確，內容保持適當的新鮮度',
			guideTitle: '⏰ 判斷適當的資訊時效性',
			guideContent:
				'不同領域的時效性標準：醫學資訊5年內、科技資訊2年內、法規資訊需最新版本、統計數據需最近期。確認更新頻率是否合適。',
			examplesGood: ['2024年12月發布', '最後更新：2025年1月', '定期更新的統計資料'],
			examplesBad: ['無日期標示', '5年前的技術資訊', '過時的法規資訊']
		},
		'time-update': {
			title: '更新與修正紀錄',
			description: '內容必要時會更新，修正透明化',
			guideTitle: '📝 檢查透明的更新與修正',
			guideContent:
				'良好的更新特徵：明確說明更新內容、修正原因、更新時間。錯誤修正應該保留原始內容並標明修正部分。',
			examplesGood: ['清楚的修正紀錄', '標明更新內容與時間', '保留修正軌跡'],
			examplesBad: ['無修正紀錄', '悄悄修改內容', '刪除錯誤內容而非修正']
		},
		'expert-knowledge': {
			title: '適當的專業性',
			description: '創作者在相關領域具有足夠的知識/經驗',
			guideTitle: '🎓 如何確認專業性',
			guideContent:
				'檢查項目：相關領域的學位/資格、實務經驗、發表紀錄、同儕認可、專業機構認證。跨領域發言需要特別謹慎評估。',
			examplesGood: ['感染科專家說明疫苗', '經濟學者分析金融政策', '工程師解釋技術問題'],
			examplesBad: ['藝人發表醫學見解', '非專業人士的技術建議', '跨領域過度延伸']
		},
		'detail-sufficient': {
			title: '充分的細節與證據',
			description: '導致結論的過程和支持證據都有適當說明',
			guideTitle: '📋 判斷證據充分性',
			guideContent:
				'必要元素：支持主張的具體數據、研究方法說明、樣本大小、統計方法、信賴區間、潛在限制等。避免只有結論沒有過程。',
			examplesGood: ['包含樣本數、統計方法、信賴區間', '詳細的實驗設計說明', '完整的數據分析'],
			examplesBad: ['僅說明已證實效果但無細節', '模糊的研究描述', '缺乏支持數據']
		},
		'citation-proper': {
			title: '適當的引用與參考',
			description: '重要主張都有顯示可靠來源',
			guideTitle: '📚 適當引用的標準',
			guideContent:
				'需要引用的內容：統計數據/數字、研究發現、專家意見、歷史事件、法規條文等。引用格式應包含：作者、標題、出版年份、頁碼等。',
			examplesGood: ['附有適當引用的研究', '完整的參考文獻列表', '可追溯的資料來源'],
			examplesBad: ['據研究顯示（來源不明）', '無參考文獻', '引用格式不完整']
		},
		'citation-accessible': {
			title: '引用來源的可查證性',
			description: '所引用的來源實際上可以取得和查證',
			guideTitle: '🌐 檢查引用可及性',
			guideContent:
				'理想狀態：直接連結或DOI、公開可取得的資料、圖書館可查閱的資源。避免：內部資料、付費牆後的資源（除非有替代來源）。',
			examplesGood: ['附有網址連結', '具DOI編號的論文', '公開資料庫的資料'],
			examplesBad: ['據內部資料', '無法取得的私人文件', '失效的網址連結']
		},
		'cross-check': {
			title: '與其他來源交叉比對',
			description: '類似內容可以由多個獨立來源確認',
			guideTitle: '🔍 有效交叉比對的方法',
			guideContent:
				'逐步驗證流程：1.識別關鍵主張 2.尋找獨立來源 3.比較不同來源的描述 4.檢查是否存在矛盾 5.評估一致性程度。',
			examplesGood: ['多篇同儕評議論文的相似結果', '不同機構的統計資料相符', '多重驗證的事實'],
			examplesBad: ['僅有單一來源', '所有來源都引用同一原始資料', '缺乏其他佐證']
		},
		'fact-check': {
			title: '事實查核機構驗證',
			description: '有可靠的事實查核機構進行過驗證',
			guideTitle: '✅ 可靠的事實查核機構',
			guideContent:
				'國際組織：Snopes、PolitiFact、AFP事實查核。台灣機構：台灣事實查核中心、MyGoPen、蘭姆酒吐司等。檢查查核機構的可信度和查核方法。',
			examplesGood: ['多家事實查核機構判定為真', '經台灣事實查核中心驗證', '國際查核組織確認'],
			examplesBad: ['被事實查核判定為錯誤資訊', '無任何查核驗證', '被多個機構標記為假消息']
		},
		'data-verifiable': {
			title: '數據可驗證性',
			description: '支持主張的數據可以客觀查證',
			guideTitle: '📈 檢查數據可驗證性',
			guideContent:
				'驗證要素：數據來源、收集方法、樣本代表性、統計處理過程、原始數據可及性。政府統計資料通常最可靠。',
			examplesGood: ['政府統計資料', '公開的研究數據', '可重現的分析結果'],
			examplesBad: ['僅有內部資料', '無法重現的結果', '來源不明的數字']
		},
		methodology: {
			title: '方法/方法論的有效性',
			description: '研究或調查方法論適當且可重現',
			guideTitle: '🔬 評估方法論有效性',
			guideContent:
				'評估要點：研究設計適當性、樣本選擇合理性、控制組設置、統計方法正確性、偏誤控制、結果可重現性等。',
			examplesGood: ['雙盲試驗', '適當的控制組設置', '隨機抽樣', '標準化程序'],
			examplesBad: ['無方法論說明', '有偏誤的樣本選擇', '缺乏控制組', '方法不當的研究']
		},
		'bias-disclosure': {
			title: '利益衝突揭露',
			description: '金錢、政治、個人利益等都有適當揭露',
			guideTitle: '💰 利益衝突檢查項目',
			guideContent:
				'需揭露的利益：研究資金來源、商業關係、政治立場、個人利益、競爭關係等。學術界和新聞界都有相關揭露標準。',
			examplesGood: ['明確聲明COI', '揭露資金來源', '說明利益關係'],
			examplesBad: ['無COI揭露', '隱藏資金來源', '未說明利益關係']
		},
		'balanced-view': {
			title: '平衡觀點',
			description: '不同立場和反對觀點也有考慮',
			guideTitle: '⚖️ 平衡性評估的角度',
			guideContent:
				'檢查要點：反對/批評觀點的介紹、不同立場的呈現、爭議點的說明、限制與不確定性的承認。避免只呈現支持證據。',
			examplesGood: ['多項研究結果比較', '呈現不同觀點', '承認研究限制'],
			examplesBad: ['只列舉支持證據', '忽略反對意見', '單一觀點呈現']
		},
		'context-adequate': {
			title: '充分的背景資訊',
			description: '理解資訊所需的背景和脈絡都有提供',
			guideTitle: '🌍 背景資訊檢查項目',
			guideContent:
				'必要背景資訊：歷史背景/過往研究、相關法規/政策、社會脈絡、技術背景、比較基準等。幫助讀者完整理解資訊意涵。',
			examplesGood: ['過往類似案例', '歷史背景說明', '政策脈絡介紹'],
			examplesBad: ['僅有單一數字', '無背景資訊', '脫離脈絡的資訊']
		},
		'scope-clear': {
			title: '適用範圍明確',
			description: '資訊的適用範圍和限制都有清楚說明',
			guideTitle: '🎯 適用範圍的澄清',
			guideContent:
				'需澄清的範圍：目標人群/地區/時期、適用條件、限制條件、例外情況等。避免過度概括化有限的研究結果。',
			examplesGood: ['明確的限制說明', '適用條件清楚', '範圍界定明確'],
			examplesBad: ['有限研究結果的無限概括', '適用範圍不明', '忽略限制條件']
		}
	}
};

export default translations;
