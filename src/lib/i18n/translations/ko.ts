/**
 * Korean translation file template
 * Korean (ko) - Template for translation
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
	language: 'ko' as const,
	version: '1.0.0',
	lastUpdated: '2025-01-01',
	translator: 'Claude Code AI',
	completeness: 100
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
		guide: '가이드',
		showGuide: '가이드 보기',
		rip: {
			high: '높은 위험',
			medium: '보통 위험',
			low: '낮은 위험'
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

	// 체크리스트 항목
	checklistItems: {
		// 핵심 평가
		'source-authority': {
			title: '권위 있는 출처로부터의 발표',
			description: '정부기관, 학술기관, 전문기관, 동료심사 논문, 신뢰할 수 있는 언론 등',
			guideTitle: '🏛️ 권위 있는 출처의 판단 기준',
			guideContent:
				'정부/공공기관: 각 부처, 통계청, 한국은행, 법원 등\n학술기관: 대학교, 연구소, 학회, 동료심사 학술지\n전문기관: 해당 분야의 국내외 전문기관\n신뢰할 수 있는 언론: 편집방침이 명확하고 정정/사과 실적이 있는 언론기관',
			examplesGood: ['질병관리청 통계 데이터', 'Nature 저널 동료심사 논문', '한국은행 공식 발표'],
			examplesBad: ['개인 블로그 정보', '익명 게시판 글', '광고 목적 사이트']
		},
		'source-primary': {
			title: '1차 정보원 확인',
			description: '전문이나 간접보고가 아닌 직접적인 정보원으로부터의 발신',
			guideTitle: '🎯 1차 정보원 구별법',
			guideContent:
				'1차 정보원: 연구자 본인의 논문, 당사자 증언, 공식 발표, 원시 데이터\n2차 정보원: 해설 기사, 정리 사이트, 타인의 분석\n확인 포인트: "~에 따르면" "~가 보도한" 등의 표현에 주의',
			examplesGood: ['연구자가 직접 발표한 논문', '기업 실적 발표', '정부 공식 통계'],
			examplesBad: ['"전문가에 따르면"', '"어떤 조사에서" 등 모호한 인용']
		},
		'source-multiple': {
			title: '복수의 독립적 정보원',
			description: '다른 입장/조직으로부터의 유사한 보고나 확인',
			guideTitle: '🔄 독립성 확인 방법',
			guideContent:
				'독립적 정보원: 서로 다른 조직, 자금원, 이해관계를 가진 정보원\n최소 기준: 2-3개의 독립적이고 신뢰할 수 있는 정보원으로부터의 확인\n주의사항: 같은 보도자료를 기반으로 한 기사는 "독립적"이 아님',
			examplesGood: ['정부 발표 + 학술 연구 + 복수 언론 보도', '다른 연구기관에서의 유사한 결과'],
			examplesBad: ['같은 기업 그룹 내 복수 언론', '재게시 기사만']
		},
		'warning-anonymous': {
			title: '익명이나 출처 불명 정보가 아님',
			description: '작성자/발신자가 명확히 특정 가능',
			guideTitle: '🔍 발신자 특정의 확인 포인트',
			guideContent:
				'필수 정보: 작성자의 실명, 소속, 연락처, 전문성\n경고 신호: "내부 관계자에 따르면" "익명의 전문가" "어떤 연구"\n허용되는 익명: 저널리즘에서의 정보제공자 보호(단, 기자는 특정 가능해야 함)',
			examplesGood: ['김철수 교수(서울대학교 의과대학)에 따르면', '보건복지부 ○○과장 발언'],
			examplesBad: ['어떤 의사에 따르면', '관계자의 말로는', '익명의 전문가']
		},
		'warning-sensational': {
			title: '선정적·선동적 표현이 적음',
			description: '차분하고 객관적인 서술, 감정에 호소하는 과도한 표현이 없음',
			guideTitle: '⚠️ 선정적 표현 구별법',
			guideContent:
				'경고하는 표현: "절대로" "완전히" "충격적인" "놀라운" "○○업계가 숨기는"\n감정 유도: 공포, 분노, 질투를 부추기는 표현\n적절한 표현: "연구 결과에 따르면" "데이터가 보여주는" "전문가 견해로는"',
			examplesGood: [
				'연구에서 75%의 피험자에게 개선이 나타났다',
				'데이터로 통계적 유의차가 확인되었다'
			],
			examplesBad: ['의사가 절대 말하지 않는 충격적 진실!', '업계가 은폐하는 놀라운 사실']
		},
		'warning-logical': {
			title: '논리적 모순이 없음',
			description: '내용에 일관성이 있고 명백한 논리적 비약이 없음',
			guideTitle: '🧠 논리적 일관성 확인법',
			guideContent:
				'체크 항목:\n• 전제와 결론이 적절히 연결되어 있는가\n• 인과관계가 명확히 제시되어 있는가\n• 모순되는 주장을 동시에 하고 있지 않은가\n흔한 논리적 오류: 상관관계를 인과관계로 혼동, 극단적 일반화',
			examplesGood: ['통계적으로 유의미하며 다른 요인도 고려한 분석', '단계적인 논리 전개'],
			examplesBad: ['A와 B가 동시에 일어났으니 A가 B의 원인', '극단적 사례로부터의 일반화']
		},
		// 세부 평가
		'time-recent': {
			title: '정보의 최신성',
			description: '게재일이 명시되어 있고 내용에 적합한 최신성을 유지',
			guideTitle: '⏰ 정보의 적절한 최신성 판단',
			guideContent:
				'분야별 기준:\n• 뉴스/시사: 수일~1주일 이내\n• 의학/과학: 2-3년 이내(기초연구는 5년 정도까지)\n• 기술/IT: 1-2년 이내\n• 법률/제도: 최신 개정을 반영\n확인 포인트: 게재 일시 명기, 최종 업데이트일 기록',
			examplesGood: ['2024년 12월 발표', '최종 업데이트: 2025년 1월', '최신 법 개정 반영'],
			examplesBad: ['날짜 기재 없음', '5년 전 기술 정보', '구법 기준 설명']
		},
		'time-update': {
			title: '업데이트·정정 이력',
			description: '필요에 따라 내용이 업데이트되고 정정이 투명하게 이루어짐',
			guideTitle: '📝 투명한 업데이트·정정 확인',
			guideContent:
				'좋은 업데이트 특징:\n• 업데이트 내용 명시\n• 정정 이유 설명\n• 업데이트 일시 기록\n• 중요한 변경의 경우 주기\n신뢰성 지표: 실수를 인정하고 정정하는 태도',
			examplesGood: [
				'2025년 1월 15일 업데이트: 통계 데이터를 최신 버전으로 교체',
				'정정 이력 명기'
			],
			examplesBad: ['오래된 정보 그대로 방치', '정정 기록 없음', '묵시적 내용 변경']
		},
		'expert-knowledge': {
			title: '적절한 전문 지식',
			description: '작성자가 해당 분야의 충분한 지식/경험을 보유',
			guideTitle: '🎓 전문성 확인 방법',
			guideContent:
				'확인 항목:\n• 관련 분야 학위/자격\n• 실무 경험/연구 경력\n• 학회 발표/논문 발표 실적\n• 전문기관 경력\n주의: 관련 분야 전문성이 중요(의사가 경제를 논하는 경우 등)',
			examplesGood: ['감염내과 전문의가 백신에 대해 설명', '경제학 박사가 통화정책 분석'],
			examplesBad: ['전문 분야 외 유명인이 의학적 주장', '자격 불분명한 사람의 법률 해설']
		},
		'detail-sufficient': {
			title: '충분한 세부내용과 근거',
			description: '결론에 이르는 과정과 뒷받침하는 근거가 적절히 설명됨',
			guideTitle: '📋 근거의 충분성 판단',
			guideContent:
				'필요 요소:\n• 주장을 뒷받침하는 구체적 데이터\n• 방법론 설명\n• 제한/한계 언급\n• 반대 의견에 대한 언급\n경고 신호: 결론만 있고 과정이 불명, 근거가 모호',
			examplesGood: ['표본 수, 통계 기법, 신뢰구간까지 기재', '방법론의 상세한 설명'],
			examplesBad: ['효과가 입증되었다고만 하고 세부 내용 없음', '결론만 있고 근거 불명']
		},
		'citation-proper': {
			title: '적절한 인용·참조',
			description: '중요한 주장에 대해 신뢰할 수 있는 정보원이 제시됨',
			guideTitle: '📚 적절한 인용의 기준',
			guideContent:
				'인용해야 할 내용:\n• 통계 데이터/수치\n• 전문적 주장\n• 타인의 연구 결과\n• 법령/규칙 내용\n인용 형식: 저자명, 출간연도, 제목, 출판사 등 최소한의 정보',
			examplesGood: ['김철수(2024) 연구에 따르면...', '보건복지부 통계(2025)에서는...'],
			examplesBad: ['연구에 따르면(출처 불명)', '데이터로는(세부 내용 불명)']
		},
		'citation-accessible': {
			title: '인용원의 확인 가능성',
			description: '인용된 정보원에 실제로 접근하여 확인 가능',
			guideTitle: '🌐 인용원 접근성 확인',
			guideContent:
				'이상적 상태:\n• 직접 링크나 DOI\n• 공개된 정보원\n• 검색 가능한 구체적 정보\n허용 범위: 유료 데이터베이스, 도서관에서 확인 가능한 자료\n문제 있는 인용: 사적 대화, 확인 불가능한 내부 자료',
			examplesGood: ['URL 링크 포함', 'DOI 번호 포함 논문', 'ISBN 번호 포함 도서'],
			examplesBad: ['내부 자료에 따르면', '개인적 대화에서', '접근 불가능한 자료']
		},
		// 검증·교차확인
		'cross-check': {
			title: '타 정보원과의 교차확인',
			description: '독립적인 복수 정보원에서 유사한 내용 확인 가능',
			guideTitle: '🔍 효과적인 크로스체크 방법',
			guideContent:
				'단계적 확인:\n1. 동일한 사실을 보도하는 다른 신뢰할 수 있는 정보원 찾기\n2. 같은 사건을 다른 각도에서 다룬 보고 확인\n3. 반대 의견이나 비판적 시각도 조사\n확인 도구: Google Scholar, 공적 데이터베이스, 팩트체크 사이트',
			examplesGood: ['복수의 동료심사 논문에서 유사한 결과', '정부 통계와의 정합성 확인'],
			examplesBad: ['하나의 정보원만', '같은 출처를 사용한 복수 기사']
		},
		'fact-check': {
			title: '팩트체크 기관의 검증',
			description: '신뢰할 수 있는 팩트체크 기관에 의한 검증 존재',
			guideTitle: '✅ 신뢰할 수 있는 팩트체크 기관',
			guideContent:
				'국제 기관: Snopes, PolitiFact, AFP Fact Check, Full Fact(영국) 등 입장·지역이 다른 기관\n한국 기관: 팩트체크넷, SNU 팩트체크센터, 뉴스톱 등\n언론 기반: 조선일보, 한겨레, JTBC 팩트체크 부문\n확인 방법: 해당 정보를 팩트체크 사이트에서 검색',
			examplesGood: ['복수 팩트체크 기관이 "참"으로 판정', '국제 기관의 검증'],
			examplesBad: ['팩트체크에서 "허위정보"로 판정', '검증되지 않은 정보']
		},
		'data-verifiable': {
			title: '검증 가능한 데이터',
			description: '주장을 뒷받침하는 데이터가 객관적으로 확인 가능',
			guideTitle: '📈 데이터 검증 가능성 확인',
			guideContent:
				'확인할 요소:\n• 데이터 출처(조사기관, 통계청 등)\n• 수집 방법·기간 명시\n• 표본 크기·대상 세부 내용\n• 원시 데이터나 상세 데이터 접근 가능성\n경고 신호: "내부 데이터" "독자 조사"만으로 세부 내용 불명',
			examplesGood: ['통계청 데이터', '논문 부록 자료에서 데이터 공개'],
			examplesBad: ['당사 조사에 따르면(상세한 조사 개요 없음)', '내부 데이터만']
		},
		methodology: {
			title: '방법·방법론의 타당성',
			description: '연구나 조사의 방법론이 적절하고 재현 가능',
			guideTitle: '🔬 방법론 타당성 평가',
			guideContent:
				'평가 포인트:\n• 연구 설계의 적절성(RCT, 코호트 연구 등)\n• 편향 대책의 유무\n• 통계 기법의 타당성\n• 재현성 담보(프로토콜 공개 등)\n비전문가도 확인 가능한 점: 방법론의 상세 기재, 타 연구와의 비교',
			examplesGood: ['이중 맹검 시험', '적절한 대조군 설정', '프로토콜 공개'],
			examplesBad: ['방법론 기재 없음', '편향된 표본 선택', '재현 불가능한 방법']
		},
		// 맥락·편향 평가
		'bias-disclosure': {
			title: '이해관계 공개',
			description: '금전적·정치적·개인적 이해관계가 적절히 공개됨',
			guideTitle: '💰 이해관계 확인 항목',
			guideContent:
				'공개해야 할 이해관계:\n• 연구 자금 제공원\n• 기업으로부터의 사례·컨설팅료\n• 주식 보유 등 금전적 이익\n• 정치적·이데올로기적 입장\n확인 방법: "이해상충" "COI" "자금제공" 등의 기재 찾기',
			examplesGood: ['본 연구는 ○○재단의 지원을 받아 수행', 'COI(이해상충) 명기'],
			examplesBad: ['제약회사 연구인데 이해상충 기재 없음', '자금원 불명']
		},
		'balanced-view': {
			title: '균형 잡힌 시각',
			description: '다른 입장이나 반대 의견도 고려됨',
			guideTitle: '⚖️ 균형 평가의 관점',
			guideContent:
				'확인 포인트:\n• 반대 의견·비판적 시각의 소개\n• 다른 연구 결과 언급\n• 불확실성·한계 언급\n• 복수 전문가 의견\n경고 신호: 일방적 주장만, 유리한 정보만 선별',
			examplesGood: ['한편, ○○교수는 다른 견해를 보인다', '복수 연구 결과 비교'],
			examplesBad: ['지지하는 증거만 나열', '반대 의견에 대한 언급 없음']
		},
		'context-adequate': {
			title: '충분한 배경정보',
			description: '정보를 이해하는 데 필요한 배경과 맥락이 제공됨',
			guideTitle: '🌍 맥락 정보 확인 항목',
			guideContent:
				'필요한 배경정보:\n• 역사적 경위·지금까지의 연구\n• 관련 법률·제도\n• 사회적·문화적 배경\n• 국제적 동향·비교\n평가 포인트: 독자가 적절히 이해·판단할 수 있는 맥락 제공',
			examplesGood: ['과거 유사 사례', '타국과의 비교 데이터도 제시', '역사적 배경 설명'],
			examplesBad: ['단발적 수치만', '배경정보 없음', '맥락을 무시한 비교']
		},
		'scope-clear': {
			title: '적용 범위의 명확화',
			description: '정보의 적용 가능한 범위나 한계가 명확히 제시됨',
			guideTitle: '🎯 적용 범위의 명확화',
			guideContent:
				'명확히 해야 할 범위:\n• 대상이 되는 사람·지역·기간\n• 연구의 한계·제약\n• 일반화 가능성의 정도\n• 제외되는 케이스\n중요성: 과도한 일반화나 오용을 방지하기 위해',
			examplesGood: [
				'한국 성인 남성을 대상으로 한 연구이므로 다른 집단에 적용할 때는 신중해야 함',
				'한계 명기'
			],
			examplesBad: ['제한적 연구 결과를 무제한 일반화', '적용 범위 불명']
		}
	}
};

// 신뢰도 텍스트
export const confidenceTexts = {
	high: '높은 신뢰도',
	medium: '보통 신뢰도',
	low: '낮은 신뢰도',
	veryLow: '신뢰도 문제'
};

// 판단 조언
export const judgmentAdvices = {
	accept: '채택을 권장합니다. 충분한 검증이 이루어졌습니다.',
	caution: '추가 검증을 권장합니다. 중요한 결정에는 신중하게 접근하세요.',
	reject: '거부를 권장합니다. 더 신뢰할 수 있는 출처를 찾으세요.',
	lowConfidence: '신중함이 필요합니다. 추가 검증이 필요합니다.'
};

// UI 전용 텍스트
export const uiTexts = {
	quickStartGuide:
		'먼저 "핵심 평가"부터 시작하여 기본적인 신뢰성을 확인하세요. 각 항목을 체크할 때마다 오른쪽 점수가 실시간으로 업데이트됩니다.',
	guideMode: {
		detailed: '📖 상세 가이드 모드',
		normal: '📝 일반 모드'
	},
	placeholders: {
		title: '예: COVID-19 백신 효과에 관한 기사',
		description: '평가할 정보의 세부 내용을 입력하세요...',
		notes: '질문, 추가 검증할 항목, 전반적인 인상 등을 기록하세요...'
	},
	defaultTitle: '팩트체크_',
	menuToggleAriaLabel: '메뉴 토글',
	scoreLabels: {
		critical: '🚨 핵심',
		detailed: '📝 세부',
		verification: '🔍 검증',
		context: '🌐 맥락',
		total: '총점'
	}
};

export default translations;
