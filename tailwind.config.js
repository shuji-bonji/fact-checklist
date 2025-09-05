/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', './src/**/*.svelte', './src/**/*.{js,ts}'],
  darkMode: 'class', // クラスベースのダークモード
  theme: {
    extend: {
      colors: {
        // 既存のCSS変数を利用
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        surface: {
          DEFAULT: 'var(--surface-color)',
          elevated: 'var(--surface-elevated)'
        },
        text: {
          DEFAULT: 'var(--text-color)',
          secondary: 'var(--text-color-secondary)'
        },
        border: 'var(--border-color)',
        success: {
          400: 'var(--color-success-400)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)'
        },
        warning: {
          400: 'var(--color-warning-400)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)'
        },
        error: {
          400: 'var(--color-error-400)',
          500: 'var(--color-error-500)',
          600: 'var(--color-error-600)'
        }
      },
      spacing: {
        // 既存のCSS変数を利用
        'spacing-1': 'var(--spacing-1)',
        'spacing-2': 'var(--spacing-2)',
        'spacing-3': 'var(--spacing-3)',
        'spacing-4': 'var(--spacing-4)',
        'spacing-5': 'var(--spacing-5)',
        'spacing-6': 'var(--spacing-6)',
        'spacing-8': 'var(--spacing-8)',
        'spacing-10': 'var(--spacing-10)',
        'spacing-12': 'var(--spacing-12)'
      },
      borderRadius: {
        'radius-sm': 'var(--radius-sm)',
        'radius-base': 'var(--radius-base)',
        'radius-lg': 'var(--radius-lg)',
        'radius-xl': 'var(--radius-xl)',
        'radius-2xl': 'var(--radius-2xl)',
        'radius-full': 'var(--radius-full)'
      },
      fontFamily: {
        base: 'var(--font-family-base)',
        heading: 'var(--font-family-heading)',
        mono: 'var(--font-family-mono)'
      },
      fontSize: {
        'size-xs': 'var(--font-size-xs)',
        'size-sm': 'var(--font-size-sm)',
        'size-base': 'var(--font-size-base)',
        'size-lg': 'var(--font-size-lg)',
        'size-xl': 'var(--font-size-xl)',
        'size-2xl': 'var(--font-size-2xl)',
        'size-3xl': 'var(--font-size-3xl)',
        'size-4xl': 'var(--font-size-4xl)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
