/**
 * 日本語翻訳ファイル（ベース言語）
 * Japanese (ja) - Base language translations
 */

import type { TranslationKeys } from '../types.js';

export const metadata = {
  language: 'ja' as const,
  version: '1.0.0',
  lastUpdated: '2025-01-01',
  translator: 'Fact Checklist Team',
  completeness: 100
};

export const translations: TranslationKeys = {
  // 共通UI
  common: {
    loading: '読み込み中...',
    error: 'エラーが発生しました',
    success: '成功しました',
    cancel: 'キャンセル',
    save: '保存',
    delete: '削除',
    edit: '編集',
    close: '閉じる',
    back: '戻る',
    next: '次へ',
    previous: '前へ',
    search: '検索',
    clear: 'クリア',
    reset: 'リセット',
    copy: 'コピー',
    download: 'ダウンロード',
    share: '共有',
    print: '印刷',
    export: 'エクスポート',
    import: 'インポート',
    settings: '設定',
    help: 'ヘルプ',
    about: 'アプリについて',
    privacy: 'プライバシー',
    terms: '利用規約',
    home: 'ホーム',
    menu: 'メニュー',
    languages: '言語',
    darkMode: 'ダークモード',
    lightMode: 'ライトモード',
    systemMode: 'システム設定',
    guide: 'ガイド',
    showGuide: 'ガイドを表示',
    rip: {
      high: '高リスク',
      medium: '中リスク',
      low: '低リスク'
    }
  },

  // アプリケーション固有
  app: {
    title: '実用的事実確認チェックシート',
    subtitle: '情報の信頼性を科学的・体系的に評価するための統合システム',
    description: '情報の信頼性を科学的・体系的に評価するためのチェックシート',
    version: '1.0.0',
    author: 'Fact Checklist Team',
    copyright: '© 2025 Fact Checklist Team',
    poweredBy: 'Powered by'
  },

  // ナビゲーション
  navigation: {
    home: 'ホーム',
    about: 'アプリについて',
    help: 'ヘルプ・使い方',
    privacy: 'プライバシー',
    checklist: 'チェックリスト',
    history: '履歴',
    settings: '設定'
  },

  // チェックリスト関連
  checklist: {
    title: 'チェックリスト情報',
    description: 'チェックリストの詳細情報',
    newChecklist: '新しいチェックリスト',
    createChecklist: 'チェックリストを作成',
    editChecklist: 'チェックリストを編集',
    deleteChecklist: 'チェックリストを削除',
    completeChecklist: '評価を完了',
    checklistTitle: 'タイトル',
    checklistDescription: '対象情報の概要',
    targetInfo: '対象情報',
    targetInfoPlaceholder: '例: 新型コロナワクチンの効果に関する記事',
    evaluationNotes: '評価メモ・追加確認事項',
    evaluationNotesPlaceholder:
      '疑問点、追加で確認したい事項、総合的な印象など、自由に記録してください...',
    score: '評価スコア',
    confidenceLevel: '信頼度',
    finalJudgment: '最終判定',
    judgment: {
      accept: '採用',
      caution: '要注意',
      reject: '不採用',
      pending: '判定待ち'
    },
    judgmentAdvice: {
      accept: '採用を推奨します。十分な検証が行われています。',
      caution: '追加確認を推奨します。重要な決定には慎重に。',
      reject: '不採用を推奨します。信頼できる情報源を探しましょう。'
    },
    confidence: {
      high: '高い信頼性',
      medium: '中程度の信頼性',
      low: '低い信頼性',
      poor: '信頼性に問題'
    },
    advice: {
      high: '採用を推奨します。十分な検証が行われています。',
      medium: '追加確認を推奨します。重要な決定には慎重に。',
      low: '要注意です。さらなる検証が必要です。',
      poor: '不採用を推奨します。信頼できる情報源を探しましょう。'
    },
    // 詳細ページ用の新しいキー
    evaluationCompleted: '評価が完了しました！',
    evaluationCompletedDescription: 'チェックリストの評価結果を確認できます。',
    evaluationResults: '評価結果',
    totalScore: '総合スコア',
    itemsDetail: 'チェック項目詳細',
    recommendedActions: '推奨アクション',
    improvementTips: '信頼性向上のために',
    checkUncheckedItems: '未チェック項目の確認',
    additionalSourceResearch: '追加の情報源調査',
    expertConsultation: '専門家への確認',
    factCheckOrganizations: 'ファクトチェック機関の活用',
    statistics: '統計情報',
    checkedItems: 'チェック済み',
    uncheckedItems: '未チェック',
    completionRate: '完了率',
    actions: 'アクション',
    exportShare: 'エクスポート・共有',
    reEdit: '再編集',
    completed: '完了'
  },

  // チェック項目カテゴリ
  categories: {
    critical: {
      name: 'クリティカル評価（必須）',
      description: '情報の基本的信頼性を判断する最重要項目',
      emoji: '🚨'
    },
    detailed: {
      name: '詳細評価（重要）',
      description: '情報の質と専門性を評価する項目',
      emoji: '📝'
    },
    verification: {
      name: '検証・照合',
      description: '情報の検証可能性と裏付けを確認する項目',
      emoji: '🔍'
    },
    context: {
      name: '文脈・バイアス評価',
      description: 'バイアスと文脈の適切性を評価する項目',
      emoji: '🌐'
    }
  },

  // エクスポート機能
  export: {
    title: 'エクスポート',
    description: 'チェックリストを様々な形式でエクスポート',
    format: '形式',
    options: 'オプション',
    includeGuides: 'ガイドを含める',
    includeNotes: 'メモを含める',
    includeSummary: 'サマリーを含める',
    sectionBreaks: 'セクション区切り',
    pdfModes: {
      pixelPerfect: 'ピクセルパーフェクト',
      reliableFont: 'フォント信頼性重視',
      textBased: 'テキストベース'
    },
    formats: {
      pdf: 'PDF',
      html: 'HTML',
      json: 'JSON',
      markdown: 'Markdown'
    },
    progress: {
      initializing: '初期化中...',
      generating: '生成中...',
      processing: '処理中...',
      finalizing: '完了処理中...',
      completed: '完了',
      failed: '失敗'
    },
    generatedAt: '生成日時',
    summaryTable: {
      item: '項目',
      value: '値'
    },
    table: {
      section: 'セクション',
      completionRate: '完了率',
      completedItems: '完了項目'
    },
    sectionCompletionRates: 'セクション別達成率',
    achievementStatus: '達成状況',
    goodExamples: '良い例',
    badExamples: '悪い例'
  },

  // 履歴
  history: {
    title: '評価履歴',
    description: '過去の評価結果',
    empty: 'まだ評価履歴がありません。',
    lastEvaluated: '最終評価日',
    viewResults: '結果を表示',
    deleteHistory: '履歴を削除',
    clearAll: 'すべてクリア',
    recent: '最新5件',
    viewAll: '全て表示',
    createFirst: '最初のチェックリストを作成しましょう！'
  },

  // エラーメッセージ
  errors: {
    general: '予期しないエラーが発生しました',
    network: 'ネットワークエラーが発生しました',
    storage: 'ストレージエラーが発生しました',
    export: 'エクスポートに失敗しました',
    import: 'インポートに失敗しました',
    invalidData: '無効なデータです',
    unsupportedFeature: 'サポートされていない機能です',
    permissionDenied: '権限が拒否されました',
    fileNotFound: 'ファイルが見つかりません',
    fileTooLarge: 'ファイルサイズが大きすぎます',
    invalidFileFormat: '無効なファイル形式です'
  },

  // 成功メッセージ
  success: {
    saved: '保存しました',
    exported: 'エクスポートしました',
    imported: 'インポートしました',
    deleted: '削除しました',
    copied: 'コピーしました',
    shared: '共有しました'
  },

  // 確認メッセージ
  confirmations: {
    delete: '本当に削除しますか？',
    reset: 'リセットしますか？',
    clearHistory: '履歴をすべて削除しますか？',
    overwrite: '上書きしますか？',
    discard: '変更を破棄しますか？'
  },

  // ヘルプ・ガイド
  help: {
    title: 'ヘルプ・使い方ガイド',
    subtitle: '事実確認チェックシートの使い方を詳しく説明します',
    tableOfContents: '目次',

    // ナビゲーション
    navigation: {
      overview: '概要',
      usage: '使い方',
      categories: 'カテゴリー',
      scoring: 'スコア計算',
      features: '機能',
      privacy: 'プライバシー',
      troubleshooting: 'トラブルシューティング'
    },

    // セクション
    sections: {
      overview: {
        title: 'アプリ概要',
        emoji: '📋',
        description: '事実確認チェックシートの基本的な使い方',
        content:
          'このアプリは、インターネット上の情報の信頼性を科学的・体系的に評価するためのツールです。4つの主要カテゴリ（クリティカル評価・詳細評価・検証評価・コンテキスト評価）にわたって、合計20項目をチェックすることで、情報の信頼度を数値化し、最終的な判定を支援します。',
        subSections: {
          features: {
            title: '主な特徴',
            content:
              '• 完全プライベート: すべてのデータは端末内に保存\n• オフライン対応: ネットワークなしでも動作\n• 科学的評価: 体系的なチェック項目\n• 履歴管理: 過去の評価結果を保存・参照'
          },
          targetUsers: {
            title: '対象ユーザー',
            content:
              '• 一般の方: ネット情報の信頼性を確認したい方\n• 専門家: 情報分析の補助ツールとして\n• 報道関係者: ファクトチェックの支援として'
          }
        }
      },
      usage: {
        title: '使い方ガイド',
        emoji: '🚀',
        description: 'ステップバイステップの利用手順',
        content: 'チェックリストの作成から評価完了まで、以下の手順で進めてください。',
        subSections: {
          step1: {
            title: 'Step 1: チェックリスト作成',
            content:
              '1. タイトルと対象情報の概要を入力\n2. 評価したい情報の詳細を記録\n3. 自動的にチェックリストが作成されます'
          },
          step2: {
            title: 'Step 2: 項目評価',
            content:
              '1. クリティカル評価から開始\n2. 各項目を順番にチェック\n3. 不明な項目は詳細ガイドを参照\n4. スコアがリアルタイムで更新されます'
          },
          step3: {
            title: 'Step 3: 最終判定',
            content:
              '1. すべての項目をチェック\n2. 評価メモを記録（任意）\n3. 最終判定を選択（採用・要注意・不採用）\n4. 「評価を完了」ボタンを押下'
          },
          step4: {
            title: 'Step 4: 結果確認・共有',
            content:
              '1. 評価結果ページで詳細確認\n2. 必要に応じてエクスポート\n3. PDF・HTML・JSON・Markdown形式で出力可能'
          }
        }
      },
      categories: {
        title: '評価カテゴリ',
        emoji: '📊',
        description: '4つの評価カテゴリの詳細説明',
        content: '情報の信頼性を多角的に評価するため、4つのカテゴリに分けてチェックを行います。',
        subSections: {
          critical: {
            title: 'クリティカル評価（Critical）',
            content:
              '最も重要な基本的信頼性を評価します。\n• 権威ある情報源からの発表\n• 一次情報の確認\n• 複数の独立した情報源\n• 匿名・出典不明でない\n• 扇動的・煽情的表現の少なさ\n• 論理的一貫性'
          },
          detailed: {
            title: '詳細評価（Detailed）',
            content:
              '情報の質と詳細度を評価します。\n• 情報の新しさ\n• 更新・訂正の履歴\n• 適切な専門知識\n• 十分な詳細と根拠\n• 適切な引用・参照\n• 引用元の確認可能性'
          },
          verification: {
            title: '検証評価（Verification）',
            content:
              '外部検証と客観性を評価します。\n• 他情報源との照合\n• ファクトチェック組織の検証\n• 検証可能なデータ\n• 手法・方法論の妥当性'
          },
          context: {
            title: 'コンテキスト評価（Context）',
            content:
              '情報の背景と偏向を評価します。\n• 利害関係の開示\n• バランスの取れた視点\n• 十分な背景情報\n• 適用範囲の明確化'
          }
        }
      },
      scoring: {
        title: 'スコアリング',
        emoji: '🎯',
        description: 'スコア計算と判定基準の詳細',
        content: '各項目のチェック状況に基づいて、信頼度スコアが自動計算されます。',
        subSections: {
          calculation: {
            title: '計算方法',
            content:
              '• 各カテゴリの重要度による重み付け\n• クリティカル評価: 35%\n• 詳細評価: 25%\n• 検証評価: 25%\n• コンテキスト評価: 15%'
          },
          criteria: {
            title: '判定基準',
            content:
              '• 80%以上: 高い信頼性 → 「採用」推奨\n• 60-79%: 中程度の信頼性 → 追加確認推奨\n• 40-59%: 低い信頼性 → 「要注意」\n• 40%未満: 信頼性に問題 → 「不採用」推奨'
          },
          finalJudgment: {
            title: '最終判定',
            content:
              'スコアは参考値です。最終的な判定は、評価者の専門知識と総合的な判断に委ねられます。「採用」「要注意」「不採用」から選択してください。'
          }
        }
      },
      features: {
        title: '機能詳細',
        emoji: '⚙️',
        description: 'アプリの各種機能について',
        content: 'さまざまな機能を使って、効率的に情報評価を行えます。',
        subSections: {
          detailedGuide: {
            title: '詳細ガイドモード',
            content:
              '各チェック項目の詳細説明と具体例を表示します。初めて使用する方や、項目の判断基準を確認したい場合に便利です。'
          },
          exportFunction: {
            title: 'エクスポート機能',
            content: '評価結果を4つの形式で出力可能です。',
            exportFormats: {
              title: '出力形式一覧',
              formats: {
                pdf: {
                  name: 'PDF',
                  features: '• 印刷に最適\n• 日本語フォント対応\n• 3つのモードから選択可能',
                  usage: '報告書、アーカイブ、印刷配布'
                },
                html: {
                  name: 'HTML',
                  features: '• ブラウザで表示可能\n• CSSスタイル埋め込み済み\n• 単一ファイル',
                  usage: 'Web共有、オンライン閲覧'
                },
                json: {
                  name: 'JSON',
                  features: '• 構造化データ\n• プログラム処理可能\n• 完全なデータ保持',
                  usage: 'システム連携、データ分析'
                },
                markdown: {
                  name: 'Markdown',
                  features: '• テキストエディタで編集可\n• GitHub等で表示最適\n• シンプルな形式',
                  usage: '文書編集、バージョン管理'
                }
              }
            },
            pdfModes: {
              title: 'PDF生成モード（いずれか1つを選択）',
              modes: {
                pixelPerfect: {
                  name: '🎨 ピクセルパーフェクト',
                  subtitle: '（デフォルト・推奨）',
                  description:
                    'ブラウザの印刷機能を使用して、画面表示と完全に同じ見た目のPDFを生成',
                  features:
                    '• グラデーション・色・レイアウト完全再現\n• 印刷プレビューで確認可能\n• 最高品質の出力'
                },
                reliableFont: {
                  name: '🔥 確実な日本語対応',
                  description: 'jsPDFライブラリで直接PDF生成し、日本語フォントを確実に埋め込み',
                  features:
                    '• 日本語フォント埋め込み保証\n• 文字化け完全防止\n• CSP準拠・セキュア\n• 透かし・目次等の高度機能'
                },
                textBased: {
                  name: '🔤 テキストベース',
                  subtitle: '（レガシー・PWA方式）',
                  description: 'PWA機能を活用したテキスト中心のシンプルなPDF生成',
                  features:
                    '• PWAの保存・共有機能利用\n• 文字検索・コピー可能\n• ファイルサイズ最小\n• モバイル最適化'
                }
              }
            },
            exportOptions: {
              title: '共通エクスポートオプション',
              options: {
                summary: {
                  name: '📊 評価サマリー',
                  description: 'スコア・判定結果・達成率の概要',
                  formats: '全形式'
                },
                guides: {
                  name: '📚 ガイド内容',
                  description: '各チェック項目の詳細説明と例',
                  formats: '全形式'
                },
                notes: {
                  name: '📝 評価メモ',
                  description: '追加したメモ・コメント',
                  formats: '全形式'
                },
                sectionBreaks: {
                  name: '📄 セクション区切り',
                  description: 'カテゴリごとの改ページ・区切り線',
                  formats: 'PDF、Markdown'
                }
              }
            },
            exportNote:
              '📌 注意: PDF生成モードは排他的です。3つのモードのうち、いずれか1つのみ選択できます。デフォルトでは最も高品質な「ピクセルパーフェクト」モードが選択されています。'
          },
          historyManagement: {
            title: '履歴管理',
            content:
              '過去の評価結果を自動保存します。\n• 最新5件をサイドバーに表示\n• 全履歴の一覧表示\n• 個別削除機能\n• 再編集機能（完了前のみ）'
          },
          pwaSupport: {
            title: 'PWA対応・高度機能',
            content:
              '• ホーム画面への追加\n• オフライン動作\n• プラットフォーム適応型機能\n• フォントキャッシュシステム\n• デバイス別最適化\n• 自動アップデート'
          }
        }
      },
      privacy: {
        title: 'プライバシー',
        emoji: '🔐',
        description: 'データの取り扱いとセキュリティ',
        content: 'ユーザーのプライバシー保護を最優先に設計されています。',
        subSections: {
          localStorage: {
            title: 'ローカル保存',
            content:
              '• すべてのデータは端末内のみに保存\n• サーバーへの送信は一切なし\n• 第三者へのデータ提供なし\n• 個人を特定する情報は収集しません'
          },
          security: {
            title: 'セキュリティ',
            content:
              '• HTTPS通信の強制\n• Content Security Policy実装\n• XSS攻撃防止対策\n• Same-Origin Policy遵守'
          },
          dataDeletion: {
            title: 'データ削除',
            content:
              'ユーザーはいつでも保存されたデータを削除できます。ブラウザのデータ削除でも完全に削除されます。'
          }
        }
      },
      troubleshooting: {
        title: 'トラブルシューティング',
        emoji: '🔧',
        description: 'よくある問題と解決方法',
        content: '使用中に問題が発生した場合の対処法をご案内します。',
        subSections: {
          dataNotSaved: {
            title: 'データが保存されない',
            content:
              '• ブラウザのプライベートモードを確認\n• ストレージ容量の確認\n• ブラウザの設定でローカルストレージが有効か確認\n• 別のブラウザで試す'
          },
          scoreNotDisplayed: {
            title: 'スコアが表示されない',
            content:
              '• ページのリロード\n• ブラウザのキャッシュクリア\n• JavaScript が有効か確認\n• ブラウザのコンソールでエラー確認'
          },
          exportFailed: {
            title: 'エクスポートできない',
            content:
              '• ポップアップブロックの確認\n• ダウンロード設定の確認\n• ブラウザの権限設定\n• 十分なストレージ容量があるか確認'
          },
          otherIssues: {
            title: 'その他の問題',
            content:
              '上記で解決しない場合は、GitHubのIssuesからお気軽にお問い合わせください。可能な限りサポートいたします。'
          }
        }
      }
    }
  },

  // プライバシーポリシー
  privacy: {
    title: 'プライバシーポリシー',
    subtitle:
      '実用的事実確認チェックシートのプライバシーポリシー。データの取り扱いと保護について説明します。',
    lastUpdated: '最終更新: 2025年6月28日',
    introduction: {
      title: '🛡️ プライバシー保護への取り組み',
      content:
        '「実用的事実確認チェックシート」は、ユーザーのプライバシー保護を最重要課題として位置づけています。このアプリケーションは完全にローカル環境で動作し、サーバーへのデータ送信は一切行いません。'
    },
    dataCollection: {
      title: '📊 データ収集について',
      description: '当アプリケーションはユーザーのプライバシーを最優先に考慮しています。',
      details: [
        'すべてのチェックリストデータは、お使いの端末内にのみ保存されます',
        'サーバーへのデータ送信は一切行いません',
        '第三者へのデータ提供は一切ありません',
        'ログイン機能はなく、個人を特定する情報は収集しません'
      ]
    },
    localStorage: {
      title: '💾 ローカルストレージの使用',
      description: 'データはブラウザのローカルストレージ技術を使用して保存されます。',
      details: [
        'IndexedDBを主に使用してデータを保存',
        '保存されるデータは評価結果と設定情報のみ',
        'フォントキャッシュも端末内のみに保存',
        'ユーザーはいつでもデータを削除できます',
        'ブラウザのデータ削除でも完全に削除されます'
      ]
    },
    offlineFunctionality: {
      title: '🔒 オフライン機能',
      description: 'PWAとして完全オフラインで動作します。',
      details: [
        'インターネット接続なしでも全機能が利用可能',
        'データの同期や送信は発生しません',
        '外部APIへのアクセスは行いません',
        '日本語フォントも端末内に安全に保存',
        '完全にプライベートな環境で利用できます'
      ]
    },
    securityMeasures: {
      title: '⛅ セキュリティ対策',
      description: 'アプリケーションのセキュリティについて。',
      details: [
        'Content Security Policy (CSP) の実装',
        'HTTPS通信の強制',
        'Same-Origin Policy の遵守',
        'XSS攻撃の防止対策の実装',
        'フォント読み込みもCSPに準拠'
      ]
    },
    dataRetention: {
      title: '🗂️ データ保持期間',
      description: 'データの保持とアクセスについて。',
      details: [
        'データは端末内に永続的に保存されます',
        'ユーザーが明示的に削除するまで保持されます',
        'フォントキャッシュも自動管理されます',
        'アプリケーションの削除でデータも完全に削除されます',
        '復旧機能はないため、重要なデータはエクスポートしてください'
      ]
    },
    policyUpdates: {
      title: '📋 ポリシー更新',
      description: 'プライバシーポリシーの変更について。',
      details: [
        '重要な変更がある場合は、アプリケーション内で通知します',
        '軽微な修正は随時行われます',
        '最新版は常にこのページで確認できます',
        'ご不明な点がありましたら、GitHubのIssuesでお知らせください'
      ]
    },
    contact: {
      title: '📞 お問い合わせ',
      content: 'プライバシーポリシーに関するご質問やご不明な点がございましたら、',
      githubText: 'GitHubのIssues',
      suffix: 'からお気軽にお問い合わせください。'
    }
  },

  // アプリについて
  about: {
    title: 'アプリについて',
    subtitle: '実用的事実確認チェックシートの詳細情報とアプリの特徴について',
    hero: {
      title: '実用的事実確認チェックシート',
      subtitle: '情報の信頼性を科学的・体系的に評価するためのPWA（Progressive Web App）',
      description: [
        '偽情報やミスリーディングな情報が氾濫する現代において、情報リテラシーの向上を支援する実用的なツールです。',
        '4つのカテゴリで20項目をチェックすることで、情報の信頼度を数値化し、客観的な判定を支援します。'
      ],
      startButton: '今すぐ始める'
    },
    features: {
      privacy: {
        title: '完全プライベート',
        description: 'すべてのデータは端末内のみに保存',
        details: [
          'サーバーへのデータ送信は一切なし',
          '第三者へのデータ提供なし',
          '個人を特定する情報は収集しません',
          'ユーザーがいつでもデータを削除可能'
        ]
      },
      offline: {
        title: 'PWA・オフライン対応',
        description: 'ネットワークなしでも完全動作',
        details: [
          'ホーム画面への追加可能',
          '完全オフライン動作',
          '自動アップデート対応',
          'モバイルアプリのような体験'
        ]
      },
      scientific: {
        title: '科学的評価システム',
        description: '4カテゴリ20項目の包括的チェック',
        details: [
          '体系的な評価基準',
          '重み付けによる信頼度算出',
          '客観的な判定支援',
          '専門家監修のチェック項目'
        ]
      },
      export: {
        title: '多形式エクスポート',
        description: '高度PDF・HTML・JSON・Markdown対応',
        details: [
          '日本語フォント埋め込みPDF出力',
          '透かし・目次・メタデータ付きPDF',
          '進捗表示とエラーハンドリング',
          'ブラウザ表示用HTML',
          'プログラム処理用JSON',
          'テキストエディタ用Markdown'
        ]
      },
      history: {
        title: '履歴管理',
        description: '過去の評価結果を保存・参照',
        details: [
          '自動的な評価履歴保存',
          '最新5件の簡易表示',
          '詳細履歴の一覧表示',
          '個別削除・一括クリア機能',
          '評価結果の再編集機能'
        ]
      },
      support: {
        title: '国際化・アクセシビリティ',
        description: '12言語対応とユニバーサルデザイン',
        details: [
          '12言語での完全国際化対応',
          'RTL言語（アラビア語）サポート',
          'キーボードナビゲーション',
          'スクリーンリーダー対応',
          '高コントラストモード'
        ]
      }
    },
    steps: {
      step1: {
        title: 'チェックリスト作成',
        description: 'タイトルと対象情報を入力して、評価を開始します。'
      },
      step2: {
        title: '項目を順次チェック',
        description: '4つのカテゴリに沿って、20項目を順番に評価していきます。'
      },
      step3: {
        title: 'スコア確認・判定',
        description: 'リアルタイムで更新されるスコアを確認し、最終判定を行います。'
      },
      step4: {
        title: '結果の保存・共有',
        description: '評価結果を保存し、必要に応じて様々な形式でエクスポートできます。'
      }
    },
    categories: {
      critical: {
        name: 'クリティカル評価',
        description: '情報の基本的信頼性を判断する最重要項目',
        items: 6
      },
      detailed: {
        name: '詳細評価',
        description: '情報の質と専門性を評価する項目',
        items: 6
      },
      verification: {
        name: '検証・照合',
        description: '情報の検証可能性と裏付けを確認する項目',
        items: 4
      },
      context: {
        name: '文脈・バイアス評価',
        description: 'バイアスと文脈の適切性を評価する項目',
        items: 4
      }
    },
    techStack: {
      frontend: {
        name: 'Svelte 5',
        description: '最新のreactiveフレームワークとrunes'
      },
      language: {
        name: 'TypeScript',
        description: '型安全性とコード品質の確保'
      },
      framework: {
        name: 'SvelteKit',
        description: '静的サイト生成とPWA対応'
      },
      styling: {
        name: 'CSS Variables',
        description: 'デザインシステムとテーマ対応'
      },
      pwa: {
        name: 'PWA・オフライン',
        description: 'Service Workerとキャッシュ戦略'
      },
      export: {
        name: 'PDF生成',
        description: 'jsPDF・html2canvasによる高品質出力'
      }
    },
    sections: {
      features: '主な機能',
      howItWorks: '使い方',
      categories: '評価カテゴリ',
      techStack: '技術スタック',
      performance: 'パフォーマンス'
    },
    sectionDescriptions: {
      howItWorks: '4つの簡単なステップで情報の信頼性を評価',
      categories: '4つのカテゴリで多角的に情報を評価',
      techStack: '最新の技術で構築された高性能アプリケーション',
      performance: 'Lighthouse監査による高品質スコア'
    },
    stats: {
      performance: 'パフォーマンス',
      accessibility: 'アクセシビリティ',
      bestPractices: 'ベストプラクティス',
      seo: 'SEO'
    },
    cta: {
      title: '今すぐ始めましょう',
      description: '情報の信頼性を、科学的・体系的に評価してみませんか？',
      startButton: '評価を始める',
      helpButton: '詳しい使い方を見る'
    }
  },

  // アクセシビリティ
  accessibility: {
    skipToContent: 'コンテンツへスキップ',
    mainNavigation: 'メインナビゲーション',
    searchForm: '検索フォーム',
    languageSelector: '言語選択',
    themeToggle: 'テーマ切り替え',
    closeDialog: 'ダイアログを閉じる',
    openMenu: 'メニューを開く',
    expandSection: 'セクションを展開',
    collapseSection: 'セクションを折りたたむ'
  },

  // 日付・時刻
  datetime: {
    justNow: 'たった今',
    minutesAgo: '分前',
    hoursAgo: '時間前',
    daysAgo: '日前',
    weeksAgo: '週間前',
    monthsAgo: 'ヶ月前',
    yearsAgo: '年前',
    createdAt: '作成日時',
    updatedAt: '更新日時',
    completedAt: '完了日時'
  },

  // 単位・数値
  units: {
    items: '項目',
    percent: '%',
    score: 'スコア',
    total: '合計',
    completed: '完了',
    remaining: '残り',
    of: '/'
  },

  // フォーム関連
  forms: {
    titleLabel: 'タイトル',
    titlePlaceholder: '例: 新型コロナワクチンの効果に関する記事',
    descriptionLabel: '対象情報の概要',
    descriptionPlaceholder: '評価対象となる情報の詳細を記入してください...',
    notesLabel: '評価メモ・追加確認事項',
    notesPlaceholder: '疑問点、追加で確認したい事項、総合的な印象など、自由に記録してください...'
  },

  // UI テキスト
  ui: {
    quickStartGuide:
      'まず「クリティカル評価」から始めて、基本的な信頼性を確認しましょう。各項目をチェックすると、右側のスコアがリアルタイムで更新されます。',
    guideModeDetailed: '📖 詳細ガイドモード',
    guideModeNormal: '📝 通常モード',
    completeEvaluation: '✅ 評価を完了'
  },

  // チェックリスト項目
  checklistItems: {
    // クリティカル評価
    'source-authority': {
      title: '権威ある情報源からの発表',
      description: '政府機関、学術機関、専門機関、査読済み論文、信頼できるメディアなど',
      guideTitle: '🏛️ 権威ある情報源の判断基準',
      guideContent:
        '政府・公的機関：省庁、統計局、中央銀行、裁判所など\n学術機関：大学、研究所、学会、査読済み学術誌\n専門機関：専門分野に応じた国内外の機関\n信頼できるメディア：編集方針が明確で、訂正・謝罪の実績がある報道機関',
      examplesGood: ['厚生労働省の統計データ', 'Nature誌の査読論文', '日本銀行の公式発表'],
      examplesBad: ['個人ブログの情報', '匿名掲示板の投稿', '広告目的のサイト']
    },
    'source-primary': {
      title: '一次情報の確認',
      description: '又聞き・伝聞ではなく、直接的な情報源からの発信',
      guideTitle: '🎯 一次情報の見極め方',
      guideContent:
        '一次情報：研究者本人の論文、当事者の証言、公式発表、生データ\n二次情報：解説記事、まとめサイト、他者の分析\n確認ポイント：「〜によると」「〜が報じた」などの表現に注意',
      examplesGood: ['研究者が自ら発表した論文', '企業の決算発表', '政府の公式統計'],
      examplesBad: ['「専門家によると」', '「ある調査で」などの曖昧な引用']
    },
    'source-multiple': {
      title: '複数の独立した情報源',
      description: '異なる立場・組織からの同様の報告や確認',
      guideTitle: '🔄 独立性の確認方法',
      guideContent:
        '独立した情報源：異なる組織、資金源、利害関係を持つ情報源\n最低基準：2-3の独立した信頼できる情報源からの確認\n注意点：同じプレスリリースを元にした記事は「独立」ではない',
      examplesGood: ['政府発表 + 学術研究 + 複数メディア報道', '異なる研究機関による同様の結果'],
      examplesBad: ['同じ企業グループ内の複数メディア', '転載記事のみ']
    },
    'warning-anonymous': {
      title: '匿名・出典不明な情報ではない',
      description: '作成者・発信者が明確に特定できる',
      guideTitle: '🔍 発信者特定の確認ポイント',
      guideContent:
        '必須情報：作成者の実名、所属、連絡先、専門性\n警告サイン：「内部関係者によると」「匿名の専門家」「ある研究」\n許容される匿名：ジャーナリズムでの情報提供者保護（ただし記者は特定可能）',
      examplesGood: ['田中一郎氏（東京大学医学部教授）によると', '厚生労働省○○課長の発言'],
      examplesBad: ['ある医師によると', '関係者の話では', '匿名の専門家']
    },
    'warning-sensational': {
      title: '扇動的・煽情的な表現が少ない',
      description: '冷静で客観的な記述、感情に訴える過度な表現がない',
      guideTitle: '⚠️ 扇動的表現の見分け方',
      guideContent:
        '警告する表現：「絶対に」「完全に」「驚愕の」「衝撃的な」「○○業界が隠す」\n感情誘導：恐怖、怒り、嫉妬を煽る表現\n適切な表現：「研究結果によると」「データが示している」「専門家の見解では」',
      examplesGood: [
        '研究では75%の被験者に改善が見られた',
        'データによると統計的有意差が確認された'
      ],
      examplesBad: ['医師が絶対に教えない驚愕の真実！', '業界が隠蔽する衝撃的事実']
    },
    'warning-logical': {
      title: '論理的な矛盾がない',
      description: '内容に一貫性があり、明らかな論理的飛躍がない',
      guideTitle: '🧠 論理的一貫性の確認方法',
      guideContent:
        'チェック項目：\n• 前提と結論が適切につながっているか\n• 因果関係が明確に示されているか\n• 矛盾する主張が同時にされていないか\nよくある論理的誤謬：相関関係を因果関係と混同、極端な一般化',
      examplesGood: ['統計的に有意差があり、他の要因も考慮した分析', '段階的な論理展開'],
      examplesBad: ['AとBが同時に起きたからAがBの原因', '極端な例からの一般化']
    },
    // 詳細評価
    'time-recent': {
      title: '情報の新しさ',
      description: '公開日が明記され、内容に適した新しさを保っている',
      guideTitle: '⏰ 情報の適切な新しさの判断',
      guideContent:
        '分野別の基準：\n• ニュース・時事：数日～1週間以内\n• 医学・科学：2-3年以内（基礎研究は5年程度まで）\n• 技術・IT：1-2年以内\n• 法律・制度：最新の改正を反映\n確認ポイント：公開日時の明記、最終更新日の記載',
      examplesGood: ['2024年12月発表', '最終更新：2025年1月', '最新の法改正を反映'],
      examplesBad: ['日付の記載なし', '5年前の技術情報', '古い法律に基づく説明']
    },
    'time-update': {
      title: '更新・訂正の履歴',
      description: '必要に応じて内容が更新され、訂正が透明に行われている',
      guideTitle: '📝 透明な更新・訂正の確認',
      guideContent:
        '良い更新の特徴：\n• 更新内容の明記\n• 訂正理由の説明\n• 更新日時の記録\n• 重要な変更の場合は注記\n信頼性の指標：間違いを認めて訂正する姿勢',
      examplesGood: ['2025年1月15日更新：統計データを最新版に差し替え', '訂正履歴の明記'],
      examplesBad: ['古い情報のまま放置', '訂正の記録なし', '無言での内容変更']
    },
    'expert-knowledge': {
      title: '適切な専門知識',
      description: '作成者が該当分野の十分な知識・経験を持っている',
      guideTitle: '🎓 専門性の確認方法',
      guideContent:
        '確認項目：\n• 関連分野での学位・資格\n• 実務経験・研究歴\n• 学会発表・論文発表実績\n• 専門機関での職歴\n注意：関連分野での専門性が重要（医師が経済を語る場合など）',
      examplesGood: ['感染症専門医がワクチンについて解説', '経済学博士が金融政策を分析'],
      examplesBad: ['専門外の有名人が医学について断言', '資格不明の人が法律解説']
    },
    'detail-sufficient': {
      title: '十分な詳細と根拠',
      description: '結論に至る過程や根拠が適切に説明されている',
      guideTitle: '📋 根拠の十分性の判断',
      guideContent:
        '必要な要素：\n• 主張を支持する具体的データ\n• 方法論の説明\n• 制限・限界の言及\n• 反対意見への言及\n警告サイン：結論だけで過程が不明、根拠が曖昧',
      examplesGood: ['サンプル数、統計手法、信頼区間まで記載', '方法論の詳細説明'],
      examplesBad: ['効果が証明されただけで詳細なし', '結論のみで根拠不明']
    },
    'citation-proper': {
      title: '適切な引用・参照',
      description: '重要な主張に対して信頼できる情報源が示されている',
      guideTitle: '📚 適切な引用の基準',
      guideContent:
        '引用すべき内容：\n• 統計データ・数値\n• 専門的な主張\n• 他者の研究結果\n• 法令・規則の内容\n引用形式：著者名、出版年、タイトル、出版社など最低限の情報',
      examplesGood: ['田中(2024)の研究によると...', '厚労省統計(2025)では...'],
      examplesBad: ['研究によると（出典不明）', 'データでは（詳細不明）']
    },
    'citation-accessible': {
      title: '引用元の確認可能性',
      description: '引用された情報源に実際にアクセスして確認できる',
      guideTitle: '🌐 引用元アクセス性の確認',
      guideContent:
        '理想的な状態：\n• 直接リンクまたはDOI\n• 公開されている情報源\n• 検索可能な具体的情報\n許容範囲：有料データベース、図書館で確認可能な資料\n問題のある引用：私的な会話、確認不可能な内部資料',
      examplesGood: ['URLリンク付き', 'DOI番号付き論文', 'ISBN番号付きの書籍'],
      examplesBad: ['内部資料によると', '個人的な話し合いで', 'アクセス不可能な資料']
    },
    // 検証・照合
    'cross-check': {
      title: '他情報源との照合',
      description: '独立した複数の情報源で同様の内容が確認できる',
      guideTitle: '🔍 効果的なクロスチェック方法',
      guideContent:
        '段階的確認：\n1. 同じ事実を報じる他の信頼できる情報源を探す\n2. 異なる角度から同じ事象を扱った報告を確認\n3. 反対意見や批判的視点も調査\n確認ツール：Google Scholar、公的データベース、ファクトチェックサイト',
      examplesGood: ['複数の査読論文で同様の結果', '政府統計との整合性確認'],
      examplesBad: ['1つの情報源のみ', '同じ出典を使った複数記事']
    },
    'fact-check': {
      title: 'ファクトチェック組織の検証',
      description: '信頼できるファクトチェック機関による検証がある',
      guideTitle: '✅ 信頼できるファクトチェック機関',
      guideContent:
        '国際的な組織：Snopes、PolitiFact、AFP Fact Check、Full Fact（英国）など、立場・地域の異なる機関\n日本の組織：InFact、日本ファクトチェックセンター、FIJ（ファクトチェック・イニシアティブ）など\nメディア系：NHK、朝日新聞、読売新聞のファクトチェック部門\n確認方法：該当情報をファクトチェックサイトで検索',
      examplesGood: ['複数のファクトチェック機関が「真実」と判定', '国際機関による検証'],
      examplesBad: ['ファクトチェックで「偽情報」と判定', '検証されていない情報']
    },
    'data-verifiable': {
      title: '検証可能なデータ',
      description: '主張を支持するデータが客観的に確認できる',
      guideTitle: '📈 データの検証可能性の確認',
      guideContent:
        '確認すべき要素：\n• データの出典（調査機関、統計局など）\n• 収集方法・期間の明記\n• サンプルサイズ・対象の詳細\n• 生データまたは詳細データへのアクセス可能性\n警告サイン：「内部データ」「独自調査」のみで詳細不明',
      examplesGood: ['総務省統計局データ', '論文の補足資料でデータ公開'],
      examplesBad: ['弊社調査によると（詳細な調査概要なし）', '内部データのみ']
    },
    methodology: {
      title: '手法・方法論の妥当性',
      description: '研究や調査の方法論が適切で再現可能',
      guideTitle: '🔬 方法論の妥当性評価',
      guideContent:
        '評価ポイント：\n• 研究デザインの適切性（RCT、コホート研究など）\n• バイアス対策の有無\n• 統計手法の妥当性\n• 再現性の担保（プロトコル公開など）\n専門外でも確認できる点：手法の詳細記載、他研究との比較',
      examplesGood: ['二重盲検試験', '適切な対照群設定', 'プロトコル公開'],
      examplesBad: ['方法論の記載なし', '偏ったサンプル選択', '再現不可能な手法']
    },
    // 文脈・バイアス評価
    'bias-disclosure': {
      title: '利害関係の開示',
      description: '金銭的・政治的・個人的な利害関係が適切に開示されている',
      guideTitle: '💰 利害関係の確認項目',
      guideContent:
        '開示すべき利害関係：\n• 研究資金の提供元\n• 企業からの謝礼・コンサルティング料\n• 株式保有などの金銭的利益\n• 政治的・イデオロギー的立場\n確認方法：「利益相反」「COI」「資金提供」などの記載を探す',
      examplesGood: ['本研究は○○財団の助成を受けて実施', 'COI（利益相反）の明記'],
      examplesBad: ['製薬会社の研究で利益相反の記載なし', '資金源不明']
    },
    'balanced-view': {
      title: 'バランスの取れた視点',
      description: '異なる立場や反対意見も考慮されている',
      guideTitle: '⚖️ バランス評価の観点',
      guideContent:
        '確認ポイント：\n• 反対意見・批判的視点の紹介\n• 異なる研究結果の言及\n• 不確実性・限界の言及\n• 複数の専門家の意見\n警告サイン：一方的な主張のみ、都合の良い情報だけ選択',
      examplesGood: ['一方で、○○教授は異なる見解を示している', '複数の研究結果を比較'],
      examplesBad: ['支持する証拠のみ列挙', '反対意見への言及なし']
    },
    'context-adequate': {
      title: '十分な背景情報',
      description: '情報を理解するのに必要な背景や文脈が提供されている',
      guideTitle: '🌍 文脈情報の確認項目',
      guideContent:
        '必要な背景情報：\n• 歴史的経緯・これまでの研究\n• 関連する法律・制度\n• 社会的・文化的背景\n• 国際的な動向・比較\n評価ポイント：読者が適切に理解・判断できる文脈の提供',
      examplesGood: ['過去の類似事例', '他国との比較データも提示', '歴史的背景の説明'],
      examplesBad: ['単発の数値のみ', '背景情報なし', '文脈を無視した比較']
    },
    'scope-clear': {
      title: '適用範囲の明確化',
      description: '情報の適用可能な範囲や限界が明確に示されている',
      guideTitle: '🎯 適用範囲の明確化',
      guideContent:
        '明確にすべき範囲：\n• 対象となる人・地域・期間\n• 研究の限界・制約\n• 一般化可能性の程度\n• 除外されるケース\n重要性：過度な一般化や誤用を防ぐため',
      examplesGood: [
        '日本の成人男性を対象とした研究のため、他の集団への適用は慎重に',
        '限界の明記'
      ],
      examplesBad: ['限定的な研究結果を無制限に一般化', '適用範囲不明']
    }
  }
};

export default translations;
