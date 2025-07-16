// src/lib/utils/htmlToPDFGenerator.ts
/**
 * HTML→Canvas→PDF変換によるピクセルパーフェクトPDF生成器
 * ExportModalのHTML生成ロジックを活用してブラウザ表示と完全に同じPDFを生成
 */

import type { ChecklistResult, CheckItem, CheckCategory } from '$lib/types/checklist.js';
import { getCategories } from '$lib/data/checklist-items.js';

export interface HTMLToPDFOptions {
  includeGuides: boolean;
  includeNotes: boolean;
  includeSummary: boolean;
  sectionBreaks: boolean;
  highQuality?: boolean; // 300DPI相当の高解像度
  pageFormat?: 'A4' | 'Letter';
  margins?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}

export class HTMLToPDFGenerator {
  private checklist: ChecklistResult;
  private options: HTMLToPDFOptions;

  // A4サイズ定数（mm）
  private static readonly A4_WIDTH_MM = 210;
  private static readonly A4_HEIGHT_MM = 297;

  // 高解像度設定（300DPI相当）
  private static readonly DPI_SCALE = 300 / 96; // 96DPI → 300DPI
  private static readonly A4_WIDTH_PX = Math.round(HTMLToPDFGenerator.A4_WIDTH_MM * 11.81); // mm to px at 300DPI
  private static readonly A4_HEIGHT_PX = Math.round(HTMLToPDFGenerator.A4_HEIGHT_MM * 11.81);

  constructor(checklist: ChecklistResult, options: HTMLToPDFOptions) {
    this.checklist = checklist;
    this.options = options;
  }

