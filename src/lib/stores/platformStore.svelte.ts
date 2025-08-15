// src/lib/stores/platformStore.svelte.ts
/**
 * プラットフォーム検出・機能判定ストア
 * PWA App Store配信を踏まえたネイティブ機能検出
 */

export interface PlatformCapabilities {
  // ネイティブアプリとしての実行
  isNativeApp: boolean;
  isStandalone: boolean;

  // ファイルシステム機能
  hasFileSystemAccess: boolean;
  hasWebShare: boolean;
  hasWebShareFiles: boolean;

  // レンダリング機能
  hasOffscreenCanvas: boolean;
  hasWebGL: boolean;
  canvasToBlob: boolean;

  // PWA機能
  hasServiceWorker: boolean;
  hasNotifications: boolean;
  hasInstallPrompt: boolean;

  // システム情報
  platform: 'ios' | 'android' | 'windows' | 'macos' | 'linux' | 'unknown';
  userAgent: string;

  // フォント機能
  hasFontLoading: boolean;
  hasSystemFonts: boolean;
}

export interface DetectedSystemFeatures {
  // 利用可能なシステムフォント
  availableSystemFonts: string[];

  // 推奨PDF生成戦略
  recommendedPDFStrategy: 'native-optimized' | 'web-canvas' | 'text-based' | 'fallback';

  // ネイティブ機能レベル
  nativeFeatureLevel: 'full' | 'partial' | 'minimal' | 'none';
}

class PlatformStore {
  // リアクティブな状態
  capabilities = $state<PlatformCapabilities>({
    isNativeApp: false,
    isStandalone: false,
    hasFileSystemAccess: false,
    hasWebShare: false,
    hasWebShareFiles: false,
    hasOffscreenCanvas: false,
    hasWebGL: false,
    canvasToBlob: false,
    hasServiceWorker: false,
    hasNotifications: false,
    hasInstallPrompt: false,
    platform: 'unknown',
    userAgent: '',
    hasFontLoading: false,
    hasSystemFonts: false
  });

  systemFeatures = $state<DetectedSystemFeatures>({
    availableSystemFonts: [],
    recommendedPDFStrategy: 'fallback',
    nativeFeatureLevel: 'none'
  });

  isInitialized = $state(false);

