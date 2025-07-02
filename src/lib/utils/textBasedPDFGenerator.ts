// src/lib/utils/textBasedPDFGenerator.ts
/**
 * テキストベースPDF生成器
 * 日本語文字検索・コピー可能なPDFを生成
 */

import type jsPDF from 'jspdf';
import type { ChecklistResult, CheckItem } from '$lib/types/checklist.js';
import { CATEGORIES } from '$lib/data/checklist-items.js';
import { loadFontAsBase64 } from '$lib/i18n/fonts.js';
import type { TranslationFunction } from '$lib/types/i18n.js';

export interface TextPDFOptions {
  includeGuides: boolean;
  includeNotes: boolean;
  includeSummary: boolean;
  sectionBreaks: boolean;
  fontFamily?: string;
  optimizeForMobile?: boolean;
  t?: TranslationFunction;
}

export class TextBasedPDFGenerator {
  private pdf: jsPDF;
  private currentY: number = 20;
  private readonly pageHeight: number;
  private readonly pageWidth: number;
  private readonly margin: number = 15;
  private readonly lineHeight: number = 7;
  private readonly maxLineWidth: number;
  private fontLoaded: boolean = false;

  constructor() {
    // jsPDFインスタンスは外部で作成されたものを受け取る
    this.pdf = {} as jsPDF; // 一時的な初期化
    this.pageHeight = 297; // A4高さ
    this.pageWidth = 210; // A4幅
    this.maxLineWidth = this.pageWidth - this.margin * 2;
  }

  /**
   * PDFServiceで使用される標準generatePDFメソッド
   * @param checklist チェックリスト結果
   * @param options 生成オプション
   * @returns 生成されたPDFのBlob
   */
  async generatePDF(checklist: ChecklistResult, options: TextPDFOptions): Promise<Blob> {
    try {
      console.log('🔤 TextBasedPDFGenerator: Starting PDF generation...');
      const pdfInstance = await this.generateFromChecklist(checklist, options);
      const blob = pdfInstance.output('blob');
      console.log('✅ TextBasedPDFGenerator: PDF generated successfully');
      return blob;
    } catch (error) {
      console.error('❌ TextBasedPDFGenerator: Failed to generate PDF:', error);
      throw error;
    }
  }

  async generateFromChecklist(checklist: ChecklistResult, options: TextPDFOptions): Promise<jsPDF> {
    // jsPDFを動的インポート
    const { default: jsPDF } = await import('jspdf');
    this.pdf = new jsPDF('p', 'mm', 'a4');

    console.log('🔤 Starting text-based PDF generation...');

    // 日本語フォントを設定
    try {
      await this.setupJapaneseFont();
      this.fontLoaded = true;
      console.log('📝 Using font: NotoSansJP (Japanese support)');
    } catch (error) {
      console.warn('⚠️ Failed to load Japanese font, using fallback:', error);
      this.fontLoaded = false;
      this.setFontWeight('normal');
      console.log('📝 Using font: courier (fallback)');
    }

    this.pdf.setFontSize(11);

    // PDF構築
    this.addHeader(checklist);

    if (options.includeSummary) {
      this.addSummary(checklist);
    }

    this.addDetailedResults(checklist, options);

    if (options.includeNotes && checklist.notes) {
      this.addNotes(checklist.notes);
    }

    this.addFooter();

    console.log('✅ Text-based PDF generation completed');
    return this.pdf;
  }

  private addHeader(checklist: ChecklistResult): void {
    this.pdf.setFontSize(16);
    this.setFontWeight('bold');
    this.addText('========================================');
    this.addText('📋 事実確認チェックシート');
    this.addText('========================================');
    this.currentY += 3;

    this.pdf.setFontSize(12);
    this.setFontWeight('normal');
    this.addText(`タイトル: ${checklist.title}`);
    this.currentY += 2;

    this.pdf.setFontSize(10);
    const createdDate = checklist.createdAt.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    this.addText(`作成日: ${createdDate}`);

    if (checklist.completedAt) {
      const completedDate = checklist.completedAt.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      this.addText(`完了日: ${completedDate}`);
    }

    const outputDate = new Date().toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    this.addText(`出力日: ${outputDate}`);
    this.currentY += 8;
  }

