# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is **Fact Checklist** (ファクトチェックシート), an internationalized PWA
for systematically evaluating information reliability with full support for 12
languages. Built with Svelte 5, TypeScript, and deployed to GitHub Pages, the
application helps users assess the credibility of information through a
structured 20-item checklist across 4 categories.

### Supported Languages

- Japanese (ja) - CJK script
- English (en) - Latin script
- French (fr) - Latin script
- Traditional Chinese (zh-TW) - CJK script
- Spanish (es) - Latin script
- Portuguese (pt) - Latin script
- Hindi (hi) - Devanagari script
- German (de) - Latin script
- Italian (it) - Latin script
- Arabic (ar) - Arabic script (RTL)
- Indonesian (id) - Latin script
- Korean (ko) - CJK script

## Development Commands

### Essential Commands

```bash
# Development
npm run dev              # Start development server on localhost:5173
npm run check            # TypeScript type checking
npm run check:watch      # Type checking in watch mode

# Code Quality
npm run lint             # Run ESLint + Prettier checks
npm run lint:fix         # Auto-fix ESLint and Prettier issues
npm run format           # Format code with Prettier

# Build & Deploy
npm run build            # Production build for GitHub Pages
npm run preview          # Preview production build locally
npm run preview:prod     # Preview with GitHub Pages base path

# Performance
npm run lighthouse       # Run Lighthouse audits
npm run lighthouse:ci    # Lighthouse for CI environments
```

### Testing Commands (if implemented)

```bash
npm run test             # Run unit tests
npm run test:e2e         # Run E2E tests
npm run test:coverage    # Generate coverage reports
```

## Architecture Overview

### Technology Stack

- **Frontend**: Svelte 5 with runes ($state, $derived) for reactivity
- **Language**: TypeScript with strict configuration (ES2022 target)
- **Meta-framework**: SvelteKit with static adapter for GitHub Pages
- **Build**: Vite with PWA plugin
- **Styling**: Custom CSS with CSS custom properties for theming
- **State**: Local-first with localStorage/IndexedDB persistence
- **Export**: jsPDF with international font support for multi-format export
- **i18n**: Custom type-safe internationalization system with Svelte 5 runes

### Key Architectural Patterns

#### State Management (Svelte 5 Runes)

- **Primary Store**: `/src/lib/stores/checklistStore.svelte.ts`
- Uses Svelte 5 runes (`$state`, `$derived`) for reactive state management
- Singleton pattern with class-based store implementation
- Automatic localStorage persistence for offline functionality

#### Data Structure

- **Checklist Items**: 20 predefined items across 4 categories (Critical,
  Detailed, Verification, Context)
- **Categories**: Color-coded with emoji indicators for UX
- **Scoring**: Real-time percentage-based scoring with confidence levels
- **History**: Stores last 5 completed evaluations locally

#### Component Architecture

```
src/lib/components/
├── CheckSection.svelte     # Category-based sections
├── CheckItem.svelte        # Individual checklist items
├── ScoreDisplay.svelte     # Real-time score visualization
├── ExportModal.svelte      # Multi-format export dialog with i18n
├── HistorySidebar.svelte   # Evaluation history management
└── LanguageSwitcher.svelte # Language selection UI
```

#### Routing Structure

- **SvelteKit File-based Routing**: `/src/routes/`
- **Static Generation**: All routes pre-rendered for GitHub Pages
- **Dynamic Results**: `/checklist/[id]` for individual evaluation results
- **Progressive Enhancement**: Works without JavaScript for basic functionality

### Data Flow

1. **Creation**: New checklist → Store → localStorage persistence
2. **Updates**: Real-time item checking → Derived score calculation → Auto-save
3. **Completion**: Final judgment → History addition → Export options
4. **Persistence**: Everything stored locally (privacy-first design)

## Development Guidelines

### TypeScript Configuration

