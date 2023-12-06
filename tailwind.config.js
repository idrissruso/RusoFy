/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          btn: {
            100: '#dbe1fd',
          },
          primary: {
            100: '#021530',
            200: '#FFFEFE',
            300: '#F1F6FE',
            400: '#dee5f0',
          },
          secondary: {
            100: '#473AA0',
            200: '#3b3187',
          },
          tertiary: {
            100: '#057BFE',
            200: '#0069e0',
          },
        },

        dark: {
          btn: {
            100: '#301c27',
          },
          primary: {
            100: '#414459',
            200: '#262835',
            300: '#2f2f35',
            400: '#4D4D4D',
            500: '#000000',
          },
          secondary: {
            100: '#BF94F8',
            200: '#aa73f7',
            300: '#8f4ff6',
            400: '#7e2df5',
            500: '#6a0af4',
          },
          tertiary: {
            100: '#FF7BC7',
            200: '#ff5ebc',
            300: '#ff3fb1',
            400: '#ff1da7',
            500: '#ff009c',
          },
        },
      },
    },
  },

  plugins: [],
}
