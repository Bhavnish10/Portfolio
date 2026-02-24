/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'SF Pro Text', 'Inter', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#0f766e',
          light: '#14b8a6',
          dark: '#115e59'
        },
        accent: '#eab308'
      },
      boxShadow: {
        soft: '0 18px 40px rgba(15, 23, 42, 0.18)'
      }
    }
  },
  plugins: []
};