- **Strict Mode**: Enabled with additional strict checks
- **Target**: ES2022 with modern browser support
- **Key Settings**: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`
- Always run `npm run check` before committing

### Code Style

- **ESLint**: TypeScript + Svelte-specific rules configured
- **Prettier**: Consistent formatting across all files
- **File Extensions**: Use `.svelte.ts` for Svelte stores with TypeScript

### Component Patterns

- **Props**: Use TypeScript interfaces for component props
- **Events**: Leverage Svelte 5's event system
- **Styling**: Component-scoped CSS with global design tokens
- **Reactivity**: Prefer runes over legacy reactive statements

### PWA Considerations

- **Offline First**: All functionality available without network
- **Service Worker**: Automated caching via Vite PWA plugin
- **Manifest**: Comprehensive PWA manifest with shortcuts and share targets
- **Icons**: Multiple sizes for different platforms and contexts

### Performance Targets

- **Bundle Size**: Keep under 200KB gzipped
- **Lighthouse Scores**: Maintain 95+ Performance, 100 for other metrics
- **Load Times**: FCP <1.2s, TTI <2.5s
- Run `npm run lighthouse` to verify performance

### Deployment

- **Target**: GitHub Pages via GitHub Actions
- **Base Path**: `/fact-checklist/` for production builds
- **Static**: All routes pre-rendered, no server-side requirements
- **Domain**: `shuji-bonji.github.io/fact-checklist/`

## Important File Locations

### Core Logic

- `/src/lib/stores/checklistStore.svelte.ts` - Main application state with i18n
  support
- `/src/lib/data/checklist-items.ts` - Checklist data with translation keys
- `/src/lib/types/checklist.ts` - TypeScript type definitions

### Internationalization

- `/src/lib/i18n/index.ts` - i18n initialization and exports
- `/src/lib/i18n/store.svelte.ts` - Language state management with runes
- `/src/lib/i18n/types.ts` - Type-safe translation system
- `/src/lib/i18n/translations/` - Translation files for 12 languages
- `/src/lib/i18n/fonts.ts` - International font management for PDF generation

### Configuration

- `vite.config.ts` - Build configuration with PWA settings
- `tsconfig.json` - TypeScript configuration with strict settings
- `package.json` - Dependencies and npm scripts

### Routing & Pages

- `/src/routes/+page.svelte` - Main application interface with i18n
- `/src/routes/+layout.svelte` - Common page layout with language switcher
- `/src/routes/+layout.server.ts` - Server-side SEO metadata generation
- `/src/routes/checklist/[id]/` - Dynamic result pages with multilingual support
- `/src/routes/about/` - About page (internationalized)
- `/src/routes/help/` - Help page (internationalized)
- `/src/routes/privacy/` - Privacy policy (internationalized)
- `/src/routes/sitemap.xml/` - Dynamic sitemap generation with hreflang
- `/src/routes/robots.txt/` - Dynamic robots.txt generation
- `/src/hooks.server.ts` - Server hooks for language detection

## Privacy & Security Notes

- **No Server Communication**: All data remains on user's device
- **Local Storage**: Uses localStorage + IndexedDB for persistence
- **No Analytics**: No tracking or data collection implemented
- **Content Security Policy**: Configured for XSS protection

## 📤 Sharing Functionality

### Overview

The application includes a sophisticated sharing system that allows users to
share their evaluation results without any server infrastructure:

- **Serverless Architecture**: Uses URL-encoded data sharing (Base64
  compression)
- **Privacy-First**: No data is stored on servers; all sharing is done via
  encoded URLs
- **Multi-Platform Support**: Native OS sharing, social media, and QR codes

### Technical Implementation

#### Core Components

- `/src/lib/components/ShareButton.svelte` - Main sharing UI component
- `/src/lib/utils/shareUrl.ts` - URL encoding/decoding utilities
- `/src/routes/checklist/shared/+page.svelte` - Shared result viewing page

#### Data Encoding Strategy

```typescript
// Minimal data structure for URL sharing
interface MinimalShareData {
  v: 1; // Version number
  t: string; // Title
  n?: string; // Notes (optional)
  j?: string | null; // Judgment
  d: number; // Date timestamp
  c: string[]; // Checked item IDs
  s: number; // Score percentage
}
```

#### URL Encoding Process

1. **Data Minimization**: Only essential data is included
2. **JSON Serialization**: Convert to compact JSON
3. **Base64 Encoding**: URL-safe Base64 encoding
4. **URL Generation**: Append to `/checklist/shared?d=` path

#### Sharing Capabilities

```typescript
interface SharingCapabilities {
  canShareText: boolean; // Web Share API support
  canShareFiles: boolean; // File sharing support
  canShareUrl: boolean; // URL sharing support
  canShareTitle: boolean; // Title sharing support
  canCopyToClipboard: boolean; // Clipboard API support
}
```

### Browser Compatibility

- **Web Share API**: Modern browsers (Chrome 89+, Safari 12.1+, Edge 93+)
- **Fallback**: Social media buttons and clipboard copy for older browsers
- **Safari SSL Fix**: Explicit HTTPS protocol for GitHub Pages URLs

### Social Media Integration

Supported platforms with pre-formatted messages:

- X (Twitter) - With hashtags
- Facebook - Share dialog
- WhatsApp - Direct message
- Email - mailto: link with subject/body

### QR Code Generation

- Dynamic QR code generation using qrcode library
- Automatic sizing for mobile scanning
- Embedded sharing URL

## Svelte 5 Specification Requirements

### **CRITICAL: Always Use Latest Svelte 5 Specification**

Before coding any Svelte components, **always reference the latest Svelte 5
documentation**:

- 📖 **Primary Reference**: https://svelte.dev/docs/llms
- 📄 **Full Specification**: https://svelte.dev/llms-full.txt
- 📄 **Medium Guide**: https://svelte.dev/llms-medium.txt
- 📄 **Quick Reference**: https://svelte.dev/llms-small.txt

### **Mandatory Svelte 5 Patterns**

#### **1. Use Runes Instead of Legacy Reactive Syntax**

```svelte
<!-- ❌ LEGACY (Svelte 3/4) - DO NOT USE -->
<script>
  export let count = 0;
  $: doubled = count * 2;

  let items = [];
  $: filteredItems = items.filter(item => item.active);
