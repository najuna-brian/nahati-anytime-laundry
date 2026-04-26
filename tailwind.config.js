/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#2dd4bf',
          dark: '#14b8a6',
          light: '#5eead4',
          muted: 'rgba(45, 212, 191, 0.15)',
        },
        ink: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
        },
        surface: {
          DEFAULT: '#f1f5f9',
          elevated: '#ffffff',
        },
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.1)',
        glow: '0 0 0 1px rgba(45, 212, 191, 0.12), 0 24px 48px -12px rgba(15, 23, 42, 0.18)',
        'glow-sm': '0 0 0 1px rgba(45, 212, 191, 0.1), 0 12px 32px -8px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(45, 212, 191, 0.25), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(56, 189, 248, 0.12), transparent)',
      },
    },
  },
  plugins: [],
}
