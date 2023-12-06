/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        btn: {
          100: 'var(--btn-100)',
        },
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
        },
        secondary: {
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
        },
        tertiary: {
          100: 'var(--tertiary-100)',
          200: 'var(--tertiary-200)',
          300: 'var(--tertiary-300)',
          400: 'var(--tertiary-400)',
          500: 'var(--tertiary-500)',
        },
      },
    },
  },
  plugins: [],
  mode: 'jit',
}
