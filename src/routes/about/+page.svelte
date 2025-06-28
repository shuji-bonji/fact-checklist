<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	// アプリの特徴
	interface Feature {
		id: string;
		emoji: string;
		title: string;
		description: string;
		details: string[];
	}

	// 使い方ステップ
	interface Step {
		id: string;
		number: number;
		title: string;
		description: string;
		emoji: string;
	}

	// カテゴリ情報
	interface Category {
		id: string;
		name: string;
		emoji: string;
		description: string;
		items: number;
		color: string;
	}

	// 技術スタック
	interface TechItem {
		id: string;
		name: string;
		description: string;
		icon: string;
		category: string;
	}

	// データ定義
	const features: Feature[] = [
		{
			id: 'privacy',
			emoji: '🔐',
			title: '完全プライベート',
			description: 'すべてのデータは端末内のみに保存',
			details: [
				'サーバーへのデータ送信は一切なし',
				'第三者へのデータ提供なし',
				'個人を特定する情報は収集しません',
				'ユーザーがいつでもデータを削除可能'
			]
		},
		{
			id: 'offline',
			emoji: '📱',
			title: 'PWA・オフライン対応',
			description: 'ネットワークなしでも完全動作',
			details: [
				'ホーム画面への追加可能',
				'完全オフライン動作',
				'自動アップデート対応',
				'モバイルアプリのような体験'
			]
		},
		{
			id: 'scientific',
			emoji: '📊',
			title: '科学的評価システム',
			description: '4カテゴリ20項目の包括的チェック',
			details: [
				'体系的な評価基準',
				'重み付けによる信頼度算出',
				'客観的な判定支援',
				'専門家監修のチェック項目'
			]
		},
		{
			id: 'export',
			emoji: '📄',
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
		{
			id: 'history',
			emoji: '🔄',
			title: '履歴管理',
			description: '過去の評価結果を保存・参照',
			details: [
				'自動的な評価履歴保存',
				'簡単な検索・参照機能',
				'個別削除機能',
				'再編集機能（完了前のみ）'
			]
		},
		{
			id: 'accessibility',
			emoji: '♿',
			title: 'アクセシビリティ',
			description: 'WCAG準拠のユニバーサルデザイン',
			details: [
				'キーボードナビゲーション対応',
				'スクリーンリーダー対応',
				'色覚障害対応',
				'レスポンシブデザイン',
				'フォーカス視認性の向上'
			]
		}
	];

	const steps: Step[] = [
		{
			id: 'create',
			number: 1,
			title: 'チェックリスト作成',
			description: 'タイトルと対象情報の概要を入力して、新しいチェックリストを作成',
			emoji: '📝'
		},
		{
			id: 'evaluate',
			number: 2,
			title: '項目評価',
			description: '18項目をチェックして情報の信頼性を評価。詳細ガイドも参照可能',
			emoji: '✅'
		},
		{
			id: 'judge',
			number: 3,
			title: '最終判定',
			description: 'スコアを参考に「採用」「要注意」「不採用」から最終判定を選択',
			emoji: '⚖️'
		},
		{
			id: 'export',
			number: 4,
			title: '結果出力',
			description: '評価結果を各種形式でエクスポート・共有。履歴も自動保存',
			emoji: '📋'
		}
	];

	const categories: Category[] = [
		{
			id: 'critical',
			name: 'クリティカル評価',
			emoji: '🚨',
			description: '最も重要な基本的信頼性を評価',
			items: 6,
			color: '#e74c3c'
		},
		{
			id: 'detailed',
			name: '詳細評価',
			emoji: '📝',
			description: '情報の質と詳細度を評価',
			items: 6,
			color: '#f39c12'
		},
		{
			id: 'verification',
			name: '検証評価',
			emoji: '🔍',
			description: '外部検証と客観性を評価',
			items: 4,
			color: '#3498db'
		},
		{
			id: 'context',
			name: 'コンテキスト評価',
			emoji: '🌐',
			description: '情報の背景と偏向を評価',
			items: 4,
			color: '#9b59b6'
		}
	];

	const techStack: TechItem[] = [
		{
			id: 'svelte',
			name: 'Svelte 5',
			description: '最新のrunesシステムによるリアクティブUI',
			icon: '🔧',
			category: 'frontend'
		},
		{
			id: 'sveltekit',
			name: 'SvelteKit',
			description: 'フルスタックフレームワーク',
			icon: '⚡',
			category: 'frontend'
		},
		{
			id: 'typescript',
			name: 'TypeScript',
			description: '型安全な開発環境',
			icon: '💪',
			category: 'language'
		},
		{
			id: 'vite',
			name: 'Vite',
			description: '高速ビルドツール',
			icon: '🚀',
			category: 'build'
		},
		{
			id: 'pwa',
			name: 'PWA',
			description: 'プログレッシブWebアプリ',
			icon: '📱',
			category: 'platform'
		},
		{
			id: 'indexeddb',
			name: 'IndexedDB',
			description: 'ローカルデータベース',
			icon: '💾',
			category: 'storage'
		}
	];

	function goHome() {
		goto(base || '/');
	}

	function startEvaluation() {
		goto(base || '/');
	}
</script>

<svelte:head>
	<title>アプリについて - 実用的事実確認チェックシート</title>
	<meta
		name="description"
		content="実用的事実確認チェックシートのアプリ概要、特徴、使い方を詳しく紹介します。"
	/>
</svelte:head>

<div class="about-container">
	<!-- ヒーローセクション -->
	<section class="hero">
		<button class="back-btn btn" onclick={goHome}> ← ホームに戻る </button>
		<div class="hero-content">
			<h1 class="hero-title">🔍 実用的事実確認チェックシート</h1>
			<p class="hero-subtitle">
				情報の信頼性を科学的・体系的に評価するためのPWA（Progressive Web App）
			</p>
			<div class="hero-description">
				<p>
					偽情報やミスリーディングな情報が氾濫する現代において、
					<strong>情報リテラシーの向上</strong>を支援する実用的なツールです。
				</p>
				<p>
					4つのカテゴリで20項目をチェックすることで、情報の信頼度を数値化し、
					<strong>客観的な判定</strong>を支援します。
				</p>
			</div>
			<div class="hero-cta">
				<button class="btn btn-primary btn-large" onclick={startEvaluation}>
					🚀 今すぐ始める
				</button>
			</div>
		</div>
	</section>

	<!-- 特徴セクション -->
	<section class="features-section">
		<div class="section-header">
			<h2>✨ 主な特徴</h2>
			<p>安全性、利便性、科学性を追求した設計</p>
		</div>
		<div class="features-grid">
			{#each features as feature (feature.id)}
				<div class="feature-card">
					<div class="feature-icon">{feature.emoji}</div>
					<div class="feature-content">
						<h3 class="feature-title">{feature.title}</h3>
						<p class="feature-description">{feature.description}</p>
						<ul class="feature-details">
							{#each feature.details as detail}
								<li>{detail}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- 使い方セクション -->
	<section class="steps-section">
		<div class="section-header">
			<h2>🚀 使い方</h2>
			<p>4つの簡単なステップで情報の信頼性を評価</p>
		</div>
		<div class="steps-grid">
			{#each steps as step (step.id)}
				<div class="step">
					<div class="step-number">{step.number}</div>
					<div class="step-content">
						<div class="step-emoji">{step.emoji}</div>
						<h3 class="step-title">{step.title}</h3>
						<p class="step-description">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- 評価カテゴリセクション -->
	<section class="categories-section">
		<div class="section-header">
			<h2>📊 評価カテゴリ</h2>
			<p>4つのカテゴリで多角的に情報を評価</p>
		</div>
		<div class="categories-grid">
			{#each categories as category (category.id)}
				<div class="category-card" style:--category-color={category.color}>
					<div class="category-icon">{category.emoji}</div>
					<div class="category-content">
						<h3 class="category-title">{category.name}</h3>
						<p class="category-description">{category.description}</p>
						<div class="category-items">
							<span class="category-count">{category.items}項目</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- 技術スタックセクション -->
	<section class="tech-section">
		<div class="section-header">
			<h2>⚙️ 技術スタック</h2>
			<p>最新の技術で構築された高性能アプリケーション</p>
		</div>
		<div class="tech-grid">
			{#each techStack as tech (tech.id)}
				<div class="tech-item">
					<div class="tech-icon">{tech.icon}</div>
					<div class="tech-content">
						<h4 class="tech-name">{tech.name}</h4>
						<p class="tech-description">{tech.description}</p>
						<span class="tech-category">{tech.category}</span>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- 統計情報セクション -->
	<section class="stats-section">
		<div class="section-header">
			<h2>📈 パフォーマンス</h2>
			<p>Lighthouse監査による高品質スコア</p>
		</div>
		<div class="stats-grid">
			<div class="stat-item">
				<div class="stat-value">95+</div>
				<div class="stat-label">パフォーマンス</div>
			</div>
			<div class="stat-item">
				<div class="stat-value">100</div>
				<div class="stat-label">アクセシビリティ</div>
			</div>
			<div class="stat-item">
				<div class="stat-value">100</div>
				<div class="stat-label">ベストプラクティス</div>
			</div>
			<div class="stat-item">
				<div class="stat-value">100</div>
				<div class="stat-label">SEO</div>
			</div>
		</div>
	</section>

	<!-- CTAセクション -->
	<section class="cta-section">
		<div class="cta-content">
			<h2>🌟 今すぐ始めましょう</h2>
			<p>情報の信頼性を、科学的・体系的に評価してみませんか？</p>
			<div class="cta-buttons">
				<button class="btn btn-primary btn-large" onclick={startEvaluation}>
					🔍 評価を始める
				</button>
				<button class="btn btn-secondary btn-large" onclick={() => goto(`${base}/help`)}>
					📖 詳しい使い方を見る
				</button>
			</div>
		</div>
	</section>
</div>

<style>
	.about-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--spacing-lg);
	}

	/* ヒーローセクションの視認性改善（プライバシーページと統一） */
	.hero {
		position: relative;
		text-align: center;
		margin-bottom: var(--spacing-xl);
		padding: var(--spacing-xl);

		/* プライバシーページと同じパターンで背景設定 */
		background: linear-gradient(135deg, #e8f4fd, #d1ecf1);
		color: #2c3e50;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow-hover);

		/* 境界線で分離（プライバシーページと統一） */
		border: 2px solid var(--border-color);
		border-left: 6px solid var(--secondary-color);
	}

	.back-btn {
		position: absolute;
		top: var(--spacing-md);
		left: var(--spacing-md);
		background: var(--secondary-color);
		color: white;
		text-decoration: none;
		transition: all 0.3s ease;
		border: 2px solid transparent;
	}

	.back-btn:hover {
		background: #2980b9;
		transform: translateY(-2px);
		border-color: rgba(52, 152, 219, 0.3);
	}

	.hero-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.hero-title {
		font-size: 3em;
		font-weight: 300;
		margin: 0 0 var(--spacing-md) 0;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
		color: #2c3e50;
	}

	.hero-subtitle {
		font-size: 1.3em;
		margin: 0 0 var(--spacing-lg) 0;
		color: #34495e;
		font-weight: 500;
	}

	.hero-description {
		margin: 0 0 var(--spacing-xl) 0;
		font-size: 1.1em;
		line-height: 1.6;
		color: #2c3e50;
	}

	.hero-description p {
		margin: 0 0 var(--spacing-sm) 0;
		color: #34495e;
	}

	.hero-cta {
		margin-top: var(--spacing-xl);
	}

	/* 特徴カードの視認性改善 */
	.features-section,
	.steps-section,
	.categories-section,
	.tech-section,
	.stats-section {
		margin-bottom: var(--spacing-xl);
	}

	.section-header {
		text-align: center;
		margin-bottom: var(--spacing-xl);
		padding: var(--spacing-lg);

		/* プライバシーページと統一したセクションヘッダー */
		background: linear-gradient(135deg, #e8f4fd, #d1ecf1);
		border-radius: var(--border-radius);
		border: 2px solid var(--border-color);
		border-left: 5px solid var(--secondary-color);
		box-shadow: var(--shadow);
	}

	.section-header h2 {
		margin: 0 0 var(--spacing-sm) 0;
		font-size: 2.2em;
		color: var(--text-color);
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	.section-header p {
		margin: 0;
		font-size: 1.1em;
		color: #34495e;
		font-weight: 500;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: var(--spacing-lg);
	}

	.feature-card {
		padding: var(--spacing-lg);
		border-radius: var(--border-radius);
		transition: all 0.3s ease;

		/* 特徴カードの視認性改善 */
		background: linear-gradient(135deg, #ffffff, #f8f9fa);
		border: 2px solid var(--border-color);
		border-left: 6px solid var(--secondary-color);
		box-shadow: var(--shadow);

		/* テキストの視認性向上 */
		color: #2c3e50;
	}

	.feature-card:hover {
		transform: translateY(-5px);
		box-shadow: var(--shadow-hover);
		border-color: var(--secondary-color);
		background: linear-gradient(135deg, #f0f7ff, #e8f4fd);
	}

	.feature-icon {
		font-size: 3em;
		margin-bottom: var(--spacing-md);
		text-align: center;
	}

	.feature-title {
		font-size: 1.4em;
		font-weight: 600;
		margin: 0 0 var(--spacing-sm) 0;
		color: var(--text-color);
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.feature-description {
		font-size: 1.05em;
		line-height: 1.5;
		margin: 0 0 var(--spacing-md) 0;
		color: #34495e;
		font-weight: 500;
	}

	.feature-details {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.feature-details li {
		padding: var(--spacing-xs) 0;
		border-bottom: 1px solid var(--border-color);
		font-size: 0.95em;
		color: #5a6c7d;
		font-weight: 400;
	}

	.feature-details li:before {
		content: '✓';
		color: var(--success-color);
		font-weight: bold;
		margin-right: var(--spacing-xs);
	}

	.feature-details li:last-child {
		border-bottom: none;
	}

	/* ステップの視認性改善 */
	.steps-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-lg);
	}

	.step {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-md);
		padding: var(--spacing-lg);
		border-radius: var(--border-radius);
		transition: all 0.3s ease;

		/* ステップの視認性改善 */
		background: linear-gradient(135deg, #ffffff, #f0f7ff);
		border: 2px solid var(--border-color);
		border-left: 6px solid var(--success-color);
		box-shadow: var(--shadow);

		/* テキストの視認性向上 */
		color: #2c3e50;
	}

	.step:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-hover);
		background: linear-gradient(135deg, #e8f5e8, #d5f4e6);
	}

	.step-number {
		background: var(--success-color);
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
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
	}

	.step-content {
		flex: 1;
	}

	.step-emoji {
		font-size: 2em;
		margin-bottom: var(--spacing-xs);
	}

	.step-title {
		font-size: 1.2em;
		font-weight: 600;
		margin: 0 0 var(--spacing-xs) 0;
		color: var(--text-color);
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.step-description {
		font-size: 0.95em;
		line-height: 1.5;
		margin: 0;
		color: #34495e;
		font-weight: 400;
	}

	/* カテゴリカードの視認性改善 */
	.categories-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-lg);
	}

	.category-card {
		padding: var(--spacing-lg);
		border-radius: var(--border-radius);
		transition: all 0.3s ease;

		/* カテゴリカードの視認性改善 */
		background: linear-gradient(135deg, #ffffff, #f8f9fa);
		border: 2px solid var(--border-color);
		border-left: 6px solid var(--category-color);
		box-shadow: var(--shadow);

		/* テキストの視認性向上 */
		color: #2c3e50;
	}

	.category-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-hover);
		border-color: var(--category-color);
		background:
			linear-gradient to bottom right,
			#ffffff,
			rgba(var(--category-color), 0.05);
	}

	.category-icon {
		font-size: 2.5em;
		margin-bottom: var(--spacing-md);
		text-align: center;
	}

	.category-title {
		font-size: 1.3em;
		font-weight: 600;
		margin: 0 0 var(--spacing-sm) 0;
		color: var(--text-color);
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.category-description {
		font-size: 1em;
		line-height: 1.5;
		margin: 0 0 var(--spacing-md) 0;
		color: #34495e;
		font-weight: 400;
	}

	.category-items {
		text-align: center;
	}

	.category-count {
		display: inline-block;
		background: var(--category-color);
		color: white;
		padding: var(--spacing-xs) var(--spacing-sm);
		border-radius: 20px;
		font-size: 0.9em;
		font-weight: 600;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	}

	/* 技術アイテムの視認性改善 */
	.tech-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--spacing-md);
	}

	.tech-item {
		padding: var(--spacing-md);
		border-radius: var(--border-radius-sm);
		transition: all 0.3s ease;
		text-align: center;

		/* 技術アイテムの視認性改善 */
		background: linear-gradient(135deg, #f8f9fa, #ffffff);
		border: 2px solid var(--border-color);
		border-left: 4px solid var(--warning-color);
		box-shadow: var(--shadow);

		/* テキストの視認性向上 */
		color: #2c3e50;
	}

	.tech-item:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-hover);
		background: linear-gradient(135deg, #fff3e0, #ffeaa7);
		border-color: var(--warning-color);
	}

	.tech-icon {
		font-size: 2em;
		margin-bottom: var(--spacing-xs);
	}

	.tech-name {
		font-size: 1.1em;
		font-weight: 600;
		margin: 0 0 var(--spacing-xs) 0;
		color: var(--text-color);
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.tech-description {
		font-size: 0.9em;
		line-height: 1.4;
		margin: 0 0 var(--spacing-xs) 0;
		color: #34495e;
		font-weight: 400;
	}

	.tech-category {
		display: inline-block;
		background: var(--warning-color);
		color: white;
		padding: 2px 8px;
		border-radius: 10px;
		font-size: 0.8em;
		font-weight: 500;
	}

	/* 統計セクション */
	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: var(--spacing-lg);
	}

	.stat-item {
		text-align: center;
		padding: var(--spacing-lg);
		background: linear-gradient(135deg, #e8f5e8, #d5f4e6);
		border-radius: var(--border-radius);
		border: 2px solid var(--border-color);
		border-left: 6px solid var(--success-color);
		box-shadow: var(--shadow);
	}

	.stat-value {
		font-size: 3em;
		font-weight: bold;
		color: var(--success-color);
		margin-bottom: var(--spacing-xs);
	}

	.stat-label {
		font-size: 1em;
		color: #2c3e50;
		font-weight: 600;
	}

	/* CTAセクション（プライバシーページと統一） */
	.cta-section {
		background: linear-gradient(135deg, #2c3e50, #34495e);
		color: white;
		padding: var(--spacing-xl);
		border-radius: var(--border-radius);
		text-align: center;
		box-shadow: var(--shadow-hover);
		border: 2px solid var(--border-color);
		border-left: 6px solid var(--secondary-color);
	}

	.cta-content h2 {
		font-size: 2.5em;
		margin: 0 0 var(--spacing-md) 0;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
		color: white;
	}

	.cta-content p {
		font-size: 1.2em;
		margin: 0 0 var(--spacing-xl) 0;
		opacity: 0.9;
		color: rgba(255, 255, 255, 0.9);
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		gap: var(--spacing-md);
		flex-wrap: wrap;
	}

	.btn-large {
		padding: var(--spacing-md) var(--spacing-xl);
		font-size: 1.1em;
	}

	/* ダークモード対応の強化 */
	:global(.dark) .hero {
		background: linear-gradient(135deg, #1a202c, #2d3748);
		border-color: #4a5568;
	}

	:global(.dark) .section-header {
		background: linear-gradient(135deg, #374151, #4a5568);
		border-color: #4a5568;
	}

	:global(.dark) .feature-card,
	:global(.dark) .step,
	:global(.dark) .category-card,
	:global(.dark) .tech-item {
		background: linear-gradient(135deg, #2d3748, #374151);
		border-color: #4a5568;
		color: #f7fafc;
	}

	:global(.dark) .feature-title,
	:global(.dark) .step-title,
	:global(.dark) .category-title,
	:global(.dark) .tech-name,
	:global(.dark) .section-header h2 {
		color: #f7fafc;
	}

	:global(.dark) .feature-description,
	:global(.dark) .step-description,
	:global(.dark) .category-description,
	:global(.dark) .tech-description,
	:global(.dark) .section-header p {
		color: #e2e8f0;
	}

	:global(.dark) .cta-section {
		background: linear-gradient(135deg, #1a202c, #2d3748);
		border-color: #4a5568;
	}

	:global(.dark) .cta-content h2 {
		color: #f7fafc;
	}

	:global(.dark) .cta-content p {
		color: rgba(247, 250, 252, 0.9);
	}

	:global(.dark) .stat-item {
		background: linear-gradient(135deg, #374151, #4a5568);
		border-color: #4a5568;
		border-left-color: #68d391;
	}

	:global(.dark) .stat-value {
		color: #68d391;
	}

	:global(.dark) .stat-label {
		color: #f7fafc;
	}

	/* レスポンシブ対応 */
	@media (max-width: 768px) {
		.about-container {
			padding: var(--spacing-md);
		}

		.hero {
			padding: var(--spacing-md);
		}

		.back-btn {
			position: relative;
			top: auto;
			left: auto;
			margin-bottom: var(--spacing-md);
		}

		.hero-title {
			font-size: 2.2em;
		}

		.hero-subtitle {
			font-size: 1.1em;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}

		.steps-grid {
			grid-template-columns: 1fr;
		}

		.step {
			flex-direction: column;
			text-align: center;
		}

		.step-number {
			align-self: center;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
		}

		.btn-large {
			width: 100%;
			max-width: 300px;
		}
	}

	/* アクセシビリティ向上 */
	@media (prefers-reduced-motion: reduce) {
		.feature-card,
		.step,
		.category-card,
		.tech-item,
		.back-btn {
			transition: none;
		}
	}

	/* フォーカス時の視認性向上 */
	.feature-card:focus-within,
	.step:focus-within,
	.category-card:focus-within,
	.tech-item:focus-within,
	.back-btn:focus {
		outline: 3px solid var(--secondary-color);
		outline-offset: 3px;
	}
</style>
