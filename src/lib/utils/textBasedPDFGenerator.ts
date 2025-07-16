// src/lib/utils/textBasedPDFGenerator.ts
/**
 * テキストベースPDF生成器
 * 日本語文字検索・コピー可能なPDFを生成
 */

import type jsPDF from 'jspdf';
import type { ChecklistResult, CheckItem, CheckCategory } from '$lib/types/checklist.js';
import { getCategories } from '$lib/data/checklist-items.js';
import { loadFontAsBase64, getFontBasePath } from '$lib/i18n/fonts.js';
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
  private t: (key: string) => string = (key: string) => key;

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
      // console.log('🔤 TextBasedPDFGenerator: Starting PDF generation...');
      const pdfInstance = await this.generateFromChecklist(checklist, options);
      const blob = pdfInstance.output('blob');
      // console.log('✅ TextBasedPDFGenerator: PDF generated successfully');
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

    // 翻訳関数を設定（フォールバック付き）
    this.t = options.t ?? ((key: string) => key);

    // console.log('🔤 Starting text-based PDF generation...');

    // 日本語フォントを設定
    try {
      await this.setupJapaneseFont();
      this.fontLoaded = true;
      // console.log('📝 Using font: NotoSansJP (Japanese support)');
    } catch (error) {
      console.warn('⚠️ Failed to load Japanese font, using fallback:', error);
      this.fontLoaded = false;
      this.setFontWeight('normal');
      console.warn('📝 Using font: courier (fallback)');
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

    // console.log('✅ Text-based PDF generation completed');
    return this.pdf;
  }

  private addHeader(checklist: ChecklistResult): void {
    this.pdf.setFontSize(16);
    this.setFontWeight('bold');
    this.addText('========================================');
    this.addText(`📋 ${this.t('app.title')}`);
    this.addText('========================================');
    this.currentY += 3;

    this.pdf.setFontSize(12);
    this.setFontWeight('normal');
    this.addText(`${this.t('export.metadata.title')}: ${checklist.title}`);
    this.currentY += 2;

    this.pdf.setFontSize(10);
    const createdDate = checklist.createdAt.toLocaleDateString();
    this.addText(`${this.t('export.metadata.created')}: ${createdDate}`);

    if (checklist.completedAt) {
      const completedDate = checklist.completedAt.toLocaleDateString();
      this.addText(`${this.t('checklist.completedAt')}: ${completedDate}`);
    }

    const outputDate = new Date().toLocaleDateString();
    this.addText(`${this.t('export.generatedAt')}: ${outputDate}`);
    this.currentY += 8;
  }

  private addSummary(checklist: ChecklistResult): void {
    this.checkPageBreak(40);

    this.pdf.setFontSize(14);
    this.setFontWeight('bold');
    this.addText(`📊 ${this.t('export.summary.title')}`);
    this.addText('----------------------------------------');
    this.currentY += 2;

    this.pdf.setFontSize(11);
    this.setFontWeight('normal');

    const summaryData = [
      `${this.t('export.summary.totalScore')}: ${checklist.score.total}/${checklist.score.maxScore} ${this.t('export.items')}`,
      `${this.t('export.summary.confidenceLevel')}: ${checklist.confidenceLevel}%`,
      `${this.t('export.summary.confidenceText')}: ${checklist.confidenceText || this.t('checklist.confidence.poor')}`,
      `${this.t('export.metadata.judgment')}: ${this.getJudgmentText(checklist.judgment)}`,
      ...(checklist.judgmentAdvice
        ? [`${this.t('export.summary.judgmentAdvice')}: ${checklist.judgmentAdvice}`]
        : [])
    ];

    summaryData.forEach(line => {
      this.addText(`  ${line}`);
      this.currentY += 1;
    });

    // セクション別達成率
    this.currentY += 3;
    this.setFontWeight('bold');
    this.addText(`${this.t('export.sectionCompletion')}:`);
    this.setFontWeight('normal');

    const sections = this.groupItemsByCategory(checklist.items);
    sections.forEach(section => {
      const completionText = `  ${this.getLocalizedText(section.category.emoji)} ${this.getLocalizedText(section.category.name)}: ${section.completionRate}% (${section.checkedItems.length}/${section.items.length})`;
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
    this.addText(
      `${this.getLocalizedText(section.category.emoji)} ${this.getLocalizedText(section.category.name)}`
    );
    this.addText('========================================');
    this.currentY += 1;

    this.pdf.setFontSize(10);
    this.setFontWeight('normal');
    this.addWrappedText(this.getLocalizedText(section.category.description));
    this.currentY += 2;

    this.pdf.setFontSize(11);
    this.setFontWeight('normal');
    this.addText(
      `${this.t('export.achievementStatus')}: ${section.completionRate}% (${section.checkedItems.length}/${section.items.length} ${this.t('export.items')} ${this.t('export.completed')})`
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

    const status = item.checked
      ? `✓ ${this.t('export.completed')}`
      : `✗ ${this.t('export.notCompleted')}`;
    const riskIcon = this.getRiskIcon(item.category.id);

    this.addText(`${itemNumber}. ${status} ${riskIcon}`);
    this.currentY += 1;

    this.pdf.setFontSize(11);
    this.setFontWeight('bold');
    this.addWrappedText(`   ${this.t('export.title')}: ${this.getLocalizedText(item.title)}`);
    this.currentY += 1;

    // 説明
    this.pdf.setFontSize(10);
    this.setFontWeight('normal');
    this.addWrappedText(
      `   ${this.t('export.description')}: ${this.getLocalizedText(item.description)}`
    );
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
    this.addWrappedText(
      `   💡 ${this.t('common.guide')}: ${this.getLocalizedText(guideContent.title)}`
    );
    this.currentY += 1;

    this.addWrappedText(`   ${this.getLocalizedText(guideContent.content)}`);
    this.currentY += 1;

    // 良い例
    if (guideContent.examples?.good?.length) {
      this.addText(`   ✅ ${this.t('export.goodExamples')}:`);
      guideContent.examples.good.forEach(example => {
        this.addWrappedText(`     - ${example}`);
      });
      this.currentY += 1;
    }

    // 悪い例
    if (guideContent.examples?.bad?.length) {
      this.addText(`   ❌ ${this.t('export.badExamples')}:`);
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
    this.addText(`📝 ${this.t('export.notes')}`);
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
      this.pdf.text(
        `${this.t('app.title')} - ${this.t('checklist.evaluationResults')}`,
        this.margin,
        footerY
      );
      this.pdf.text(
        `${this.t('export.generatedAt')}: ${new Date().toLocaleString()}`,
        this.margin,
        footerY + 4
      );

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
    const lines = this.pdf.splitTextToSize(text, this.maxLineWidth - 10) as string[];
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
        return `✅ ${this.t('export.judgment.accept')}`;
      case 'caution':
        return `⚠️ ${this.t('export.judgment.caution')}`;
      case 'reject':
        return `❌ ${this.t('export.judgment.reject')}`;
      default:
        return `❓ ${this.t('export.judgment.notEvaluated')}`;
    }
  }

  private getRiskIcon(categoryId: string): string {
    switch (categoryId) {
      case 'critical':
        return `🔴 ${this.t('categories.critical.name')}`;
      case 'detailed':
        return `🟠 ${this.t('categories.detailed.name')}`;
      case 'verification':
        return `🔵 ${this.t('categories.verification.name')}`;
      case 'context':
        return `🟣 ${this.t('categories.context.name')}`;
      default:
        return `⚪ ${this.t('common.general')}`;
    }
  }

  /**
   * 日本語フォントをセットアップ
   */
  private async setupJapaneseFont(): Promise<void> {
    try {
      // GitHub Pages対応の動的フォントパス取得
      const fontBasePath = getFontBasePath();

      // NotoSansJPフォントを読み込み
      const fontBase64 = await loadFontAsBase64(`${fontBasePath}NotoSansJP-Regular.ttf`);
      if (fontBase64) {
        this.pdf.addFileToVFS('NotoSansJP-Regular.ttf', fontBase64);
        this.pdf.addFont('NotoSansJP-Regular.ttf', 'NotoSansJP', 'normal');

        // Boldフォントも試行
        try {
          const boldFontBase64 = await loadFontAsBase64(`${fontBasePath}NotoSansJP-Bold.ttf`);
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
    // Use the translation function to get categories in the correct language
    const categories = getCategories(this.t);

    return categories.map(category => {
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

  private isValidTranslationKey(text: string): boolean {
    // 翻訳キーの形式をチェックする（英数字とドットのみ）
    return /^[a-zA-Z0-9._-]+$/.test(text) && text.includes('.');
  }

  private getLocalizedText(text: string): string {
    // 翻訳キーではない実際のテキストの判定
    const isTranslationKey = this.isValidTranslationKey(text);
    return isTranslationKey ? this.t(text) : text;
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
