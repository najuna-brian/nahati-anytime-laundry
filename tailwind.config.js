/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#14b8a6', // turquoise/teal-500
          dark: '#0d9488',
          light: '#5eead4',
        },
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.1)'
      },
      borderRadius: {
        xl: '1rem',
      }
    },
  },
  plugins: [],
}
