import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep "ink" base + elevated surfaces
        ink: {
          DEFAULT: '#0A0E16',
          900: '#0A0E16',
          800: '#0E131D',
          700: '#121826',
          600: '#161D2B',
          500: '#1B2334',
        },
        line: '#232C3B',
        // Foreground text scale
        fg: '#E9ECF2',
        muted: '#9AA6B6',
        faint: '#5C6675',
        // Single signature accent — warm amber
        accent: {
          DEFAULT: '#F5B23E',
          400: '#F8C46A',
          500: '#F5B23E',
          600: '#E09A24',
        },
        // Cool secondary, used sparingly
        cool: '#54D6C4',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        kicker: '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        marquee: 'marquee 38s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