</script>

<!-- ✅ SVELTE 5 RUNES - ALWAYS USE THIS -->
<script>
  let { count = $bindable(0) } = $props();
  let doubled = $derived(count * 2);

  let items = $state([]);
  let filteredItems = $derived(items.filter(item => item.active));
</script>
```

#### **2. State Management with Runes**

```svelte
<!-- ✅ CORRECT: Use $state for local reactive state -->
<script>
  let user = $state({ name: '', email: '' });
  let isLoading = $state(false);
  let errors = $state([]);
</script>

<!-- ❌ INCORRECT: Don't use legacy let declarations for reactive state -->
<script>
  let user = { name: '', email: '' }; // This won't be reactive in Svelte 5
</script>
```

#### **3. Props with $props() and $bindable()**

```svelte
<!-- ✅ CORRECT: Svelte 5 props pattern -->
<script>
  let {
    title,
    count = $bindable(0),
    items = [],
    onUpdate = () => {}
  } = $props();
</script>

<!-- ❌ INCORRECT: Legacy export syntax -->
<script>
  export let title;
  export let count = 0;
  export let items = [];
</script>
```

#### **4. Effects with $effect()**

```svelte
<!-- ✅ CORRECT: Use $effect for side effects -->
<script>
  let count = $state(0);

  $effect(() => {
    console.log('Count changed:', count);
    document.title = `Count: ${count}`;
  });

  // Cleanup effects
  $effect(() => {
    const timer = setInterval(() => count++, 1000);
    return () => clearInterval(timer);
  });
</script>

<!-- ❌ INCORRECT: Legacy reactive statements -->
<script>
  $: console.log('Count changed:', count); // Don't use this pattern
</script>
```

#### **5. Derived State with $derived()**

```svelte
<script>
  let items = $state([]);
  let filter = $state('');

  // ✅ CORRECT: Use $derived for computed values
  let filteredItems = $derived(
    items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
  );

  let itemCount = $derived(filteredItems.length);
  let isEmpty = $derived(itemCount === 0);
