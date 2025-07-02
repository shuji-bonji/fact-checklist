// src/lib/utils/simplePDFGenerator.ts
/**
 * シンプルなHTML→PDF変換
 * ExportModalのHTML出力を利用してPDF生成
 */

import type { ChecklistResult } from '$lib/types/checklist.js';
import type { TranslationFunction } from '$lib/types/i18n.js';

export interface SimplePDFOptions {
  includeGuides: boolean;
  includeNotes: boolean;
  includeSummary: boolean;
  sectionBreaks: boolean;
  t?: TranslationFunction;
}

export class SimplePDFGenerator {
  async generateFromHTML(
    htmlContent: string,
    _filename: string
  ): Promise<{ success: boolean; cancelled?: boolean }> {
    console.log('🎨 Starting simple HTML to PDF conversion...');

    return new Promise((resolve, reject) => {
      try {
        // 新しいウィンドウでHTMLを開く
        const printWindow = window.open('', '_blank', 'width=800,height=600');
        if (!printWindow) {
          reject(new Error('ポップアップがブロックされました。ポップアップを許可してください。'));
          return;
        }

        // HTMLコンテンツを書き込む
        printWindow.document.write(htmlContent);
        printWindow.document.close();

        // コンテンツが読み込まれるまで待機
        printWindow.onload = () => {
          // さらに少し待機（レンダリング完了のため）
          setTimeout(() => {
            // 印刷ダイアログを開く（PDFとして保存可能）
            printWindow.print();

            // 印刷ダイアログの結果を監視
            let dialogClosed = false;
            let timeoutId: number = 0;
            let cancelCheckInterval: number = 0;

            // ウィンドウのフォーカス変化を監視してキャンセル検出
            const checkPrintStatus = () => {
              setTimeout(() => {
                if (!dialogClosed) {
                  // ウィンドウが閉じられていない場合は成功とみなす
                  dialogClosed = true;
                  clearTimeout(timeoutId);
                  clearInterval(cancelCheckInterval);
                  printWindow.close();
                  console.log('✅ Print dialog completed');
                  resolve({ success: true });
                }
              }, 1500); // 1.5秒後にチェック
            };

            // ウィンドウがすぐに閉じられた場合はキャンセルとみなす
            const checkCancel = () => {
              if (printWindow.closed && !dialogClosed) {
                dialogClosed = true;
                clearTimeout(timeoutId);
                clearInterval(cancelCheckInterval);
                console.log('❌ Print dialog was cancelled');
                resolve({ success: false, cancelled: true });
              }
            };

            // 定期的にキャンセルをチェック
            cancelCheckInterval = setInterval(() => {
              checkCancel();
              if (dialogClosed) {
                clearInterval(cancelCheckInterval);
              }
            }, 100);

            // タイムアウト設定（30秒）
            timeoutId = window.setTimeout(() => {
              if (!dialogClosed) {
                dialogClosed = true;
                clearInterval(cancelCheckInterval);
                printWindow.close();
                console.log('✅ Print dialog timeout - assuming success');
                resolve({ success: true });
              }
            }, 30000);

            // 印刷状態をチェック
            checkPrintStatus();
          }, 500);
        };
      } catch (error) {
        console.error('❌ PDF generation failed:', error);
        reject(error);
      }
    });
  }

  /**
   * jsPDFを使用した直接PDF生成（フォールバック）
   */
  async generateDirectPDF(
    htmlContent: string,
    checklist: ChecklistResult,
    options?: SimplePDFOptions
  ): Promise<Blob> {
    console.log('📄 Generating PDF directly with jsPDF...');

    // jsPDFを動的インポート
    const { default: jsPDF } = await import('jspdf');
    const { default: html2canvas } = await import('html2canvas');

    // 一時的なコンテナを作成
    const container = document.createElement('div');
    container.innerHTML = htmlContent;
    container.style.position = 'absolute';
    container.style.left = '0';
    container.style.top = '0';
    container.style.width = '794px'; // A4幅（96DPI）
    container.style.background = 'white';
    container.style.padding = '20px';

    // body要素のスタイルを取得して適用
    const bodyContent = container.querySelector('body');
    if (bodyContent) {
      // bodyの内容だけを使用
      container.innerHTML = bodyContent.innerHTML;

      // スタイルも移動
      const styles = container.querySelectorAll('style');
      styles.forEach(style => {
        container.insertBefore(style, container.firstChild);
      });
    }

    document.body.appendChild(container);

    try {
      // A4サイズの設定
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.getWidth();

      // 少し待機してレンダリング完了を確認
      await new Promise(resolve => setTimeout(resolve, 1000));

      // ページごとに処理
      const totalHeight = container.scrollHeight;
      const pageHeightPx = 1123; // A4の高さ（96DPI）
      let currentPosition = 0;
      let pageNumber = 0;

      while (currentPosition < totalHeight) {
        if (pageNumber > 0) {
          pdf.addPage();
        }

        // 現在の位置でCanvasを生成
        const canvas = await html2canvas(container, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff',
          y: currentPosition,
          height: Math.min(pageHeightPx, totalHeight - currentPosition),
          windowHeight: pageHeightPx
        });

        // CanvasをPDFに追加
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);

        currentPosition += pageHeightPx;
        pageNumber++;
      }

      // メタデータ設定
      const t = options?.t;
      pdf.setProperties({
        title: t ? `${t('app.title')} - ${checklist.title}` : `Fact Checklist - ${checklist.title}`,
        author: t ? t('app.author') : 'Fact Checklist Generator',
        subject: t ? t('app.description') : 'Information reliability assessment',
        creator: t ? t('app.title') : 'Fact Checklist PWA'
      });

      return pdf.output('blob');
    } finally {
      // クリーンアップ
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    }
  }
}