  private addSummary(checklist: ChecklistResult): void {
    this.checkPageBreak(40);

    this.pdf.setFontSize(14);
    this.setFontWeight('bold');
    this.addText('📊 評価結果サマリー');
    this.addText('----------------------------------------');
    this.currentY += 2;

    this.pdf.setFontSize(11);
    this.setFontWeight('normal');

    const summaryData = [
      `総合スコア: ${checklist.score.total}/${checklist.score.maxScore} ポイント`,
      `信頼度レベル: ${checklist.confidenceLevel}%`,
      `評価結果: ${checklist.confidenceText}`,
      `最終判定: ${this.getJudgmentText(checklist.judgment)}`,
      ...(checklist.judgmentAdvice ? [`推奨アクション: ${checklist.judgmentAdvice}`] : [])
    ];

    summaryData.forEach(line => {
      this.addText(`  ${line}`);
      this.currentY += 1;
    });

    // セクション別達成率
    this.currentY += 3;
    this.setFontWeight('bold');
    this.addText('セクション別達成率:');
    this.setFontWeight('normal');

    const sections = this.groupItemsByCategory(checklist.items);
    sections.forEach(section => {
      const completionText = `  ${section.category.emoji} ${section.category.name}: ${section.completionRate}% (${section.checkedItems.length}/${section.items.length})`;
      this.addText(completionText);
    });

    this.currentY += 8;
  }

  private addDetailedResults(checklist: ChecklistResult, options: TextPDFOptions): void {
    const sections = this.groupItemsByCategory(checklist.items);

    sections.forEach((section, index) => {
      if (options.sectionBreaks && index > 0) {
        this.pdf.addPage();
        this.currentY = this.margin;
      }

      this.addSection(section, options);
    });
  }

  private addSection(section: SectionData, options: TextPDFOptions): void {
    this.checkPageBreak(50);

    // セクションヘッダー
    this.pdf.setFontSize(14);
    this.setFontWeight('bold');
    this.addText('');
    this.addText('========================================');
    this.addText(`${section.category.emoji} ${section.category.name}`);
    this.addText('========================================');
    this.currentY += 1;

    this.pdf.setFontSize(10);
    this.setFontWeight('normal');
    this.addWrappedText(section.category.description);
    this.currentY += 2;

    this.pdf.setFontSize(11);
    this.setFontWeight('normal');
    this.addText(
      `達成状況: ${section.completionRate}% (${section.checkedItems.length}/${section.items.length} 項目完了)`
    );
    this.currentY += 4;

    // 各項目
    section.items.forEach((item, index) => {
      this.addCheckItem(item, index + 1, options);
    });

    this.currentY += 5;
  }

  private addCheckItem(item: CheckItem, itemNumber: number, options: TextPDFOptions): void {
    this.checkPageBreak(25);

    this.pdf.setFontSize(12);
    this.setFontWeight('bold');

    const status = item.checked ? '✓ 完了' : '✗ 未完了';
    const riskIcon = this.getRiskIcon(item.category.id);

    this.addText(`${itemNumber}. ${status} ${riskIcon}`);
    this.currentY += 1;

    this.pdf.setFontSize(11);
    this.setFontWeight('bold');
    this.addWrappedText(`   題目: ${item.title}`);
    this.currentY += 1;

    // 説明
    this.pdf.setFontSize(10);
    this.setFontWeight('normal');
    this.addWrappedText(`   説明: ${item.description}`);
    this.currentY += 2;

    // ガイド内容（オプション）
    if (options.includeGuides && item.guideContent) {
      this.addGuideContent(item.guideContent);
    }

    this.currentY += 3;
  }

  private addGuideContent(guideContent: NonNullable<CheckItem['guideContent']>): void {
    this.pdf.setFontSize(9);
    this.setFontWeight('normal');

    this.addText('   ----------------------------------------');
    this.addWrappedText(`   💡 ガイド: ${guideContent.title}`);
    this.currentY += 1;

    this.addWrappedText(`   ${guideContent.content}`);
    this.currentY += 1;

    // 良い例
    if (guideContent.examples?.good?.length) {
      this.addText('   ✅ 良い例:');
      guideContent.examples.good.forEach(example => {
        this.addWrappedText(`     - ${example}`);
      });
      this.currentY += 1;
    }

    // 悪い例
    if (guideContent.examples?.bad?.length) {
      this.addText('   ❌ 悪い例:');
      guideContent.examples.bad.forEach(example => {
        this.addWrappedText(`     - ${example}`);
      });
      this.currentY += 1;
    }

    this.addText('   ----------------------------------------');
    this.currentY += 1;
  }