</script>
```

## 🌍 Internationalization Architecture

### i18n System Overview

The application uses a custom internationalization system built with Svelte 5
runes:

- **Language Store**: `/src/lib/i18n/store.svelte.ts` manages current language
  state
- **Type-safe Translations**: All translation keys are type-checked at compile
  time
- **Dynamic Loading**: Translation files are loaded on-demand for performance
- **Browser Detection**: Automatically detects and uses browser language on
  first visit
- **RTL Support**: Full support for right-to-left languages (Arabic)
- **Language Persistence**: Synchronized storage using localStorage and cookies
- **SSR Support**: Server-side language detection via Accept-Language headers

### Translation Key Structure

```typescript
// Example translation key structure
interface TranslationKeys {
  app: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    help: string;
    privacy: string;
  };
  checklist: {
    title: string;
    // ... nested structure
  };
}
```

### Font Management for PDF Export

The application includes an advanced font management system for international
PDF generation:

- **Latin Script**: Roboto font for Western languages
- **CJK Script**: Noto Sans CJK for Japanese, Korean, and Chinese
- **Devanagari Script**: Noto Sans Devanagari for Hindi
- **Arabic Script**: Noto Sans Arabic with RTL rendering

### Adding New Languages

To add a new language:

1. Create translation file in `/src/lib/i18n/translations/[lang].ts`
2. Add language to `SUPPORTED_LANGUAGES` in `/src/lib/i18n/types.ts`
3. Update font configuration if needed in `/src/lib/i18n/fonts.ts`
4. Test all features including PDF export

## 🛠️ Maintenance Guidelines

### Code Quality Standards

- **Type Safety**: All code must pass `npm run check` with no errors
- **ESLint Compliance**: Use `npm run lint` before committing
- **Formatting**: Apply `npm run format` to maintain consistency
- **Performance**: Maintain Lighthouse score of 95+ for performance

### i18n Best Practices

1. **Translation Keys**: Use descriptive, hierarchical keys
2. **Fallbacks**: Always provide fallback text for missing translations
3. **Context**: Include context comments for translators
4. **Testing**: Test all languages, especially RTL layouts
5. **Cultural Sensitivity**: Review translations for cultural appropriateness

### Component Development Rules

1. **Always use Svelte 5 runes** - No legacy reactive syntax
2. **Import translations** - Use `import { t } from '$lib/i18n'` in components
3. **Dynamic text** - Never hardcode user-facing text
4. **ARIA labels** - Ensure all interactive elements have translated labels
5. **Date/Time formats** - Use locale-appropriate formatting

### PDF Export Considerations

- Test PDF generation for all languages before release
- Verify font embedding works correctly
- Check RTL text rendering in Arabic PDFs
- Ensure metadata is properly internationalized
- Currently, 2 PDF modes are available: Pixel-perfect and Text-based

### Performance Optimization

- Lazy load translation files
- Cache fonts for PDF generation
- Use dynamic imports for language-specific features
- Monitor bundle size impact when adding languages

## ⚠️ Critical Constraints

### Must Maintain

1. **PWA Functionality**: All features must work offline
2. **Type Safety**: No `any` types in TypeScript code
3. **Accessibility**: WCAG 2.1 AA compliance required
4. **Privacy**: No external API calls or tracking
5. **Performance**: Bundle size under 200KB gzipped

### Security Requirements

- All data stored locally only
- No external font loading (fonts bundled)
- CSP headers properly configured
- Input sanitization for all user inputs

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Must gracefully degrade for older browsers

## 🔧 TypeScript/ESLint Configuration (2025年8月更新)

### TypeScript厳格設定

tsconfig.jsonに以下の厳格設定を適用:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "exactOptionalPropertyTypes": true,
    "allowUnusedLabels": false,
    "allowUnreachableCode": false
  }
}
```

### ESLint厳格ルール

- `@typescript-eslint/no-explicit-any`: error
- `@typescript-eslint/no-non-null-assertion`: error
- `@typescript-eslint/no-unsafe-assignment`: error
- `@typescript-eslint/no-unsafe-member-access`: error
- `@typescript-eslint/no-unsafe-call`: error
- `@typescript-eslint/no-unsafe-return`: error
- `@typescript-eslint/no-unsafe-argument`: error
- `@typescript-eslint/explicit-function-return-type`: warn
- `@typescript-eslint/no-floating-promises`: error
- `@typescript-eslint/no-misused-promises`: error

