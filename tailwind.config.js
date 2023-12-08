/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        'drop-shadow': 'drop-shadow',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            transform: 'scale(.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        goUp: {
          '0%': {
            transform: 'translateY(50%)',
          },
          '50%': {
            transform: 'translateY(-15%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        shakeLeft: {
          '0%': {
            transform: 'translateX(5px)',
          },
          '50%': {
            transform: 'translateX(-5px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
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
          600: 'var(--primary-600)',
          text: 'var(--primary-text)',
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
      animation: {
        fadeUp: 'fadeUp 0.3s ease-in-out',
        goUp: 'goUp 0.3s ease-in-out',
        shakeLeft: 'shakeLeft 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
  mode: 'jit',
}