  async generatePDF(): Promise<Blob> {
    // console.log('🎨 Starting HTML→Canvas→PDF generation...');

    try {
      // HTML生成（ExportModalと同じロジック）
      // console.log('📝 Generating HTML content...');
      const htmlContent = this.generateStyledHTML();
      // console.log(`📏 HTML content length: ${htmlContent.length} characters`);

      // DOM要素作成
      // console.log('🏗️ Creating DOM container...');
      const container = await this.createDOMContainer(htmlContent);
      // console.log(
      //   `📦 Container created: ${container.tagName}, children: ${container.children.length}`
      // );

      // Canvas生成（高解像度）
      // console.log('🖼️ Converting to Canvas...');
      const canvas = await this.htmlToCanvas(container);

      // PDF生成
      // console.log('📄 Generating PDF...');
      const pdfBlob = await this.canvasToPDF(canvas);

      // クリーンアップ
      // console.log('🧹 Cleaning up...');
      this.cleanup(container);

      // console.log('✅ HTML→Canvas→PDF generation completed successfully');
      return pdfBlob;
    } catch (error) {
      console.error('❌ HTML→Canvas→PDF generation failed:', error);
      if (error instanceof Error) {
        console.error('📋 Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
      }
      throw error;
    }
  }

  private generateStyledHTML(): string {
    const sections = this.groupItemsByCategory();

    return `
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>事実確認チェックシート - ${this.checklist.title}</title>
	<style>
		/* 印刷最適化CSS - ExportModalのスタイルをベース */
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}
		
		body { 
			font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif; 
			margin: 0;
			padding: 20px;
			line-height: 1.6; 
			color: #333; 
			background: #fff;
			font-size: 14px;
		}
		
		/* ヘッダースタイル */
		.header-section { 
			border-bottom: 3px solid #2c3e50; 
			padding-bottom: 20px; 
			margin-bottom: 30px; 
		}
		.header-section h1 { 
			color: #2c3e50; 
			margin: 0 0 15px 0; 
			font-size: 28px;
		}
		.meta-info {
			font-size: 14px;
			color: #666;
			margin-bottom: 20px;
		}
		
		/* サマリースタイル */
		.score-summary { 
			background: linear-gradient(135deg, #f8f9fa, #e9ecef); 
			padding: 25px; 
			border-radius: 10px; 
			margin-bottom: 30px;
			border-left: 5px solid #3498db;
			box-shadow: 0 2px 10px rgba(0,0,0,0.1);
		}
		.score-summary h2 {
			margin: 0 0 20px 0; 
			color: #2c3e50; 
			font-size: 22px;
		}
		.score-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 15px;
			margin-bottom: 15px;
		}
		.score-item {
			background: white;
			padding: 15px;
			border-radius: 8px;
			border-left: 4px solid #3498db;
		}
		.score-item strong {
			display: block;
			color: #2c3e50;
			margin-bottom: 5px;
		}
		
		/* セクションスタイル */
		.category-section { 
			margin-bottom: 40px; 
			page-break-inside: avoid;
			border: 1px solid #ddd;
			border-radius: 10px;
			overflow: hidden;
			box-shadow: 0 2px 8px rgba(0,0,0,0.1);
		}
		.section-header {
			padding: 20px 25px;
			color: white;
			font-weight: bold;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.section-header.critical { background: linear-gradient(135deg, #e74c3c, #c0392b); }
		.section-header.detailed { background: linear-gradient(135deg, #f39c12, #e67e22); }
		.section-header.verification { background: linear-gradient(135deg, #3498db, #2980b9); }
		.section-header.context { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
		
		.section-title {
			font-size: 20px;
			display: flex;
			align-items: center;
			gap: 10px;
		}
		.section-stats {
			font-size: 14px;
			opacity: 0.9;
		}
		
		.section-content {
			padding: 25px;
			background: #fff;
		}
		
		/* チェックアイテムスタイル */
		.check-item { 
			margin: 20px 0; 
			padding: 20px; 
			border-radius: 8px; 
			border-left: 5px solid #ddd;
			background: #fafafa;
			page-break-inside: avoid;
		}
		.check-item.checked { 
			background: linear-gradient(135deg, #d5f4e6, #a8e6cf); 
			border-left-color: #27ae60; 
		}
		.check-item.unchecked { 
			background: linear-gradient(135deg, #ffeaa7, #fdcb6e); 
			border-left-color: #e17055; 
		}
		.check-item-header {
			display: flex;
			align-items: flex-start;
			gap: 15px;
			margin-bottom: 10px;
		}
		.check-icon {
			font-size: 24px;
			margin-top: 2px;
		}
		.check-item-title {
			font-weight: bold;
			font-size: 16px;
			color: #2c3e50;
			margin-bottom: 8px;
		}
		.check-item-description {
			color: #555;
			margin-bottom: 15px;
			line-height: 1.7;
		}
		.check-item-guide {
			background: rgba(255,255,255,0.7);
			padding: 15px;
			border-radius: 6px;
			font-size: 13px;
			color: #666;
			border-left: 3px solid #3498db;
		}
		.guide-title {
			font-weight: bold;
			color: #2c3e50;
			margin-bottom: 10px;
		}
		
		/* ノートセクション */
		.notes-section { 
			background: linear-gradient(135deg, #e8f4fd, #d1ecf1); 
			padding: 25px; 
			border-radius: 10px; 
			margin-top: 30px; 
			border-left: 5px solid #3498db;
			page-break-inside: avoid;
		}
		.notes-section h2 {
			margin: 0 0 20px 0;
			color: #2c3e50;
		}
		.notes-content {
			background: white;
			padding: 20px;
			border-radius: 8px;
			line-height: 1.7;
		}
		
		/* 印刷対応 */
		@media print { 
			body { margin: 15px; }
			.category-section { 
				page-break-inside: avoid;
				margin-bottom: 30px;
			}
			.check-item { page-break-inside: avoid; }
			${this.options.sectionBreaks ? '.category-section { page-break-before: always; }' : ''}
		}
		
		/* Canvas生成時の最適化 */
		@media screen {
			body {
				transform-origin: top left;
				zoom: 1;
			}
		}
	</style>
</head>
<body>
	<!-- ヘッダーセクション -->
	<div class="header-section">
		<h1>📋 事実確認チェックシート</h1>
		<div class="meta-info">
			<strong>${this.checklist.title}</strong><br>
			作成日: ${this.checklist.createdAt.toLocaleDateString('ja-JP')}<br>
			${this.checklist.completedAt ? `完了日: ${this.checklist.completedAt.toLocaleDateString('ja-JP')}<br>` : ''}
			出力日: ${new Date().toLocaleDateString('ja-JP')}
		</div>
	</div>

	${this.options.includeSummary ? this.generateSummaryHTML(sections) : ''}
	
	<!-- セクション内容 -->
	${sections.map(section => this.generateSectionHTML(section)).join('')}
	
	${this.options.includeNotes && this.checklist.notes ? this.generateNotesHTML() : ''}
</body>
</html>
		`.trim();
  }

  private generateSummaryHTML(sections: SectionData[]): string {
    return `
	<!-- サマリーセクション -->
	<div class="score-summary">
		<h2>📊 評価結果サマリー</h2>
		<div class="score-grid">
			<div class="score-item">
				<strong>総合スコア</strong>
				${this.checklist.score.total}/${this.checklist.score.maxScore}
			</div>
			<div class="score-item">
				<strong>信頼度レベル</strong>
				${this.checklist.confidenceLevel}%
			</div>
			<div class="score-item">
				<strong>評価結果</strong>
				${this.checklist.confidenceText}
			</div>
			<div class="score-item">
				<strong>最終判定</strong>
				${this.getJudgmentText(this.checklist.judgment)}
			</div>
		</div>
		
		<h3>セクション別達成率</h3>
		${sections
      .map(
        section => `
			<div style="margin: 5px 0;">
				${section.category.emoji} ${section.category.name}: ${section.completionRate}% (${section.checkedItems.length}/${section.items.length})
			</div>
		`
      )
      .join('')}
	</div>
		`;
  }

  private generateSectionHTML(section: SectionData): string {
    return `
	<div class="category-section">
		<div class="section-header ${section.category.id}">
			<div class="section-title">
				<span>${section.category.emoji}</span>
				<span>${section.category.name}</span>
			</div>
			<div class="section-stats">
				${section.completionRate}% (${section.checkedItems.length}/${section.items.length})
			</div>
		</div>
		<div class="section-content">
			<p style="color: #555; font-style: italic; margin-bottom: 20px;">
				${section.category.description}
			</p>
			${section.items.map(item => this.generateCheckItemHTML(item)).join('')}
		</div>
	</div>
		`;
  }

  private generateCheckItemHTML(item: CheckItem): string {
    return `
	<div class="check-item ${item.checked ? 'checked' : 'unchecked'}">
		<div class="check-item-header">
			<div class="check-icon">${item.checked ? '✅' : '⚠️'}</div>
			<div style="flex: 1;">
				<div class="check-item-title">${item.title}</div>
				<div class="check-item-description">${item.description}</div>
				${this.options.includeGuides && item.guideContent ? this.generateGuideHTML(item.guideContent) : ''}
			</div>
		</div>
	</div>
		`;
  }

  private generateGuideHTML(guideContent: CheckItem['guideContent']): string {
    if (!guideContent) {
      return '';
    }

    return `
	<div class="check-item-guide">
		<div class="guide-title">💡 ${guideContent.title}</div>
		<div>${guideContent.content}</div>
		${
      guideContent.examples?.good?.length
        ? `
			<div style="margin-top: 10px;">
				<strong>✅ 良い例:</strong>
				<ul style="margin: 5px 0 0 20px;">
					${guideContent.examples.good.map((example: string) => `<li>${example}</li>`).join('')}
				</ul>
			</div>
		`
        : ''
    }
		${
      guideContent.examples?.bad?.length
        ? `
			<div style="margin-top: 10px;">
				<strong>❌ 悪い例:</strong>
				<ul style="margin: 5px 0 0 20px;">
					${guideContent.examples.bad.map((example: string) => `<li>${example}</li>`).join('')}
				</ul>
			</div>
		`
        : ''
    }
	</div>
		`;
  }

  private generateNotesHTML(): string {
    return `
	<div class="notes-section">
		<h2>📝 評価メモ</h2>
		<div class="notes-content">
			${this.checklist.notes?.replace(/\n/g, '<br>') || ''}
		</div>
	</div>
		`;
  }

  private async createDOMContainer(htmlContent: string): Promise<HTMLElement> {
    // console.log('🏗️ Creating DOM container for Canvas generation...');

    // 新しいHTMLドキュメントを作成
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    // body要素を取得
    const bodyElement = doc.body;
    if (!bodyElement) {
      throw new Error('Body element not found in parsed HTML');
    }

    // スタイル要素も取得してbodyに追加
    const styleElements = doc.querySelectorAll('style');
    styleElements.forEach(style => {
      const clonedStyle = document.createElement('style');
      clonedStyle.textContent = style.textContent;
      bodyElement.insertBefore(clonedStyle, bodyElement.firstChild);
    });

    // body要素のスタイル設定
    bodyElement.style.position = 'fixed';
    bodyElement.style.left = '-10000px'; // 画面外に配置
    bodyElement.style.top = '0';
    bodyElement.style.width = `${HTMLToPDFGenerator.A4_WIDTH_PX}px`;
    bodyElement.style.minHeight = `${HTMLToPDFGenerator.A4_HEIGHT_PX}px`;
    bodyElement.style.visibility = 'visible'; // html2canvasのために可視化
    bodyElement.style.opacity = '1'; // 完全に不透明（html2canvasが描画できるように）
    bodyElement.style.overflow = 'visible';
    bodyElement.style.margin = '0';
    bodyElement.style.padding = '20px';
    bodyElement.style.background = '#ffffff';
    bodyElement.style.zIndex = '999999'; // 前面に配置して確実に描画

    // DOM に一時的に追加（フォント・レイアウト計算のため）
    document.body.appendChild(bodyElement);

    // レイアウト安定化とフォント読み込みの待機
    await new Promise(resolve => setTimeout(resolve, 500));

    // 強制的にレイアウトを再計算
    void bodyElement.offsetHeight; // reflow trigger

    // デバッグ: DOM要素の内容確認
    // console.log(`📋 Body element HTML preview: ${bodyElement.innerHTML.substring(0, 200)}...`);
    // console.log('📏 Body element dimensions:', {
    //   width: bodyElement.offsetWidth,
    //   height: bodyElement.offsetHeight,
    //   scrollWidth: bodyElement.scrollWidth,
    //   scrollHeight: bodyElement.scrollHeight
    // });

    return bodyElement;
  }

  private async htmlToCanvas(container: HTMLElement): Promise<HTMLCanvasElement> {
    // console.log('🖼️ Converting HTML to Canvas with high resolution...');

    // html2canvasを動的インポート
    const { default: html2canvas } = await import('html2canvas');

    // containerがbody要素そのもの
    const bodyElement = container;

    // 高解像度Canvas生成
    const canvas = await html2canvas(bodyElement, {
      scale: this.options.highQuality ? 2 : 1, // 高品質の場合は2倍スケール
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      removeContainer: false,
      logging: true, // デバッグのためログを有効化
      imageTimeout: 15000, // 画像読み込みタイムアウトを延長
      windowWidth: HTMLToPDFGenerator.A4_WIDTH_PX,
      windowHeight: HTMLToPDFGenerator.A4_HEIGHT_PX,
      ignoreElements: _element =>
        // 非表示要素を無視しない
        false,
      // フォント読み込み完了を待機
      onclone: async (clonedDoc, _element) => {
        // クローンされた要素のスタイルを確認
        // console.log('🔍 Cloned element:', _element);
        // console.log('📐 Element dimensions:', _element.offsetWidth, 'x', _element.offsetHeight);

        // クローンされた要素も確実に表示状態にする
        if (_element instanceof HTMLElement) {
          _element.style.opacity = '1';
          _element.style.visibility = 'visible';
          _element.style.display = 'block';
        }

        // フォント読み込み待機
        if (clonedDoc.fonts?.ready) {
          await clonedDoc.fonts.ready;
        } else {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
    });

    // console.log(`✅ Canvas generated: ${canvas.width}x${canvas.height}px`);
    // console.log(`📊 Canvas data URL length: ${canvas.toDataURL().length}`);

    // Canvas内容確認（デバッグ用）
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // より広い範囲をチェック
      const checkWidth = Math.min(canvas.width, 500);
      const checkHeight = Math.min(canvas.height, 500);
      const imageData = ctx.getImageData(0, 0, checkWidth, checkHeight);

      let nonWhitePixels = 0;
      for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i] ?? 0;
        const g = imageData.data[i + 1] ?? 0;
        const b = imageData.data[i + 2] ?? 0;
        const a = imageData.data[i + 3] ?? 0;

        // 白以外のピクセルをカウント
        if (a > 0 && (r !== 255 || g !== 255 || b !== 255)) {
          nonWhitePixels++;
        }
      }

      const _hasContent = nonWhitePixels > 100; // 100ピクセル以上の非白ピクセルがあればコンテンツありと判定
      // console.log(`🖼️ Canvas has content: ${_hasContent} (non-white pixels: ${nonWhitePixels}`);
    }

    return canvas;
  }

