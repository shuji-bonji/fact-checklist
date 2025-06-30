<script lang="ts">
  // ヘルプセクション
  interface HelpSection {
    id: string;
    title: string;
    emoji: string;
    description: string;
    content: string;
    htmlContent?: string; // HTML形式のコンテンツ（表など）
    subSections?: Array<{
      title: string;
      content: string;
      htmlContent?: string;
    }>;
  }

  // アクティブなセクション
  let activeSection = $state<string>('overview');

  // ヘルプデータ
  const helpSections: HelpSection[] = [
    {
      id: 'overview',
      title: 'アプリ概要',
      emoji: '📋',
      description: '事実確認チェックシートの基本的な使い方',
      content: `このアプリは、インターネット上の情報の信頼性を科学的・体系的に評価するためのツールです。
			
4つの主要カテゴリ（クリティカル評価・詳細評価・検証評価・コンテキスト評価）にわたって、
合計20項目をチェックすることで、情報の信頼度を数値化し、最終的な判定を支援します。`,
      subSections: [
        {
          title: '主な特徴',
          content:
            '• 完全プライベート: すべてのデータは端末内に保存\n• オフライン対応: ネットワークなしでも動作\n• 科学的評価: 体系的なチェック項目\n• 履歴管理: 過去の評価結果を保存・参照'
        },
        {
          title: '対象ユーザー',
          content:
            '• 一般の方: ネット情報の信頼性を確認したい方\n• 専門家: 情報分析の補助ツールとして\n• 報道関係者: ファクトチェックの支援として'
        }
      ]
    },
    {
      id: 'usage',
      title: '使い方ガイド',
      emoji: '🚀',
      description: 'ステップバイステップの利用手順',
      content: 'チェックリストの作成から評価完了まで、以下の手順で進めてください。',
      subSections: [
        {
          title: 'Step 1: チェックリスト作成',
          content:
            '1. タイトルと対象情報の概要を入力\n2. 評価したい情報の詳細を記録\n3. 自動的にチェックリストが作成されます'
        },
        {
          title: 'Step 2: 項目評価',
          content:
            '1. クリティカル評価から開始\n2. 各項目を順番にチェック\n3. 不明な項目は詳細ガイドを参照\n4. スコアがリアルタイムで更新されます'
        },
        {
          title: 'Step 3: 最終判定',
          content:
            '1. すべての項目をチェック\n2. 評価メモを記録（任意）\n3. 最終判定を選択（採用・要注意・不採用）\n4. 「評価を完了」ボタンを押下'
        },
        {
          title: 'Step 4: 結果確認・共有',
          content:
            '1. 評価結果ページで詳細確認\n2. 必要に応じてエクスポート\n3. PDF・HTML・JSON・Markdown形式で出力可能'
        }
      ]
    },
    {
      id: 'categories',
      title: '評価カテゴリ',
      emoji: '📊',
      description: '4つの評価カテゴリの詳細説明',
      content: '情報の信頼性を多角的に評価するため、4つのカテゴリに分けてチェックを行います。',
      subSections: [
        {
          title: 'クリティカル評価（Critical）',
          content:
            '最も重要な基本的信頼性を評価します。\n• 権威ある情報源からの発表\n• 一次情報の確認\n• 複数の独立した情報源\n• 匿名・出典不明でない\n• 扇動的・煽情的表現の少なさ\n• 論理的一貫性'
        },
        {
          title: '詳細評価（Detailed）',
          content:
            '情報の質と詳細度を評価します。\n• 情報の新しさ\n• 更新・訂正の履歴\n• 適切な専門知識\n• 十分な詳細と根拠\n• 適切な引用・参照\n• 引用元の確認可能性'
        },
        {
          title: '検証評価（Verification）',
          content:
            '外部検証と客観性を評価します。\n• 他情報源との照合\n• ファクトチェック組織の検証\n• 検証可能なデータ\n• 手法・方法論の妥当性'
        },
        {
          title: 'コンテキスト評価（Context）',
          content:
            '情報の背景と偏向を評価します。\n• 利害関係の開示\n• バランスの取れた視点\n• 十分な背景情報\n• 適用範囲の明確化'
        }
      ]
    },
    {
      id: 'scoring',
      title: 'スコアリング',
      emoji: '🎯',
      description: 'スコア計算と判定基準の詳細',
      content: '各項目のチェック状況に基づいて、信頼度スコアが自動計算されます。',
      subSections: [
        {
          title: '計算方法',
          content:
            '• 各カテゴリの重要度による重み付け\n• クリティカル評価: 35%\n• 詳細評価: 25%\n• 検証評価: 25%\n• コンテキスト評価: 15%'
        },
        {
          title: '判定基準',
          content:
            '• 80%以上: 高い信頼性 → 「採用」推奨\n• 60-79%: 中程度の信頼性 → 追加確認推奨\n• 40-59%: 低い信頼性 → 「要注意」\n• 40%未満: 信頼性に問題 → 「不採用」推奨'
        },
        {
          title: '最終判定',
          content:
            'スコアは参考値です。最終的な判定は、\n評価者の専門知識と総合的な判断に委ねられます。\n「採用」「要注意」「不採用」から選択してください。'
        }
      ]
    },
    {
      id: 'features',
      title: '機能詳細',
      emoji: '⚙️',
      description: 'アプリの各種機能について',
      content: 'さまざまな機能を使って、効率的に情報評価を行えます。',
      subSections: [
        {
          title: '詳細ガイドモード',
          content:
            '各チェック項目の詳細説明と具体例を表示します。\n初めて使用する方や、項目の判断基準を確認したい場合に便利です。'
        },
        {
          title: 'エクスポート機能',
          content: '評価結果を4つの形式で出力可能です。',
          htmlContent: `
						<div class="export-table-container">
							<h4>出力形式一覧</h4>
							<table class="export-format-table">
								<thead>
									<tr>
										<th>形式</th>
										<th>特徴</th>
										<th>用途</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><strong>PDF</strong></td>
										<td>
											• 印刷に最適<br>
											• 日本語フォント対応<br>
											• 3つのモードから選択可能
										</td>
										<td>報告書、アーカイブ、印刷配布</td>
									</tr>
									<tr>
										<td><strong>HTML</strong></td>
										<td>
											• ブラウザで表示可能<br>
											• CSSスタイル埋め込み済み<br>
											• 単一ファイル
										</td>
										<td>Web共有、オンライン閲覧</td>
									</tr>
									<tr>
										<td><strong>JSON</strong></td>
										<td>
											• 構造化データ<br>
											• プログラム処理可能<br>
											• 完全なデータ保持
										</td>
										<td>システム連携、データ分析</td>
									</tr>
									<tr>
										<td><strong>Markdown</strong></td>
										<td>
											• テキストエディタで編集可<br>
											• GitHub等で表示最適<br>
											• シンプルな形式
										</td>
										<td>文書編集、バージョン管理</td>
									</tr>
								</tbody>
							</table>

							<h4>PDF生成モード（いずれか1つを選択）</h4>
							<table class="pdf-mode-table">
								<thead>
									<tr>
										<th>モード</th>
										<th>説明</th>
										<th>特徴</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><strong>🎨 ピクセルパーフェクト</strong><br><small>（デフォルト・推奨）</small></td>
										<td>ブラウザの印刷機能を使用して、画面表示と完全に同じ見た目のPDFを生成</td>
										<td>
											• グラデーション・色・レイアウト完全再現<br>
											• 印刷プレビューで確認可能<br>
											• 最高品質の出力
										</td>
									</tr>
									<tr>
										<td><strong>🔥 確実な日本語対応</strong></td>
										<td>jsPDFライブラリで直接PDF生成し、日本語フォントを確実に埋め込み</td>
										<td>
											• 日本語フォント埋め込み保証<br>
											• 文字化け完全防止<br>
											• CSP準拠・セキュア<br>
											• 透かし・目次等の高度機能
										</td>
									</tr>
									<tr>
										<td><strong>🔤 テキストベース</strong><br><small>（レガシー・PWA方式）</small></td>
										<td>PWA機能を活用したテキスト中心のシンプルなPDF生成</td>
										<td>
											• PWAの保存・共有機能利用<br>
											• 文字検索・コピー可能<br>
											• ファイルサイズ最小<br>
											• モバイル最適化
										</td>
									</tr>
								</tbody>
							</table>

							<h4>共通エクスポートオプション</h4>
							<table class="export-option-table">
								<thead>
									<tr>
										<th>オプション</th>
										<th>説明</th>
										<th>対応形式</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><strong>📊 評価サマリー</strong></td>
										<td>スコア・判定結果・達成率の概要</td>
										<td>全形式</td>
									</tr>
									<tr>
										<td><strong>📚 ガイド内容</strong></td>
										<td>各チェック項目の詳細説明と例</td>
										<td>全形式</td>
									</tr>
									<tr>
										<td><strong>📝 評価メモ</strong></td>
										<td>追加したメモ・コメント</td>
										<td>全形式</td>
									</tr>
									<tr>
										<td><strong>📄 セクション区切り</strong></td>
										<td>カテゴリごとの改ページ・区切り線</td>
										<td>PDF、Markdown</td>
									</tr>
								</tbody>
							</table>

							<div class="export-note">
								<strong>📌 注意:</strong> PDF生成モードは排他的です。3つのモードのうち、いずれか1つのみ選択できます。デフォルトでは最も高品質な「ピクセルパーフェクト」モードが選択されています。
							</div>
						</div>
					`
        },
        {
          title: '履歴管理',
          content:
            '過去の評価結果を自動保存します。\n• 最新5件をサイドバーに表示\n• 全履歴の一覧表示\n• 個別削除機能\n• 再編集機能（完了前のみ）'
        },
        {
          title: 'PWA対応・高度機能',
          content:
            '• ホーム画面への追加\n• オフライン動作\n• プラットフォーム適応型機能\n• フォントキャッシュシステム\n• デバイス別最適化\n• 自動アップデート'
        }
      ]
    },
    {
      id: 'privacy',
      title: 'プライバシー',
      emoji: '🔐',
      description: 'データの取り扱いとセキュリティ',
      content: 'ユーザーのプライバシー保護を最優先に設計されています。',
      subSections: [
        {
          title: 'ローカル保存',
          content:
            '• すべてのデータは端末内のみに保存\n• サーバーへの送信は一切なし\n• 第三者へのデータ提供なし\n• 個人を特定する情報は収集しません'
        },
        {
          title: 'セキュリティ',
          content:
            '• HTTPS通信の強制\n• Content Security Policy実装\n• XSS攻撃防止対策\n• Same-Origin Policy遵守'
        },
        {
          title: 'データ削除',
          content:
            'ユーザーはいつでも保存されたデータを削除できます。\nブラウザのデータ削除でも完全に削除されます。'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'トラブルシューティング',
      emoji: '🔧',
      description: 'よくある問題と解決方法',
      content: '使用中に問題が発生した場合の対処法をご案内します。',
      subSections: [
        {
          title: 'データが保存されない',
          content:
            '• ブラウザのプライベートモードを確認\n• ストレージ容量の確認\n• ブラウザの設定でローカルストレージが有効か確認\n• 別のブラウザで試す'
        },
        {
          title: 'スコアが表示されない',
          content:
            '• ページのリロード\n• ブラウザのキャッシュクリア\n• JavaScript が有効か確認\n• ブラウザのコンソールでエラー確認'
        },
        {
          title: 'エクスポートできない',
          content:
            '• ポップアップブロックの確認\n• ダウンロード設定の確認\n• ブラウザの権限設定\n• 十分なストレージ容量があるか確認'
        },
        {
          title: 'その他の問題',
          content:
            '上記で解決しない場合は、GitHubのIssuesから\nお気軽にお問い合わせください。\n可能な限りサポートいたします。'
        }
      ]
    }
  ];

  function setActiveSection(sectionId: string) {
    activeSection = sectionId;
  }

  function sanitizeHtml(content: string): string {
    return content
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\n/g, '<br>');
  }
</script>

<svelte:head>
  <title>ヘルプ・使い方ガイド - 実用的事実確認チェックシート</title>
  <meta name="description" content="実用的事実確認チェックシートの詳細な使い方ガイドとヘルプ情報" />
</svelte:head>

<div class="container">
  <!-- ヘッダー -->
  <div class="help-header">
    <h1>📖 ヘルプ・使い方ガイド</h1>
    <p class="help-subtitle">事実確認チェックシートの使い方を詳しく説明します</p>
  </div>

  <div class="help-main">
    <!-- ナビゲーション -->
    <nav class="help-nav">
      <div class="nav-header">
        <h2>📚 目次</h2>
      </div>
      <ul class="nav-list">
        {#each helpSections as section (section.id)}
          <li class="nav-item">
            <button
              class="nav-link"
              class:active={activeSection === section.id}
              onclick={() => setActiveSection(section.id)}
            >
              <span class="nav-emoji">{section.emoji}</span>
              <span class="nav-title">{section.title}</span>
            </button>
          </li>
        {/each}
      </ul>
    </nav>

    <!-- コンテンツ -->
    <div class="help-content">
      {#each helpSections as section (section.id)}
        {#if activeSection === section.id}
          <div class="content-section">
            <div class="section-header">
              <h2 class="section-title">
                {section.emoji}
                {section.title}
              </h2>
              <p class="section-description">{section.description}</p>
            </div>

            <div class="section-content">
              <div class="main-content-text">
                {@html sanitizeHtml(section.content)}
              </div>

              {#if section.subSections}
                <div class="sub-sections">
                  {#each section.subSections as subSection}
                    <div class="sub-section">
                      <h3 class="sub-section-title">{subSection.title}</h3>
                      <div class="sub-section-content">
                        {#if subSection.htmlContent}
                          {@html subSection.htmlContent}
                        {:else}
                          {@html sanitizeHtml(subSection.content)}
                        {/if}
                      </div>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: var(--spacing-6);
    min-height: 100vh;
  }

  /* ページヘッダー - モダンデザイン */
  .help-header {
    text-align: center;
    margin-bottom: var(--spacing-8);
    padding: var(--spacing-8);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-2xl);
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
  }

  .help-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0.03;
    pointer-events: none;
  }

  .help-header h1 {
    margin: 0 0 var(--spacing-4) 0;
    font-size: var(--font-size-5xl);
    font-weight: var(--font-weight-light);
    font-family: var(--font-family-heading);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: var(--text-color);
    position: relative;
    z-index: 1;
  }

  .help-subtitle {
    margin: 0;
    font-size: var(--font-size-lg);
    color: var(--text-color-secondary);
    font-weight: var(--font-weight-medium);
    position: relative;
    z-index: 1;
  }

  .help-main {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: var(--spacing-8);
    align-items: start;
  }

  /* ナビゲーション - モダンデザイン */
  .help-nav {
    position: sticky;
    top: var(--spacing-6);
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-xl);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
  }

  .help-nav::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0.02;
    pointer-events: none;
  }

  .nav-header {
    padding: var(--spacing-4);
    border-bottom: 1px solid var(--border-color-subtle);
    background: rgba(var(--primary-rgb), 0.05);
    position: relative;
    z-index: 1;
  }

  .nav-header h2 {
    margin: 0;
    font-size: var(--font-size-lg);
    color: var(--text-color);
    font-weight: var(--font-weight-semibold);
    font-family: var(--font-family-heading);
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    border-bottom: 1px solid var(--border-color-subtle);
  }

  .nav-item:last-child {
    border-bottom: none;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    padding: var(--spacing-4);
    width: 100%;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: all var(--transition-base) var(--ease-out);
    color: var(--text-color);
    font-weight: var(--font-weight-medium);
    position: relative;
    z-index: 1;
    border-radius: var(--radius-md);
    margin: var(--spacing-1);
  }

  .nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity var(--transition-base) var(--ease-out);
    border-radius: var(--radius-md);
  }

  .nav-link:hover::before {
    opacity: 0.1;
  }

  .nav-link:hover {
    transform: translateX(4px);
    color: white;
  }

  .nav-link.active {
    background: var(--gradient-primary);
    color: white;
    font-weight: var(--font-weight-semibold);
    box-shadow: var(--shadow-md);
  }

  .nav-link.active::before {
    opacity: 0;
  }

  .nav-emoji {
    font-size: var(--font-size-lg);
    position: relative;
    z-index: 1;
  }

  .nav-title {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-tight);
    position: relative;
    z-index: 1;
  }

  /* コンテンツエリア - モダンデザイン */
  .help-content {
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: var(--radius-xl);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
  }

  .help-content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-accent);
    opacity: 0.02;
    pointer-events: none;
  }

  .content-section {
    padding: var(--spacing-8);
    position: relative;
    z-index: 1;
  }

  .section-header {
    margin-bottom: var(--spacing-8);
    padding-bottom: var(--spacing-6);
    border-bottom: 2px solid var(--border-color-subtle);
  }

  .section-title {
    margin: 0 0 var(--spacing-4) 0;
    font-size: var(--font-size-4xl);
    font-weight: var(--font-weight-light);
    color: var(--text-color);
    font-family: var(--font-family-heading);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .section-description {
    margin: 0;
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
    color: var(--text-color-secondary);
    font-weight: var(--font-weight-medium);
  }

  .section-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }

  .main-content-text {
    font-size: var(--font-size-base);
    line-height: var(--line-height-relaxed);
    color: var(--text-color);
    background: rgba(255, 255, 255, 0.5);
    padding: var(--spacing-4);
    border-radius: var(--radius-md);
    border: 1px solid var(--border-color-subtle);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .sub-sections {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-6);
  }

  .sub-section {
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: var(--radius-lg);
    padding: var(--spacing-6);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
  }

  .sub-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--gradient-primary);
  }

  .sub-section-title {
    margin: 0 0 var(--spacing-4) 0;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-semibold);
    color: var(--text-color);
    font-family: var(--font-family-heading);
    border-bottom: 1px solid var(--border-color-subtle);
    padding-bottom: var(--spacing-2);
  }

  .sub-section-content {
    line-height: var(--line-height-relaxed);
    color: var(--text-color);
    font-weight: var(--font-weight-normal);
    background: rgba(255, 255, 255, 0.4);
    padding: var(--spacing-3);
    border-radius: var(--radius-md);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  /* ダークモード対応の強化 */
  :global(.dark) .help-header {
    background: linear-gradient(135deg, #1a202c, #2d3748);
    border-color: #4a5568;
  }

  :global(.dark) .help-nav {
    background: linear-gradient(135deg, #2d3748, #374151);
    border-color: #4a5568;
  }

  :global(.dark) .nav-header {
    background: linear-gradient(135deg, #374151, #4a5568);
  }

  :global(.dark) .nav-link {
    color: #f7fafc;
  }

  :global(.dark) .help-content {
    background: linear-gradient(135deg, #1a202c, #2d3748);
    border-color: #4a5568;
  }

  :global(.dark) .section-title,
  :global(.dark) .section-description,
  :global(.dark) .main-content-text,
  :global(.dark) .sub-section-title,
  :global(.dark) .sub-section-content {
    color: #f7fafc;
  }

  :global(.dark) .sub-section {
    background: linear-gradient(135deg, #374151, #4a5568);
    border-color: #63b3ed;
  }

  /* レスポンシブ対応 */
  @media (max-width: 1024px) {
    .help-main {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    .help-nav {
      position: static;
      order: -1;
    }

    .nav-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-xs);
    }

    .nav-item {
      border-bottom: none;
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius-sm);
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: var(--spacing-4);
    }

    .help-header {
      padding: var(--spacing-md);
    }

    .help-header h1 {
      font-size: 2em;
    }

    .content-section {
      padding: var(--spacing-lg);
    }

    .section-title {
      font-size: 1.6em;
    }

    .nav-list {
      grid-template-columns: 1fr;
    }
  }

  /* テーブルスタイル（HTMLコンテンツ用） */
  .sub-section-content :global(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background: white;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .sub-section-content :global(table thead) {
    background: var(--gradient-primary);
    color: white;
  }

  .sub-section-content :global(table th),
  .sub-section-content :global(table td) {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid var(--border-color-subtle);
    vertical-align: top;
  }

  .sub-section-content :global(table tbody tr:hover) {
    background: rgba(var(--primary-rgb), 0.05);
  }

  .sub-section-content :global(table tbody tr:nth-child(even)) {
    background: rgba(248, 249, 250, 0.5);
  }

  .sub-section-content :global(.export-table-container h4) {
    margin: 30px 0 15px 0;
    color: var(--text-color);
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-semibold);
  }

  .sub-section-content :global(.export-note) {
    background: rgba(var(--primary-rgb), 0.1);
    border: 1px solid rgba(var(--primary-rgb), 0.2);
    border-radius: var(--radius-md);
    padding: 15px;
    margin: 20px 0;
    color: var(--text-color);
    border-left: 4px solid var(--primary-color);
  }

  /* ダークモード対応 */
  :global(.dark) .sub-section-content :global(table) {
    background: #2d3748;
  }

  :global(.dark) .sub-section-content :global(table tbody tr:nth-child(even)) {
    background: rgba(255, 255, 255, 0.05);
  }

  :global(.dark) .sub-section-content :global(table th),
  :global(.dark) .sub-section-content :global(table td) {
    border-bottom-color: #4a5568;
    color: #f7fafc;
  }

  /* アクセシビリティ向上 */
  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
    }
  }
</style>
