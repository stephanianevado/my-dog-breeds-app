/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      clash: ['"Clash Display"', 'sans-serif'],
    },
    extend: {
      colors: {
        pink: {
          50: '#f5f5ff',
        },
        gray: {
          50: 'rgba(0, 0, 0, 0.04)',
        },
        hoverAlternative: '#020C1BCC',
        hoverStandard: '#0000001A',
      },
    },
  },
  plugins: [],
}