### 品質チェックコマンド

```bash
# 全品質チェック
npm run quality:check

# 型チェック
npm run type-check

# 厳格Lint
npm run lint:strict

# クリーンインストール
npm run clean:install
```

## 🚀 SEO & Server-Side Rendering Implementation

### Recent SEO Improvements (2025年1月)

The application now includes comprehensive SEO optimization with server-side
rendering:

#### Server-Side Language Detection Hierarchy

```typescript
// src/routes/+layout.server.ts
// Detection priority:
1. URL path segment (e.g., /en/, /ja/)
2. Cookie value (language cookie)
3. Accept-Language header
4. Default language (ja)
```

#### Dynamic Meta Tag Generation

- 12 language-specific meta tags for all pages
- OGP (Open Graph Protocol) tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data for search engines
- hreflang tags for international SEO

#### Language Persistence Strategy

```typescript
// Synchronized storage approach:
localStorage.setItem('fact-checklist-language', language);
document.cookie = `language=${language}; max-age=31536000; path=/; SameSite=Lax`;
```

#### Dynamic Routes

- `/sitemap.xml` - Auto-generated with all language URLs
- `/robots.txt` - Dynamic generation with sitemap reference
- `/api/debug-meta` - Debug endpoint for meta tag testing

#### Shared Type Definitions

```typescript
// src/lib/types/layout.ts
export interface LayoutServerData {
  currentLang: Language;
  metaData: MetaData;
  availableLanguages: Language[];
}
```

## 📚 Common Development Patterns & Knowledge

### Font Path Issues on GitHub Pages

When deploying to GitHub Pages, font paths must be dynamically adjusted:

```typescript
// ❌ INCORRECT: Static font path
const fontPath = '/fonts/NotoSansJP-Regular.ttf';

// ✅ CORRECT: Dynamic font path detection
export function getFontBasePath(): string {
  if (typeof window === 'undefined') return '/fonts/'; // SSR

  const isGitHubPages =
    window.location.hostname === 'shuji-bonji.github.io' ||
    window.location.pathname.startsWith('/fact-checklist/') ||
    window.location.origin.includes('github.io');

  return isGitHubPages ? '/fact-checklist/fonts/' : '/fonts/';
}
```

### ESLint `prefer-const` with Later Assignment

When declaring variables that will be assigned later in the same scope:

```typescript
// ❌ Will trigger ESLint prefer-const error
let timeoutId: number;
let intervalId: number;

// Later assignment
timeoutId = setTimeout(...);
intervalId = setInterval(...);

// ✅ CORRECT: Initialize with default value
let timeoutId: number = 0;
let intervalId: number = 0;

// Later assignment works without ESLint errors
timeoutId = setTimeout(...);
intervalId = setInterval(...);
```

### Svelte 5 Component Props Pattern

Always use the new Svelte 5 props pattern with proper typing:

```typescript
// ❌ INCORRECT: Legacy pattern
export let value: string;
export let onChange: (value: string) => void;

// ✅ CORRECT: Svelte 5 pattern
interface Props {
  value: string;
  onChange?: (value: string) => void;
}

let { value, onChange = () => {} }: Props = $props();
```

### Type-safe Translation Usage

Always import and use translations with proper type safety:

```typescript
// ✅ CORRECT: Import translation function
import { t } from '$lib/i18n';

// Use in component
const title = t('app.title');
const description = t('checklist.description');

// ❌ INCORRECT: Hardcoded strings
const title = 'Fact Checklist'; // Never hardcode user-facing text
```

### Export Mode Selection

Current export modes available (others may be temporarily disabled):

```typescript
// Available modes as of latest update
export const PDF_MODES = {
  PIXEL_PERFECT: 'pixelPerfect', // Default - uses browser print
  TEXT_BASED: 'textBased' // Lightweight with embedded fonts
  // RELIABLE_FONTS: 'reliable',    // Temporarily disabled
} as const;
```

### Case Blocks in Switch Statements

Always use block scope for case statements with const/let declarations:

