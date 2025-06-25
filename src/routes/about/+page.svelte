<!-- src/routes/about/+page.svelte -->
<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	function startChecklist() {
		goto(base || '/');
	}
</script>

<svelte:head>
	<title>実用的事実確認チェックシートについて</title>
	<meta
		name="description"
		content="実用的事実確認チェックシートの概要、使い方、特徴について詳しく説明します。"
	/>
</svelte:head>

<div class="container">
	<!-- ヒーローセクション -->
	<section class="hero">
		<div class="hero-content">
			<h1>🔍 実用的事実確認チェックシート</h1>
			<p class="hero-subtitle">情報の信頼性を科学的・体系的に評価するためのツール</p>
			<button class="btn btn-primary btn-large" onclick={startChecklist}> 📋 今すぐ始める </button>
		</div>
	</section>

	<!-- 主要セクション -->
	<div class="main-content">
		<!-- 概要 -->
		<section class="section">
			<h2>🌟 このツールについて</h2>
			<div class="content-grid">
				<div class="feature-card">
					<div class="feature-icon">🎯</div>
					<h3>科学的な評価</h3>
					<p>
						4カテゴリ20項目の包括的チェックで、情報の信頼性を客観的に評価します。感情的な判断ではなく、体系的なアプローチで真偽を見極めます。
					</p>
				</div>
				<div class="feature-card">
					<div class="feature-icon">🔐</div>
					<h3>完全プライベート</h3>
					<p>
						すべてのデータは端末内に保存され、サーバーには送信されません。あなたの評価内容は完全にプライベートです。
					</p>
				</div>
				<div class="feature-card">
					<div class="feature-icon">📱</div>
					<h3>いつでもどこでも</h3>
					<p>
						PWA対応でオフラインでも利用可能。スマートフォン、タブレット、デスクトップどの端末でも快適に使えます。
					</p>
				</div>
			</div>
		</section>

		<!-- 使い方 -->
		<section class="section">
			<h2>📋 使い方</h2>
			<div class="steps">
				<div class="step">
					<div class="step-number">1</div>
					<div class="step-content">
						<h3>チェックリスト作成</h3>
						<p>評価したい情報のタイトルと説明を入力してチェックリストを作成します。</p>
					</div>
				</div>
				<div class="step">
					<div class="step-number">2</div>
					<div class="step-content">
						<h3>項目を評価</h3>
						<p>20個のチェック項目を順番に確認し、該当するものにチェックを入れます。</p>
					</div>
				</div>
				<div class="step">
					<div class="step-number">3</div>
					<div class="step-content">
						<h3>スコア確認</h3>
						<p>リアルタイムで更新されるスコアと信頼度を確認します。</p>
					</div>
				</div>
				<div class="step">
					<div class="step-number">4</div>
					<div class="step-content">
						<h3>最終判定</h3>
						<p>結果に基づいて採用・要注意・不採用の判定を行い、評価を完了します。</p>
					</div>
				</div>
			</div>
		</section>

		<!-- チェックカテゴリ -->
		<section class="section">
			<h2>📊 評価カテゴリ</h2>
			<div class="categories">
				<div class="category-card critical">
					<div class="category-header">
						<span class="category-emoji">🚨</span>
						<h3>クリティカル評価（必須）</h3>
						<span class="category-count">6項目</span>
					</div>
					<p>
						情報の基本的信頼性を判断する最重要項目。権威ある情報源、一次情報の確認、論理的一貫性など。
					</p>
					<div class="category-items">
						<span class="item-tag">権威ある情報源</span>
						<span class="item-tag">一次情報の確認</span>
						<span class="item-tag">論理的一貫性</span>
					</div>
				</div>

				<div class="category-card detailed">
					<div class="category-header">
						<span class="category-emoji">📝</span>
						<h3>詳細評価（重要）</h3>
						<span class="category-count">6項目</span>
					</div>
					<p>情報の質と専門性を評価する項目。情報の新しさ、専門知識、適切な引用など。</p>
					<div class="category-items">
						<span class="item-tag">情報の新しさ</span>
						<span class="item-tag">専門知識</span>
						<span class="item-tag">適切な引用</span>
					</div>
				</div>

				<div class="category-card verification">
					<div class="category-header">
						<span class="category-emoji">🔍</span>
						<h3>検証・照合</h3>
						<span class="category-count">4項目</span>
					</div>
					<p>
						情報の検証可能性と裏付けを確認する項目。他情報源との照合、ファクトチェック、データの検証など。
					</p>
					<div class="category-items">
						<span class="item-tag">他情報源との照合</span>
						<span class="item-tag">ファクトチェック</span>
						<span class="item-tag">データ検証</span>
					</div>
				</div>

				<div class="category-card context">
					<div class="category-header">
						<span class="category-emoji">🌐</span>
						<h3>文脈・バイアス評価</h3>
						<span class="category-count">4項目</span>
					</div>
					<p>
						バイアスと文脈の適切性を評価する項目。利害関係の開示、バランスの取れた視点、背景情報など。
					</p>
					<div class="category-items">
						<span class="item-tag">利害関係の開示</span>
						<span class="item-tag">バランス視点</span>
						<span class="item-tag">背景情報</span>
					</div>
				</div>
			</div>
		</section>

		<!-- 信頼度判定 -->
		<section class="section">
			<h2>⚖️ 信頼度判定基準</h2>
			<div class="judgment-guide">
				<div class="judgment-item accept">
					<div class="judgment-header">
						<span class="judgment-icon">✅</span>
						<h3>採用（80%以上）</h3>
					</div>
					<p>
						高い信頼性があり、情報の採用を推奨します。十分な検証が行われており、安心して利用できます。
					</p>
				</div>

				<div class="judgment-item caution">
					<div class="judgment-header">
						<span class="judgment-icon">⚠️</span>
						<h3>要注意（60-79%）</h3>
					</div>
					<p>
						中程度の信頼性があります。追加の確認を推奨し、重要な決定には慎重に検討してください。
					</p>
				</div>

				<div class="judgment-item reject">
					<div class="judgment-header">
						<span class="judgment-icon">❌</span>
						<h3>不採用（60%未満）</h3>
					</div>
					<p>
						信頼性に問題があります。情報の採用は推奨せず、信頼できる別の情報源を探すことをお勧めします。
					</p>
				</div>
			</div>
		</section>

		<!-- 技術情報 -->
		<section class="section">
			<h2>🛠️ 技術的特徴</h2>
			<div class="tech-features">
				<div class="tech-item">
					<h4>🔐 プライバシー保護</h4>
					<p>すべてのデータは端末のIndexedDBに保存され、サーバーには送信されません。</p>
				</div>
				<div class="tech-item">
					<h4>📱 PWA対応</h4>
					<p>プログレッシブウェブアプリとして、ネイティブアプリのような体験を提供します。</p>
				</div>
				<div class="tech-item">
					<h4>🌙 ダークモード</h4>
					<p>システム設定に連動して自動的にダークモードに切り替わります。</p>
				</div>
				<div class="tech-item">
					<h4>📄 エクスポート機能</h4>
					<p>評価結果をPDF、HTML、JSON、Markdown形式で出力できます。</p>
				</div>
				<div class="tech-item">
					<h4>♿ アクセシビリティ</h4>
					<p>WCAG準拠のユニバーサルデザインで、誰もが使いやすい設計です。</p>
				</div>
				<div class="tech-item">
					<h4>🔄 オフライン対応</h4>
					<p>一度アクセスすれば、インターネット接続なしでも利用できます。</p>
				</div>
			</div>
		</section>

		<!-- CTA -->
		<section class="section cta-section">
			<div class="cta-content">
				<h2>📋 今すぐ始めましょう</h2>
				<p>情報の信頼性を科学的に評価して、より良い判断を行いましょう。</p>
				<div class="cta-buttons">
					<button class="btn btn-primary btn-large" onclick={startChecklist}>
						🚀 チェックリストを開始
					</button>
					<a href="{base}/help" class="btn btn-secondary btn-large"> 📚 詳細ヘルプを見る </a>
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 20px;
	}

	/* ヒーローセクション */
	.hero {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		text-align: center;
		padding: 80px 20px;
		margin: -20px -20px 40px -20px;
		border-radius: 0 0 20px 20px;
	}

	.hero-content h1 {
		font-size: 3em;
		margin: 0 0 20px 0;
		font-weight: 300;
	}

	.hero-subtitle {
		font-size: 1.3em;
		margin-bottom: 30px;
		opacity: 0.9;
	}

	/* セクション */
	.section {
		margin-bottom: 60px;
	}

	.section h2 {
		font-size: 2.2em;
		margin-bottom: 30px;
		color: var(--text-color);
		text-align: center;
	}

	/* 機能カード */
	.content-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
		margin-top: 40px;
	}

	.feature-card {
		background: var(--card-bg);
		padding: 30px;
		border-radius: 15px;
		text-align: center;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.feature-card:hover {
		transform: translateY(-5px);
	}

	.feature-icon {
		font-size: 3em;
		margin-bottom: 20px;
	}

	.feature-card h3 {
		font-size: 1.4em;
		margin-bottom: 15px;
		color: var(--text-color);
	}

	/* ステップ */
	.steps {
		display: flex;
		flex-direction: column;
		gap: 30px;
		margin-top: 40px;
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		padding: 20px;
		background: var(--card-bg);
		border-radius: 15px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.step-number {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		font-size: 1.2em;
		flex-shrink: 0;
	}

	.step-content h3 {
		margin: 0 0 10px 0;
		color: var(--text-color);
	}

	/* カテゴリカード */
	.categories {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 25px;
		margin-top: 40px;
	}

	.category-card {
		padding: 25px;
		border-radius: 15px;
		border-left: 5px solid;
		background: var(--card-bg);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.category-card:hover {
		transform: translateY(-3px);
	}

	.category-card.critical {
		border-left-color: #e74c3c;
	}
	.category-card.detailed {
		border-left-color: #f39c12;
	}
	.category-card.verification {
		border-left-color: #3498db;
	}
	.category-card.context {
		border-left-color: #9b59b6;
	}

	.category-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 15px;
	}

	.category-header h3 {
		margin: 0;
		color: var(--text-color);
	}

	.category-emoji {
		font-size: 1.5em;
		margin-right: 10px;
	}

	.category-count {
		background: var(--surface-color);
		padding: 4px 12px;
		border-radius: 12px;
		font-size: 0.85em;
		color: var(--text-muted);
	}

	.category-items {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-top: 15px;
	}

	.item-tag {
		background: var(--surface-color);
		padding: 4px 8px;
		border-radius: 8px;
		font-size: 0.8em;
		color: var(--text-muted);
	}

	/* 判定ガイド */
	.judgment-guide {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 40px;
	}

	.judgment-item {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		padding: 25px;
		border-radius: 15px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.judgment-item.accept {
		background: linear-gradient(135deg, #d5f4e6, #a8e6cf);
	}
	.judgment-item.caution {
		background: linear-gradient(135deg, #ffeaa7, #fdcb6e);
	}
	.judgment-item.reject {
		background: linear-gradient(135deg, #fab1a0, #ff7675);
	}

	.judgment-header {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
	}

	.judgment-icon {
		font-size: 1.5em;
	}

	.judgment-item h3 {
		margin: 0;
		color: var(--text-color);
	}

	/* 技術特徴 */
	.tech-features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		margin-top: 40px;
	}

	.tech-item {
		padding: 20px;
		background: var(--card-bg);
		border-radius: 10px;
		border-left: 4px solid #667eea;
	}

	.tech-item h4 {
		margin: 0 0 10px 0;
		color: var(--text-color);
	}

	/* CTA */
	.cta-section {
		text-align: center;
		background: linear-gradient(135deg, #f8f9fa, #e9ecef);
		padding: 60px 40px;
		border-radius: 20px;
		margin-top: 80px;
	}

	.cta-content h2 {
		margin-bottom: 20px;
		color: var(--text-color);
	}

	.cta-buttons {
		display: flex;
		gap: 20px;
		justify-content: center;
		margin-top: 30px;
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

	.btn-secondary {
		background: var(--surface-color);
		color: var(--text-color);
		border: 2px solid var(--border-color);
	}

	.btn-secondary:hover {
		background: var(--border-color);
		transform: translateY(-2px);
	}

	/* レスポンシブ */
	@media (max-width: 768px) {
		.hero-content h1 {
			font-size: 2.2em;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.step {
			flex-direction: column;
			text-align: center;
		}

		.judgment-item {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
