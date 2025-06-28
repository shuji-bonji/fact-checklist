<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	// プライバシーポリシーのデータ項目
	interface DataItem {
		id: string;
		title: string;
		description: string;
		details?: string[];
	}

	const privacyData: DataItem[] = [
		{
			id: 'data-collection',
			title: '📊 データ収集について',
			description: '当アプリケーションはユーザーのプライバシーを最優先に考慮しています。',
			details: [
				'すべてのチェックリストデータは、お使いの端末内にのみ保存されます',
				'サーバーへのデータ送信は一切行いません',
				'第三者へのデータ提供は一切ありません',
				'ログイン機能はなく、個人を特定する情報は収集しません'
			]
		},
		{
			id: 'local-storage',
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
		{
			id: 'offline-functionality',
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
		{
			id: 'security-measures',
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
		{
			id: 'data-retention',
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
		{
			id: 'policy-updates',
			title: '📋 ポリシー更新',
			description: 'プライバシーポリシーの変更について。',
			details: [
				'重要な変更がある場合は、アプリケーション内で通知します',
				'軽微な修正は随時行われます',
				'最新版は常にこのページで確認できます',
				'ご不明な点がありましたら、GitHubのIssuesでお知らせください'
			]
		}
	];

	function goHome() {
		goto(base || '/');
	}
</script>

<svelte:head>
	<title>プライバシーポリシー - 実用的事実確認チェックシート</title>
	<meta
		name="description"
		content="実用的事実確認チェックシートのプライバシーポリシー。データの取り扱いと保護について説明します。"
	/>
</svelte:head>

<div class="privacy-container">
	<div class="privacy-header">
		<button class="back-btn btn" onclick={goHome}> ← ホームに戻る </button>
		<h1>🔐 プライバシーポリシー</h1>
		<p class="last-updated">最終更新: 2025年6月28日</p>
	</div>

	<div class="privacy-content">
		<div class="intro-section">
			<h2>🛡️ プライバシー保護への取り組み</h2>
			<p>
				「実用的事実確認チェックシート」は、ユーザーのプライバシー保護を最重要課題として位置づけています。
				このアプリケーションは<strong>完全にローカル環境で動作</strong>し、
				<strong>サーバーへのデータ送信は一切行いません</strong>。
			</p>
		</div>

		<div class="data-items-section">
			{#each privacyData as item (item.id)}
				<div class="data-item" data-item-id={item.id}>
					<div class="data-item-header">
						<h3 class="data-item-title">{item.title}</h3>
					</div>
					<div class="data-item-content">
						<p class="data-item-description">{item.description}</p>
						{#if item.details}
							<ul class="data-item-details">
								{#each item.details as detail}
									<li>{detail}</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<div class="contact-section">
			<h2>📞 お問い合わせ</h2>
			<p>
				プライバシーポリシーに関するご質問やご不明な点がございましたら、
				<a
					href="https://github.com/shuji-bonji/fact-checklist/issues"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHubのIssues
				</a>
				からお気軽にお問い合わせください。
			</p>
		</div>
	</div>
</div>

<style>
	.privacy-container {
		max-width: 800px;
		margin: 0 auto;
		padding: var(--spacing-lg);
		min-height: 100vh;
	}

	.privacy-header {
		text-align: center;
		margin-bottom: var(--spacing-xl);
		padding-bottom: var(--spacing-lg);
		border-bottom: 2px solid var(--border-color);
	}

	.back-btn {
		position: absolute;
		top: var(--spacing-lg);
		left: var(--spacing-lg);
		background: var(--secondary-color);
		color: white;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.back-btn:hover {
		background: #2980b9;
		transform: translateY(-2px);
	}

	.privacy-header h1 {
		color: var(--text-color);
		margin: var(--spacing-md) 0;
		font-size: 2.5em;
		font-weight: 300;
	}

	.last-updated {
		color: var(--text-muted);
		font-size: 0.9em;
		margin: 0;
	}

	.privacy-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xl);
	}

	.intro-section {
		background: linear-gradient(135deg, #e8f4fd, #d1ecf1);
		padding: var(--spacing-lg);
		border-radius: var(--border-radius);
		border-left: 5px solid var(--secondary-color);
		box-shadow: var(--shadow);
	}

	.intro-section h2 {
		color: var(--text-color);
		margin: 0 0 var(--spacing-md) 0;
		font-size: 1.5em;
	}

	.intro-section p {
		color: var(--text-color);
		line-height: 1.6;
		margin: 0;
		font-size: 1.05em;
	}

	.data-items-section {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	/* 修正されたdata-itemのスタイル */
	.data-item {
		background: var(--surface-color);
		border: 2px solid var(--border-color);
		border-radius: var(--border-radius);
		padding: var(--spacing-lg);
		box-shadow: var(--shadow);
		transition: all 0.3s ease;

		/* 背景色を明確に分離 */
		background: linear-gradient(135deg, #f8f9fa, #ffffff);

		/* より強いボーダーで視認性向上 */
		border-left: 6px solid var(--secondary-color);

		/* 文字のコントラストを強化 */
		color: #2c3e50;
	}

	.data-item:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-hover);
		border-color: var(--secondary-color);

		/* ホバー時の背景変更で視認性向上 */
		background: linear-gradient(135deg, #ffffff, #f0f7ff);
	}

	.data-item-header {
		margin-bottom: var(--spacing-md);
	}

	.data-item-title {
		color: var(--text-color);
		margin: 0;
		font-size: 1.25em;
		font-weight: 600;

		/* タイトルの視認性向上 */
		color: #2c3e50;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
	}

	.data-item-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.data-item-description {
		color: var(--text-color);
		line-height: 1.6;
		margin: 0;
		font-size: 1.05em;

		/* 説明文の視認性向上 */
		color: #34495e;
		font-weight: 500;
	}

	.data-item-details {
		margin: 0;
		padding-left: var(--spacing-md);
		list-style-type: disc;
	}

	.data-item-details li {
		color: var(--text-color);
		line-height: 1.5;
		margin-bottom: var(--spacing-xs);

		/* リスト項目の視認性向上 */
		color: #5a6c7d;
		font-weight: 400;
	}

	.data-item-details li:last-child {
		margin-bottom: 0;
	}

	.contact-section {
		background: var(--bg-color);
		border: 1px solid var(--border-color);
		border-radius: var(--border-radius);
		padding: var(--spacing-lg);
		text-align: center;
		box-shadow: var(--shadow);
	}

	.contact-section h2 {
		color: var(--text-color);
		margin: 0 0 var(--spacing-md) 0;
		font-size: 1.4em;
	}

	.contact-section p {
		color: var(--text-color);
		line-height: 1.6;
		margin: 0;
	}

	.contact-section a {
		color: var(--secondary-color);
		text-decoration: none;
		font-weight: 600;
		border-bottom: 2px solid transparent;
		transition: all 0.3s ease;
	}

	.contact-section a:hover {
		border-bottom-color: var(--secondary-color);
		color: #2980b9;
	}

	/* ダークモード対応の強化 */
	:global(.dark) .data-item {
		background: linear-gradient(135deg, #2d3748, #374151);
		border-color: #4a5568;
		color: #f7fafc;
	}

	:global(.dark) .data-item:hover {
		background: linear-gradient(135deg, #374151, #4a5568);
		border-color: #63b3ed;
	}

	:global(.dark) .data-item-title {
		color: #f7fafc;
		text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
	}

	:global(.dark) .data-item-description {
		color: #e2e8f0;
	}

	:global(.dark) .data-item-details li {
		color: #cbd5e0;
	}

	/* レスポンシブ対応 */
	@media (max-width: 768px) {
		.privacy-container {
			padding: var(--spacing-md);
		}

		.back-btn {
			position: relative;
			top: auto;
			left: auto;
			margin-bottom: var(--spacing-md);
		}

		.privacy-header h1 {
			font-size: 2em;
		}

		.data-item {
			padding: var(--spacing-md);
		}

		.data-item-title {
			font-size: 1.1em;
		}

		.intro-section,
		.contact-section {
			padding: var(--spacing-md);
		}
	}

	/* アクセシビリティ向上 */
	@media (prefers-reduced-motion: reduce) {
		.data-item,
		.back-btn {
			transition: none;
		}
	}

	/* フォーカス時の視認性向上 */
	.data-item:focus-within {
		outline: 3px solid var(--secondary-color);
		outline-offset: 3px;
	}

	.back-btn:focus {
		outline: 3px solid var(--secondary-color);
		outline-offset: 3px;
	}
</style>
