<!-- src/routes/help/+page.svelte -->
<script lang="ts">
	import { base } from '$app/paths';
	import { CATEGORIES } from '$lib/data/checklist-items.js';

	let activeSection = $state('getting-started');

	const helpSections = [
		{ id: 'getting-started', title: '始め方', icon: '🚀' },
		{ id: 'checklist-guide', title: 'チェック項目ガイド', icon: '📋' },
		{ id: 'scoring', title: 'スコアと判定', icon: '📊' },
		{ id: 'export', title: 'エクスポート機能', icon: '📄' },
		{ id: 'privacy', title: 'プライバシー', icon: '🔐' },
		{ id: 'troubleshooting', title: 'トラブルシューティング', icon: '🔧' },
		{ id: 'faq', title: 'よくある質問', icon: '❓' }
	];
</script>

<svelte:head>
	<title>ヘルプ - 実用的事実確認チェックシート</title>
	<meta
		name="description"
		content="実用的事実確認チェックシートの使い方、機能、よくある質問について詳しく説明します。"
	/>
</svelte:head>

<div class="container">
	<header class="help-header">
		<h1>📚 ヘルプ & ガイド</h1>
		<p>実用的事実確認チェックシートの使い方と機能について</p>
	</header>

	<div class="help-layout">
		<!-- サイドバーナビゲーション -->
		<nav class="help-nav">
			<ul>
				{#each helpSections as section}
					<li>
						<button
							class="nav-item"
							class:active={activeSection === section.id}
							onclick={() => (activeSection = section.id)}
						>
							<span class="nav-icon">{section.icon}</span>
							<span class="nav-title">{section.title}</span>
						</button>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- メインコンテンツ -->
		<main class="help-content">
			{#if activeSection === 'getting-started'}
				<section class="help-section">
					<h2>🚀 始め方</h2>

					<div class="quick-start">
						<h3>📋 クイックスタート</h3>
						<ol class="step-list">
							<li>
								<strong>チェックリスト作成</strong>
								<p>
									評価したい情報のタイトルと簡単な説明を入力します。例：「○○に関するニュース記事」
								</p>
							</li>
							<li>
								<strong>項目チェック</strong>
								<p>
									20項目のチェックリストを上から順番に確認し、該当するものにチェックを入れます。
								</p>
							</li>
							<li>
								<strong>スコア確認</strong>
								<p>右側のスコア表示で現在の評価状況をリアルタイムで確認できます。</p>
							</li>
							<li>
								<strong>判定完了</strong>
								<p>「採用」「要注意」「不採用」のいずれかを選択して評価を確定します。</p>
							</li>
						</ol>
					</div>

					<div class="tips">
						<h3>💡 評価のコツ</h3>
						<ul>
							<li>
								<strong>冷静に評価</strong> - 感情的にならず、客観的にチェック項目を確認しましょう
							</li>
							<li>
								<strong>不明な場合は未チェック</strong> - 確信が持てない項目は無理にチェックしない
							</li>
							<li><strong>メモを活用</strong> - 疑問点や追加情報をメモ欄に記録しておきましょう</li>
							<li><strong>複数回確認</strong> - 重要な情報は時間をおいて再評価することも大切</li>
						</ul>
					</div>
				</section>
			{:else if activeSection === 'checklist-guide'}
				<section class="help-section">
					<h2>📋 チェック項目ガイド</h2>

					{#each CATEGORIES as category}
						<div class="category-guide">
							<div class="category-header">
								<span class="category-emoji">{category.emoji}</span>
								<h3>{category.name}</h3>
							</div>
							<p class="category-description">{category.description}</p>

							<div class="category-tips">
								{#if category.id === 'critical'}
									<h4>🎯 評価のポイント</h4>
									<ul>
										<li>
											<strong>情報源の権威性</strong> - 政府機関、学術機関、専門機関からの情報か
										</li>
										<li><strong>一次情報の確認</strong> - 又聞きではなく、直接的な情報源か</li>
										<li><strong>複数の情報源</strong> - 独立した複数の情報源で確認できるか</li>
										<li><strong>発信者の明確性</strong> - 匿名ではなく、責任者が明確か</li>
										<li><strong>客観的な表現</strong> - 感情的・扇動的でない表現か</li>
										<li><strong>論理的一貫性</strong> - 主張と根拠に矛盾がないか</li>
									</ul>
								{:else if category.id === 'detailed'}
									<h4>🎯 評価のポイント</h4>
									<ul>
										<li><strong>情報の新しさ</strong> - 内容に適した新しさを保っているか</li>
										<li><strong>更新履歴</strong> - 必要に応じて更新・訂正されているか</li>
										<li><strong>専門知識</strong> - 作成者が該当分野の知識を持っているか</li>
										<li><strong>根拠の十分性</strong> - 結論に至る過程が説明されているか</li>
										<li><strong>適切な引用</strong> - 重要な主張に情報源が示されているか</li>
										<li><strong>確認可能性</strong> - 引用元に実際にアクセスできるか</li>
									</ul>
								{:else if category.id === 'verification'}
									<h4>🎯 評価のポイント</h4>
									<ul>
										<li>
											<strong>クロスチェック</strong> - 他の情報源でも同様の内容が確認できるか
										</li>
										<li><strong>ファクトチェック</strong> - 信頼できる機関による検証があるか</li>
										<li><strong>データの検証</strong> - 主張を支持するデータが確認できるか</li>
										<li><strong>方法論の妥当性</strong> - 研究や調査の方法が適切か</li>
									</ul>
								{:else if category.id === 'context'}
									<h4>🎯 評価のポイント</h4>
									<ul>
										<li><strong>利害関係</strong> - 金銭的・政治的な関係が開示されているか</li>
										<li><strong>バランス視点</strong> - 異なる立場や反対意見も考慮されているか</li>
										<li><strong>背景情報</strong> - 理解に必要な背景や文脈が提供されているか</li>
										<li><strong>適用範囲</strong> - 情報の適用可能な範囲や限界が明確か</li>
									</ul>
								{/if}
							</div>
						</div>
					{/each}
				</section>
			{:else if activeSection === 'scoring'}
				<section class="help-section">
					<h2>📊 スコアと判定</h2>

					<div class="scoring-guide">
						<h3>🎯 スコア計算方法</h3>
						<div class="score-breakdown">
							<div class="score-item">
								<span class="score-label">🚨 クリティカル評価</span>
								<span class="score-detail">6項目 × 1点 = 最大6点</span>
							</div>
							<div class="score-item">
								<span class="score-label">📝 詳細評価</span>
								<span class="score-detail">6項目 × 1点 = 最大6点</span>
							</div>
							<div class="score-item">
								<span class="score-label">🔍 検証・照合</span>
								<span class="score-detail">4項目 × 1点 = 最大4点</span>
							</div>
							<div class="score-item">
								<span class="score-label">🌐 文脈・バイアス</span>
								<span class="score-detail">4項目 × 1点 = 最大4点</span>
							</div>
							<div class="score-total">
								<span class="score-label">合計</span>
								<span class="score-detail">最大20点（100%）</span>
							</div>
						</div>
					</div>

					<div class="judgment-criteria">
						<h3>⚖️ 判定基準</h3>
						<div class="criteria-list">
							<div class="criteria-item accept">
								<div class="criteria-header">
									<span class="criteria-icon">✅</span>
									<h4>採用（80%以上 - 16点以上）</h4>
								</div>
								<p>
									高い信頼性があり、情報の採用を推奨します。十分な検証が行われており、安心して利用できます。
								</p>
							</div>
							<div class="criteria-item caution">
								<div class="criteria-header">
									<span class="criteria-icon">⚠️</span>
									<h4>要注意（60-79% - 12-15点）</h4>
								</div>
								<p>
									中程度の信頼性があります。追加の確認を推奨し、重要な決定には慎重に検討してください。
								</p>
							</div>
							<div class="criteria-item reject">
								<div class="criteria-header">
									<span class="criteria-icon">❌</span>
									<h4>不採用（60%未満 - 11点以下）</h4>
								</div>
								<p>
									信頼性に問題があります。情報の採用は推奨せず、信頼できる別の情報源を探すことをお勧めします。
								</p>
							</div>
						</div>
					</div>

					<div class="scoring-tips">
						<h3>💡 スコア解釈のコツ</h3>
						<ul>
							<li>
								<strong>クリティカル評価を重視</strong> - 基本的信頼性が低い場合は全体的に慎重に
							</li>
							<li>
								<strong>バランスを考慮</strong> - 一つのカテゴリだけでなく、全体のバランスを見る
							</li>
							<li><strong>文脈に応じた判断</strong> - 緊急性や重要度に応じて判定基準を調整</li>
							<li><strong>継続的な評価</strong> - 新しい情報が出た場合は再評価を検討</li>
						</ul>
					</div>
				</section>
			{:else if activeSection === 'export'}
				<section class="help-section">
					<h2>📄 エクスポート機能</h2>

					<div class="export-formats">
						<h3>📋 対応形式</h3>
						<div class="format-list">
							<div class="format-item">
								<div class="format-header">
									<span class="format-icon">📄</span>
									<h4>PDF形式</h4>
								</div>
								<p>印刷や共有に最適。セクション分割に対応し、見やすいレイアウトで出力されます。</p>
								<div class="format-features">
									<span class="feature-tag">印刷対応</span>
									<span class="feature-tag">セクション分割</span>
									<span class="feature-tag">高品質</span>
								</div>
							</div>

							<div class="format-item">
								<div class="format-header">
									<span class="format-icon">🌐</span>
									<h4>HTML形式</h4>
								</div>
								<p>ブラウザで表示可能。構造化されたセクション表示で、ウェブでの共有に便利です。</p>
								<div class="format-features">
									<span class="feature-tag">ブラウザ表示</span>
									<span class="feature-tag">構造化</span>
									<span class="feature-tag">軽量</span>
								</div>
							</div>

							<div class="format-item">
								<div class="format-header">
									<span class="format-icon">📝</span>
									<h4>Markdown形式</h4>
								</div>
								<p>テキストベース。GitHub、エディタで表示可能。軽量で編集しやすい形式です。</p>
								<div class="format-features">
									<span class="feature-tag">テキスト</span>
									<span class="feature-tag">GitHub対応</span>
									<span class="feature-tag">編集可能</span>
								</div>
							</div>

							<div class="format-item">
								<div class="format-header">
									<span class="format-icon">📊</span>
									<h4>JSON形式</h4>
								</div>
								<p>データ形式。プログラム処理やデータ分析に使用できる構造化データです。</p>
								<div class="format-features">
									<span class="feature-tag">データ処理</span>
									<span class="feature-tag">構造化</span>
									<span class="feature-tag">プログラム対応</span>
								</div>
							</div>
						</div>
					</div>

					<div class="export-options">
						<h3>⚙️ エクスポートオプション</h3>
						<ul>
							<li><strong>📊 評価サマリー</strong> - スコア・判定結果の概要を含める</li>
							<li><strong>📚 ガイド内容</strong> - 各項目の詳細説明・例を含める</li>
							<li><strong>📝 評価メモ</strong> - 追加したメモ・コメントを含める</li>
							<li>
								<strong>📄 セクション区切り</strong> - 各セクションを個別ページ/セクションに分離
							</li>
						</ul>
					</div>
				</section>
			{:else if activeSection === 'privacy'}
				<section class="help-section">
					<h2>🔐 プライバシーとセキュリティ</h2>

					<div class="privacy-features">
						<h3>🛡️ データ保護</h3>
						<div class="privacy-item">
							<h4>📱 ローカルストレージ</h4>
							<p>
								すべてのデータは端末内のIndexedDBに保存され、外部サーバーには送信されません。あなたの評価内容は完全にプライベートです。
							</p>
						</div>
						<div class="privacy-item">
							<h4>🌐 オフライン動作</h4>
							<p>
								一度アクセスすれば、インターネット接続なしでも利用できます。ネットワーク通信は最小限に抑えられています。
							</p>
						</div>
						<div class="privacy-item">
							<h4>🗑️ データ削除</h4>
							<p>
								ユーザーがいつでもブラウザの設定からデータを削除できます。アプリ内の履歴削除機能も利用できます。
							</p>
						</div>
					</div>

					<div class="security-measures">
						<h3>🔒 セキュリティ対策</h3>
						<ul>
							<li><strong>HTTPS通信</strong> - すべての通信が暗号化されています</li>
							<li><strong>Content Security Policy</strong> - XSS攻撃を防止します</li>
							<li><strong>Same-Origin Policy</strong> - クロスサイト攻撃を防止します</li>
							<li>
								<strong>定期的な監査</strong> - セキュリティ脆弱性を定期的にチェックしています
							</li>
						</ul>
					</div>
				</section>
			{:else if activeSection === 'troubleshooting'}
				<section class="help-section">
					<h2>🔧 トラブルシューティング</h2>

					<div class="troubleshooting-list">
						<div class="trouble-item">
							<h4>❓ データが保存されない</h4>
							<div class="solution">
								<p><strong>原因:</strong> ブラウザの設定やプライベートモードの影響</p>
								<p><strong>解決方法:</strong></p>
								<ul>
									<li>プライベート/シークレットモードを無効にする</li>
									<li>ブラウザの保存設定を確認する</li>
									<li>ブラウザを最新版に更新する</li>
								</ul>
							</div>
						</div>

						<div class="trouble-item">
							<h4>❓ エクスポートが失敗する</h4>
							<div class="solution">
								<p><strong>原因:</strong> ブラウザの互換性やポップアップブロック</p>
								<p><strong>解決方法:</strong></p>
								<ul>
									<li>ポップアップブロックを無効にする</li>
									<li>別のブラウザで試す</li>
									<li>ページを再読み込みして再試行</li>
								</ul>
							</div>
						</div>

						<div class="trouble-item">
							<h4>❓ アプリが重い・遅い</h4>
							<div class="solution">
								<p><strong>原因:</strong> ブラウザキャッシュや大量のデータ</p>
								<p><strong>解決方法:</strong></p>
								<ul>
									<li>ブラウザキャッシュをクリアする</li>
									<li>古い評価履歴を削除する</li>
									<li>ブラウザを再起動する</li>
								</ul>
							</div>
						</div>

						<div class="trouble-item">
							<h4>❓ 表示が崩れる</h4>
							<div class="solution">
								<p><strong>原因:</strong> ブラウザの互換性問題</p>
								<p><strong>解決方法:</strong></p>
								<ul>
									<li>ブラウザを最新版に更新する</li>
									<li>ページを再読み込みする（Ctrl+F5）</li>
									<li>推奨ブラウザ（Chrome、Firefox、Safari、Edge）を使用する</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
			{:else if activeSection === 'faq'}
				<section class="help-section">
					<h2>❓ よくある質問</h2>

					<div class="faq-list">
						<div class="faq-item">
							<h4>Q: このツールは無料で使えますか？</h4>
							<p>A: はい、完全に無料でご利用いただけます。登録やログインも不要です。</p>
						</div>

						<div class="faq-item">
							<h4>Q: 評価結果は他の人に見られませんか？</h4>
							<p>
								A:
								いいえ、すべてのデータは端末内にのみ保存され、外部に送信されることはありません。完全にプライベートです。
							</p>
						</div>

						<div class="faq-item">
							<h4>Q: オフラインでも使用できますか？</h4>
							<p>
								A:
								はい、一度アクセスすればオフラインでも利用できます。PWA（プログレッシブウェブアプリ）として動作します。
							</p>
						</div>

						<div class="faq-item">
							<h4>Q: スマートフォンでも使えますか？</h4>
							<p>
								A:
								はい、レスポンシブデザインでスマートフォン、タブレット、デスクトップすべてに対応しています。
							</p>
						</div>

						<div class="faq-item">
							<h4>Q: 評価基準は科学的な根拠がありますか？</h4>
							<p>
								A:
								はい、ジャーナリズム、情報科学、認知科学の研究に基づいて設計されています。ただし、最終的な判断は利用者が行ってください。
							</p>
						</div>

						<div class="faq-item">
							<h4>Q: チェック項目をカスタマイズできますか？</h4>
							<p>A: 現在はカスタマイズ機能はありませんが、将来的な機能追加を検討しています。</p>
						</div>

						<div class="faq-item">
							<h4>Q: 評価結果を他の人と共有できますか？</h4>
							<p>
								A:
								エクスポート機能を使用してPDF、HTML、Markdown形式で出力し、共有することができます。
							</p>
						</div>

						<div class="faq-item">
							<h4>Q: このツールの限界は何ですか？</h4>
							<p>
								A:
								このツールは評価の支援を目的としており、完全に自動的な真偽判定は行いません。最終的な判断は人間が行う必要があります。
							</p>
						</div>

						<div class="faq-item">
							<h4>Q: バグや改善要望はどこに報告すればよいですか？</h4>
							<p>
								A:
								GitHubリポジトリのIssueページ、または開発者にご連絡ください。フィードバックをお待ちしています。
							</p>
						</div>
					</div>
				</section>
			{/if}
		</main>
	</div>

	<!-- フッターCTA -->
	<div class="help-footer">
		<div class="footer-content">
			<h3>🚀 始める準備はできましたか？</h3>
			<p>情報の信頼性を科学的に評価して、より良い判断を行いましょう。</p>
			<a href="{base}/" class="btn btn-primary btn-large"> 📋 チェックリストを開始 </a>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
	}

	/* ヘッダー */
	.help-header {
		text-align: center;
		padding: 40px 20px;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border-radius: 15px;
		margin-bottom: 40px;
	}

	.help-header h1 {
		font-size: 2.5em;
		margin: 0 0 15px 0;
		font-weight: 300;
	}

	/* レイアウト */
	.help-layout {
		display: grid;
		grid-template-columns: 280px 1fr;
		gap: 40px;
		min-height: 600px;
	}

	/* ナビゲーション */
	.help-nav {
		position: sticky;
		top: 20px;
		height: fit-content;
	}

	.help-nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
		background: var(--card-bg);
		border-radius: 15px;
		padding: 20px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 12px;
		width: 100%;
		padding: 12px 16px;
		margin-bottom: 8px;
		background: none;
		border: none;
		border-radius: 8px;
		text-align: left;
		cursor: pointer;
		transition: all 0.2s ease;
		color: var(--text-color);
	}

	.nav-item:hover {
		background: var(--surface-color);
	}

	.nav-item.active {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.nav-icon {
		font-size: 1.2em;
	}

	.nav-title {
		font-weight: 500;
	}

	/* メインコンテンツ */
	.help-content {
		background: var(--card-bg);
		border-radius: 15px;
		padding: 40px;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

	.help-section h2 {
		font-size: 2em;
		margin: 0 0 30px 0;
		color: var(--text-color);
		border-bottom: 2px solid var(--border-color);
		padding-bottom: 15px;
	}

	/* クイックスタート */
	.quick-start {
		margin-bottom: 40px;
	}

	.step-list {
		background: var(--surface-color);
		padding: 25px;
		border-radius: 10px;
		margin-top: 20px;
	}

	.step-list li {
		margin-bottom: 20px;
		padding-left: 10px;
	}

	.step-list strong {
		color: var(--text-color);
		display: block;
		margin-bottom: 8px;
	}

	/* カテゴリガイド */
	.category-guide {
		margin-bottom: 30px;
		padding: 25px;
		background: var(--surface-color);
		border-radius: 10px;
		border-left: 5px solid #667eea;
	}

	.category-header {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 15px;
	}

	.category-emoji {
		font-size: 1.5em;
	}

	.category-guide h3 {
		margin: 0;
		color: var(--text-color);
	}

	.category-description {
		margin-bottom: 20px;
		color: var(--text-muted);
		font-style: italic;
	}

	.category-tips ul {
		margin-top: 15px;
	}

	/* スコアガイド */
	.score-breakdown {
		background: var(--surface-color);
		padding: 25px;
		border-radius: 10px;
		margin: 20px 0;
	}

	.score-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 0;
		border-bottom: 1px solid var(--border-color);
	}

	.score-item:last-child {
		border-bottom: none;
	}

	.score-total {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0 5px 0;
		border-top: 2px solid var(--border-color);
		margin-top: 15px;
		font-weight: bold;
	}

	/* 判定基準 */
	.criteria-list {
		margin-top: 20px;
	}

	.criteria-item {
		margin-bottom: 20px;
		padding: 20px;
		border-radius: 10px;
		border-left: 5px solid;
	}

	.criteria-item.accept {
		background: linear-gradient(135deg, #d5f4e6, #a8e6cf);
		border-left-color: #27ae60;
	}

	.criteria-item.caution {
		background: linear-gradient(135deg, #ffeaa7, #fdcb6e);
		border-left-color: #f39c12;
	}

	.criteria-item.reject {
		background: linear-gradient(135deg, #fab1a0, #ff7675);
		border-left-color: #e74c3c;
	}

	.criteria-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
	}

	.criteria-icon {
		font-size: 1.3em;
	}

	.criteria-item h4 {
		margin: 0;
		color: var(--text-color);
	}

	/* エクスポート形式 */
	.format-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 20px;
		margin-top: 20px;
	}

	.format-item {
		padding: 20px;
		background: var(--surface-color);
		border-radius: 10px;
		border-left: 4px solid #667eea;
	}

	.format-header {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 15px;
	}

	.format-icon {
		font-size: 1.5em;
	}

	.format-item h4 {
		margin: 0;
		color: var(--text-color);
	}

	.format-features {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 15px;
	}

	.feature-tag {
		background: var(--border-color);
		padding: 4px 8px;
		border-radius: 6px;
		font-size: 0.8em;
		color: var(--text-muted);
	}

	/* プライバシー */
	.privacy-item {
		margin-bottom: 25px;
		padding: 20px;
		background: var(--surface-color);
		border-radius: 10px;
	}

	.privacy-item h4 {
		margin: 0 0 10px 0;
		color: var(--text-color);
	}

	/* トラブルシューティング */
	.trouble-item {
		margin-bottom: 30px;
		padding: 20px;
		background: var(--surface-color);
		border-radius: 10px;
		border-left: 4px solid #f39c12;
	}

	.trouble-item h4 {
		margin: 0 0 15px 0;
		color: var(--text-color);
	}

	.solution {
		margin-top: 15px;
	}

	.solution p {
		margin-bottom: 10px;
	}

	.solution strong {
		color: var(--text-color);
	}

	/* FAQ */
	.faq-item {
		margin-bottom: 25px;
		padding: 20px;
		background: var(--surface-color);
		border-radius: 10px;
		border-left: 4px solid #3498db;
	}

	.faq-item h4 {
		margin: 0 0 10px 0;
		color: var(--text-color);
	}

	/* フッター */
	.help-footer {
		text-align: center;
		padding: 60px 20px;
		background: linear-gradient(135deg, #f8f9fa, #e9ecef);
		border-radius: 15px;
		margin-top: 60px;
	}

	.footer-content h3 {
		margin: 0 0 15px 0;
		color: var(--text-color);
	}

	.footer-content p {
		margin-bottom: 25px;
		color: var(--text-muted);
	}

	/* ボタン */
	.btn {
		padding: 12px 24px;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		text-decoration: none;
		display: inline-block;
		transition: all 0.3s ease;
	}

	.btn-large {
		padding: 16px 32px;
		font-size: 1.1em;
	}

	.btn-primary {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
	}

	/* Tips */
	.tips {
		background: linear-gradient(135deg, #e8f4fd, #d1ecf1);
		padding: 25px;
		border-radius: 10px;
		border-left: 5px solid #3498db;
	}

	.tips h3 {
		margin: 0 0 15px 0;
		color: var(--text-color);
	}

	.scoring-tips {
		background: linear-gradient(135deg, #fff3cd, #ffeaa7);
		padding: 25px;
		border-radius: 10px;
		border-left: 5px solid #f39c12;
		margin-top: 30px;
	}

	.scoring-tips h3 {
		margin: 0 0 15px 0;
		color: var(--text-color);
	}

	/* レスポンシブ */
	@media (max-width: 768px) {
		.help-layout {
			grid-template-columns: 1fr;
			gap: 20px;
		}

		.help-nav {
			position: static;
		}

		.help-nav ul {
			display: flex;
			overflow-x: auto;
			gap: 10px;
			padding: 15px;
		}

		.nav-item {
			flex-shrink: 0;
			margin-bottom: 0;
		}

		.help-content {
			padding: 20px;
		}

		.format-list {
			grid-template-columns: 1fr;
		}
	}
</style>
