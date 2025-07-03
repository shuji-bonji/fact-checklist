export default [
  {
    ignores: [
      'build/',
      'dist/',
      '.svelte-kit/',
      '.vercel/',
      '**/*sw.js',
      '**/*workbox*.js',
      'node_modules/',
      '*.config.js',
      '*.config.ts'
    ]
  },
  {
    files: ['src/**/*.{js,ts,svelte}'],
    languageOptions: {
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        fetch: 'readonly',
        URL: 'readonly',
        Blob: 'readonly',
        File: 'readonly',
        btoa: 'readonly',
        alert: 'readonly',
        confirm: 'readonly',
        history: 'readonly',
        indexedDB: 'readonly',
        $state: 'readonly',
        $derived: 'readonly',
        $effect: 'readonly',
        $props: 'readonly'
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'svelte/no-at-html-tags': 'off'
    }
  }
];