```typescript
// ❌ INCORRECT: Will cause no-case-declarations error
switch (mode) {
  case 'MODE_A':
    const result = processA();
    return result;
}

// ✅ CORRECT: Use block scope
switch (mode) {
  case 'MODE_A': {
    const result = processA();
    return result;
  }
}
```

### Async Function Return Types

Be explicit about Promise return types for better type safety:

```typescript
// ❌ Less specific
async function generatePDF(data: any): Promise<void> {
  // ...
}

// ✅ CORRECT: More specific return types
async function generatePDF(
  data: ChecklistData
): Promise<{ success: boolean; cancelled?: boolean }> {
  // ...
}
```

---

This document serves as a comprehensive guide for maintaining and developing the
Fact Checklist application. Always prioritize code quality, type safety, and
user experience across all 12 supported languages.

---

## Testing Strategy & Environment

### Test Architecture Overview

This project implements a comprehensive testing strategy with multiple layers:

1. **Unit Tests**: Individual service and utility function testing
2. **Integration Tests**: Service interaction and data flow testing
3. **Component Tests**: Svelte 5 component behavior testing (planned)
4. **E2E Tests**: Complete user workflow testing (planned)

### Current Testing Status

- ✅ **Integration Tests**: Implemented in `src/lib/tests/`
- 🚧 **Vitest Migration**: In progress (Phase 1-2)
- 📋 **Component Tests**: Planned (Phase 3)
- 📋 **E2E Tests**: Future implementation

### Testing Commands

```bash
# Unit & Integration Tests
npm run test                 # Run all tests with Vitest
npm run test:ui             # Run tests with UI interface
npm run test:run            # Run tests once (CI mode)
npm run test:coverage       # Run tests with coverage report
npm run test:watch          # Run tests in watch mode

# Component Tests (Phase 3)
npm run test:component      # Run component-specific tests

# E2E Tests (Future)
npm run test:e2e           # Run Playwright E2E tests
npm run test:e2e:ui        # Run E2E tests with UI
npm run test:all           # Run all test suites
```

### Test File Structure

```
src/lib/tests/
├── setup.ts                    # Vitest global setup
├── services/                   # Unit tests for services
│   ├── ChecklistService.test.ts
│   ├── ScoringService.test.ts
│   ├── SearchService.test.ts
│   ├── StorageService.test.ts
│   └── ExportService.test.ts
├── integration/                # Integration tests
│   ├── serviceIntegration.test.ts
│   └── serviceIntegrationSimple.test.ts
├── components/                 # Component tests (Phase 3)
│   ├── checklist/
│   ├── ui/
│   └── layout/
└── utils/                      # Utility function tests
    ├── validation.test.ts
    └── formatting.test.ts

tests/
└── e2e/                       # E2E tests (Future)
    ├── checklist-workflow.spec.ts
    ├── internationalization.spec.ts
    └── pwa-functionality.spec.ts
```

### Test Configuration Files

- `vitest.config.ts` - Main Vitest configuration
- `vitest.component.config.ts` - Component-specific test config
- `playwright.config.ts` - E2E test configuration (planned)
- `src/lib/tests/setup.ts` - Global test setup and mocks

### Testing Best Practices for This Project

#### Svelte 5 Component Testing

- Use Svelte 5 runes (`$state`, `$derived`) in test components
- Test component props with `$bindable()` properties
- Verify reactive state changes with runes

#### Internationalization Testing

- Test all 12 supported languages where applicable
- Verify RTL layout for Arabic language
- Test font loading for CJK languages (Japanese, Chinese, Korean)

#### TypeScript Testing

- Maintain strict type checking in tests
- Use proper type assertions for mock objects
- Test type-safe service interfaces

#### PWA & Browser API Mocking

```typescript
// Example mocking patterns used in setup.ts
vi.stubGlobal('localStorage', localStorageMock);
vi.stubGlobal('indexedDB', indexedDBMock);
vi.mock('jspdf', () => ({/* PDF mock */}));
```

### Coverage Targets

- **Minimum Coverage**: 70% across all metrics
- **Services**: 90%+ coverage (business logic priority)
- **Components**: 80%+ coverage
- **Utilities**: 95%+ coverage

