<script lang="ts">
	import { onMount } from 'svelte';
	import type { ChecklistResult, ExportOptions } from '$lib/types/checklist.js';

	interface Props {
		checklist: ChecklistResult | null;
		onClose: () => void;
	}

	const { checklist, onClose }: Props = $props();

	const exportOptions = $state<ExportOptions>({
		format: 'pdf',
		includeGuides: true,
		includeNotes: true
	});

	let isExporting = $state(false);
	let modalElement: HTMLDivElement;

	onMount(() => {
		// ESCキーでモーダルを閉じる
		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleKeydown);
		document.body.style.overflow = 'hidden'; // スクロールを無効化

		return () => {
			document.removeEventListener('keydown', handleKeydown);
			document.body.style.overflow = '';
		};
	});

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === modalElement) {
			onClose();
		}
	}

	function updateExportOption<K extends keyof ExportOptions>(key: K, value: ExportOptions[K]) {
		exportOptions[key] = value;
	}

	async function exportChecklist() {
		if (!checklist) return;

		isExporting = true;
		try {
			switch (exportOptions.format) {
				case 'pdf':
					await exportToPDF();
					break;
				case 'html':
					await exportToHTML();
					break;
				case 'json':
					await exportToJSON();
					break;
			}
		} catch (error) {
			console.error('エクスポートエラー:', error);
			alert('エクスポートに失敗しました。');
		} finally {
			isExporting = false;
		}
	}

	async function exportToPDF() {
		if (!checklist) return;

		// 動的インポートでjsPDFを読み込み
		const { default: jsPDF } = await import('jspdf');

		const doc = new jsPDF();
		const margin = 20;
		let yPosition = margin;

		// UTF-8フォントの設定（日本語対応）
		doc.setFont('helvetica');

		// タイトル
		doc.setFontSize(16);
		doc.text(checklist.title, margin, yPosition);
		yPosition += 15;

		// 作成日時
		doc.setFontSize(12);
		doc.text(`作成日: ${checklist.createdAt.toLocaleDateString('ja-JP')}`, margin, yPosition);
		yPosition += 10;

		// スコア情報
		doc.setFontSize(14);
		doc.text('評価結果', margin, yPosition);
		yPosition += 10;

		doc.setFontSize(10);
		doc.text(
			`総合スコア: ${checklist.score.total}/${checklist.score.maxScore} (${checklist.confidenceLevel}%)`,
			margin,
			yPosition
		);
		yPosition += 8;
		doc.text(`信頼度: ${checklist.confidenceText}`, margin, yPosition);
		yPosition += 8;
		doc.text(`判定: ${getJudgmentText(checklist.judgment)}`, margin, yPosition);
		yPosition += 15;

		// チェック項目
		doc.setFontSize(12);
		doc.text('チェック項目', margin, yPosition);
		yPosition += 10;

		doc.setFontSize(9);
		checklist.items.forEach(item => {
			if (yPosition > 280) {
				// 改ページチェック
				doc.addPage();
				yPosition = margin;
			}

			const checkMark = item.checked ? '✓' : '✗';
			doc.text(`${checkMark} ${item.title}`, margin, yPosition);
			yPosition += 8;
		});

		// ダウンロード
		const filename = `事実確認チェックシート_${checklist.title}_${new Date().toISOString().slice(0, 10)}.pdf`;
		doc.save(filename);
	}

	async function exportToHTML() {
		if (!checklist) return;

		const html = generateHTMLContent();
		const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
		const filename = `事実確認チェックシート_${checklist.title}_${new Date().toISOString().slice(0, 10)}.html`;
		downloadBlob(blob, filename);
	}

	async function exportToJSON() {
		if (!checklist) return;

		// エクスポート用のクリーンなオブジェクトを作成
		const exportData = {
			title: checklist.title,
			description: checklist.description,
			notes: checklist.notes,
			createdAt: checklist.createdAt.toISOString(),
			completedAt: checklist.completedAt?.toISOString() || null,
			judgment: checklist.judgment,
			score: checklist.score,
			confidenceLevel: checklist.confidenceLevel,
			confidenceText: checklist.confidenceText,
			judgmentAdvice: checklist.judgmentAdvice,
			items: checklist.items,
			exportedAt: new Date().toISOString(),
			version: '1.0'
		};

		const jsonString = JSON.stringify(exportData, null, 2);
		const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
		const filename = `事実確認チェックシート_${checklist.title}_${new Date().toISOString().slice(0, 10)}.json`;
		downloadBlob(blob, filename);
	}

	function generateHTMLContent(): string {
		if (!checklist) return '';

		const checkedItems = checklist.items.filter(item => item.checked);
		const uncheckedItems = checklist.items.filter(item => !item.checked);

		return `
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>事実確認チェックシート - ${checklist.title}</title>
	<style>
		body { font-family: "Hiragino Sans", "Yu Gothic", Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
		.header { border-bottom: 2px solid #2c3e50; padding-bottom: 20px; margin-bottom: 30px; }
		.header h1 { color: #2c3e50; margin: 0 0 10px 0; }
		.score-summary { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
		.check-section { margin-bottom: 30px; }
		.check-section h2 { color: #34495e; border-left: 4px solid #3498db; padding-left: 15px; }
		.check-item { margin: 15px 0; padding: 15px; border-radius: 5px; }
		.check-item.checked { background: #d5f4e6; border-left: 4px solid #27ae60; }
		.check-item.unchecked { background: #ffeaa7; border-left: 4px solid #e17055; }
		.notes { background: #e8f4fd; padding: 20px; border-radius: 8px; margin-top: 30px; }
		@media print { body { margin: 20px; } }
	</style>
</head>
<body>
	<div class="header">
		<h1>${checklist.title}</h1>
		<p>作成日: ${checklist.createdAt.toLocaleDateString('ja-JP')}</p>
		<p>評価完了日: ${checklist.completedAt?.toLocaleDateString('ja-JP') || '未完了'}</p>
	</div>
	
	<div class="score-summary">
		<h2>評価結果</h2>
		<p><strong>総合スコア:</strong> ${checklist.score.total}/${checklist.score.maxScore} (${checklist.confidenceLevel}%)</p>
		<p><strong>信頼度:</strong> ${checklist.confidenceText}</p>
		<p><strong>最終判定:</strong> ${getJudgmentText(checklist.judgment)}</p>
		<p><strong>推奨:</strong> ${checklist.judgmentAdvice}</p>
	</div>

	<div class="check-section">
		<h2>チェック済み項目 (${checkedItems.length}件)</h2>
		${checkedItems
			.map(
				item => `
			<div class="check-item checked">
				<strong>✅ ${item.title}</strong>
				<p>${item.description}</p>
			</div>
		`
			)
			.join('')}
	</div>

	<div class="check-section">
		<h2>未チェック項目 (${uncheckedItems.length}件)</h2>
		${uncheckedItems
			.map(
				item => `
			<div class="check-item unchecked">
				<strong>❌ ${item.title}</strong>
				<p>${item.description}</p>
			</div>
		`
			)
			.join('')}
	</div>

	${
		exportOptions.includeNotes && checklist.notes
			? `
		<div class="notes">
			<h2>評価メモ</h2>
			<p>${checklist.notes.replace(/\n/g, '<br>')}</p>
		</div>
	`
			: ''
	}

	<div class="footer" style="margin-top: 40px; text-align: center; color: #666; border-top: 1px solid #ddd; padding-top: 20px;">
		<p>実用的事実確認チェックシートによる評価 - ${new Date().toLocaleDateString('ja-JP')}</p>
	</div>
</body>
</html>
		`.trim();
	}

	function downloadBlob(blob: Blob, filename: string) {
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}

	function getJudgmentText(judgment: string | null): string {
		switch (judgment) {
			case 'accept':
				return '採用';
			case 'caution':
				return '要注意';
			case 'reject':
				return '不採用';
			default:
				return '未判定';
		}
	}

	async function copyToClipboard() {
		if (!checklist) return;

		const text = `
事実確認評価結果

タイトル: ${checklist.title}
作成日: ${checklist.createdAt.toLocaleDateString('ja-JP')}
総合スコア: ${checklist.score.total}/${checklist.score.maxScore} (${checklist.confidenceLevel}%)
信頼度: ${checklist.confidenceText}
最終判定: ${getJudgmentText(checklist.judgment)}

チェック済み項目: ${checklist.items.filter(i => i.checked).length}件
未チェック項目: ${checklist.items.filter(i => !i.checked).length}件

${checklist.notes ? `評価メモ:\n${checklist.notes}` : ''}
		`.trim();

		try {
			await navigator.clipboard.writeText(text);
			alert('クリップボードにコピーしました');
		} catch (error) {
			console.error('コピーに失敗:', error);
			alert('コピーに失敗しました');
		}
	}
