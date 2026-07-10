import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        salem: {
          purple: '#93328f',
          dark: '#6e2469',
          darker: '#4a1847',
          deep: '#2a0d28',
          light: '#b44db0',
          bg: '#0e0010',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#e4c060',
          dark: '#9a7a1c',
        },
      },
      fontFamily: {
        display: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-lato)', 'sans-serif'],
      },
      keyframes: {
        orb1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-30px, 40px)' },
        },
        orb2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -30px)' },
        },
        orb3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-20px, 20px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'orb-1': 'orb1 9s ease-in-out infinite',
        'orb-2': 'orb2 12s ease-in-out infinite',
        'orb-3': 'orb3 7s ease-in-out infinite',
        blink: 'blink 1.4s ease infinite',
        'fade-up': 'fadeUp 0.9s ease both',
        'fade-up-d1': 'fadeUp 0.9s 0.15s ease both',
        'fade-up-d2': 'fadeUp 0.9s 0.3s ease both',
      },
      screens: {
        xs: '375px',
      },
    },
  },
  plugins: [],
}

export default config
