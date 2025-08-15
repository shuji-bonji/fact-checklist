// src/lib/components/export/utils/ExportFilenameGenerator.ts
// エクスポートファイル名生成の共通ロジック

import { formatDateForFilename } from '$lib/utils/dateFormat.js';
// sanitizeFilename は必要時に動的インポート

/**
 * ファイル名生成オプション
 */
export interface FilenameGenerationOptions {
  /** プレフィックス（省略時はアプリタイトル） */
  prefix?: string;
  /** サフィックス（省略時は空文字） */
  suffix?: string;
  /** タイムスタンプの形式をカスタマイズするか */
  useCustomTimestamp?: boolean;
  /** カスタムタイムスタンプ */
  customTimestamp?: string;
  /** ファイル拡張子を含めるか（デフォルト: true） */
  includeExtension?: boolean;
}

/**
 * エクスポートファイル名生成のヘルパークラス
 */
export class ExportFilenameGenerator {
  /**
   * 標準的なエクスポートファイル名を生成する
   * @param format エクスポート形式（拡張子として使用）
   * @param checklistTitle チェックリストタイトル
   * @param t 翻訳関数
   * @param options 生成オプション
   * @returns 生成されたファイル名
   */
  static async generate(
    format: string,
    checklistTitle: string,
    t: (key: string) => string,
    options?: FilenameGenerationOptions
  ): Promise<string> {
    const timestamp =
      options?.useCustomTimestamp === true
        ? (options.customTimestamp ?? formatDateForFilename())
        : formatDateForFilename();

    const { sanitizeFilename } = await import('$lib/utils/download.js');
    const sanitizedTitle = sanitizeFilename(checklistTitle);
    const prefix = options?.prefix ?? t('app.title');
    const suffix = options?.suffix ?? '';

    const baseName = `${prefix}_${sanitizedTitle}_${timestamp}${suffix}`;

    if (options?.includeExtension === false) {
      return baseName;
    }

    return `${baseName}.${format}`;
  }

  /**
   * PDFファイル名を生成する
   * @param checklistTitle チェックリストタイトル
   * @param t 翻訳関数
   * @param options 生成オプション
   */
  static async generatePDFFilename(
    checklistTitle: string,
    t: (key: string) => string,
    options?: Omit<FilenameGenerationOptions, 'includeExtension'>
  ): Promise<string> {
    return this.generate('pdf', checklistTitle, t, { ...options, includeExtension: true });
  }

  /**
   * HTMLファイル名を生成する
   * @param checklistTitle チェックリストタイトル
   * @param t 翻訳関数
   * @param options 生成オプション
   */
  static async generateHTMLFilename(
    checklistTitle: string,
    t: (key: string) => string,
    options?: Omit<FilenameGenerationOptions, 'includeExtension'>
  ): Promise<string> {
    return this.generate('html', checklistTitle, t, { ...options, includeExtension: true });
  }

  /**
   * JSONファイル名を生成する
   * @param checklistTitle チェックリストタイトル
   * @param t 翻訳関数
   * @param options 生成オプション
   */
  static async generateJSONFilename(
    checklistTitle: string,
    t: (key: string) => string,
    options?: Omit<FilenameGenerationOptions, 'includeExtension'>
  ): Promise<string> {
    return this.generate('json', checklistTitle, t, { ...options, includeExtension: true });
  }

  /**
   * Markdownファイル名を生成する
   * @param checklistTitle チェックリストタイトル
   * @param t 翻訳関数
   * @param options 生成オプション
   */
  static async generateMarkdownFilename(
    checklistTitle: string,
    t: (key: string) => string,
    options?: Omit<FilenameGenerationOptions, 'includeExtension'>
  ): Promise<string> {
    return this.generate('md', checklistTitle, t, { ...options, includeExtension: true });
  }

  /**
   * CSVファイル名を生成する
   * @param checklistTitle チェックリストタイトル
   * @param t 翻訳関数
   * @param options 生成オプション
   */
  static async generateCSVFilename(
    checklistTitle: string,
    t: (key: string) => string,
    options?: Omit<FilenameGenerationOptions, 'includeExtension'>
  ): Promise<string> {
    return this.generate('csv', checklistTitle, t, { ...options, includeExtension: true });
  }

  /**
   * XMLファイル名を生成する
   * @param checklistTitle チェックリストタイトル
   * @param t 翻訳関数
   * @param options 生成オプション
   */
  static async generateXMLFilename(
    checklistTitle: string,
    t: (key: string) => string,
    options?: Omit<FilenameGenerationOptions, 'includeExtension'>
  ): Promise<string> {
    return this.generate('xml', checklistTitle, t, { ...options, includeExtension: true });
  }

  /**
   * ファイル名をバリデーションする
   * @param filename ファイル名
   * @returns バリデーション結果
   */
  static validateFilename(filename: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!filename.trim()) {
      errors.push('Filename cannot be empty');
    }

    if (filename.length > 255) {
      errors.push('Filename is too long (max 255 characters)');
    }

    // 無効な文字をチェック
    const invalidChars = /[<>:"/\\|?*]/;
    if (invalidChars.test(filename)) {
      errors.push('Filename contains invalid characters');
    }

    // 予約名をチェック（Windows）
    const reservedNames = /^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(\.|$)/i;
    if (reservedNames.test(filename)) {
      errors.push('Filename uses a reserved name');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * セーフなファイル名を生成する（バリデーション付き）
   * @param format エクスポート形式
   * @param checklistTitle チェックリストタイトル
   * @param t 翻訳関数
   * @param options 生成オプション
   * @returns バリデーション済みファイル名
   */
  static async generateSafe(
    format: string,
    checklistTitle: string,
    t: (key: string) => string,
    options?: FilenameGenerationOptions
  ): Promise<string> {
    let filename = await this.generate(format, checklistTitle, t, options);

    const validation = this.validateFilename(filename);
    if (!validation.isValid) {
      console.warn('Generated filename has issues:', validation.errors);
      // フォールバック: より安全な名前を生成
      filename = await this.generate(format, 'checklist', t, {
        ...options,
        prefix: 'export'
      });
    }

    return filename;
  }
}
