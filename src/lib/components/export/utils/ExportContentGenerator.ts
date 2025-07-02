// src/lib/components/export/utils/ExportContentGenerator.ts
// エクスポートコンテンツ生成の共通ロジック

import type { ChecklistResult } from '$lib/types/checklist.js';
import type { ExportOptions } from '../ExportOptions.svelte.js';
import type { TranslationFunction } from '$lib/types/i18n.js';

/**
 * エクスポートメタデータインターフェース
 */
export interface ExportMetadata {
  exportDate: string;
  appVersion: string;
  format: string;
  title: string;
  options: ExportOptions;
  exportedBy?: string;
  language?: string;
}

/**
 * JSONエクスポートデータインターフェース
 */
export interface JSONExportData {
  metadata: ExportMetadata;
  checklist: {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    score: {
      critical: number;
      detailed: number;
      verification: number;
      context: number;
      total: number;
      maxScore: number;
      percentage: number;
    };
    confidenceLevel: number;
    judgment: string;
    items: {
      id: string;
      title: string;
      description: string;
      checked: boolean;
      category: {
        id: string;
        name: string;
        description: string;
        color: string;
        emoji: string;
      };
      translationKey?: string | undefined;
      guideContent?:
        | {
            title: string;
            content: string;
            examples?:
              | {
                  type: 'good' | 'bad';
                  content: string;
                }[]
              | undefined;
          }
        | undefined;
    }[];
  };
}

/**
 * エクスポートコンテンツ生成のヘルパークラス
 */