### Test Data Management

- Use factory functions for creating test data
- Maintain consistent test fixtures
- Mock external dependencies (PDF generation, storage APIs)

### Continuous Integration

Tests are designed to run in CI environments with:

- Deterministic results (no flaky tests)
- Fast execution (unit tests < 10s, integration tests < 30s)
- Comprehensive error reporting
- Automatic coverage reporting

### Performance Testing

Basic performance testing is included in integration tests:

- Checklist creation time benchmarks
- Score calculation performance
- Search functionality response times
- Memory usage validation

---

### Important Notes for Claude Code

When working with tests in this project:

1. **Always check existing test files** in `src/lib/tests/` before creating new
   ones
2. **Follow Svelte 5 patterns** - use runes, not legacy reactive syntax
3. **Consider internationalization** - many components have i18n dependencies
4. **Mock browser APIs** properly using the patterns in `setup.ts`
5. **Maintain TypeScript strictness** - all tests must pass type checking
6. **Test service layer first** - business logic is the highest priority

### Current Implementation Phases

- **Phase 1 (This Week)**: Vitest foundation setup ✅
- **Phase 2 (Next Week)**: Migrate existing tests to Vitest
- **Phase 3 (2-3 weeks)**: Implement component tests
- **Phase 4 (Future)**: E2E testing with Playwright

## プロジェクト改善計画

本プロジェクトには包括的な改善計画があります。詳細は `improvement-plan.md`
を参照してください。

### 改善計画の概要

- **Phase 0**: 緊急修正事項（TypeScript警告解消）- 1-2日
- **Phase 1**: SEO基盤構築 - 3-5日
- **Phase 2**: ユーザー体験向上 - 1週間
- **Phase 3**: コンテンツ戦略 - 2週間
- **Phase 4**: アーキテクチャ改善 - 2週間
- **Phase 5**: 品質保証 - 1週間
- **Phase 6**: 成長戦略 - 1ヶ月

### 現在の進捗（2025年8月）

- ✅ i18n問題修正完了
- ✅ Svelte5移行部分完了
- ✅ SEO対策実装完了（メタタグ、sitemap、robots.txt）
- ✅ 言語永続化とlocalStorage/Cookie同期実装
- ✅ TypeScript型定義の共有化実装
- ✅ TypeScript/ESLint厳格化設定完了
- ✅ コード品質向上スクリプト追加
- 🚧 TypeScript警告修正中
- 総合進捗率: 約60%

### Claude Codeへの指示方法

#### フェーズ実行の基本コマンド

```bash
# 特定のフェーズを実行
"improvement-plan.mdのPhase [番号]を実行してください"

# 例：
"improvement-plan.mdのPhase 0を実行してください"
"improvement-plan.mdのPhase 1のタスク1.1を実装してください"
```

#### 進捗確認

```bash
"improvement-plan.mdの現在の進捗状況を確認してください"
"Phase [番号]の残タスクを教えてください"
```

#### 実装時の注意事項

1. **小さなコミット単位で作業**すること
2. **既存機能を壊さない**よう注意
3. **TypeScriptの型安全性**を維持
4. 各フェーズ完了時に**動作確認**を実施

### 優先実行項目（2025年1月時点）

1. **Phase 0の完了**（TypeScript警告の解消）
2. ~~**Phase 1の開始**（SEO基盤構築）~~ ✅ 完了
   - ✅ メタタグの動的生成（12言語対応）
   - ✅ サイトマップの改善（hreflang対応）
   - ✅ robots.txt動的生成
   - ✅ 言語永続化とSSR/CSR同期
3. **Phase 2の開始**（ユーザー体験向上）

## 📝 注意事項

### Svelte5対応

Svelte5では以下の新機能を使用してください。

$state() - リアクティブな状態管理
$derived() - 派生値の計算
$effect() - 副作用の処理
$props() - 型安全なプロパティ .svelte.ts -
Runesを使用したストア

- 必ずruntime runesを使用（`$state()`, `$derived()`, `$effect()`）
- `$props()`と`$bindable()`でコンポーネントプロパティを定義
- レガシーな`export let`は使用しない

