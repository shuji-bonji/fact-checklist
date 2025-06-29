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
		systemMode: '시스템'
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
		recent: '최근 평가'
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
	}
};

export default translations;
