# 事実確認チェックシート改善計画書

## 1. 技術的な問題の修正

### 1.1 i18n問題の修正

現在メインページで翻訳が表示されていない問題を修正します。

#### src/routes/+page.svelte の修正例

```svelte
<script lang="ts">
  import { t, getCurrentLanguage } from '$lib/i18n/store.svelte';
  import { onMount } from 'svelte';

  // Svelte5のpropsの新しい書き方
  let { data } = $props<{ data: any }>();

  // i18nの初期化を確認
  onMount(async () => {
    // 翻訳が読み込まれているか確認
    const currentLang = getCurrentLanguage();
    console.log('Current language:', currentLang);
  });
</script>

<!-- 翻訳関数を正しく使用 -->
<h1>📋 {$t('checklist.title')}</h1>
<p>{$t('ui.quickStartGuide')}</p>
```

### 1.2 Svelte5への完全移行

#### 状態管理をRunesに更新

```typescript
// 旧: Svelte4
export let title: string = '';
let count = 0;
$: doubled = count * 2;

// 新: Svelte5
let { title = '' } = $props<{ title?: string }>();
let count = $state(0);
const doubled = $derived(count * 2);
```

#### コンポーネントの更新例

```svelte
<script lang="ts">
  import type { ChecklistResult } from '$lib/types/checklist';

  // Svelte5のprops
  let {
    checklist,
    onUpdate,
    readonly = false
  } = $props<{
    checklist: ChecklistResult;
    onUpdate?: (checklist: ChecklistResult) => void;
    readonly?: boolean;
  }>();

  // リアクティブな状態
  let editMode = $state(false);
  let localNotes = $state(checklist.notes || '');

  // 派生状態
  const completionRate = $derived(() => {
    const total = checklist.items.length;
    const checked = checklist.items.filter(item => item.checked).length;
    return total > 0 ? Math.round((checked / total) * 100) : 0;
  });

  // 副作用
  $effect(() => {
    if (localNotes !== checklist.notes) {
      onUpdate?.({ ...checklist, notes: localNotes });
    }
  });
</script>
```

## 2. SEO/アクセス向上施策

### 2.1 メタタグの最適化

#### src/app.html の改善

```html
<!DOCTYPE html>
<html lang="%lang%" dir="%dir%">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- 基本メタタグ -->
    <meta name="description" content="%sveltekit.head.description%" />
    <meta name="keywords" content="%sveltekit.head.keywords%" />

    <!-- OGP -->
    <meta property="og:title" content="%sveltekit.head.title%" />
    <meta property="og:description" content="%sveltekit.head.description%" />
    <meta property="og:image" content="%sveltekit.head.ogImage%" />
    <meta property="og:type" content="website" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="%sveltekit.head.title%" />
    <meta name="twitter:description" content="%sveltekit.head.description%" />

    <!-- 構造化データ -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Fact Checklist",
        "description": "情報の信頼性を科学的・体系的に評価する実用的ファクトチェックツール",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "JPY"
        }
      }
    </script>

    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
```

### 2.2 サイトマップの追加

#### src/routes/sitemap.xml/+server.ts

```typescript
import type { RequestHandler } from './$types';
import { SUPPORTED_LANGUAGES } from '$lib/i18n/constants';

export const GET: RequestHandler = async () => {
  const baseUrl = 'https://fact-checklist.vercel.app';
  const pages = ['', 'about', 'help', 'privacy', 'intro'];
  const languages = Object.values(SUPPORTED_LANGUAGES).map(lang => lang.code);

  const urls = pages.flatMap(page =>
    languages.map(lang => ({
      loc: `${baseUrl}${lang !== 'ja' ? `/${lang}` : ''}${page ? `/${page}` : ''}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: page === '' ? '1.0' : page === 'intro' ? '0.9' : '0.8'
    }))
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
};
```

### 2.3 robots.txtの追加

#### static/robots.txt

```
User-agent: *
Allow: /
Sitemap: https://fact-checklist.vercel.app/sitemap.xml

# 開発用ディレクトリをクロール対象外に
Disallow: /.svelte-kit/
Disallow: /node_modules/
```

## 3. コンテンツ戦略

### 3.1 ランディングページの改善

#### 魅力的なヒーローセクション

```svelte
<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { t } from '$lib/i18n/store.svelte';

  let isVisible = $state(false);

  onMount(() => {
    isVisible = true;
  });
</script>

