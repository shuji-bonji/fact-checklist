// src/lib/components/export/ExportOptions.svelte.ts
// エクスポートオプション管理

export interface ExportOptions {
  format: 'pdf' | 'html' | 'json' | 'markdown' | 'csv' | 'xml';
  includeGuides: boolean;
  includeNotes: boolean;
  includeSummary: boolean;
  sectionBreaks: boolean; // セクションごとのページブレイク
  textMode: boolean; // PDF生成モード: true=テキストベース, false=画像ベース
  advancedMode: boolean; // 高度なPDF機能を使用するか
  reliableMode: boolean; // 確実な日本語フォント対応
  pixelPerfectMode: boolean; // HTML→Canvas→PDF（ブラウザ表示と完全一致）
}

/**
 * エクスポートオプションの管理を行うクラス
 */
export class ExportOptionsManager {
  // エクスポートオプション（個別の状態として管理）
  format = $state<'pdf' | 'html' | 'json' | 'markdown' | 'csv' | 'xml'>('pdf');
  includeGuides = $state(false);
  includeNotes = $state(true);
  includeSummary = $state(true);
  sectionBreaks = $state(false);
  textMode = $state(false); // テキストベースPDF（レガシー）
  advancedMode = $state(false); // 高度なモード
  reliableMode = $state(false); // 確実な日本語フォント対応
  pixelPerfectMode = $state(true); // HTML→印刷→PDF（デフォルト）

  // リアクティブなエクスポートオプション
  readonly options = $derived<ExportOptions>({
    format: this.format,
    includeGuides: this.includeGuides,
    includeNotes: this.includeNotes,
    includeSummary: this.includeSummary,
    sectionBreaks: this.sectionBreaks,
    textMode: this.textMode,
    advancedMode: this.advancedMode,
    reliableMode: this.reliableMode,
    pixelPerfectMode: this.pixelPerfectMode
  });

  /**
   * エクスポートオプションを更新する
   * @param key オプションキー
   * @param value オプション値
   */
  updateOption<K extends keyof ExportOptions>(key: K, value: ExportOptions[K]): void {
    switch (key) {
      case 'format':
        this.format = value as 'pdf' | 'html' | 'json' | 'markdown' | 'csv' | 'xml';
        break;
      case 'includeGuides':
        this.includeGuides = value as boolean;
        break;
      case 'includeNotes':
        this.includeNotes = value as boolean;
        break;
      case 'includeSummary':
        this.includeSummary = value as boolean;
        break;
      case 'sectionBreaks':
        this.sectionBreaks = value as boolean;
        break;
      case 'textMode':
        this.textMode = value as boolean;
        // テキストモードを有効にしたら他のPDFモードを無効化
        if (this.textMode) {
          this.pixelPerfectMode = false;
          this.reliableMode = false;
        }
        break;
      case 'advancedMode':
        this.advancedMode = value as boolean;
        break;
      case 'reliableMode':
        this.reliableMode = value as boolean;
        // 確実モードを有効にしたら他のPDFモードを無効化
        if (this.reliableMode) {
          this.pixelPerfectMode = false;
          this.textMode = false;
        }
        break;
      case 'pixelPerfectMode':
        this.pixelPerfectMode = value as boolean;
        // ピクセルパーフェクトモードを有効にしたら他のPDFモードを無効化
        if (this.pixelPerfectMode) {
          this.reliableMode = false;
          this.textMode = false;
        }
        break;
    }
  }

  /**
   * 全てのオプションを一度に設定する
   * @param options エクスポートオプション
   */
  setOptions(options: ExportOptions): void {
    this.format = options.format;
    this.includeGuides = options.includeGuides;
    this.includeNotes = options.includeNotes;
    this.includeSummary = options.includeSummary;
    this.sectionBreaks = options.sectionBreaks;
    this.textMode = options.textMode;
    this.advancedMode = options.advancedMode;
    this.reliableMode = options.reliableMode;
    this.pixelPerfectMode = options.pixelPerfectMode;
  }

  /**
   * デフォルト設定にリセットする
   */
  resetToDefaults(): void {
    this.format = 'pdf';
    this.includeGuides = false;
    this.includeNotes = true;
    this.includeSummary = true;
    this.sectionBreaks = false;
    this.textMode = false;
    this.advancedMode = false;
    this.reliableMode = false;
    this.pixelPerfectMode = true;
  }

  /**
   * 設定を検証する
   * @returns 検証結果
   */
  validate(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // PDF生成モードの相互排他チェック
    const pdfModes = [this.textMode, this.reliableMode, this.pixelPerfectMode];
    const activePdfModes = pdfModes.filter(mode => mode).length;

    if (this.format === 'pdf' && activePdfModes === 0) {
      errors.push('At least one PDF generation mode must be selected');
    }

    if (this.format === 'pdf' && activePdfModes > 1) {
      errors.push('Only one PDF generation mode can be active at a time');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}
