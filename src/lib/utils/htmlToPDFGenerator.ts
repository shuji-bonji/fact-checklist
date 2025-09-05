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
			padding: 10px;
			line-height: 1.4; 
			color: #333; 
			background: #fff;
			font-size: 11px;
		}
		
		/* ヘッダースタイル - コンパクト */
		.header-section { 
			border-bottom: 1px solid #2c3e50; 
			padding-bottom: 6px; 
			margin-bottom: 6px; 
		}
		.header-section h1 { 
			color: #2c3e50; 
			margin: 0 0 4px 0; 
			font-size: 14px;
		}
		.meta-info {
			font-size: 9px;
			color: #666;
			margin-bottom: 4px;
			line-height: 1.3;
		}
		
		/* 見出しスタイル - コンパクト */
		h3 {
			font-size: 10px;
			margin: 4px 0 3px 0;
			color: #2c3e50;
		}
		
		/* サマリースタイル - コンパクト */
		.score-summary { 
			background: #f8f9fa; 
			padding: 8px; 
			border-radius: 4px; 
			margin-bottom: 8px;
			border-left: 3px solid #3498db;
		}
		.score-summary h2 {
			margin: 0 0 6px 0; 
			color: #2c3e50; 
			font-size: 12px;
		}
		.score-grid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			gap: 8px;
			margin-bottom: 8px;
		}
		.score-item {
			background: white;
			padding: 6px;
			border-radius: 4px;
			border-left: 3px solid #3498db;
			font-size: 10px;
		}
		.score-item strong {
			display: inline;
			color: #2c3e50;
			margin-right: 4px;
			font-size: 10px;
		}
		
		/* セクションスタイル - コンパクト */
		.category-section { 
			margin-bottom: 8px; 
			page-break-inside: avoid;
			border: 1px solid #e0e0e0;
			border-radius: 4px;
			overflow: hidden;
		}
		.section-header {
			padding: 5px 8px;
			color: white;
			font-weight: bold;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 11px;
		}
		.section-header.critical { background: linear-gradient(135deg, #e74c3c, #c0392b); }
		.section-header.detailed { background: linear-gradient(135deg, #f39c12, #e67e22); }
		.section-header.verification { background: linear-gradient(135deg, #3498db, #2980b9); }
		.section-header.context { background: linear-gradient(135deg, #9b59b6, #8e44ad); }
		
		.section-title {
			font-size: 12px;
			display: flex;
			align-items: center;
			gap: 5px;
		}
		.section-stats {
			font-size: 10px;
			opacity: 0.9;
		}
		
		.section-content {
			padding: 4px 6px;
			background: #fff;
		}
		
		/* チェックアイテムスタイル - コンパクト */
		.check-item { 
			margin: 3px 0; 
			padding: 4px 6px; 
			border-radius: 3px; 
			border-left: 2px solid #ddd;
			background: #fafafa;
			page-break-inside: avoid;
		}
		.check-item.checked { 
			background: #e8f5e9; 
			border-left-color: #27ae60; 
		}
		.check-item.unchecked { 
			background: #fff3e0; 
			border-left-color: #e17055; 
		}
		.check-item-header {
			display: flex;
			align-items: flex-start;
			gap: 4px;
			margin-bottom: 2px;
		}
		.check-icon {
			font-size: 12px;
			margin-top: 0;
		}
		.check-item-title {
			font-weight: bold;
			font-size: 10px;
			color: #2c3e50;
			margin-bottom: 2px;
			line-height: 1.2;
		}
		.check-item-description {
			color: #555;
			margin-bottom: 3px;
			line-height: 1.3;
			font-size: 9px;
		}
		.check-item-guide {
			background: rgba(255,255,255,0.7);
			padding: 4px;
			border-radius: 2px;
			font-size: 8px;
			color: #666;
			border-left: 2px solid #3498db;
			line-height: 1.2;
		}
		.guide-title {
			font-weight: bold;
			color: #2c3e50;
			margin-bottom: 2px;
			font-size: 9px;
		}
		
		/* ノートセクション - コンパクト */
		.notes-section { 
			background: #e8f4fd; 
			padding: 6px; 
			border-radius: 3px; 
			margin-top: 8px; 
			border-left: 2px solid #3498db;
			page-break-inside: avoid;
		}
		.notes-section h2 {
			margin: 0 0 4px 0;
			color: #2c3e50;
			font-size: 11px;
		}
		.notes-content {
			background: white;
			padding: 4px 6px;
			border-radius: 3px;
			line-height: 1.3;
			font-size: 9px;
		}
		
		/* 印刷対応 - コンパクト */
		@media print { 
			body { margin: 3px; padding: 5px; }
			.category-section { 
				page-break-inside: avoid;
				margin-bottom: 6px;
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
			<p style="color: #555; font-style: italic; margin-bottom: 4px; font-size: 9px;">
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
    if (bodyElement === null || bodyElement === undefined) {
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
      scale: this.options.highQuality === true ? 2 : 1, // 高品質の場合は2倍スケール
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
      onclone: (clonedDoc, element) => {
        // クローンされた要素のスタイルを確認
        // console.log('🔍 Cloned element:', element);
        // console.log('📐 Element dimensions:', element.offsetWidth, 'x', element.offsetHeight);

        // クローンされた要素も確実に表示状態にする
        if (element instanceof HTMLElement) {
          element.style.opacity = '1';
          element.style.visibility = 'visible';
          element.style.display = 'block';
        }

        // フォント読み込み待機 - voidで同期処理
        void clonedDoc;
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

      let _nonWhitePixels = 0;
      for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i] ?? 0;
        const g = imageData.data[i + 1] ?? 0;
        const b = imageData.data[i + 2] ?? 0;
        const a = imageData.data[i + 3] ?? 0;

        // 白以外のピクセルをカウント
        if (a > 0 && (r !== 255 || g !== 255 || b !== 255)) {
          _nonWhitePixels++;
        }
      }

      // console.log(`🖼️ Canvas has content: ${_nonWhitePixels > 100} (non-white pixels: ${_nonWhitePixels}`);
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
      subject: '情報の信頼性を科学的・体系的に評価するためのファクトチェックシート',
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
