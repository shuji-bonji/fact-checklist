// src/lib/utils/platform.ts
// プラットフォーム検出関連のユーティリティ関数

export interface PlatformInfo {
  // ブラウザ情報
  browser: {
    name: string;
    version: string;
    engine: string;
  };

  // OS情報
  os: {
    name: string;
    version: string;
  };

  // デバイス情報
  device: {
    type: 'desktop' | 'tablet' | 'mobile';
    isTouchDevice: boolean;
  };

  // 機能サポート
  features: {
    webgl: boolean;
    canvas: boolean;
    serviceWorker: boolean;
    indexedDB: boolean;
    localStorage: boolean;
    pdfSupport: boolean;
    clipboardAPI: boolean;
    fileAPI: boolean;
  };
}

/**
 * ブラウザ名を取得する
 * @returns ブラウザ名
 */
export function getBrowserName(): string {
  const userAgent = navigator.userAgent;

  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Chrome') && !userAgent.includes('Chromium')) return 'Chrome';
  if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  if (userAgent.includes('Opera')) return 'Opera';
  if (userAgent.includes('Chromium')) return 'Chromium';

  return 'Unknown';
}

/**
 * ブラウザエンジンを取得する
 * @returns ブラウザエンジン名
 */
export function getBrowserEngine(): string {
  const userAgent = navigator.userAgent;

  if (userAgent.includes('Gecko') && userAgent.includes('Firefox')) return 'Gecko';
  if (userAgent.includes('WebKit') && userAgent.includes('Chrome')) return 'Blink';
  if (userAgent.includes('WebKit')) return 'WebKit';
  if (userAgent.includes('Trident')) return 'Trident';

  return 'Unknown';
}

/**
 * OS名を取得する
 * @returns OS名
 */
export function getOSName(): string {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;

  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac') || platform.includes('Mac')) return 'macOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS') || /iPad|iPhone|iPod/.test(userAgent)) return 'iOS';

  return 'Unknown';
}

/**
 * デバイスタイプを取得する
 * @returns デバイスタイプ
 */
export function getDeviceType(): 'desktop' | 'tablet' | 'mobile' {
  const userAgent = navigator.userAgent;

  // モバイルデバイスの判定
  if (/Mobile|Android|iPhone|iPod/.test(userAgent)) {
    return 'mobile';
  }

  // タブレットの判定
  if (/Tablet|iPad/.test(userAgent)) {
    return 'tablet';
  }

  // 画面サイズによる判定も併用
  if (typeof window !== 'undefined') {
    const width = window.innerWidth || document.documentElement.clientWidth;
    if (width <= 768) return 'mobile';
    if (width <= 1024) return 'tablet';
  }

  return 'desktop';
}

/**
 * タッチデバイスかどうか判定する
 * @returns タッチデバイスの場合true
 */
export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * WebGL対応かチェックする
 * @returns WebGL対応の場合true
 */
export function hasWebGLSupport(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') ?? canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
}

/**
 * Canvas対応かチェックする
 * @returns Canvas対応の場合true
 */
export function hasCanvasSupport(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!canvas.getContext?.('2d');
  } catch {
    return false;
  }
}

/**
 * Service Worker対応かチェックする
 * @returns Service Worker対応の場合true
 */
export function hasServiceWorkerSupport(): boolean {
  return 'serviceWorker' in navigator;
}

/**
 * IndexedDB対応かチェックする
 * @returns IndexedDB対応の場合true
 */
export function hasIndexedDBSupport(): boolean {
  return 'indexedDB' in window;
}

/**
 * localStorage対応かチェックする
 * @returns localStorage対応の場合true
 */
export function hasLocalStorageSupport(): boolean {
  try {
    const test = 'test';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

/**
 * PDF表示対応かチェックする
 * @returns PDF対応の場合true
 */
export function hasPDFSupport(): boolean {
  const mimeTypes = navigator.mimeTypes;
  return !!mimeTypes?.namedItem?.('application/pdf');
}

/**
 * Clipboard API対応かチェックする
 * @returns Clipboard API対応の場合true
 */
export function hasClipboardSupport(): boolean {
  return !!navigator.clipboard?.writeText;
}

/**
 * File API対応かチェックする
 * @returns File API対応の場合true
 */
export function hasFileAPISupport(): boolean {
  return !!(window.File && window.FileReader && window.FileList && window.Blob);
}

/**
 * 包括的なプラットフォーム情報を取得する
 * @returns プラットフォーム情報
 */
export function getPlatformInfo(): PlatformInfo {
  return {
    browser: {
      name: getBrowserName(),
      version:
        navigator.userAgent.match(/(?:Chrome|Firefox|Safari|Edge|Opera)\/(\d+)/)?.[1] ?? 'Unknown',
      engine: getBrowserEngine()
    },
    os: {
      name: getOSName(),
      version: 'Unknown' // 詳細なバージョン取得は複雑なため省略
    },
    device: {
      type: getDeviceType(),
      isTouchDevice: isTouchDevice()
    },
    features: {
      webgl: hasWebGLSupport(),
      canvas: hasCanvasSupport(),
      serviceWorker: hasServiceWorkerSupport(),
      indexedDB: hasIndexedDBSupport(),
      localStorage: hasLocalStorageSupport(),
      pdfSupport: hasPDFSupport(),
      clipboardAPI: hasClipboardSupport(),
      fileAPI: hasFileAPISupport()
    }
  };
}

/**
 * プラットフォーム情報を人間可読な文字列にフォーマットする
 * @param info プラットフォーム情報
 * @returns フォーマットされた文字列
 */
export function formatPlatformInfo(info: PlatformInfo): string {
  const features = Object.entries(info.features)
    .filter(([, supported]) => supported)
    .map(([feature]) => feature)
    .join(', ');

  return `
Browser: ${info.browser.name} ${info.browser.version} (${info.browser.engine})
OS: ${info.os.name} ${info.os.version}
Device: ${info.device.type}${info.device.isTouchDevice ? ' (Touch)' : ''}
Supported Features: ${features}
  `.trim();
}

/**
 * モバイルデバイスかどうか判定する
 * @returns モバイルデバイスの場合true
 */
export function isMobile(): boolean {
  return getDeviceType() === 'mobile';
}

/**
 * デスクトップデバイスかどうか判定する
 * @returns デスクトップデバイスの場合true
 */
export function isDesktop(): boolean {
  return getDeviceType() === 'desktop';
}

/**
 * 特定ブラウザかどうか判定する
 * @param browserName チェックするブラウザ名
 * @returns 指定ブラウザの場合true
 */
export function isBrowser(browserName: string): boolean {
  return getBrowserName().toLowerCase() === browserName.toLowerCase();
}

/**
 * 特定OSかどうか判定する
 * @param osName チェックするOS名
 * @returns 指定OSの場合true
 */
export function isOS(osName: string): boolean {
  return getOSName().toLowerCase().includes(osName.toLowerCase());
}