  constructor() {
    // Only initialize in browser environment
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      this.detectPlatform();
      void this.detectSystemFeatures();
    }
    this.isInitialized = true;
  }

  /**
   * プラットフォーム・機能の検出
   */
  private detectPlatform(): void {
    // Skip detection in SSR
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return;
    }

    const ua = navigator.userAgent;

    this.capabilities = {
      // ネイティブアプリ検出
      isNativeApp: this.detectNativeApp(),
      isStandalone: window.matchMedia('(display-mode: standalone)').matches,

      // ファイルシステム API
      hasFileSystemAccess: 'showSaveFilePicker' in window,
      hasWebShare: 'share' in navigator,
      hasWebShareFiles: this.detectWebShareFiles(),

      // レンダリング機能
      hasOffscreenCanvas: 'OffscreenCanvas' in window,
      hasWebGL: this.detectWebGL(),
      canvasToBlob: 'HTMLCanvasElement' in window && 'toBlob' in HTMLCanvasElement.prototype,

      // PWA機能
      hasServiceWorker: 'serviceWorker' in navigator,
      hasNotifications: 'Notification' in window,
      hasInstallPrompt: this.detectInstallPrompt(),

      // プラットフォーム判定
      platform: this.detectOS(ua),
      userAgent: ua,

      // フォント機能
      hasFontLoading: 'fonts' in document && 'load' in document.fonts,
      hasSystemFonts: this.detectSystemFonts()
    };
  }

  /**
   * ネイティブアプリとしての実行を検出
   */
  private detectNativeApp(): boolean {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as typeof navigator & { standalone?: boolean }).standalone === true ||
      document.referrer.includes('android-app://') ||
      window.location.search.includes('source=pwa') ||
      // TWA (Trusted Web Activity) 検出
      'getInstalledRelatedApps' in navigator
    );
  }

  /**
   * Web Share API でファイル共有が可能かチェック
   */
  private detectWebShareFiles(): boolean {
    if (!('share' in navigator && 'canShare' in navigator)) {
      return false;
    }

    try {
      // テスト用の小さなファイルで機能チェック
      const testFile = new File(['test'], 'test.txt', { type: 'text/plain' });
      return navigator.canShare({ files: [testFile] });
    } catch {
      return false;
    }
  }

  /**
   * WebGL サポート検出
   */
  private detectWebGL(): boolean {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        'WebGLRenderingContext' in window &&
        (canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl'))
      );
    } catch {
      return false;
    }
  }

  /**
   * インストールプロンプト機能の検出
   */
  private detectInstallPrompt(): boolean {
    return 'BeforeInstallPromptEvent' in window || 'onbeforeinstallprompt' in window;
  }

  /**
   * OS プラットフォームの判定
   */
  private detectOS(ua: string): PlatformCapabilities['platform'] {
    if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
    if (/Android/i.test(ua)) return 'android';
    if (/Windows/i.test(ua)) return 'windows';
    if (/Macintosh|Mac OS X/i.test(ua)) return 'macos';
    if (/Linux/i.test(ua)) return 'linux';
    return 'unknown';
  }

  /**
   * システムフォント機能の検出
   */
  private detectSystemFonts(): boolean {
    return (
      'fonts' in document && 'check' in document.fonts && typeof document.fonts.check === 'function'
    );
  }

  /**
   * システム機能の詳細検出
   */
  private async detectSystemFeatures(): Promise<void> {
    // Skip detection in SSR
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const availableFonts = await this.detectAvailableFonts();
    const pdfStrategy = this.selectOptimalPDFStrategy();
    const featureLevel = this.calculateNativeFeatureLevel();

    this.systemFeatures = {
      availableSystemFonts: availableFonts,
      recommendedPDFStrategy: pdfStrategy,
      nativeFeatureLevel: featureLevel
    };
  }

  /**
   * 利用可能なシステムフォントを検出
   */
  private async detectAvailableFonts(): Promise<string[]> {
    if (!this.capabilities.hasFontLoading) {
      return ['helvetica', 'times', 'courier'];
    }

    const testFonts = [
      // 日本語フォント
      'Hiragino Sans',
      'Hiragino Kaku Gothic ProN',
      'Yu Gothic',
      'Meiryo',
      'Noto Sans CJK JP',
      'Noto Sans JP',
      // システムフォント
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      // 標準フォント
      'helvetica',
      'arial',
      'times',
      'courier'
    ];

    const availableFonts: string[] = [];

    for (const font of testFonts) {
      try {
        if (await this.isFontAvailable(font)) {
          availableFonts.push(font);
        }
      } catch {
        // フォント検出エラーは無視
        continue;
      }
    }

    return availableFonts.length > 0 ? availableFonts : ['helvetica', 'times', 'courier'];
  }

  /**
   * 特定フォントの利用可能性をチェック
   */
  private async isFontAvailable(fontName: string): Promise<boolean> {
    if (typeof document.fonts === 'undefined' || typeof document.fonts.check !== 'function') {
      return false;
    }

    try {
      return document.fonts.check(`12px "${fontName}"`);
    } catch {
      return false;
    }
  }

  /**
   * 最適なPDF生成戦略を選択
   */
  private selectOptimalPDFStrategy(): DetectedSystemFeatures['recommendedPDFStrategy'] {
    // ネイティブアプリ + ファイルシステムアクセス
    if (this.capabilities.isNativeApp && this.capabilities.hasFileSystemAccess) {
      return 'native-optimized';
    }

    // Canvas + WebGL サポート
    if (this.capabilities.canvasToBlob && this.capabilities.hasWebGL) {
      return 'web-canvas';
    }

    // 基本的なCanvas サポート
    if (this.capabilities.canvasToBlob) {
      return 'text-based';
    }

    // フォールバック
    return 'fallback';
  }

  /**
   * ネイティブ機能レベルを計算
   */
  private calculateNativeFeatureLevel(): DetectedSystemFeatures['nativeFeatureLevel'] {
    let score = 0;

    if (this.capabilities.isNativeApp) score += 4;
    if (this.capabilities.hasFileSystemAccess) score += 3;
    if (this.capabilities.hasWebShare) score += 2;
    if (this.capabilities.hasServiceWorker) score += 1;
    if (this.capabilities.hasNotifications) score += 1;
    if (this.capabilities.canvasToBlob) score += 1;

    if (score >= 8) return 'full';
    if (score >= 5) return 'partial';
    if (score >= 2) return 'minimal';
    return 'none';
  }

  /**
   * プラットフォーム機能の再検出
   */
  refresh(): void {
    this.detectPlatform();
    void this.detectSystemFeatures();
  }

  /**
   * デバッグ情報の出力
   */
  debugInfo(): void {
    // console.log('=== Platform Store Debug Info ===');
    // console.log('Capabilities:', this.capabilities);
    // console.log('System Features:', this.systemFeatures);
    // console.log('================================');
  }
}

// シングルトンストアのエクスポート
export const platformStore = new PlatformStore();
