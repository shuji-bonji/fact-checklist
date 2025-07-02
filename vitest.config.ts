import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/lib/tests/setup.ts'],

    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      include: ['src/lib/**/*.{js,ts,svelte}'],
      exclude: ['src/lib/tests/**', '**/*.d.ts', '**/*.test.{js,ts}', '**/*.spec.{js,ts}'],
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70
        }
      }
    },

    include: ['src/lib/**/*.{test,spec}.{js,ts}', 'src/lib/tests/**/*.{test,spec}.{js,ts}'],

    typecheck: {
      tsconfig: './tsconfig.json'
    }
  }
});
