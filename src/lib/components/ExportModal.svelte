<!-- src/lib/components/ExportModal.svelte -->
<script lang="ts">
  import type { ChecklistResult } from '$lib/types/checklist.js';
  import { ExportService } from '$lib/services/ExportService.js';
  import {
    ExportOptionsManager,
    type ExportOptions
  } from '$lib/components/export/ExportOptions.svelte.js';
  import { t } from '$lib/i18n/index.js';

  interface Props {
    checklist: ChecklistResult | null;
    onClose: () => void;
  }

  const { checklist, onClose }: Props = $props();

  let modalElement: HTMLDivElement;
  let isExporting = $state(false);
  const exportProgress = $state<{
    current: number;
    total: number;
    stage: string;
    message: string;
  }>({ current: 0, total: 100, stage: '', message: '' });
  let exportError = $state<string | null>(null);
  let exportSuccess = $state<boolean>(false);

  // エクスポートオプション管理
  const exportOptionsManager = new ExportOptionsManager();
  const exportOptions = $derived(exportOptionsManager.options);

  function updateExportOption<K extends keyof ExportOptions>(key: K, value: ExportOptions[K]) {
    exportOptionsManager.updateOption(key, value);
  }

  function handleBackdropClick(event: MouseEvent) {
    if (event.target === modalElement) {
      onClose();
    }
  }

  // 進捗更新ユーティリティ
  function updateProgress(current: number, total: number, stage: string, message: string) {
    exportProgress.current = current;
    exportProgress.total = total;
    exportProgress.stage = stage;
    exportProgress.message = message;
  }

  // エラーリセット
  function resetExportState() {
    exportError = null;
    exportSuccess = false;
    updateProgress(0, 100, '', '');
  }

  // ユーザーフレンドリーエラーメッセージ
  function getErrorMessage(error: unknown, context: string): string {
    const errorStr = error instanceof Error ? error.message : String(error);

    if (errorStr.includes('fetch')) {
      return t('errors.network');
    } else if (errorStr.includes('memory') || errorStr.includes('size')) {
      return t('errors.general');
    } else if (errorStr.includes('permission') || errorStr.includes('access')) {
      return t('errors.permissionDenied');
    } else {
      return `${context}: ${errorStr.substring(0, 100)}`;
    }
  }

  async function handleExport() {
    if (!checklist) return;

    resetExportState();
    isExporting = true;

    try {
      // エクスポート開始の即座の表示
      updateProgress(5, 100, t('export.progress.starting'), 'Initializing export...');

      // 少し待機してUIの更新を確実にする
      await new Promise(resolve => setTimeout(resolve, 50));

      const exportService = ExportService.getInstance();

      const result = await exportService.exportChecklist({
        checklist,
        options: exportOptions,
        onProgress: (progress: number, message: string) => {
          updateProgress(progress, 100, t('export.progress.processing'), message);
        },
        onError: (error: string) => {
          exportError = error;
        }
      });

      if (result.success) {
        exportSuccess = true;
        // 成功メッセージを短時間表示後にモーダルを閉じる
        setTimeout(() => {
          onClose();
        }, 1000);
      } else {
        // ユーザーキャンセルの場合は静かに処理を終了
        if (result.error?.includes('cancelled by user')) {
          // console.log('📄 Export cancelled by user');
          // エクスポート状態をリセットして終了
          resetExportState();
        } else {
          exportError = result.error || t('errors.export');
        }
      }
    } catch (error) {
      console.error('エクスポートエラー:', error);
      exportError = getErrorMessage(
        error,
        `${exportOptions.format.toUpperCase()} ${t('common.export')}`
      );
    } finally {
      isExporting = false;
    }
  }
</script>