export class ExportContentGenerator {
  /**
   * JSONエクスポート用のデータを生成する
   * @param checklist チェックリスト結果
   * @param options エクスポートオプション
   * @param checklistStoreTitle チェックリストタイトル
   * @param additionalMetadata 追加メタデータ
   * @returns JSONエクスポートデータ
   */
  static generateJSONExportData(
    checklist: ChecklistResult,
    options: ExportOptions,
    checklistStoreTitle: string,
    additionalMetadata?: Partial<ExportMetadata>
  ): JSONExportData {
    const metadata: ExportMetadata = {
      exportDate: new Date().toISOString(),
      appVersion: '1.0.0',
      format: 'fact-checklist-json',
      title: checklistStoreTitle,
      options,
      ...additionalMetadata
    };

    const exportData: JSONExportData = {
      metadata,
      checklist: {
        id: checklist.id,
        title: checklist.title,
        description: checklist.description,
        createdAt: checklist.createdAt.toISOString(),
        updatedAt: checklist.updatedAt.toISOString(),
        score: checklist.score,
        confidenceLevel: checklist.confidenceLevel,
        judgment: checklist.judgment ?? 'not_set',
        items: checklist.items.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          checked: item.checked,
          category: item.category,
          translationKey: item.translationKey,
          guideContent:
            options.includeGuides && item.guideContent
              ? {
                  title: item.guideContent.title,
                  content: item.guideContent.content,
                  examples: item.guideContent.examples
                    ? [
                        ...item.guideContent.examples.good.map(content => ({
                          type: 'good' as const,
                          content
                        })),
                        ...item.guideContent.examples.bad.map(content => ({
                          type: 'bad' as const,
                          content
                        }))
                      ]
                    : undefined
                }
              : undefined
        }))
      }
    };

    return exportData;
  }

  /**
   * 最小限のJSONエクスポートデータを生成する（軽量版）
   * @param checklist チェックリスト結果
   * @param checklistStoreTitle チェックリストタイトル
   * @returns 軽量JSONエクスポートデータ
   */
  static generateMinimalJSONExportData(
    checklist: ChecklistResult,
    checklistStoreTitle: string
  ): {
    metadata: {
      exportDate: string;
      format: string;
      title: string;
    };
    data: {
      id: string;
      title: string;
      score: {
        critical: number;
        detailed: number;
        verification: number;
        context: number;
        total: number;
        maxScore: number;
        percentage: number;
      };
      items: {
        id: string;
        title: string;
        checked: boolean;
        category: string;
      }[];
    };
  } {
    return {
      metadata: {
        exportDate: new Date().toISOString(),
        format: 'fact-checklist-minimal',
        title: checklistStoreTitle
      },
      data: {
        id: checklist.id,
        title: checklist.title,
        score: checklist.score,
        items: checklist.items.map(item => ({
          id: item.id,
          title: item.title,
          checked: item.checked,
          category: item.category.id
        }))
      }
    };
  }

  /**
   * CSVデータを生成する
   * @param checklist チェックリスト結果
   * @param options エクスポートオプション
   * @param t 翻訳関数（オプション）
   * @returns CSV文字列
   */
  static generateCSVData(
    checklist: ChecklistResult,
    options: ExportOptions,
    t?: TranslationFunction
  ): string {
    const headers = [
      t ? t('export.csv.id') : 'ID',
      t ? t('export.csv.title') : 'Title',
      t ? t('export.csv.description') : 'Description',
      t ? t('export.csv.checked') : 'Checked',
      t ? t('export.csv.category') : 'Category'
    ];

    if (options.includeGuides) {
      headers.push(
        t ? `${t('common.guide')} ${t('export.csv.title')}` : 'Guide Title',
        t ? `${t('common.guide')} ${t('export.csv.description')}` : 'Guide Content'
      );
    }

    const rows = [headers.join(',')];

    checklist.items.forEach(item => {
      const row = [
        `"${item.id}"`,
        `"${(t ? t(item.title) : item.title).replace(/"/g, '""')}"`,
        `"${(t ? t(item.description) : item.description).replace(/"/g, '""')}"`,
        item.checked ? 'TRUE' : 'FALSE',
        `"${(t ? t(item.category.name) : item.category.name).replace(/"/g, '""')}"`
      ];

      if (options.includeGuides) {
        row.push(
          `"${(t && item.guideContent?.title ? t(item.guideContent.title) : (item.guideContent?.title ?? '')).replace(/"/g, '""')}"`,
          `"${(t && item.guideContent?.content ? t(item.guideContent.content) : (item.guideContent?.content ?? '')).replace(/"/g, '""')}"`
        );
      }

      rows.push(row.join(','));
    });

    return rows.join('\n');
  }

  /**
   * プレーンテキストサマリーを生成する
   * @param checklist チェックリスト結果
   * @param t 翻訳関数
   * @returns プレーンテキスト
   */
  static generatePlainTextSummary(checklist: ChecklistResult, t: TranslationFunction): string {
    const lines: string[] = [];

    lines.push(`${t('app.title')}`);
    lines.push('='.repeat(50));
    lines.push('');

    lines.push(`${t('export.metadata.title')}: ${checklist.title}`);
    lines.push(
      `${t('export.metadata.created')}: ${new Date(checklist.createdAt).toLocaleDateString()}`
    );
    lines.push(
      `${t('export.metadata.score')}: ${checklist.score.total}/${checklist.score.maxScore}`
    );
    lines.push(`${t('export.metadata.confidence')}: ${checklist.confidenceLevel}%`);

    if (checklist.judgment) {
      lines.push(`${t('export.judgment.title')}: ${t(`export.judgment.${checklist.judgment}`)}`);
    }

    lines.push('');
    lines.push(`${t('export.summary.title')}`);
    lines.push('-'.repeat(30));

    checklist.items.forEach((item, index) => {
      lines.push(`${index + 1}. [${item.checked ? 'x' : ' '}] ${item.title}`);
      if (item.description) {
        lines.push(`   ${item.description}`);
      }
      lines.push('');
    });

    return lines.join('\n');
  }

  /**
   * XMLエクスポートデータを生成する
   * @param checklist チェックリスト結果
   * @param options エクスポートオプション
   * @param checklistStoreTitle チェックリストタイトル
   * @returns XML文字列
   */
  static generateXMLData(
    checklist: ChecklistResult,
    options: ExportOptions,
    checklistStoreTitle: string
  ): string {
    const escapeXML = (str: string): string => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
    };

    const lines: string[] = [];
    lines.push('<?xml version="1.0" encoding="UTF-8"?>');
    lines.push('<factChecklist>');

    lines.push('  <metadata>');
    lines.push(`    <exportDate>${new Date().toISOString()}</exportDate>`);
    lines.push('    <appVersion>1.0.0</appVersion>');
    lines.push('    <format>fact-checklist-xml</format>');
    lines.push(`    <title>${escapeXML(checklistStoreTitle)}</title>`);
    lines.push('  </metadata>');

    lines.push('  <checklist>');
    lines.push(`    <id>${escapeXML(checklist.id)}</id>`);
    lines.push(`    <title>${escapeXML(checklist.title)}</title>`);
    lines.push(`    <description>${escapeXML(checklist.description)}</description>`);
    lines.push(`    <createdAt>${checklist.createdAt}</createdAt>`);
    lines.push(`    <updatedAt>${checklist.updatedAt}</updatedAt>`);
    lines.push(`    <confidenceLevel>${checklist.confidenceLevel}</confidenceLevel>`);
    lines.push(`    <judgment>${escapeXML(checklist.judgment ?? 'not_set')}</judgment>`);

    lines.push('    <score>');
    lines.push(`      <critical>${checklist.score.critical}</critical>`);
    lines.push(`      <detailed>${checklist.score.detailed}</detailed>`);
    lines.push(`      <verification>${checklist.score.verification}</verification>`);
    lines.push(`      <context>${checklist.score.context}</context>`);
    lines.push(`      <total>${checklist.score.total}</total>`);
    lines.push(`      <maxScore>${checklist.score.maxScore}</maxScore>`);
    lines.push(`      <percentage>${checklist.score.percentage}</percentage>`);
    lines.push('    </score>');

    lines.push('    <items>');
    checklist.items.forEach(item => {
      lines.push('      <item>');
      lines.push(`        <id>${escapeXML(item.id)}</id>`);
      lines.push(`        <title>${escapeXML(item.title)}</title>`);
      lines.push(`        <description>${escapeXML(item.description)}</description>`);
      lines.push(`        <checked>${item.checked}</checked>`);
      lines.push(`        <categoryId>${escapeXML(item.category.id)}</categoryId>`);

      if (options.includeGuides && item.guideContent) {
        lines.push('        <guideContent>');
        lines.push(`          <title>${escapeXML(item.guideContent.title)}</title>`);
        lines.push(`          <content>${escapeXML(item.guideContent.content)}</content>`);
        lines.push('        </guideContent>');
      }

      lines.push('      </item>');
    });
    lines.push('    </items>');

    lines.push('  </checklist>');
    lines.push('</factChecklist>');

    return lines.join('\n');
  }

  /**
   * データサイズを見積もる
   * @param data エクスポートデータ
   * @param format エクスポート形式
   * @returns バイト数（概算）
   */
  static estimateDataSize(data: unknown, format: string): number {
    let stringData: string;

    switch (format.toLowerCase()) {
      case 'json':
        stringData = JSON.stringify(data);
        break;
      case 'xml':
      case 'html':
      case 'csv':
      case 'txt':
        stringData = String(data);
        break;
      default:
        stringData = JSON.stringify(data);
    }

    // UTF-8エンコーディングを想定したバイト数計算
    return new Blob([stringData], { type: 'text/plain' }).size;
  }
}
