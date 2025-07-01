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

  // 페이지별 메타데이터
  pages: {
    home: {
      title: '팩트 체크리스트 - 정보 신뢰성의 실용적 평가',
      description: '20개 체크 항목으로 정보의 신뢰성을 체계적으로 평가하세요. AI나 정부에 의존하지 않고 자신의 눈과 머리로 정보를 판단하세요.',
      keywords: '팩트체크,정보 검증,신뢰성 평가,PWA,정보 리터러시,가짜정보 대응'
    },
    about: {
      title: '이 앱에 대해 - 팩트 체크리스트',
      description: '팩트 체크리스트의 개발 배경, 기능, 사용법에 대해 알아보세요. 정보의 신뢰성을 스스로 판단하기 위한 도구입니다.',
      keywords: '앱 개요,개발 철학,정보 평가,신뢰성 판단,팩트체크,사용법'
    },
    help: {
      title: '도움말 및 가이드 - 팩트 체크리스트',
      description: '자세한 사용 지침, 체크리스트 항목 설명, 효과적인 정보 평가를 위한 팁을 제공합니다.',
      keywords: '사용법,도움말,체크 항목,정보 평가,가이드,지침'
    },
    privacy: {
      title: '개인정보처리방침 - 팩트 체크리스트',
      description: '개인 데이터 처리에 대한 정보입니다. 모든 데이터는 로컬에 저장되며 외부로 전송되지 않습니다.',
      keywords: '개인정보,개인 정보,데이터 보호,로컬 저장,보안'
    },
    intro: {
      title: '가짜정보로 가득한 세상에서 살아남기 위한 실용적 팩트체크 체크리스트',
      description: '정부의 SNS 규제가 진행되는 가운데 자신의 눈과 머리로 정보의 신뢰성을 판단하기 위한 간단한 체크리스트입니다. AI나 미디어를 맹신하지 않고 과학적이고 체계적으로 정보를 평가하세요.',
      keywords: '팩트체크,정보 검증,신뢰성 평가,PWA,정보 리터러시,가짜정보 대응,SNS 규제,정보 통제,정보의 질,AI 팩트체크'
    }
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
    completed: '완료',
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
    },
    evaluationCompleted: '✓ 평가 완료!',
    evaluationCompletedDescription: '체크리스트 평가 결과를 확인할 수 있습니다.',
    evaluationResults: '평가 결과',
    totalScore: '총점',
    itemsDetail: '항목 세부사항',
    recommendedActions: '권장 조치',
    improvementTips: '신뢰성 향상을 위해',
    checkUncheckedItems: '미체크 항목 확인',
    additionalSourceResearch: '추가 자료 연구',
    expertConsultation: '전문가 상담',
    factCheckOrganizations: '팩트체크 기관 활용',
    statistics: '통계',
    checkedItems: '체크됨',
    uncheckedItems: '미체크',
    completionRate: '완료율',
    actions: '조치',
    exportShare: '내보내기 및 공유',
    reEdit: '재편집'
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
    },
    generatedAt: '생성 시간',
    summaryTable: {
      item: '항목',
      value: '값'
    },
    table: {
      section: '섹션',
      completionRate: '완료율',
      completedItems: '완료된 항목'
    },
    sectionCompletionRates: '섹션별 완료율',
    achievementStatus: '달성 상태',
    goodExamples: '좋은 예시',
    badExamples: '나쁜 예시'
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
    subtitle: '팩트체크 체크리스트 사용을 위한 상세 가이드',
    tableOfContents: '목차',
    navigation: {
      overview: '개요',
      usage: '사용법',
      categories: '카테고리',
      scoring: '점수',
      features: '기능',
      privacy: '개인정보보호',
      troubleshooting: '문제 해결'
    },
    sections: {
      overview: {
        title: '앱 개요',
        emoji: '📋',
        description: '팩트체크 체크리스트의 기본 사용법',
        content: '이 앱은 인터넷상의 정보의 신뢰성을 과학적이고 체계적으로 평가하는 도구입니다.',
        subSections: {
          features: {
            title: '주요 기능',
            content:
              '• 완전한 프라이버시: 모든 데이터가 로컬에 저장됨\n• 오프라인 작동\n• 과학적 평가\n• 기록 관리'
          },
          targetUsers: {
            title: '대상 사용자',
            content: '기자, 연구자, 학생 및 정보의 신뢰성 평가에 관심이 있는 모든 사람'
          }
        }
      },
      usage: {
        title: '사용법',
        emoji: '🔍',
        description: '앱 사용을 위한 단계별 가이드',
        content: '다음 단계를 따라 정보의 신뢰성을 체계적으로 평가하세요.',
        subSections: {
          step1: {
            title: '1단계: 정보 입력',
            content: '평가하려는 정보의 제목과 설명을 입력하세요'
          },
          step2: {
            title: '2단계: 요소 평가',
            content: '사용 가능한 증거를 바탕으로 목록의 각 요소를 평가하세요'
          },
          step3: {
            title: '3단계: 결과 검토',
            content: '계산된 결과와 신뢰도 수준을 검토하세요'
          },
          step4: {
            title: '4단계: 최종 결정',
            content: '평가를 바탕으로 최종 결정을 내리세요: 수용, 주의 또는 거부'
          }
        }
      },
      categories: {
        title: '평가 카테고리',
        emoji: '📊',
        description: '네 가지 주요 평가 카테고리',
        content:
          '평가 요소는 포괄적인 평가를 보장하기 위해 네 가지 주요 카테고리로 구성되어 있습니다.',
        subSections: {
          critical: {
            title: '핵심 평가',
            content: '정보의 기본적인 신뢰성을 결정하는 가장 중요한 요소'
          },
          detailed: {
            title: '상세 평가',
            content: '정보의 품질과 전문성을 평가하는 요소'
          },
          verification: {
            title: '검증 및 교차 확인',
            content: '정보의 검증 가능성과 지원을 확인하는 요소'
          },
          context: {
            title: '맥락 및 편견 평가',
            content: '편견과 맥락의 적절성을 평가하는 요소'
          }
        }
      },
      scoring: {
        title: '점수 시스템',
        emoji: '🎯',
        description: '점수와 신뢰도 수준이 계산되는 방법',
        content: '점수는 총 요소 중 충족된 요소의 수를 기반으로 계산됩니다.',
        subSections: {
          calculation: {
            title: '계산 방법',
            content: '점수 = (충족된 요소 수 / 총 요소 수) × 100'
          },
          criteria: {
            title: '평가 기준',
            content:
              '• 80%+: 높은 신뢰성\n• 60-79%: 중간 신뢰성\n• 40-59%: 낮은 신뢰성\n• <40%: 신뢰성 문제'
          },
          finalJudgment: {
            title: '최종 판단',
            content: '점수를 가이드로 사용하되, 최종 결정은 개인적 판단에 따라 달라집니다'
          }
        }
      },
      features: {
        title: '기능',
        emoji: '⭐',
        description: '앱의 고급 기능',
        content: '앱은 사용자 경험을 향상시키는 여러 고급 기능을 제공합니다.',
        subSections: {
          detailedGuide: {
            title: '상세 가이드',
            content:
              '각 평가 요소에는 평가에 도움이 되는 상세한 가이드와 실용적인 예제가 포함되어 있습니다'
          },
          exportFunction: {
            title: '내보내기 기능',
            content: '평가 결과를 여러 형식으로 내보낼 수 있습니다 (PDF, HTML, JSON, Markdown)',
            exportFormats: {
              title: '내보내기 형식',
              formats: {
                pdf: {
                  name: 'PDF',
                  features: '인쇄 및 공유를 위한 전문적인 형식',
                  usage: '공식 보고서 및 보관에 적합'
                },
                html: {
                  name: 'HTML',
                  features: '브라우저에서 상호작용 표시',
                  usage: '웹을 통한 공유에 적합'
                },
                json: {
                  name: 'JSON',
                  features: '구조화된 데이터 형식',
                  usage: '자동 분석 및 가져오기에 적합'
                },
                markdown: {
                  name: 'Markdown',
                  features: '유연한 텍스트 형식',
                  usage: '블로그 및 문서화에 적합'
                }
              }
            },
            pdfModes: {
              title: 'PDF 모드',
              modes: {
                pixelPerfect: {
                  name: '픽셀 퍼펙트',
                  subtitle: '최고의 시각적 품질',
                  description: '높은 정확도로 원본 디자인을 유지합니다',
                  features: '인터페이스 준수 디자인, 정확한 색상, 선명한 글꼴'
                },
                reliableFont: {
                  name: '신뢰할 수 있는 글꼴',
                  description: '텍스트 명확성과 가독성에 초점을 맞춥니다',
                  features: '최적화된 글꼴, 빠른 성능, 작은 파일 크기'
                },
                textBased: {
                  name: '텍스트 기반',
                  subtitle: '검색 가능하고 복사 가능한 텍스트',
                  description: '순수 텍스트, 검색 가능한 PDF를 생성합니다',
                  features: '검색 가능한 텍스트, 작은 크기, 높은 호환성'
                }
              }
            },
            exportOptions: {
              title: '내보내기 옵션',
              options: {
                summary: {
                  name: '요약 포함',
                  description: '결과 및 평가 요약을 추가합니다',
                  formats: '모든 형식에서 사용 가능'
                },
                guides: {
                  name: '가이드 포함',
                  description: '각 요소에 대한 상세한 가이드를 추가합니다',
                  formats: 'PDF 및 HTML에서 사용 가능'
                },
                notes: {
                  name: '메모 포함',
                  description: '개인 메모를 추가합니다',
                  formats: '모든 형식에서 사용 가능'
                },
                sectionBreaks: {
                  name: '섹션 구분',
                  description: '섹션에 대한 별도 페이지를 추가합니다',
                  formats: 'PDF에서만 사용 가능'
                }
              }
            },
            exportNote: '기억하세요: 모든 내보내기는 데이터 전송 없이 기기에서 로컬로 수행됩니다'
          },
          historyManagement: {
            title: '기록 관리',
            content: '앱은 자동으로 최근 5개의 평가를 저장하고 액세스 및 관리할 수 있게 해줍니다'
          },
          pwaSupport: {
            title: 'PWA 지원',
            content: '앱은 기기에 설치할 수 있으며 완전히 오프라인으로 작동할 수 있습니다'
          }
        }
      },
      privacy: {
        title: '개인정보보호 및 보안',
        emoji: '🔒',
        description: '개인정보와 데이터를 보호하는 방법',
        content:
          '우리는 개인정보보호 우선 설계를 통해 개인정보를 보호하기 위해 최선을 다하고 있습니다.',
        subSections: {
          localStorage: {
            title: '로컬 저장소',
            content: '모든 데이터는 브라우저에 로컬로 저장되며 기기를 떠나지 않습니다'
          },
          security: {
            title: '보안',
            content: '외부 연결이나 사용자 추적이 없습니다'
          },
          dataDeletion: {
            title: '데이터 삭제',
            content: '브라우저 데이터를 지워서 언제든지 모든 데이터를 삭제할 수 있습니다'
          }
        }
      },
      troubleshooting: {
        title: '문제 해결',
        emoji: '🔧',
        description: '일반적인 문제에 대한 해결책',
        content: '문제가 발생하면 이러한 일반적인 해결책을 시도해보세요.',
        subSections: {
          dataNotSaved: {
            title: '데이터가 저장되지 않음',
            content:
              '브라우저에서 로컬 저장소가 활성화되어 있고 브라우저가 최신 상태인지 확인하세요'
          },
          scoreNotDisplayed: {
            title: '점수가 표시되지 않음',
            content: '모든 필요한 요소의 평가를 완료했는지 확인하세요'
          },
          exportFailed: {
            title: '내보내기 실패',
            content: '브라우저에서 다운로드가 허용되고 충분한 공간이 있는지 확인하세요'
          },
          otherIssues: {
            title: '기타 문제',
            content: '페이지를 새로고침하거나 브라우저 캐시를 지워보세요'
          }
        }
      }
    }
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

  // Intro page
  intro: {
    meta: {
      title: '허위정보로 가득한 세상에서 살아남기 위한 실용적 팩트체크 체크리스트',
      keywords: '팩트체크,정보 검증,신뢰성 평가,PWA,정보 리터러시,허위정보 대응'
    },
    hero: {
      title: '허위정보로 가득한 세상에서 살아남기 위한 실용적 팩트체크 체크리스트',
      subtitle: '정부 SNS 규제가 진행되는 가운데 자신의 눈과 마음으로 정보의 신뢰성을 평가하기 위한 간단한 체크리스트'
    },
    cta: {
      startNow: '지금 바로 검증 시작',
      useChecklist: '체크리스트 사용',
      learnMore: '더 알아보기'
    },
    sections: {
      regulation: {
        title: '정부 SNS 규제와 정보 통제의 현실',
        quote: '"허위정보 제거"라는 숭고한 명분 아래, 누가 "진실"을 결정하는가?',
        content1: '전 세계적으로 진행되는 SNS 규제는 "허위정보 방지 조치"라고 주장하지만, 실제로는 정부에게 불편한 정보를 통제하는 도구가 될 위험이 있습니다.',
        content2: '우리에게 필요한 것은 정부, 주류 언론, 또는 AI에 의존하지 않고 우리 자신이 정보의 신뢰성을 판단할 수 있는 능력입니다.'
      },
      balance: {
        title: '언론 통제 대 정보 품질: 균형 잡힌 접근법',
        control: {
          title: '통제의 위험',
          content: '권력에 의한 "진실"의 임의적 결정, 다양한 의견의 억압, 혁신에 대한 장애'
        },
        quality: {
          title: '품질 향상',
          content: '개인의 정보 리터러시 향상, 비판적 사고 육성, 자기 판단 능력 강화'
        },
        conclusion: '규제에 의존하기보다는 각 개인이 정보를 분별하는 능력을 개발하는 것이 건강한 사회의 기초를 형성합니다.'
      },
      aiLimitations: {
        title: 'AI 팩트체크의 한계',
        lead: 'ChatGPT와 Gemini 같은 AI는 편리하지만, 팩트체크에는 중요한 한계가 있습니다:',
        point1: '훈련 데이터 편향: AI는 훈련 데이터에 내재된 편향을 반영합니다',
        point2: '불완전한 맥락 이해: 미묘한 뉴앙스, 빈정, 문화적 맥락을 잘못 해석합니다',
        point3: '권위에 대한 과도한 의존: 주류 언론과 정부 기관의 정보를 비판 없이 "올바르다"고 판단합니다',
        conclusion: 'AI는 참고용으로는 도움이 될 수 있지만, 최종 판단은 인간이 내려야 합니다.'
      },
      features: {
        title: '이 앱의 기능'
      }
    },
    features: {
      systematic: {
        title: '체계적 평가',
        description: '20개 항목 체크리스트로 정보 출처부터 논리적 구조까지 종합적 평가'
      },
      privacy: {
        title: '완전한 개인정보 보호',
        description: '모든 데이터는 디바이스에 저장. 외부 서버로의 전송 없음'
      },
      pwa: {
        title: '오프라인 지원',
        description: 'PWA 기술 덕분에 인터넷 연결 없이도 사용 가능'
      },
      multilingual: {
        title: '12개 언어 지원',
        description: '일본어, 영어, 중국어를 포함한 12개 언어 완전 지원'
      }
    },
    finalCta: {
      title: '지금 바로 시작해보세요',
      subtitle: '정보의 바다에서 빠지지 않도록 자신의 판단력을 효련하세요'
    },
    share: {
      title: '이 도구 공유하기'
    }
  },

  // 개인정보 보호정책
  privacy: {
    title: '개인정보 보호정책',
    subtitle: '귀하의 개인정보를 보호하기 위한 저희의 약속',
    lastUpdated: '최종 업데이트: 2025년 1월 1일',
    introduction: {
      title: '개인정보 우선 디자인',
      content:
        'Fact Checklist는 개인정보 보호를 핵심 원칙으로 디자인되었습니다. 모든 데이터 처리는 서버 통신이나 데이터 수집 없이 귀하의 기기에서 로컬로 수행됩니다.'
    },
    dataCollection: {
      title: '데이터 수집',
      description: '저희는 개인 데이터나 사용 통계를 수집하지 않습니다.',
      details: [
        '서버 통신 없음 - 모든 처리는 로컬에서 수행',
        '대샰 쇼丰 또는 분석 도구 설치 없음',
        '개인 정보 수집 없음',
        '사용 데이터 전송 없음'
      ]
    },
    localStorage: {
      title: '로컬 저장소 사용',
      description: '데이터는 애플리케이션 기능을 위해 오직 귀하의 브라우저에만 저장됩니다.',
      details: [
        '평가 데이터는 브라우저 localStorage에 저장',
        '언어 설정은 로컬로 저장',
        '클라우드 동기화 또는 백업 없음',
        '데이터는 오직 귀하의 기기에만 남아 있음'
      ]
    },
    offlineFunctionality: {
      title: '오프라인 기능',
      description: '애플리케이션은 네트워크 요청 없이 완전히 오프라인으로 작동합니다.',
      details: [
        'Service Worker를 갖춘 Progressive Web App',
        '모든 리소스를 로컬로 캐시',
        '외부 API 호출 또는 데이터 가져오기 없음',
        '인터넷 없이 완전한 기능'
      ]
    },
    securityMeasures: {
      title: '보안 조치',
      description: '귀하의 데이터와 개인정보를 보호하기 위한 내장 보안 조치.',
      details: [
        'Content Security Policy (CSP) 구현',
        '제3자 스크립트나 추적 없음',
        '보안 코딩 방식 준수',
        '정기적인 보안 업데이트'
      ]
    },
    dataRetention: {
      title: '데이터 보존',
      description: '귀하는 데이터 보존에 대한 완전한 제어권을 가지고 있습니다.',
      details: [
        '데이터는 귀하가 보관하는 동안만 지속됨',
        '브라우저 설정을 통한 쉽운 삭제',
        '자동 데이터 만료 없음',
        '데이터 제거를 위한 명확한 지침'
      ]
    },
    policyUpdates: {
      title: '정책 업데이트',
      description: '이 개인정보 보호정책의 변경 사항은 명확하게 전달됩니다.',
      details: [
        'GitHub 리포지토리에서 업데이트 알림',
        '버전 이력 유지',
        '중요한 변경 사항의 명확한 알림',
        '지속적인 사용은 동의를 의미함'
      ]
    },
    contact: {
      title: '연락처 정보',
      content: '이 개인정보 보호정책에 대한 질문이 있으시면 다음을 통해 연락해 주세요 ',
      githubText: 'GitHub Issues',
      suffix: '.'
    }
  },

  // 앱 정보
  about: {
    title: '앱 정보',
    subtitle: '저희의 종합적인 팩트체크 시스템에 대해 알아보세요',
    hero: {
      title: '실용적 팩트체크 체크리스트',
      subtitle: '정보의 신뢰성을 과학적이고 체계적으로 평가하는 프로그레시브 웹 앱(PWA)',
      description: [
        '잘못된 정보와 오해의 소지가 있는 콘텐츠로 넘쳐나는 시대에, 이 실용적인 도구는 정보 문해력 향상을 지원합니다.',
        '4개 범주에서 20개 항목을 확인하여 정보의 신뢰성을 정량화하고 객관적인 판단을 지원합니다.'
      ],
      startButton: '지금 시작하기'
    },
    sections: {
      features: '기능',
      howItWorks: '작동 방식',
      categories: '평가 범주',
      techStack: '기술',
      performance: '성능'
    },
    sectionDescriptions: {
      howItWorks: '4가지 간단한 단계로 정보 신뢰성 평가',
      categories: '4개 범주를 통한 다차원 정보 평가',
      techStack: '최첨단 기술로 구축된 고성능 애플리케이션',
      performance: 'Lighthouse 감사의 고품질 점수'
    },
    stats: {
      performance: '성능',
      accessibility: '접근성',
      bestPractices: '모범 사례',
      seo: 'SEO'
    },
    cta: {
      title: '지금 시작하기',
      description: '정보 신뢰성을 과학적이고 체계적으로 평가할 준비가 되셨나요?',
      startButton: '평가 시작',
      helpButton: '더 알아보기'
    },
    features: {
      privacy: {
        title: '개인정보 우선',
        description: '모든 데이터는 추적이나 데이터 수집 없이 귀하의 기기에 남아 있습니다',
        details: [
          '서버 통신 없음 - 모든 처리는 로컬에서 수행',
          '추적이나 분석 도구 설치 없음',
          '모든 데이터는 브라우저 localStorage에만 저장',
          '완전한 개인정보 보호 보장'
        ]
      },
      offline: {
        title: '오프라인 기능',
        description: 'Progressive Web App으로 완전히 오프라인으로 작동',
        details: [
          '인터넷 연결 없이도 완전한 기능 사용 가능',
          '데스크톱/모바일 앱으로 설치 가능',
          '오프라인 캐싱을 위한 Service Worker',
          '빠른 시작과 반응형 성능'
        ]
      },
      scientific: {
        title: '과학적 방법론',
        description: '학술적 표준을 따른 증거 기반 평가 시스템',
        details: [
          '4개 범주에 걸쳐 20개 항목의 구조화된 체크리스트',
          '신뢰 수준을 갖춘 정량적 점수',
          '저널리즘과 학술 연구 표준에 기반',
          '객관적이고 재현 가능한 평가 프로세스'
        ]
      },
      export: {
        title: '다중 형식 내보내기',
        description: '공유와 아카이빙을 위해 다양한 형식으로 평가 결과 내보내기',
        details: [
          '한글 폰트 지원을 갖춘 PDF 내보내기',
          '웹 공유를 위한 HTML 형식',
          '데이터 교환을 위한 JSON',
          '문서화를 위한 Markdown'
        ]
      },
      history: {
        title: '평가 기록',
        description: '과거 평가의 자동 저장 및 관리',
        details: [
          '완료된 평가의 자동 저장',
          '최근 평가에 대한 빠른 접근',
          '비교 분석 기능',
          '과거 데이터의 내보내기'
        ]
      },
      support: {
        title: '접근성 지원',
        description: '보편적 접근과 사용성을 위해 설계됨',
        details: [
          '스크린 리더 호환성',
          '키보드 내비게이션 지원',
          '고대비 모드 사용 가능',
          '모든 기기에 대응하는 반응형 디자인'
        ]
      }
    },
    steps: {
      step1: {
        title: '정보 입력',
        description: '평가할 정보의 제목과 개요 입력'
      },
      step2: {
        title: '체계적 평가',
        description: '4개 범주에 걸쳐 20개 항목의 체크리스트 작업'
      },
      step3: {
        title: '점수 평가',
        description: '자동 계산된 신뢰성 점수와 신뢰 수준 검토'
      },
      step4: {
        title: '최종 판단',
        description: '최종 결정을 내리고 필요에 따라 결과 내보내기'
      }
    },
    categories: {
      critical: {
        name: '핵심 평가',
        description: '기본 신뢰성 평가를 위한 필수 요소',
        items: 6
      },
      detailed: {
        name: '상세 평가',
        description: '심층 품질 및 전문성 평가',
        items: 5
      },
      verification: {
        name: '검증 및 교차 확인',
        description: '검증 및 지지 증거 평가',
        items: 5
      },
      context: {
        name: '맥락 및 편견',
        description: '맥락 적절성 및 편견 평가',
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: '최적 성능을 위한 runes를 갖춘 최신 리액티브 프레임워크'
      },
      framework: {
        name: 'SvelteKit',
        description: '정적 생성 지원을 갖춘 풀스택 프레임워크'
      },
      language: {
        name: 'TypeScript',
        description: '엄격한 구성을 갖춘 타입 안전 개발'
      },
      styling: {
        name: '사용자 정의 CSS',
        description: 'CSS 사용자 정의 속성과 다크 모드를 갖춘 현대적 스타일링'
      },
      pwa: {
        name: 'Progressive Web App',
        description: '오프라인 기능을 갖춘 설치 가능한 앱'
      },
      export: {
        name: '다중 형식 내보내기',
        description: 'PDF, HTML, JSON, Markdown 내보내기 기능'
      }
    }
  },

  // 폼 관련
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
