<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>プライバシーポリシー - 実用的事実確認チェックシート</title>
	<meta
		name="description"
		content="実用的事実確認チェックシートのプライバシーポリシー、データ取り扱い方針について説明します。"
	/>
</svelte:head>

<div class="container">
	<header class="privacy-header">
		<h1>🔐 プライバシーポリシー</h1>
		<p class="last-updated">最終更新日: 2025年1月</p>
	</header>

	<div class="privacy-content">
		<section class="privacy-section">
			<h2>📋 基本方針</h2>
			<div class="highlight-box">
				<p>
					<strong>実用的事実確認チェックシート</strong
					>は、ユーザーのプライバシーを最優先に考えて設計されています。すべてのデータは端末内にのみ保存され、外部サーバーには一切送信されません。
				</p>
			</div>
		</section>

		<section class="privacy-section">
			<h2>🛡️ データの取り扱い</h2>

			<div class="data-handling">
				<div class="data-item secure">
					<div class="data-icon">✅</div>
					<div class="data-content">
						<h3>ローカルストレージのみ</h3>
						<p>
							チェックリストの内容、評価結果、メモなど、すべてのデータは端末内のIndexedDBまたはlocalStorageに保存されます。
						</p>
					</div>
				</div>

				<div class="data-item secure">
					<div class="data-icon">✅</div>
					<div class="data-content">
						<h3>サーバー送信なし</h3>
						<p>
							評価内容や個人データは一切サーバーに送信されません。完全にオフラインで動作します。
						</p>
					</div>
				</div>

				<div class="data-item secure">
					<div class="data-icon">✅</div>
					<div class="data-content">
						<h3>暗号化通信</h3>
						<p>
							アプリの読み込み時のみHTTPS暗号化通信を使用し、その後は完全にオフラインで動作します。
						</p>
					</div>
				</div>

				<div class="data-item secure">
					<div class="data-icon">✅</div>
					<div class="data-content">
						<h3>ユーザー制御</h3>
						<p>すべてのデータはユーザーが完全に制御でき、いつでも削除することができます。</p>
					</div>
				</div>
			</div>
		</section>

		<section class="privacy-section">
			<h2>📊 収集される情報</h2>
			<!-- TODO: 誤解されやすい文言、「アプリ内で保存される情報」が、収集されるように見えてしまう。-->

			<div class="info-collection">
				<div class="collection-category">
					<h3>🔵 アプリ内で保存される情報</h3>
					<ul>
						<li><strong>チェックリストの内容</strong> - タイトル、説明、メモ</li>
						<li><strong>評価データ</strong> - チェック項目の状態、スコア、判定</li>
						<li><strong>設定情報</strong> - ダークモード設定、表示設定</li>
						<li><strong>履歴データ</strong> - 過去の評価結果（最大50件）</li>
					</ul>
					<p class="note">これらの情報は端末内にのみ保存され、外部に送信されることはありません。</p>
				</div>

				<div class="collection-category">
					<h3>🔴 収集しない情報</h3>
					<ul>
						<li>個人識別情報（名前、メールアドレス、電話番号など）</li>
						<li>位置情報</li>
						<li>端末の一意識別子</li>
						<li>利用状況の詳細な分析データ</li>
						<li>その他の個人情報</li>
					</ul>
					<p class="note">アカウント登録も不要で、個人情報の入力を求めることはありません。</p>
				</div>
			</div>
		</section>

		<section class="privacy-section">
			<h2>🔧 技術的なセキュリティ対策</h2>

			<div class="security-measures">
				<div class="security-item">
					<h4>🌐 HTTPS暗号化</h4>
					<p>すべての通信はSSL/TLS暗号化により保護されています。</p>
				</div>

				<div class="security-item">
					<h4>🛡️ Content Security Policy</h4>
					<p>XSS攻撃やコード注入攻撃を防ぐセキュリティポリシーを実装しています。</p>
				</div>

				<div class="security-item">
					<h4>🔒 Same-Origin Policy</h4>
					<p>クロスサイトスクリプティング攻撃を防ぐため、同一オリジンポリシーを採用しています。</p>
				</div>

				<div class="security-item">
					<h4>📱 PWAセキュリティ</h4>
					<p>
						プログレッシブウェブアプリとして、安全なサービスワーカーでキャッシュ管理を行っています。
					</p>
				</div>

				<div class="security-item">
					<h4>🔍 定期的な監査</h4>
					<p>セキュリティ脆弱性を定期的にスキャンし、迅速に対応しています。</p>
				</div>
			</div>
		</section>

		<section class="privacy-section">
			<h2>🗑️ データの削除</h2>

			<div class="data-deletion">
				<h3>📱 ブラウザからの削除</h3>
				<div class="deletion-steps">
					<div class="step">
						<div class="step-number">1</div>
						<div class="step-content">
							<h4>ブラウザ設定を開く</h4>
							<p>使用しているブラウザの設定メニューを開きます。</p>
						</div>
					</div>
					<div class="step">
						<div class="step-number">2</div>
						<div class="step-content">
							<h4>プライバシー・セキュリティ設定</h4>
							<p>「プライバシーとセキュリティ」または「履歴」の設定を選択します。</p>
						</div>
					</div>
					<div class="step">
						<div class="step-number">3</div>
						<div class="step-content">
							<h4>サイトデータをクリア</h4>
							<p>「サイトデータを削除」または「ストレージをクリア」を実行します。</p>
						</div>
					</div>
				</div>

				<h3>🧹 アプリ内からの削除</h3>
				<ul>
					<li>個別の評価結果は履歴画面から削除可能</li>
					<li>設定リセット機能で全データを初期化可能</li>
					<li>ブラウザのデベロッパーツールからIndexedDBを直接削除可能</li>
				</ul>
			</div>
		</section>

		<section class="privacy-section">
			<h2>🌍 第三者サービス</h2>

			<div class="third-party">
				<div class="service-item">
					<h4>📦 GitHub Pages（ホスティング）</h4>
					<p>
						このアプリはGitHub
						Pagesでホスティングされています。GitHubのプライバシーポリシーが適用されますが、アプリのデータは送信されません。
					</p>
				</div>

				<div class="service-item">
					<h4>🔍 Google Fonts（フォント）</h4>
					<p>
						一部のフォントはGoogle
						Fontsから読み込まれる場合がありますが、個人データは送信されません。
					</p>
				</div>

				<div class="service-item">
					<h4>📊 分析ツール</h4>
					<p>
						<!-- Google search console, bing webmaster tools  -->
						現在、アクセス解析ツールは使用していません。将来的に導入する場合は、事前に通知します。
					</p>
				</div>
			</div>
		</section>

		<section class="privacy-section">
			<h2>📜 法的根拠と権利</h2>

			<div class="legal-basis">
				<h3>⚖️ 適用法令</h3>
				<ul>
					<li><strong>個人情報保護法</strong>（日本）</li>
					<li><strong>GDPR</strong>（EU一般データ保護規則）</li>
					<li><strong>CCPA</strong>（カリフォルニア州消費者プライバシー法）</li>
				</ul>

				<h3>🔐 ユーザーの権利</h3>
				<ul>
					<li>
						<strong>アクセス権</strong> - 保存されたデータの確認（ブラウザ開発者ツールで可能）
					</li>
					<li><strong>削除権</strong> - データの完全削除（ブラウザ設定から可能）</li>
					<li><strong>ポータビリティ権</strong> - エクスポート機能でデータ移行可能</li>
					<li><strong>異議申立権</strong> - 処理に対する異議申立（該当なし：サーバー処理なし）</li>
				</ul>
			</div>
		</section>

		<section class="privacy-section">
			<h2>🔄 ポリシーの更新</h2>

			<div class="policy-updates">
				<p>
					このプライバシーポリシーは、法令の変更やアプリの機能追加に伴い更新される場合があります。重要な変更がある場合は、アプリ内で通知します。
				</p>

				<div class="update-history">
					<h4>📅 更新履歴</h4>
					<ul>
						<li><strong>2025年6月</strong> - 初版作成</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="privacy-section">
			<h2>📞 お問い合わせ</h2>

			<div class="contact-info">
				<p>
					プライバシーに関するご質問やご要望がございましたら、以下までお気軽にお問い合わせください。
				</p>

				<div class="contact-methods">
					<div class="contact-item">
						<h4>📧 GitHub Issues</h4>
						<p>
							<a
								href="https://github.com/shuji-bonji/fact-checklist/issues"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/shuji-bonji/fact-checklist/issues
							</a>
						</p>
					</div>

					<div class="contact-item">
						<h4>💬 GitHub Discussions</h4>
						<p>
							<a
								href="https://github.com/shuji-bonji/fact-checklist/discussions"
								target="_blank"
								rel="noopener noreferrer"
							>
								https://github.com/shuji-bonji/fact-checklist/discussions
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA -->
		<div class="privacy-cta">
			<h3>🔒 安心してご利用ください</h3>
			<p>あなたのプライバシーは完全に保護されています。今すぐ情報の信頼性評価を始めましょう。</p>
			<a href="{base}/" class="btn btn-primary"> 📋 チェックリストを開始 </a>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
	}

	/* ヘッダー */
	.privacy-header {
		text-align: center;
		padding: 40px 20px;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		border-radius: 15px;
		margin-bottom: 40px;
	}

	.privacy-header h1 {
		font-size: 2.5em;
		margin: 0 0 10px 0;
		font-weight: 300;
	}

	.last-updated {
		opacity: 0.9;
		font-size: 0.9em;
		margin: 0;
	}

	/* セクション */
	.privacy-section {
		margin-bottom: 50px;
	}

	.privacy-section h2 {
		font-size: 1.8em;
		margin-bottom: 25px;
		color: var(--text-color);
		border-bottom: 2px solid var(--border-color);
		padding-bottom: 10px;
	}

	/* ハイライトボックス */
	.highlight-box {
		background: linear-gradient(135deg, #e8f4fd, #d1ecf1);
		padding: 25px;
		border-radius: 10px;
		border-left: 5px solid #3498db;
		margin: 20px 0;
	}

	.highlight-box p {
		margin: 0;
		font-size: 1.1em;
		line-height: 1.6;
	}

	/* データ取り扱い */
	.data-handling {
		display: grid;
		gap: 20px;
		margin-top: 25px;
	}

	.data-item {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		padding: 20px;
		background: var(--card-bg);
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.data-item.secure {
		border-left: 5px solid #27ae60;
	}

	.data-icon {
		font-size: 1.5em;
		flex-shrink: 0;
		margin-top: 5px;
	}

	.data-content h3 {
		margin: 0 0 10px 0;
		color: var(--text-color);
		font-size: 1.2em;
	}

	.data-content p {
		margin: 0;
		color: var(--text-muted);
		line-height: 1.6;
	}

	/* 情報収集 */
	.info-collection {
		display: grid;
		gap: 30px;
		margin-top: 25px;
	}

	.collection-category {
		padding: 25px;
		background: var(--card-bg);
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.collection-category h3 {
		margin: 0 0 15px 0;
		color: var(--text-color);
		font-size: 1.3em;
	}

	.collection-category ul {
		margin: 15px 0;
		padding-left: 20px;
	}

	.collection-category ul li {
		margin-bottom: 8px;
		line-height: 1.6;
	}

	.collection-category .note {
		background: var(--surface-color);
		padding: 15px;
		border-radius: 8px;
		margin-top: 20px;
		font-size: 0.9em;
		color: var(--text-muted);
		border-left: 3px solid #3498db;
	}

	/* セキュリティ対策 */
	.security-measures {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
		margin-top: 25px;
	}

	.security-item {
		padding: 20px;
		background: var(--card-bg);
		border-radius: 10px;
		border-left: 4px solid #27ae60;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.security-item h4 {
		margin: 0 0 10px 0;
		color: var(--text-color);
		font-size: 1.1em;
	}

	.security-item p {
		margin: 0;
		color: var(--text-muted);
		line-height: 1.6;
		font-size: 0.95em;
	}

	/* データ削除 */
	.data-deletion {
		margin-top: 25px;
	}

	.data-deletion h3 {
		margin: 30px 0 20px 0;
		color: var(--text-color);
		font-size: 1.2em;
	}

	.deletion-steps {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin: 20px 0;
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		padding: 20px;
		background: var(--card-bg);
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.step-number {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		flex-shrink: 0;
		margin-top: 5px;
	}

	.step-content h4 {
		margin: 0 0 8px 0;
		color: var(--text-color);
	}

	.step-content p {
		margin: 0;
		color: var(--text-muted);
		line-height: 1.6;
	}

	/* 第三者サービス */
	.third-party {
		margin-top: 25px;
	}

	.service-item {
		margin-bottom: 25px;
		padding: 20px;
		background: var(--card-bg);
		border-radius: 10px;
		border-left: 4px solid #f39c12;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.service-item h4 {
		margin: 0 0 10px 0;
		color: var(--text-color);
		font-size: 1.1em;
	}

	.service-item p {
		margin: 0;
		color: var(--text-muted);
		line-height: 1.6;
	}

	/* 法的根拠 */
	.legal-basis {
		margin-top: 25px;
	}

	.legal-basis h3 {
		margin: 25px 0 15px 0;
		color: var(--text-color);
		font-size: 1.2em;
	}

	.legal-basis ul {
		background: var(--card-bg);
		padding: 20px 20px 20px 40px;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
	}

	.legal-basis ul li {
		margin-bottom: 8px;
		line-height: 1.6;
	}

	/* ポリシー更新 */
	.policy-updates {
		background: var(--card-bg);
		padding: 25px;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		margin-top: 25px;
	}

	.policy-updates p {
		margin: 0 0 20px 0;
		line-height: 1.6;
	}

	.update-history {
		background: var(--surface-color);
		padding: 20px;
		border-radius: 8px;
		margin-top: 20px;
	}

	.update-history h4 {
		margin: 0 0 15px 0;
		color: var(--text-color);
	}

	.update-history ul {
		margin: 0;
		padding-left: 20px;
	}

	.update-history ul li {
		margin-bottom: 8px;
	}

	/* お問い合わせ */
	.contact-info {
		background: var(--card-bg);
		padding: 25px;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		margin-top: 25px;
	}

	.contact-info p {
		margin: 0 0 20px 0;
		line-height: 1.6;
	}

	.contact-methods {
		display: grid;
		gap: 20px;
		margin-top: 20px;
	}

	.contact-item {
		padding: 20px;
		background: var(--surface-color);
		border-radius: 8px;
		border-left: 3px solid #3498db;
	}

	.contact-item h4 {
		margin: 0 0 10px 0;
		color: var(--text-color);
	}

	.contact-item p {
		margin: 0;
	}

	.contact-item a {
		color: #3498db;
		text-decoration: none;
		word-break: break-all;
	}

	.contact-item a:hover {
		text-decoration: underline;
	}

	/* CTA */
	.privacy-cta {
		text-align: center;
		background: linear-gradient(135deg, #f8f9fa, #e9ecef);
		padding: 40px 30px;
		border-radius: 15px;
		margin-top: 50px;
	}

	.privacy-cta h3 {
		margin: 0 0 15px 0;
		color: var(--text-color);
		font-size: 1.5em;
	}

	.privacy-cta p {
		margin: 0 0 25px 0;
		color: var(--text-muted);
		font-size: 1.1em;
	}

	/* ボタン */
	.btn {
		display: inline-block;
		padding: 15px 30px;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 1.1em;
		transition: all 0.3s ease;
	}

	.btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
	}

	/* レスポンシブ */
	@media (max-width: 768px) {
		.container {
			padding: 15px;
		}

		.privacy-header {
			padding: 30px 15px;
		}

		.privacy-header h1 {
			font-size: 2em;
		}

		.security-measures {
			grid-template-columns: 1fr;
		}

		.deletion-steps {
			gap: 15px;
		}

		.step {
			flex-direction: column;
			text-align: center;
		}

		.step-number {
			margin: 0 auto 15px auto;
		}

		.contact-item a {
			font-size: 0.9em;
		}
	}

	/* アクセシビリティ */
	@media (prefers-reduced-motion: reduce) {
		.btn {
			transition: none;
		}
	}

	/* フォーカス状態 */
	.btn:focus,
	.contact-item a:focus {
		outline: 2px solid #667eea;
		outline-offset: 2px;
	}
</style>