  private addNotes(notes: string): void {
    this.checkPageBreak(30);

    this.pdf.setFontSize(14);
    this.setFontWeight('bold');
    this.addText('');
    this.addText('========================================');
    this.addText('📝 評価メモ');
    this.addText('========================================');
    this.currentY += 3;

    this.pdf.setFontSize(11);
    this.setFontWeight('normal');
    this.addWrappedText(notes);
    this.currentY += 5;
  }

  private addFooter(): void {
    const pageCount = this.pdf.getNumberOfPages();

    for (let i = 1; i <= pageCount; i++) {
      this.pdf.setPage(i);

      // フッター情報
      const footerY = this.pageHeight - 15;
      this.pdf.setFontSize(8);
      this.setFontWeight('normal');

      // 左側：生成情報
      this.pdf.text('実用的事実確認チェックシートによる評価結果', this.margin, footerY);
      this.pdf.text(`生成日時: ${new Date().toLocaleString('ja-JP')}`, this.margin, footerY + 4);

      // 右側：ページ番号
      const pageText = `${i} / ${pageCount}`;
      const pageTextWidth = this.pdf.getTextWidth(pageText);
      this.pdf.text(pageText, this.pageWidth - this.margin - pageTextWidth, footerY);
    }
  }

  private addText(text: string): void {
    this.pdf.text(text, this.margin, this.currentY);
    this.currentY += this.lineHeight;
  }

  private addWrappedText(text: string): void {
    const lines = this.pdf.splitTextToSize(text, this.maxLineWidth - 10);
    lines.forEach((line: string) => {
      this.checkPageBreak();
      this.pdf.text(line, this.margin, this.currentY);
      this.currentY += this.lineHeight;
    });
  }

  private checkPageBreak(requiredSpace: number = 20): void {
    if (this.currentY + requiredSpace > this.pageHeight - 25) {
      this.pdf.addPage();
      this.currentY = this.margin + 10;
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

  private getRiskIcon(categoryId: string): string {
    switch (categoryId) {
      case 'critical':
        return '🔴 重要';
      case 'detailed':
        return '🟠 詳細';
      case 'verification':
        return '🔵 検証';
      case 'context':
        return '🟣 文脈';
      default:
        return '⚪ 一般';
    }
  }

  /**
   * 日本語フォントをセットアップ
   */
  private async setupJapaneseFont(): Promise<void> {
    try {
      // NotoSansJPフォントを読み込み
      const fontBase64 = await loadFontAsBase64('/fonts/NotoSansJP-Regular.ttf');
      if (fontBase64) {
        this.pdf.addFileToVFS('NotoSansJP-Regular.ttf', fontBase64);
        this.pdf.addFont('NotoSansJP-Regular.ttf', 'NotoSansJP', 'normal');

        // Boldフォントも試行
        try {
          const boldFontBase64 = await loadFontAsBase64('/fonts/NotoSansJP-Bold.ttf');
          if (boldFontBase64) {
            this.pdf.addFileToVFS('NotoSansJP-Bold.ttf', boldFontBase64);
            this.pdf.addFont('NotoSansJP-Bold.ttf', 'NotoSansJP', 'bold');
          }
        } catch {
          console.warn('⚠️ Bold font not available, using normal font for bold text');
        }

        this.pdf.setFont('NotoSansJP', 'normal');
      } else {
        throw new Error('Failed to load font data');
      }
    } catch (error) {
      console.warn('⚠️ Japanese font setup failed:', error);
      throw error;
    }
  }

  /**
   * フォントウェイトを設定
   */
  private setFontWeight(weight: 'normal' | 'bold' | 'italic'): void {
    if (this.fontLoaded) {
      if (weight === 'bold') {
        this.pdf.setFont('NotoSansJP', 'bold');
      } else {
        this.pdf.setFont('NotoSansJP', 'normal');
      }
    } else {
      this.pdf.setFont('courier', weight === 'bold' ? 'bold' : 'normal');
    }
  }

  private groupItemsByCategory(items: CheckItem[]): SectionData[] {
    return CATEGORIES.map(category => {
      const categoryItems = items.filter(item => item.category.id === category.id);
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
  category: (typeof CATEGORIES)[0];
  items: CheckItem[];
  checkedItems: CheckItem[];
  uncheckedItems: CheckItem[];
  completionRate: number;
}
