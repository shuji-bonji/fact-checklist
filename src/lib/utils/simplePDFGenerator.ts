// src/lib/utils/simplePDFGenerator.ts
/**
 * シンプルなHTML→PDF変換
 * ExportModalのHTML出力を利用してPDF生成
 */

import type { ChecklistResult } from '$lib/types/checklist.js';

export interface SimplePDFOptions {
	includeGuides: boolean;
	includeNotes: boolean;
	includeSummary: boolean;
	sectionBreaks: boolean;
}

export class SimplePDFGenerator {
	async generateFromHTML(htmlContent: string, _filename: string): Promise<void> {
		console.log('🎨 Starting simple HTML to PDF conversion...');

		try {
			// 新しいウィンドウでHTMLを開く
			const printWindow = window.open('', '_blank', 'width=800,height=600');
			if (!printWindow) {
				throw new Error('ポップアップがブロックされました。ポップアップを許可してください。');
			}

			// HTMLコンテンツを書き込む
			printWindow.document.write(htmlContent);
			printWindow.document.close();

			// コンテンツが読み込まれるまで待機
			await new Promise<void>(resolve => {
				printWindow.onload = () => {
					// さらに少し待機（レンダリング完了のため）
					setTimeout(() => resolve(), 500);
				};
			});

			// 印刷ダイアログを開く（PDFとして保存可能）
			printWindow.print();

			// 印刷後にウィンドウを閉じる
			setTimeout(() => {
				printWindow.close();
			}, 1000);

			console.log('✅ Print dialog opened successfully');
		} catch (error) {
			console.error('❌ PDF generation failed:', error);
			throw error;
		}
	}

	/**
	 * jsPDFを使用した直接PDF生成（フォールバック）
	 */
	async generateDirectPDF(htmlContent: string, checklist: ChecklistResult): Promise<Blob> {
		console.log('📄 Generating PDF directly with jsPDF...');

		// jsPDFを動的インポート
		const { default: jsPDF } = await import('jspdf');
		const { default: html2canvas } = await import('html2canvas');

		// 一時的なコンテナを作成
		const container = document.createElement('div');
		container.innerHTML = htmlContent;
		container.style.position = 'absolute';
		container.style.left = '0';
		container.style.top = '0';
		container.style.width = '794px'; // A4幅（96DPI）
		container.style.background = 'white';
		container.style.padding = '20px';

		// body要素のスタイルを取得して適用
		const bodyContent = container.querySelector('body');
		if (bodyContent) {
			// bodyの内容だけを使用
			container.innerHTML = bodyContent.innerHTML;

			// スタイルも移動
			const styles = container.querySelectorAll('style');
			styles.forEach(style => {
				container.insertBefore(style, container.firstChild);
			});
		}

		document.body.appendChild(container);

		try {
			// A4サイズの設定
			const pdf = new jsPDF({
				orientation: 'portrait',
				unit: 'mm',
				format: 'a4'
			});

			const pageHeight = pdf.internal.pageSize.getHeight();
			const pageWidth = pdf.internal.pageSize.getWidth();

			// 少し待機してレンダリング完了を確認
			await new Promise(resolve => setTimeout(resolve, 1000));

			// ページごとに処理
			const totalHeight = container.scrollHeight;
			const pageHeightPx = 1123; // A4の高さ（96DPI）
			let currentPosition = 0;
			let pageNumber = 0;

			while (currentPosition < totalHeight) {
				if (pageNumber > 0) {
					pdf.addPage();
				}

				// 現在の位置でCanvasを生成
				const canvas = await html2canvas(container, {
					scale: 2,
					useCORS: true,
					backgroundColor: '#ffffff',
					y: currentPosition,
					height: Math.min(pageHeightPx, totalHeight - currentPosition),
					windowHeight: pageHeightPx
				});

				// CanvasをPDFに追加
				const imgData = canvas.toDataURL('image/png');
				pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);

				currentPosition += pageHeightPx;
				pageNumber++;
			}

			// メタデータ設定
			pdf.setProperties({
				title: `事実確認チェックシート - ${checklist.title}`,
				author: 'Fact Checklist Generator',
				subject: '情報の信頼性評価',
				creator: 'Fact Checklist PWA'
			});

			return pdf.output('blob');
		} finally {
			// クリーンアップ
			if (container.parentNode) {
				container.parentNode.removeChild(container);
			}
		}
	}
}
