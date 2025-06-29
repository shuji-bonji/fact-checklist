/**
 * Korean translation file template
 * Korean (ko) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'ko' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: '번역 예정',
	completeness: 0
};

export const translations: TranslationKeys = {
	common: {
		loading: '로딩 중...',
		error: '오류가 발생했습니다',
		success: '성공',
		cancel: '취소',
		save: '저장',
		delete: '삭제',
		edit: '편집',
		close: '닫기',
		back: '뒤로',
		next: '다음',
		previous: '이전',
		search: '검색',
		clear: '지우기',
		reset: '재설정',
		copy: '복사',
		download: '다운로드',
		share: '공유',
		print: '인쇄',
		export: '내보내기',
		import: '가져오기',
		settings: '설정',
		help: '도움말',
		about: '정보',
		privacy: '개인정보',
		terms: '약관',
		home: '홈',
		menu: '메뉴',
		languages: '언어',
		darkMode: '다크 모드',
		lightMode: '라이트 모드',
		systemMode: '시스템',
		guide: 'Guide',
		showGuide: 'Show Guide',
		rip: {
			high: 'High Risk',
			medium: 'Medium Risk',
			low: 'Low Risk'
		}
	},
	app: {
		title: '실용적 팩트체크 체크리스트',
		subtitle: '정보의 신뢰성을 과학적으로 평가하는 종합 시스템',
		description: '정보의 신뢰성을 과학적이고 체계적으로 평가하기 위한 체크리스트',
		version: '1.0.0',
		author: '팩트체크 체크리스트 팀',
		copyright: '© 2025 팩트체크 체크리스트 팀',
		poweredBy: '개발:'
	},
	navigation: {
		home: '홈',
		about: '정보',
		help: '도움말 및 사용법',
		privacy: '개인정보',
		checklist: '체크리스트',
		history: '기록',
		settings: '설정'
	},
	checklist: {
		title: '체크리스트 정보',
		description: '체크리스트 세부사항',
		newChecklist: '새 체크리스트',
		createChecklist: '체크리스트 생성',
		editChecklist: '체크리스트 편집',
		deleteChecklist: '체크리스트 삭제',
		completeChecklist: '평가 완료',
		checklistTitle: '제목',
		checklistDescription: '대상 정보 개요',
		targetInfo: '대상 정보',
		targetInfoPlaceholder: '예: COVID-19 백신 효과에 관한 기사',
		evaluationNotes: '평가 노트 및 추가 검증 항목',
		evaluationNotesPlaceholder: '질문, 검증할 항목, 전반적인 인상 등을 기록하세요...',
		score: '평가 점수',
		confidenceLevel: '신뢰도',
		finalJudgment: '최종 판단',
		judgment: {
			accept: '수용',
			caution: '주의',
			reject: '거부',
			pending: '대기'
		},
		judgmentAdvice: {
			accept: '채택을 권장합니다. 충분한 검증이 이루어졌습니다.',
			caution: '추가 검증을 권장합니다. 중요한 결정에는 신중하게 접근하세요.',
			reject: '거부를 권장합니다. 더 신뢰할 수 있는 출처를 찾으세요.'
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
			name: '핵심 평가 (필수)',
			description: '기본적인 정보 신뢰성을 판단하는 가장 중요한 항목',
			emoji: '🚨'
		},
		detailed: {
			name: '세부 평가 (중요)',
			description: '정보의 품질과 전문성을 평가하는 항목',
			emoji: '📝'
		},
		verification: {
			name: '검증 및 교차확인',
			description: '정보의 검증 가능성과 뒷받침을 확인하는 항목',
			emoji: '🔍'
		},
		context: {
			name: '맥락 및 편향 평가',
			description: '편향의 적절성과 맥락을 평가하는 항목',
			emoji: '🌐'
		}
	},
	export: {
		title: '내보내기',
		description: '체크리스트를 다양한 형식으로 내보내기',
		format: '형식',
		options: '옵션',
		includeGuides: '가이드 포함',
		includeNotes: '노트 포함',
		includeSummary: '요약 포함',
		sectionBreaks: '섹션 구분',
		pdfModes: {
			pixelPerfect: '픽셀 완벽',
			reliableFont: '폰트 신뢰성 우선',
			textBased: '텍스트 기반'
		},
		formats: {
			pdf: 'PDF',
			html: 'HTML',
			json: 'JSON',
			markdown: 'Markdown'
		},
		progress: {
			initializing: '초기화 중...',
			generating: '생성 중...',
			processing: '처리 중...',
			finalizing: '완료 중...',
			completed: '완료',
			failed: '실패'
		}
	},
	history: {
		title: '평가 기록',
		description: '과거 평가 결과',
		empty: '사용 가능한 기록이 없습니다',
		lastEvaluated: '마지막 평가',
		viewResults: '결과 보기',
		deleteHistory: '기록 삭제',
		clearAll: '모두 지우기',
		recent: '최근 평가',
		viewAll: '모두 보기',
		createFirst: '첫 번째 체크리스트를 만들어 볼까요!'
	},
	errors: {
		general: '예상치 못한 오류가 발생했습니다',
		network: '네트워크 오류가 발생했습니다',
		storage: '저장소 오류가 발생했습니다',
		export: '내보내기 실패',
		import: '가져오기 실패',
		invalidData: '유효하지 않은 데이터',
		unsupportedFeature: '지원되지 않는 기능',
		permissionDenied: '권한이 거부됨',
		fileNotFound: '파일을 찾을 수 없음',
		fileTooLarge: '파일이 너무 큼',
		invalidFileFormat: '유효하지 않은 파일 형식'
	},
	success: {
		saved: '저장됨',
		exported: '내보내짐',
		imported: '가져와짐',
		deleted: '삭제됨',
		copied: '복사됨',
		shared: '공유됨'
	},
	confirmations: {
		delete: '정말로 삭제하시겠습니까?',
		reset: '재설정하시겠습니까?',
		clearHistory: '모든 기록을 지우시겠습니까?',
		overwrite: '덮어쓰시겠습니까?',
		discard: '변경사항을 버리시겠습니까?'
	},
	help: {
		title: '도움말 및 사용법',
		overview: '개요',
		howToUse: '사용법',
		categories: '카테고리',
		scoring: '점수 계산',
		features: '기능',
		troubleshooting: '문제 해결',
		faq: '자주 묻는 질문'
	},
	accessibility: {
		skipToContent: '콘텐츠로 건너뛰기',
		mainNavigation: '주 탐색',
		searchForm: '검색 양식',
		languageSelector: '언어 선택기',
		themeToggle: '테마 전환',
		closeDialog: '대화상자 닫기',
		openMenu: '메뉴 열기',
		expandSection: '섹션 확장',
		collapseSection: '섹션 축소'
	},
	datetime: {
		justNow: '방금 전',
		minutesAgo: '분 전',
		hoursAgo: '시간 전',
		daysAgo: '일 전',
		weeksAgo: '주 전',
		monthsAgo: '개월 전',
		yearsAgo: '년 전',
		createdAt: '생성일',
		updatedAt: '수정일',
		completedAt: '완료일'
	},
	units: {
		items: '항목',
		percent: '%',
		score: '점수',
		total: '총합',
		completed: '완료',
		remaining: '남은',
		of: '/'
	},
	// フォーム関連
	forms: {
		titleLabel: '제목',
		titlePlaceholder: '평가할 정보나 출처의 제목을 입력하세요',
		descriptionLabel: '대상 정보 개요',
		descriptionPlaceholder: '평가 대상이 되는 정보의 내용을 간략히 기술하세요',
		notesLabel: '평가 노트 및 추가 검증 항목',
		notesPlaceholder: '질문, 검증할 항목, 전반적인 인상 등을 기록하세요...'
	},

	// UI 텍스트
	ui: {
		quickStartGuide: '💡 이 가이드를 사용하여 빠르게 시작하세요!',
		guideModeDetailed: '🔍 상세 가이드 모드',
		guideModeNormal: '📝 일반 모드',
		completeEvaluation: '평가 완료'
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
