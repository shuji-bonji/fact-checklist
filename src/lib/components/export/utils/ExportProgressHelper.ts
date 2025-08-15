// src/lib/components/export/utils/ExportProgressHelper.ts
// エクスポートプログレス管理の共通ロジック

import type { ExportProgressManager } from '../ExportProgress.svelte.js';

/**
 * エクスポートプログレス管理の標準ステージ定義
 */
export const EXPORT_PROGRESS_STAGES = {
  GENERATING: { percentage: 20, key: 'export.progress.generating' },
  PROCESSING: { percentage: 50, key: 'export.progress.processing' },
  SAVING: { percentage: 80, key: 'export.progress.saving' },
  COMPLETED: { percentage: 100, key: 'export.progress.completed' }
} as const;

export type ExportProgressStage = keyof typeof EXPORT_PROGRESS_STAGES;

/**
 * エクスポートプログレス管理のヘルパークラス
 */
export class ExportProgressHelper {
  /**
   * 標準的なプログレス更新を実行する
   * @param progressManager プログレス管理インスタンス
   * @param stage プログレスステージ
   * @param t 翻訳関数
   * @param customMessage カスタムメッセージ（省略時は標準メッセージ）
   */
  static async updateStandardProgress(
    progressManager: ExportProgressManager,
    stage: ExportProgressStage,
    t: (key: string) => string,
    customMessage?: string
  ): Promise<void> {
    const stageInfo = EXPORT_PROGRESS_STAGES[stage];
    const message = customMessage ?? t(stageInfo.key);

    await progressManager.updateProgressWithDelay(stageInfo.percentage, message, message);
  }

  /**
   * エクスポート完了処理を実行する
   * @param progressManager プログレス管理インスタンス
   * @param format エクスポート形式
   * @param t 翻訳関数
   */
  static async completeExport(
    progressManager: ExportProgressManager,
    _format: string,
    t: (key: string) => string
  ): Promise<void> {
    await this.updateStandardProgress(progressManager, 'COMPLETED', t);
    progressManager.completeExport();
    // console.log(`✅ ${format} export completed successfully`);
  }

  /**
   * カスタムプログレス更新（標準ステージ以外）
   * @param progressManager プログレス管理インスタンス
   * @param percentage パーセンテージ
   * @param stage ステージ名
   * @param message メッセージ
   * @param delay 遅延時間（デフォルト100ms）
   */
  static async updateCustomProgress(
    progressManager: ExportProgressManager,
    percentage: number,
    stage: string,
    message: string,
    delay: number = 100
  ): Promise<void> {
    await progressManager.updateProgressWithDelay(percentage, stage, message, delay);
  }

  /**
   * エクスポート開始処理を実行する
   * @param progressManager プログレス管理インスタンス
   * @param format エクスポート形式
   * @param t 翻訳関数
   */
  static startExport(
    progressManager: ExportProgressManager,
    format: string,
    t: (key: string) => string
  ): void {
    progressManager.startExport(
      'Starting',
      t('export.progress.starting') ?? `Starting ${format} export...`
    );
  }

  /**
   * 段階的なプログレス更新のためのヘルパー
   * @param progressManager プログレス管理インスタンス
   * @param stages ステージ配列
   * @param currentStageIndex 現在のステージインデックス
   * @param stageProgress ステージ内の進捗（0-1）
   * @param t 翻訳関数
   */
  static async updateMultiStageProgress(
    progressManager: ExportProgressManager,
    stages: ExportProgressStage[],
    currentStageIndex: number,
    stageProgress: number,
    t: (key: string) => string
  ): Promise<void> {
    if (currentStageIndex >= stages.length) return;

    const currentStage = stages[currentStageIndex];
    if (!currentStage) return;
    const stageInfo = EXPORT_PROGRESS_STAGES[currentStage];

    // 前のステージの合計進捗を計算
    const previousProgress = stages
      .slice(0, currentStageIndex)
      .reduce((acc, stage) => acc + EXPORT_PROGRESS_STAGES[stage].percentage, 0);

    // 現在のステージ内の進捗を計算
    const currentStageContribution = stageInfo.percentage * stageProgress;
    const totalProgress = Math.min(100, previousProgress + currentStageContribution);

    await progressManager.updateProgressWithDelay(
      totalProgress,
      t(stageInfo.key),
      `Processing stage ${currentStageIndex + 1} of ${stages.length}...`
    );
  }
}
