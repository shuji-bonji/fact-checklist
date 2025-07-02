// src/lib/utils/pwa-register.ts
// Safari PWA対応のService Worker登録とバージョン管理

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export interface PWAUpdateInfo {
  isUpdateAvailable: boolean;
  needsRefresh: boolean;
  updateSW?: () => Promise<void>;
}

export function registerPWA(): Promise<PWAUpdateInfo> {
  return new Promise(resolve => {
    if (!('serviceWorker' in navigator)) {
      resolve({ isUpdateAvailable: false, needsRefresh: false });
      return;
    }

    let refreshing = false;
    let updateAvailable = false;
    let registration: ServiceWorkerRegistration | null = null;

    // Safari対応：強制更新メカニズム
    const forceUpdate = async () => {
      if (registration) {
        await registration.unregister();
      }
      window.location.reload();
    };

    // Service Worker更新検知
    navigator.serviceWorker.addEventListener('message', event => {
      if (event.data && event.data.type === 'SW_UPDATED') {
        console.log('🔄 Service Worker updated');
        updateAvailable = true;

        // Safari対応：自動リロード（設定可能）
        const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        if (isSafari && !refreshing) {
          refreshing = true;
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }

      if (event.data && event.data.type === 'SW_CONTROLLING') {
        console.log('✅ New Service Worker is controlling');
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      }
    });

    // Service Worker登録（GitHub Pages対応）
    const isGitHubPages =
      window.location.hostname === 'shuji-bonji.github.io' ||
      window.location.pathname.startsWith('/fact-checklist/');
    const swPath = isGitHubPages ? '/fact-checklist/sw.js' : '/sw.js';
    const scope = isGitHubPages ? '/fact-checklist/' : '/';

    console.log(
      `🔧 PWA Registration: hostname=${window.location.hostname}, pathname=${window.location.pathname}`
    );
    console.log(`🔧 PWA Registration: swPath=${swPath}, scope=${scope}`);

    navigator.serviceWorker
      .register(swPath, { scope })
      .then(reg => {
        registration = reg;
        console.log('✅ Service Worker registered');

        // 更新チェック
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('🆕 New Service Worker available');
                updateAvailable = true;
                resolve({
                  isUpdateAvailable: true,
                  needsRefresh: true,
                  updateSW: forceUpdate
                });
              }
            });
          }
        });

        // Safari対応：定期的な更新チェック
        setInterval(() => {
          reg.update();
        }, 60000); // 1分ごと

        resolve({
          isUpdateAvailable: updateAvailable,
          needsRefresh: false,
          updateSW: forceUpdate
        });
      })
      .catch(error => {
        console.error('❌ Service Worker registration failed:', error);
        resolve({ isUpdateAvailable: false, needsRefresh: false });
      });
  });
}

// PWAインストール促進
export function setupPWAInstallPrompt() {
  let deferredPrompt: BeforeInstallPromptEvent | null = null;

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('📱 PWA install prompt available');
  });

  // フォールバック：beforeinstallpromptイベントが発火しない場合の代替判定
  const canInstallFallback = () => {
    // Service Workerがサポートされている
    const hasServiceWorker = 'serviceWorker' in navigator;

    // PWAとして実行されていない（standalone mode ではない）
    const isNotStandalone = !window.matchMedia('(display-mode: standalone)').matches;

    // モバイルまたはデスクトップブラウザ
    const isSupportedBrowser = 'serviceWorker' in navigator && 'PushManager' in window;

    return hasServiceWorker && isNotStandalone && isSupportedBrowser;
  };

  return {
    canInstall: () => {
      // 元のイベントベースの判定を優先
      if (deferredPrompt) return true;

      // フォールバック判定を使用
      return canInstallFallback();
    },
    install: async () => {
      // 元のイベントベースのインストール
      if (deferredPrompt) {
        try {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          deferredPrompt = null;
          return outcome === 'accepted';
        } catch (error) {
          console.error('PWA install prompt failed:', error);
          deferredPrompt = null;
          return false;
        }
      }

      // フォールバック：手動でインストール手順を案内
      const userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.includes('chrome') || userAgent.includes('edge')) {
        alert(
          'このサイトをアプリとしてインストールするには:\n1. ブラウザのメニュー（⋮）を開く\n2. 「アプリをインストール」を選択\n3. 確認ダイアログで「インストール」をクリック'
        );
      } else if (userAgent.includes('safari')) {
        alert(
          'このサイトをホーム画面に追加するには:\n1. 共有ボタン（□↗）をタップ\n2. 「ホーム画面に追加」を選択\n3. 「追加」をタップ'
        );
      } else if (userAgent.includes('firefox')) {
        alert(
          'このサイトをアプリとしてインストールするには:\n1. アドレスバーの家アイコンをクリック\n2. 「このサイトをインストール」を選択'
        );
      } else {
        alert(
          'このサイトをアプリとしてインストールするには、ブラウザのメニューから「アプリをインストール」または「ホーム画面に追加」を選択してください。'
        );
      }

      return true; // ユーザーに案内したので成功とみなす
    },

    // デバッグ用の情報を提供
    getDebugInfo: () => ({
      hasDeferredPrompt: !!deferredPrompt,
      canInstallFallback: canInstallFallback(),
      isStandalone: window.matchMedia('(display-mode: standalone)').matches,
      hasServiceWorker: 'serviceWorker' in navigator,
      userAgent: navigator.userAgent
    })
  };
}