<div
  class="modal-backdrop"
  bind:this={modalElement}
  onclick={handleBackdropClick}
  onkeydown={e => {
    if (e.key === 'Escape') {
      onClose();
    }
  }}
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  tabindex="-1"
>
  <div class="modal-content">
    <div class="modal-header">
      <h2 id="modal-title">📄 {t('export.title')}</h2>
      <button type="button" class="close-btn" onclick={onClose} aria-label={t('common.close')}>
        ✕
      </button>
    </div>

    <div class="modal-body">
      <!-- フォーマット選択 -->
      <div class="option-group">
        <h3>📋 {t('export.format')}</h3>
        <div class="format-options">
          <label class="radio-option">
            <input
              type="radio"
              name="format"
              value="pdf"
              checked={exportOptions.format === 'pdf'}
              onchange={() => updateExportOption('format', 'pdf')}
            />
            <span>📄 {t('export.formats.pdf')}</span>
            <small>{t('export.pdfModes.pixelPerfect')}</small>
          </label>

          <label class="radio-option">
            <input
              type="radio"
              name="format"
              value="html"
              checked={exportOptions.format === 'html'}
              onchange={() => updateExportOption('format', 'html')}
            />
            <span>🌐 {t('export.formats.html')}</span>
            <small>{t('export.description')}</small>
          </label>

          <label class="radio-option">
            <input
              type="radio"
              name="format"
              value="json"
              checked={exportOptions.format === 'json'}
              onchange={() => updateExportOption('format', 'json')}
            />
            <span>📊 {t('export.formats.json')}</span>
            <small>{t('export.description')}</small>
          </label>

          <label class="radio-option">
            <input
              type="radio"
              name="format"
              value="markdown"
              checked={exportOptions.format === 'markdown'}
              onchange={() => updateExportOption('format', 'markdown')}
            />
            <span>📝 {t('export.formats.markdown')}</span>
            <small>{t('export.description')}</small>
          </label>
        </div>
      </div>

      <!-- 内容オプション -->
      <div class="option-group">
        <h3>📝 {t('export.options')}</h3>
        <div class="checkbox-options">
          <label class="checkbox-option">
            <input
              type="checkbox"
              checked={exportOptions.includeSummary}
              onchange={e =>
                updateExportOption('includeSummary', (e.target as HTMLInputElement).checked)}
            />
            <span>📊 {t('export.includeSummary')}</span>
            <small>{t('export.description')}</small>
          </label>

          <label class="checkbox-option">
            <input
              type="checkbox"
              checked={exportOptions.includeGuides}
              onchange={e =>
                updateExportOption('includeGuides', (e.target as HTMLInputElement).checked)}
            />
            <span>📚 {t('export.includeGuides')}</span>
            <small>{t('export.description')}</small>
          </label>

          <label class="checkbox-option">
            <input
              type="checkbox"
              checked={exportOptions.includeNotes}
              onchange={e =>
                updateExportOption('includeNotes', (e.target as HTMLInputElement).checked)}
            />
            <span>📝 {t('export.includeNotes')}</span>
            <small>{t('export.description')}</small>
          </label>

          {#if exportOptions.format === 'pdf' || exportOptions.format === 'markdown'}
            <label class="checkbox-option">
              <input
                type="checkbox"
                checked={exportOptions.sectionBreaks}
                onchange={e =>
                  updateExportOption('sectionBreaks', (e.target as HTMLInputElement).checked)}
              />
              <span>📄 {t('export.sectionBreaks')}</span>
              <small>{t('export.description')}</small>
            </label>
          {/if}

          {#if exportOptions.format === 'pdf'}
            <div class="pdf-mode-section">
              <div class="section-label">{t('export.pdfMode')}</div>

              <label class="radio-option">
                <input
                  type="radio"
                  name="pdfMode"
                  checked={exportOptions.pixelPerfectMode &&
                    !exportOptions.reliableMode &&
                    !exportOptions.textMode}
                  onchange={() => {
                    updateExportOption('pixelPerfectMode', true);
                    updateExportOption('reliableMode', false);
                    updateExportOption('textMode', false);
                  }}
                />
                <span>🎨 {t('export.pdfModes.pixelPerfect')}</span>
                <small>{t('export.pdfModes.pixelPerfectDescription')}</small>
              </label>

              <!-- 🔥 フォント信頼性重視モードは一時的に非表示（文字被りやレイアウトの問題のため）
              <label class="radio-option">
                <input
                  type="radio"
                  name="pdfMode"
                  checked={exportOptions.reliableMode &&
                    !exportOptions.pixelPerfectMode &&
                    !exportOptions.textMode}
                  onchange={() => {
                    updateExportOption('pixelPerfectMode', false);
                    updateExportOption('reliableMode', true);
                    updateExportOption('textMode', false);
                  }}
                />
                <span>🔥 {t('export.pdfModes.reliableFont')}</span>
                <small>{t('export.pdfModes.reliableFontDescription')}</small>
              </label>
              -->

              <label class="radio-option">
                <input
                  type="radio"
                  name="pdfMode"
                  checked={exportOptions.textMode &&
                    !exportOptions.pixelPerfectMode &&
                    !exportOptions.reliableMode}
                  onchange={() => {
                    updateExportOption('pixelPerfectMode', false);
                    updateExportOption('reliableMode', false);
                    updateExportOption('textMode', true);
                  }}
                />
                <span>🔤 {t('export.pdfModes.textBased')}</span>
                <small>{t('export.pdfModes.textBasedDescription')}</small>
              </label>
            </div>

            <!-- <label class="checkbox-option">
              <input
                type="checkbox"
                checked={exportOptions.advancedMode}
                onchange={e =>
                  updateExportOption('advancedMode', (e.target as HTMLInputElement).checked)}
              />
              <span>⚡ {t('export.description')}</span>
              <small>{t('export.description')}</small>
            </label> -->
          {/if}
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <!-- 進捗インジケータ -->
      {#if isExporting}
        <div class="progress-container">
          <div class="progress-header">
            <span class="progress-stage">{exportProgress.stage}</span>
            <span class="progress-percentage">{Math.round(exportProgress.current)}%</span>
          </div>
          <div class="progress-bar">
            <div
              class="progress-fill"
              style:width="{(exportProgress.current / exportProgress.total) * 100}%"
            ></div>
          </div>
          <div class="progress-message">{exportProgress.message}</div>
        </div>
      {/if}

      <!-- エラー表示 -->
      {#if exportError}
        <div class="error-container">
          <div class="error-header">
            <span class="error-icon">⚠️</span>
            <span class="error-title">{t('errors.export')}</span>
          </div>
          <div class="error-message">{exportError}</div>
          <div class="error-actions">
            <button type="button" class="btn btn-secondary btn-small" onclick={resetExportState}>
              🔄 {t('common.reset')}
            </button>
          </div>
        </div>
      {/if}

      <!-- 成功表示 -->
      {#if exportSuccess}
        <div class="success-container">
          <div class="success-header">
            <span class="success-icon">✅</span>
            <span class="success-title">{t('export.progress.completed')}</span>
          </div>
          <div class="success-message">{t('success.exported')}</div>
        </div>
      {/if}

      <div class="action-buttons">
        <button
          type="button"
          class="btn btn-primary"
          onclick={handleExport}
          disabled={!checklist || isExporting}
        >
          {isExporting ? `⏳ ${t('export.progress.generating')}` : `📤 ${t('common.export')}`}
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(4px);
  }

  .modal-content {
    background: white;
    border-radius: 16px;
    padding: 0;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
  }

  .modal-header {
    padding: 25px 30px;
    border-bottom: 1px solid #e9ecef;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .modal-header h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 6px;
    transition: background-color 0.2s;
  }

  .close-btn:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .modal-body {
    padding: 30px;
    overflow-y: auto;
    flex: 1;
  }

  .option-group {
    margin-bottom: 30px;
  }

  .option-group h3 {
    margin: 0 0 15px 0;
    font-size: 16px;
    font-weight: 600;
    color: #2c3e50;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .format-options,
  .checkbox-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .radio-option,
  .checkbox-option {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 15px;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    background: #fafafa;
  }

  .radio-option:hover,
  .checkbox-option:hover {
    border-color: #3498db;
    background: #f8f9fa;
  }

  .radio-option input[type='radio']:checked + span,
  .checkbox-option input[type='checkbox']:checked + span {
    color: #3498db;
    font-weight: 600;
  }

  .radio-option input[type='radio']:checked,
  .checkbox-option input[type='checkbox']:checked {
    accent-color: #3498db;
  }

  .radio-option span,
  .checkbox-option span {
    font-weight: 500;
    font-size: 15px;
    color: #2c3e50;
  }

  .radio-option small,
  .checkbox-option small {
    display: block;
    color: #6c757d;
    font-size: 13px;
    margin-top: 4px;
    line-height: 1.4;
  }

  .modal-footer {
    padding: 20px 30px;
    border-top: 1px solid #e9ecef;
    background: #f8f9fa;
  }

  .action-buttons {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
  }

  .btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .btn-secondary {
    background: #6c757d;
    color: white;
  }

  .btn-secondary:hover:not(:disabled) {
    background: #5a6268;
    transform: translateY(-1px);
  }

  .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  .btn-primary:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }

  /* レスポンシブ対応 */
  @media (max-width: 768px) {
    .modal-content {
      width: 95%;
      max-height: 95vh;
    }

    .modal-header,
    .modal-body,
    .modal-footer {
      padding-left: 20px;
      padding-right: 20px;
    }

    .action-buttons {
      flex-direction: column;
    }

    .btn {
      width: 100%;
      justify-content: center;
    }
  }

  /* アクセシビリティ */
  @media (prefers-reduced-motion: reduce) {
    .modal-backdrop,
    .modal-content,
    .btn,
    .radio-option,
    .checkbox-option {
      transition: none;
    }
  }

  /* フォーカス状態 */
  .radio-option:focus-within,
  .checkbox-option:focus-within {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }

  .btn:focus {
    outline: 2px solid #3498db;
    outline-offset: 2px;
  }

  /* PDFモードセクション */
  .pdf-mode-section {
    margin-top: 10px;
    padding: 15px;
    background: rgba(52, 152, 219, 0.05);
    border: 1px solid rgba(52, 152, 219, 0.2);
    border-radius: 8px;
  }

  .section-label {
    font-size: 12px;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .pdf-mode-section .radio-option {
    margin-bottom: 8px;
    background: #f8f9fa;
  }

  .pdf-mode-section .radio-option:last-child {
    margin-bottom: 0;
  }

  .pdf-mode-section .radio-option input[type='radio']:checked + span {
    color: #667eea;
    font-weight: 600;
  }

  /* 進捗インジケータスタイル */
  .progress-container {
    margin-bottom: 20px;
    padding: 16px;
    background: linear-gradient(135deg, #e8f4fd, #d1ecf1);
    border-radius: 12px;
    border-left: 4px solid #3498db;
  }

  .progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .progress-stage {
    font-weight: 600;
    color: #2c3e50;
    font-size: 14px;
  }

  .progress-percentage {
    font-weight: 700;
    color: #3498db;
    font-size: 14px;
  }

  .progress-bar {
    height: 8px;
    background: rgba(52, 152, 219, 0.2);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3498db, #2980b9);
    border-radius: 4px;
    transition: width 0.3s ease;
    position: relative;
  }

  .progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .progress-message {
    font-size: 13px;
    color: #5a6c7d;
    font-style: italic;
  }

  /* エラー表示スタイル */
  .error-container {
    margin-bottom: 20px;
    padding: 16px;
    background: linear-gradient(135deg, #fdebeb, #f1d4d4);
    border-radius: 12px;
    border-left: 4px solid #e74c3c;
  }

  .error-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .error-icon {
    font-size: 16px;
  }

  .error-title {
    font-weight: 600;
    color: #c0392b;
    font-size: 14px;
  }

  .error-message {
    color: #721c24;
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 12px;
  }

  .error-actions {
    display: flex;
    gap: 8px;
  }

  .btn-small {
    padding: 6px 12px;
    font-size: 12px;
  }

  /* 成功表示スタイル */
  .success-container {
    margin-bottom: 20px;
    padding: 16px;
    background: linear-gradient(135deg, #ebf7eb, #d4f1d4);
    border-radius: 12px;
    border-left: 4px solid #27ae60;
  }

  .success-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  .success-icon {
    font-size: 16px;
  }

  .success-title {
    font-weight: 600;
    color: #1e8449;
    font-size: 14px;
  }

  .success-message {
    color: #145a32;
    font-size: 13px;
    line-height: 1.4;
  }

  /* レスポンシブ対応 */
  @media (max-width: 480px) {
    .progress-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }

    .error-header,
    .success-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
  }
</style>
