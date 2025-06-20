// Service Worker for Fact Checklist PWA
const CACHE_NAME = 'fact-checklist-v1.0.0';
const STATIC_CACHE_NAME = 'fact-checklist-static-v1.0.0';

// キャッシュするリソース
const STATIC_RESOURCES = [
  '/',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/maskable-icon-512x512.png'
];

// 動的にキャッシュするリソースのパターン
const CACHE_PATTERNS = [
  /\/_app\//, // SvelteKitアプリファイル
  /\/[^/]+\.js$/, // JavaScript files
  /\/[^/]+\.css$/, // CSS files
  /\/[^/]+\.woff2?$/, // Font files
  /\/[^/]+\.png$/, // Image files
  /\/[^/]+\.svg$/, // SVG files
  /\/[^/]+\.ico$/ // Favicon
];

// ネットワーク優先戦略を使用するパス
const NETWORK_FIRST_PATTERNS = [
  /\/api\//, // API calls
  /\/checklist\/[^/]+$/ // 動的なチェックリストページ
];

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    Promise.all([
      // 静的リソースをキャッシュ
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        console.log('Service Worker: Caching static resources');
        return cache.addAll(STATIC_RESOURCES);
      }),
      // すぐに有効化
      self.skipWaiting()
    ])
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    Promise.all([
      // 古いキャッシュを削除
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME) {
              console.log('Service Worker: Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // すべてのクライアントを制御
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // 同一オリジンのリクエストのみ処理
  if (url.origin !== location.origin) {
    return;
  }
  
  // キャッシュ戦略を決定
  if (shouldUseNetworkFirst(url.pathname)) {
    event.respondWith(networkFirstStrategy(request));
  } else if (shouldCache(url.pathname)) {
    event.respondWith(cacheFirstStrategy(request));
  } else {
    event.respondWith(networkOnlyStrategy(request));
  }
});

// ネットワーク優先戦略を使用するかチェック
function shouldUseNetworkFirst(pathname) {
  return NETWORK_FIRST_PATTERNS.some(pattern => pattern.test(pathname));
}

// キャッシュするべきかチェック
function shouldCache(pathname) {
  return CACHE_PATTERNS.some(pattern => pattern.test(pathname)) ||
         STATIC_RESOURCES.includes(pathname);
}

// キャッシュ優先戦略
async function cacheFirstStrategy(request) {
  try {
    // キャッシュから検索
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('Service Worker: Serving from cache:', request.url);
      return cachedResponse;
    }
    
    // キャッシュにない場合はネットワークから取得
    const networkResponse = await fetch(request);
    
    // 成功したレスポンスをキャッシュに保存
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
      console.log('Service Worker: Cached new resource:', request.url);
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Service Worker: Cache-first strategy failed:', error);
    
    // オフライン時のフォールバック
    if (request.destination === 'document') {
      const fallbackResponse = await caches.match('/');
      if (fallbackResponse) {
        return fallbackResponse;
      }
    }
    
    throw error;
  }
}

// ネットワーク優先戦略
async function networkFirstStrategy(request) {
  try {
    // まずネットワークから取得を試行
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // 成功したらキャッシュに保存
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
      console.log('Service Worker: Updated cache from network:', request.url);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Service Worker: Network failed, trying cache:', request.url);
    
    // ネットワークが失敗したらキャッシュから取得
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('Service Worker: Serving stale content from cache:', request.url);
      return cachedResponse;
    }
    
    // キャッシュにもない場合のフォールバック
    if (request.destination === 'document') {
      const fallbackResponse = await caches.match('/');
      if (fallbackResponse) {
        return fallbackResponse;
      }
    }
    
    throw error;
  }
}

// ネットワークのみ戦略
async function networkOnlyStrategy(request) {
  return fetch(request);
}

// バックグラウンド同期（将来の拡張用）
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync:', event.tag);
  
  if (event.tag === 'checklist-backup') {
    event.waitUntil(syncChecklistData());
  }
});

// チェックリストデータの同期（将来の拡張用）
async function syncChecklistData() {
  try {
    // ここで IndexedDB からデータを読み取り、
    // サーバーと同期する処理を実装する
    console.log('Service Worker: Syncing checklist data...');
  } catch (error) {
    console.error('Service Worker: Sync failed:', error);
  }
}

// プッシュ通知の処理（将来の拡張用）
self.addEventListener('push', (event) => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icon-192x192.png',
    badge: '/icon-72x72.png',
    tag: 'fact-checklist-notification',
    data: data.url,
    actions: [
      {
        action: 'open',
        title: '開く'
      },
      {
        action: 'close',
        title: '閉じる'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// 通知クリックの処理
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open' || !event.action) {
    const urlToOpen = event.notification.data || '/';
    
    event.waitUntil(
      self.clients.matchAll({ type: 'window' }).then((clients) => {
        // 既存のウィンドウがあれば、それをフォーカス
        for (const client of clients) {
          if (client.url === urlToOpen && 'focus' in client) {
            return client.focus();
          }
        }
        
        // 新しいウィンドウを開く
        if (self.clients.openWindow) {
          return self.clients.openWindow(urlToOpen);
        }
      })
    );
  }
});

// メッセージイベントの処理
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      }).then(() => {
        event.ports[0].postMessage({ success: true });
      })
    );
  }
});

// エラーイベントの処理
self.addEventListener('error', (event) => {
  console.error('Service Worker: Error occurred:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('Service Worker: Unhandled promise rejection:', event.reason);
});

console.log('Service Worker: Registered successfully');