<section class="hero">
  {#if isVisible}
    <div class="hero-content" in:fly={{ y: 50, duration: 800 }}>
      <h1 class="hero-title">
        <span class="gradient-text">偽情報に惑わされない</span>
        <br />
        あなたの判断力を支える
      </h1>

      <p class="hero-subtitle" in:fade={{ delay: 300, duration: 600 }}>
        AIやメディアを鵜呑みにせず、20項目のチェックリストで
        <br />
        情報の信頼性を科学的に評価
      </p>

      <div class="cta-buttons" in:fade={{ delay: 600, duration: 600 }}>
        <a href="/intro" class="btn btn-primary">
          <span>今すぐ始める</span>
          <svg><!-- arrow icon --></svg>
        </a>
        <a href="/demo" class="btn btn-secondary">
          <span>デモを見る</span>
          <svg><!-- play icon --></svg>
        </a>
      </div>

      <div class="features-preview" in:fade={{ delay: 900, duration: 600 }}>
        <div class="feature">
          <span class="feature-icon">🔒</span>
          <span>完全プライバシー保護</span>
        </div>
        <div class="feature">
          <span class="feature-icon">📱</span>
          <span>オフライン対応PWA</span>
        </div>
        <div class="feature">
          <span class="feature-icon">🌍</span>
          <span>12言語対応</span>
        </div>
      </div>
    </div>
  {/if}
</section>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient-hero);
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/grid-pattern.svg') repeat;
    opacity: 0.05;
  }

  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  }

  .features-preview {
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
</style>
```

### 3.2 ソーシャル共有機能の追加

```svelte
<script lang="ts">
  function shareOnTwitter() {
    const text = encodeURIComponent(
      '情報の信頼性を科学的に評価するツール「Fact Checklist」を使ってみました！'
    );
    const url = encodeURIComponent('https://fact-checklist.vercel.app');
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      '_blank'
    );
  }

  function shareOnFacebook() {
    const url = encodeURIComponent('https://fact-checklist.vercel.app');
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      '_blank'
    );
  }

  async function shareNative() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Fact Checklist',
          text: '情報の信頼性を科学的に評価するツール',
          url: 'https://fact-checklist.vercel.app'
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  }
</script>
```

## 4. パフォーマンス最適化

### 4.1 画像の最適化

```svelte
<script>
  import { onMount } from 'svelte';

  let imageLoaded = $state(false);

  onMount(() => {
    // 遅延読み込み
    const img = new Image();
    img.src = '/hero-illustration.webp';
    img.onload = () => (imageLoaded = true);
  });
</script>

{#if imageLoaded}
  <picture in:fade={{ duration: 600 }}>
    <source srcset="/hero-illustration.webp" type="image/webp" />
    <source srcset="/hero-illustration.jpg" type="image/jpeg" />
    <img
      src="/hero-illustration.jpg"
      alt="Fact Checklist illustration"
      loading="lazy"
      decoding="async"
    />
  </picture>
{/if}
```

### 4.2 Critical CSSの実装

```html
<!-- app.html -->
<style>
  /* Critical CSS for above-the-fold content */
  :root {
    --color-primary: #667eea;
    --color-secondary: #764ba2;
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  body {
    margin: 0;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
```

## 5. マーケティング施策

### 5.1 コンテンツマーケティング

- ブログセクションの追加
- 「フェイクニュース事例研究」シリーズ
- 「情報リテラシー向上ガイド」の公開

### 5.2 SEO強化記事の例

```markdown
# SNS時代の情報検証：なぜファクトチェックが重要なのか

## はじめに

2025年現在、私たちは日々膨大な情報に晒されています。特にSNSの普及により、誤情報や偽情報が瞬時に拡散される時代となりました。

## なぜファクトチェックが必要か

1. **情報の速度と正確性のトレードオフ**
   - 速報性を重視するあまり、検証が不十分な情報が拡散
   - 訂正情報は元の誤情報ほど拡散されない

2. **エコーチェンバー現象**
   - アルゴリズムによる情報の偏り
   - 確証バイアスの強化

3. **AIによる偽情報の精巧化**
   - ディープフェイク技術の進化
   - AI生成テキストの自然さ

## Fact Checklistの活用方法

[具体的な使用例と効果を記載]
```

### 5.3 SNS戦略

- X（Twitter）での定期的な情報リテラシーTips投稿
- LinkedInでのビジネス向けコンテンツ
- YouTubeでの使い方動画

## 6. 技術的な追加機能

### 6.1 PWA機能の強化

```javascript
// service-worker.js の改善
const CACHE_NAME = 'fact-checklist-v2';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/favicon.ico',
  // 各言語の翻訳ファイルもキャッシュ
  '/i18n/ja.json',
  '/i18n/en.json',
  // オフラインページ
  '/offline.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});
```

### 6.2 分析ダッシュボード

```svelte
<script lang="ts">
  import { Chart } from 'chart.js/auto';
  import { getChecklistStats } from '$lib/stores/analytics';

  let stats = $derived(getChecklistStats());

  onMount(() => {
    const ctx = document.getElementById('usage-chart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: stats.dates,
        datasets: [
          {
            label: 'チェックリスト作成数',
            data: stats.counts,
            borderColor: 'rgb(102, 126, 234)',
            tension: 0.1
          }
        ]
      }
    });
  });
</script>

<div class="analytics-dashboard">
  <h2>利用統計</h2>
  <canvas id="usage-chart"></canvas>

  <div class="stats-grid">
    <div class="stat-card">
      <h3>総チェックリスト数</h3>
      <p class="stat-value">{stats.totalChecklists}</p>
    </div>
    <div class="stat-card">
      <h3>平均スコア</h3>
      <p class="stat-value">{stats.averageScore}%</p>
    </div>
  </div>
</div>
```

## 7. 実装優先順位

### Phase 1（即座に実装すべき）

1. i18n問題の修正
2. メタタグの最適化
3. サイトマップの追加
4. ヒーローセクションの改善

### Phase 2（1週間以内）

1. Svelte5への完全移行
2. PWA機能の強化
3. ソーシャル共有機能
4. パフォーマンス最適化

### Phase 3（1ヶ月以内）

1. ブログセクションの追加
2. 分析ダッシュボード
3. 多言語コンテンツの充実
4. A/Bテストの実施

## まとめ

これらの改善により、以下の効果が期待できます：

- **技術面**: 最新のSvelte5機能を活用した高速で安定したアプリ
- **SEO面**: 検索エンジンでの可視性向上
- **UX面**: より魅力的で使いやすいインターフェース
- **マーケティング面**: コンテンツによる自然な集客

特に重要なのは、**価値のあるツールであることを効果的に伝える**ことです。現在の社会情勢（偽情報問題、AI規制など）を踏まえて、このツールの必要性を訴求していきましょう。