### TypeScript厳格モード

- `strict: true`を維持
- 型安全性を確保
- `any`型の使用を避ける

### 国際化対応

- 12言語すべてでSEO最適化
- hreflangタグの正確な設定
- RTL言語（アラビア語）の適切な処理

詳細なタスクリストと実装方法は `improvement-plan.md` を参照してください。

## 🔧 コード品質基準とESLint/TypeScriptルール（2025年1月更新）

### TypeScript型チェック厳格設定

プロジェクトは完全なTypeScript厳格モードで動作し、以下の設定を維持：

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true
  }
}
```

### ESLint厳格ルール

以下の重要なESLintルールを適用：

#### 1. **@typescript-eslint/no-floating-promises**

非同期関数の適切な処理を強制：

```typescript
// ❌ エラー
asyncFunction();

// ✅ 修正方法
await asyncFunction();
// または
void asyncFunction(); // 結果を無視する場合
```

#### 2. **@typescript-eslint/explicit-function-return-type**

すべての関数に明示的な戻り値の型を要求：

```typescript
// ❌ 警告
function getValue() {
  return 'test';
}

// ✅ 修正
function getValue(): string {
  return 'test';
}
```

#### 3. **@typescript-eslint/strict-boolean-expressions**

条件式を明示的にすることを要求：

```typescript
// ❌ 警告
if (str) {
}
if (obj) {
}
if (nullable) {
}

// ✅ 修正
if (str !== '') {
}
if (str.length > 0) {
}
if (obj !== null) {
}
if (nullable !== null && nullable !== undefined) {
}

// nullable booleanの場合
if (bool === true) {
}
if (bool !== null && bool) {
}

// nullable numberの場合
if (num !== null && num !== 0) {
}
```

#### 4. **@typescript-eslint/no-unsafe-return**

any型の安全でない返却を防止：

```typescript
// ❌ エラー
function parse(value: string) {
  return JSON.parse(value); // any型
}

// ✅ 修正
function parse<T>(value: string): T {
  return JSON.parse(value) as T;
}
```

#### 5. **@typescript-eslint/no-unused-vars**

未使用変数の検出（アンダースコアで回避可能）：

```typescript
// ❌ エラー
const unusedVar = 'test';

// ✅ 修正（本当に未使用の場合）
const _unusedVar = 'test';
// または削除
```

### 型エラーの一般的な修正パターン

#### translationKeyのundefinedチェック

```typescript
// ❌ エラー：undefinedの可能性
factChecklistI18n.getCheckItemTitle(item.translationKey);

// ✅ 修正：明示的なチェック
if (
  item.translationKey !== null &&
  item.translationKey !== undefined &&
  item.translationKey !== ''
) {
  factChecklistI18n.getCheckItemTitle(item.translationKey);
}
```

#### 関数の戻り値の型不一致

```typescript
// ❌ エラー：宣言と実装の不一致
function getItems(): void {
  return items; // 実際は配列を返している
}

// ✅ 修正：正しい型を宣言
function getItems(): Item[] {
  return items;
}
```

### コマンド

```bash
# TypeScript型チェック
npm run check          # svelte-checkを含む完全チェック

# ESLintチェック
npm run lint           # ESLintチェック
npm run lint:fix       # 自動修正可能な問題を修正

# 品質チェック（両方を実行）
npm run check && npm run lint
```

### 品質目標

- **TypeScript**: `npm run check` で0エラー、0警告
- **ESLint**: `npm run lint` で0エラー、警告は最小限
- **すべての関数**に明示的な戻り値の型
- **すべての条件式**が明示的
- **no-any**: any型の使用を避ける

### デバッグのヒント

1. **型エラーの調査**：VSCodeのTypeScript拡張機能でホバーして型を確認
2. **ESLint自動修正**：`npm run lint:fix`で多くの問題が自動修正可能
3. **段階的な修正**：優先度の高いサービス層から修正を開始
4. **型定義の確認**：`src/lib/types/`内の型定義を参照

これらのルールに従うことで、バグの早期発見と保守性の高いコードベースを維持できます。