  private async canvasToPDF(canvas: HTMLCanvasElement): Promise<Blob> {
    // console.log('📄 Converting Canvas to PDF...');
    // console.log(`📐 Canvas dimensions for PDF: ${canvas.width}x${canvas.height}`);

    // jsPDFを動的インポート
    const { default: jsPDF } = await import('jspdf');

    // A4サイズのPDF作成
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    // PDFページのサイズを取得
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    // console.log(`📄 PDF page size: ${pageWidth}x${pageHeight}mm`);

    // Canvas画像をPDFに追加（PNG形式で高品質）
    const imgData = canvas.toDataURL('image/png');
    // console.log(`🖼️ Image data URL preview: ${imgData.substring(0, 100)}...`);

    // 画像のアスペクト比を維持しながらA4サイズに収める
    const canvasAspectRatio = canvas.width / canvas.height;
    const pageAspectRatio = pageWidth / pageHeight;

    let imgWidth = pageWidth;
    let imgHeight = pageHeight;

    if (canvasAspectRatio > pageAspectRatio) {
      // 幅に合わせる
      imgHeight = pageWidth / canvasAspectRatio;
    } else {
      // 高さに合わせる
      imgWidth = pageHeight * canvasAspectRatio;
    }

    // 中央配置のためのオフセット計算
    const xOffset = (pageWidth - imgWidth) / 2;
    const yOffset = (pageHeight - imgHeight) / 2;

    pdf.addImage(imgData, 'PNG', xOffset, yOffset, imgWidth, imgHeight);

    // PDFメタデータ設定
    pdf.setProperties({
      title: `事実確認チェックシート - ${this.checklist.title}`,
      author: 'Fact Checklist Generator',
      subject: '情報の信頼性を科学的・体系的に評価するための実用的事実確認チェックシート',
      keywords: 'fact-check, evaluation, reliability, information, 事実確認, 情報検証',
      creator: 'Fact Checklist PWA'
    });

    // Blobとして返す
    const pdfBlob = pdf.output('blob');
    // console.log(`✅ PDF generated: ${Math.round(pdfBlob.size / 1024)}KB`);

    return pdfBlob;
  }

  private cleanup(container: HTMLElement): void {
    try {
      if (container?.parentNode) {
        container.parentNode.removeChild(container);
      }
    } catch (error) {
      console.warn('⚠️ Cleanup failed:', error);
    }
  }

  private getJudgmentText(judgment: string | null): string {
    switch (judgment) {
      case 'accept':
        return '✅ 採用推奨';
      case 'caution':
        return '⚠️ 要注意';
      case 'reject':
        return '❌ 不採用推奨';
      default:
        return '❓ 判定未実施';
    }
  }

  private groupItemsByCategory(): SectionData[] {
    return getCategories().map(category => {
      const categoryItems = this.checklist.items.filter(item => item.category.id === category.id);
      const checkedItems = categoryItems.filter(item => item.checked);

      return {
        category,
        items: categoryItems,
        checkedItems,
        uncheckedItems: categoryItems.filter(item => !item.checked),
        completionRate:
          categoryItems.length > 0
            ? Math.round((checkedItems.length / categoryItems.length) * 100)
            : 0
      };
    });
  }
}

// 型定義
interface SectionData {
  category: CheckCategory;
  items: CheckItem[];
  checkedItems: CheckItem[];
  uncheckedItems: CheckItem[];
  completionRate: number;
}
