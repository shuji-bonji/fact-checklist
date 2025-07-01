// src/lib/utils/progress.ts
// プログレス管理関連のユーティリティ関数

export interface ProgressInfo {
  current: number;
  total: number;
  stage: string;
  message: string;
  percentage: number;
  isComplete: boolean;
}

export type ProgressCallback = (progress: ProgressInfo) => void;

/**
 * プログレス情報を作成する
 * @param current 現在の進捗
 * @param total 総数
 * @param stage 現在のステージ
 * @param message メッセージ
 * @returns プログレス情報
 */
export function createProgress(
  current: number,
  total: number,
  stage: string,
  message: string = ''
): ProgressInfo {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return {
    current,
    total,
    stage,
    message,
    percentage,
    isComplete: current >= total
  };
}

/**
 * プログレス管理クラス
 */
export class ProgressManager {
  private callback: ProgressCallback | null = null;
  private currentProgress: ProgressInfo;

  constructor(total: number = 100, initialStage: string = 'Initializing') {
    this.currentProgress = createProgress(0, total, initialStage);
  }

  /**
   * プログレスコールバックを設定する
   * @param callback コールバック関数
   */
  setCallback(callback: ProgressCallback): void {
    this.callback = callback;
  }

  /**
   * プログレスを更新する
   * @param current 現在の進捗
   * @param stage ステージ（省略時は現在のステージを保持）
   * @param message メッセージ（省略時は空文字）
   */
  update(current: number, stage?: string, message: string = ''): void {
    this.currentProgress = createProgress(
      current,
      this.currentProgress.total,
      stage ?? this.currentProgress.stage,
      message
    );

    if (this.callback) {
      this.callback(this.currentProgress);
    }
  }

  /**
   * ステージを変更する
   * @param stage 新しいステージ
   * @param message メッセージ
   */
  setStage(stage: string, message: string = ''): void {
    this.update(this.currentProgress.current, stage, message);
  }

  /**
   * プログレスを増加させる
   * @param increment 増加量（デフォルト: 1）
   * @param stage ステージ（省略時は現在のステージを保持）
   * @param message メッセージ
   */
  increment(increment: number = 1, stage?: string, message: string = ''): void {
    this.update(this.currentProgress.current + increment, stage, message);
  }

  /**
   * プログレスを完了にする
   * @param stage 完了ステージ
   * @param message 完了メッセージ
   */
  complete(stage: string = 'Complete', message: string = 'Processing completed'): void {
    this.update(this.currentProgress.total, stage, message);
  }

  /**
   * プログレスをリセットする
   * @param total 新しい総数
   * @param stage 初期ステージ
   */
  reset(total?: number, stage: string = 'Initializing'): void {
    this.currentProgress = createProgress(0, total ?? this.currentProgress.total, stage);

    if (this.callback) {
      this.callback(this.currentProgress);
    }
  }

  /**
   * 現在のプログレス情報を取得する
   * @returns 現在のプログレス情報
   */
  getCurrent(): ProgressInfo {
    return { ...this.currentProgress };
  }

  /**
   * 完了しているかチェックする
   * @returns 完了している場合true
   */
  isComplete(): boolean {
    return this.currentProgress.isComplete;
  }
}

/**
 * 非同期タスクの進捗を管理するヘルパー
 * @param tasks タスクの配列
 * @param callback プログレスコールバック
 * @param taskNames タスク名の配列（省略時は番号で表示）
 * @returns タスクの実行結果配列
 */
export async function executeWithProgress<T>(
  tasks: (() => Promise<T>)[],
  callback: ProgressCallback,
  taskNames?: string[]
): Promise<T[]> {
  const progress = new ProgressManager(tasks.length, 'Starting');
  progress.setCallback(callback);

  const results: T[] = [];

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    if (!task) continue;

    const taskName = taskNames?.[i] ?? `Task ${i + 1}`;
    progress.setStage(`Processing ${taskName}`, `Executing ${taskName}...`);

    try {
      const result = await task();
      results.push(result);
      progress.increment(1, undefined, `${taskName} completed`);
    } catch (error) {
      progress.setStage(`Error in ${taskName}`, `Failed: ${error}`);
      throw error;
    }
  }

  progress.complete('All Tasks Complete', 'All tasks have been completed successfully');
  return results;
}

/**
 * 遅延付きでプログレスを更新する（UI表示の滑らかさ向上）
 * @param manager プログレスマネージャー
 * @param targetCurrent 目標進捗値
 * @param duration 遷移時間（ミリ秒）
 * @param stage ステージ
 * @param message メッセージ
 */
export async function animateProgress(
  manager: ProgressManager,
  targetCurrent: number,
  duration: number = 300,
  stage?: string,
  message: string = ''
): Promise<void> {
  const startCurrent = manager.getCurrent().current;
  const diff = targetCurrent - startCurrent;
  const steps = Math.max(1, Math.floor(duration / 16)); // ~60fps
  const stepSize = diff / steps;
  const stepDuration = duration / steps;

  for (let i = 0; i < steps; i++) {
    const current = startCurrent + stepSize * (i + 1);
    manager.update(Math.round(current), stage, message);

    if (i < steps - 1) {
      await new Promise(resolve => setTimeout(resolve, stepDuration));
    }
  }

  // 最終的に正確な値にセット
  manager.update(targetCurrent, stage, message);
}

/**
 * ファイルダウンロードのプログレス管理
 * @param blob ダウンロードするBlob
 * @param filename ファイル名
 * @param callback プログレスコールバック
 */
export async function downloadWithProgress(
  blob: Blob,
  filename: string,
  callback: ProgressCallback
): Promise<void> {
  const progress = new ProgressManager(100, 'Preparing Download');
  progress.setCallback(callback);

  // ファイル準備段階
  progress.update(20, 'Creating Download Link', 'Preparing file for download...');
  await new Promise(resolve => setTimeout(resolve, 100));

  // URL作成
  progress.update(50, 'Generating URL', 'Creating download URL...');
  const url = URL.createObjectURL(blob);
  await new Promise(resolve => setTimeout(resolve, 100));

  // ダウンロード実行
  progress.update(80, 'Starting Download', 'Initiating file download...');
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // クリーンアップ
  progress.update(95, 'Cleaning Up', 'Cleaning up resources...');
  URL.revokeObjectURL(url);
  await new Promise(resolve => setTimeout(resolve, 100));

  progress.complete('Download Complete', 'File download has been initiated');
}