</script>

<div
	class="modal-backdrop"
	bind:this={modalElement}
	onclick={handleBackdropClick}
	onkeydown={e => {
		if (e.key === 'Escape') {
			onClose();
		}
	}}
	role="dialog"
	aria-modal="true"
	aria-labelledby="modal-title"
	tabindex="-1"
>
	<div class="modal-content">
		<div class="modal-header">
			<h2 id="modal-title">📄 エクスポート・共有</h2>
			<button class="close-btn" onclick={onClose} aria-label="閉じる"> ✕ </button>
		</div>

		<div class="modal-body">
			<!-- フォーマット選択 -->
			<div class="option-group">
				<h3>出力形式</h3>
				<div class="format-options">
					<label class="radio-option">
						<input
							type="radio"
							name="format"
							value="pdf"
							checked={exportOptions.format === 'pdf'}
							onchange={() => updateExportOption('format', 'pdf')}
						/>
						<span>📄 PDF</span>
						<small>印刷・共有に最適</small>
					</label>

					<label class="radio-option">
						<input
							type="radio"
							name="format"
							value="html"
							checked={exportOptions.format === 'html'}
							onchange={() => updateExportOption('format', 'html')}
						/>
						<span>🌐 HTML</span>
						<small>ブラウザで表示可能</small>
					</label>

					<label class="radio-option">
						<input
							type="radio"
							name="format"
							value="json"
							checked={exportOptions.format === 'json'}
							onchange={() => updateExportOption('format', 'json')}
						/>
						<span>📊 JSON</span>
						<small>データ形式（開発者向け）</small>
					</label>
				</div>
			</div>

			<!-- 含める内容 -->
			<div class="option-group">
				<h3>含める内容</h3>
				<div class="checkbox-options">
					<label class="checkbox-option">
						<input
							type="checkbox"
							checked={exportOptions.includeGuides}
							onchange={e =>
								updateExportOption('includeGuides', (e.target as HTMLInputElement).checked)}
						/>
						<span>📖 ガイド情報を含める</span>
					</label>

					<label class="checkbox-option">
						<input
							type="checkbox"
							checked={exportOptions.includeNotes}
							onchange={e =>
								updateExportOption('includeNotes', (e.target as HTMLInputElement).checked)}
						/>
						<span>📝 評価メモを含める</span>
					</label>
				</div>
			</div>

			<!-- アクションボタン -->
			<div class="action-buttons">
				<button class="btn btn-primary" onclick={exportChecklist} disabled={isExporting}>
					{#if isExporting}
						⏳ エクスポート中...
					{:else}
						📥 ダウンロード
					{/if}
				</button>

				<button class="btn btn-secondary" onclick={copyToClipboard} disabled={isExporting}>
					📋 コピー
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 20px;
	}

	.modal-content {
		background: var(--bg-color);
		border-radius: var(--border-radius);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
		max-width: 500px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
	}

	.modal-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-lg);
		border-bottom: 1px solid var(--border-color);
	}

	.modal-header h2 {
		margin: 0;
		color: var(--text-color);
		font-size: 1.3em;
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 1.2em;
		cursor: pointer;
		padding: 8px;
		border-radius: 50%;
		color: var(--text-muted);
		transition: all 0.3s ease;
	}

	.close-btn:hover {
		background: var(--surface-color);
		color: var(--text-color);
	}

	.modal-body {
		padding: var(--spacing-lg);
	}

	.option-group {
		margin-bottom: var(--spacing-lg);
	}

	.option-group h3 {
		margin: 0 0 var(--spacing-sm) 0;
		color: var(--text-color);
		font-size: 1.1em;
		font-weight: 600;
	}

	.format-options {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.radio-option {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		padding: var(--spacing-sm);
		border: 1px solid var(--border-color);
		border-radius: var(--border-radius-sm);
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.radio-option:hover {
		background: var(--surface-color);
		border-color: var(--secondary-color);
	}

	.radio-option input[type='radio'] {
		margin: 0;
		accent-color: var(--secondary-color);
	}

	.radio-option span {
		font-weight: 500;
		color: var(--text-color);
	}

	.radio-option small {
		color: var(--text-muted);
		font-size: 0.8em;
		margin-left: auto;
	}

	.checkbox-options {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.checkbox-option {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		cursor: pointer;
		padding: var(--spacing-xs) 0;
	}

	.checkbox-option input[type='checkbox'] {
		margin: 0;
		accent-color: var(--secondary-color);
	}

	.checkbox-option span {
		color: var(--text-color);
	}

	.action-buttons {
		display: flex;
		gap: var(--spacing-sm);
		flex-wrap: wrap;
	}

	.btn {
		flex: 1;
		min-width: 120px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-xs);
		padding: var(--spacing-sm) var(--spacing-md);
		border: none;
		border-radius: 25px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		text-decoration: none;
	}

	.btn:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: var(--shadow-hover);
	}

	.btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.btn-primary {
		background: linear-gradient(135deg, var(--primary-color), #34495e);
		color: white;
	}

	.btn-secondary {
		background: linear-gradient(135deg, var(--secondary-color), #2980b9);
		color: white;
	}

	/* レスポンシブ対応 */
	@media (max-width: 768px) {
		.modal-content {
			margin: 10px;
		}

		.modal-header,
		.modal-body {
			padding: var(--spacing-md);
		}

		.action-buttons {
			flex-direction: column;
		}

		.btn {
			min-width: auto;
		}

		.radio-option {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-xs);
		}

		.radio-option small {
			margin-left: 0;
		}
	}
</style>
