# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

This is **Fact Checklist** (実用的事実確認チェックシート), a Japanese PWA for
systematically evaluating information reliability. It's built with Svelte 5,
TypeScript, and deployed to GitHub Pages. The application helps users assess the
credibility of information through a structured 20-item checklist across 4
categories.

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
- **Export**: jsPDF, html2canvas for multi-format export capabilities

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
├── ExportModal.svelte      # Multi-format export dialog
└── HistorySidebar.svelte   # Evaluation history management
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

- `/src/lib/stores/checklistStore.svelte.ts` - Main application state
- `/src/lib/data/checklist-items.ts` - Checklist data and categories
- `/src/lib/types/checklist.ts` - TypeScript type definitions

### Configuration

- `vite.config.ts` - Build configuration with PWA settings
- `tsconfig.json` - TypeScript configuration with strict settings
- `package.json` - Dependencies and npm scripts

### Routing & Pages

- `/src/routes/+page.svelte` - Main application interface
- `/src/routes/+layout.svelte` - Common page layout
- `/src/routes/checklist/[id]/` - Dynamic result pages

## Privacy & Security Notes

- **No Server Communication**: All data remains on user's device
- **Local Storage**: Uses localStorage + IndexedDB for persistence
- **No Analytics**: No tracking or data collection implemented
- **Content Security Policy**: Configured for XSS protection

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

### **WebSocket Integration with Svelte 5 Runes**

#### **WebSocket Store Pattern (Svelte 5)**

```typescript
// ✅ CORRECT: src/lib/stores/websocket.svelte.ts
export function createWebSocketStore(url: string) {
  let socket = $state<WebSocket | null>(null);
  let connected = $state(false);
  let messages = $state<string[]>([]);
  let error = $state<string | null>(null);

  const connect = () => {
    socket = new WebSocket(url);

    socket.onopen = () => {
      connected = true;
      error = null;
    };

    socket.onmessage = event => {
      messages.push(event.data);
    };

    socket.onclose = () => {
      connected = false;
    };

    socket.onerror = () => {
      error = 'Connection failed';
    };
  };

  return {
    get connected() {
      return connected;
    },
    get messages() {
      return messages;
    },
    get error() {
      return error;
    },
    connect,
    send: (message: string) => socket?.send(message)
  };
}
```
