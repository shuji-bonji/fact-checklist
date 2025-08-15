// src/lib/components/export/ExportProgress.svelte.ts
// エクスポートプログレス管理

export interface ExportProgressInfo {
  current: number;
  total: number;
  stage: string;
  message: string;
  percentage?: number;
}

/**
 * エクスポートプログレス管理クラス
 */
export class ExportProgressManager {
  isExporting = $state(false);
  exportError = $state<string | null>(null);
  exportSuccess = $state<boolean>(false);

  readonly progress = $state<ExportProgressInfo>({
    current: 0,
    total: 100,
    stage: '',
    message: ''
  });

  /**
   * プログレスを更新する
   * @param current 現在の進捗
   * @param total 総数
   * @param stage ステージ名
   * @param message メッセージ
   */
  updateProgress(current: number, total: number, stage: string, message: string): void {
    this.progress.current = current;
    this.progress.total = total;
    this.progress.stage = stage;
    this.progress.message = message;
    this.progress.percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  }

  /**
   * エクスポート開始
   * @param stage 初期ステージ
   * @param message 初期メッセージ
   */
  startExport(stage: string = 'Starting', message: string = 'Initializing export...'): void {
    this.isExporting = true;
    this.exportError = null;
    this.exportSuccess = false;
    this.updateProgress(0, 100, stage, message);
  }

  /**
   * エクスポート完了
   * @param message 完了メッセージ
   */
  completeExport(message: string = 'Export completed successfully'): void {
    this.updateProgress(100, 100, 'Complete', message);
    this.exportSuccess = true;
    this.isExporting = false;
  }

  /**
   * エクスポートエラー
   * @param error エラーメッセージ
   */
  setError(error: string): void {
    this.exportError = error;
    this.isExporting = false;
    this.exportSuccess = false;
  }

  /**
   * プログレスをリセット
   */
  reset(): void {
    this.isExporting = false;
    this.exportError = null;
    this.exportSuccess = false;
    this.updateProgress(0, 100, '', '');
  }

  /**
   * 段階的なプログレス更新のヘルパー
   * @param stages ステージ配列
   * @param currentStageIndex 現在のステージインデックス
   * @param stageProgress ステージ内の進捗（0-1）
   */
  updateStageProgress(
    stages: string[],
    currentStageIndex: number,
    stageProgress: number = 0
  ): void {
    const totalStages = stages.length;
    if (currentStageIndex >= totalStages) return;

    const baseProgress = (currentStageIndex / totalStages) * 100;
    const stageContribution = (1 / totalStages) * 100 * stageProgress;
    const current = Math.min(100, baseProgress + stageContribution);

    this.updateProgress(
      current,
      100,
      stages[currentStageIndex] ?? 'Processing',
      `Processing stage ${currentStageIndex + 1} of ${totalStages}...`
    );
  }

  /**
   * 遅延を含むプログレス更新（UIのスムーズさ向上）
   * @param current 目標進捗
   * @param stage ステージ
   * @param message メッセージ
   * @param delay 遅延時間（ミリ秒）
   */
  async updateProgressWithDelay(
    current: number,
    stage: string,
    message: string,
    delay: number = 100
  ): Promise<void> {
    this.updateProgress(current, 100, stage, message);
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
