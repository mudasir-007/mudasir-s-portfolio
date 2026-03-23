/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary:  '#00ff88',
        dark:     '#0a0a0a',
        darker:   '#050505',
        card:     '#111111',
        border:   '#1f1f1f',
        muted:    '#666666',
        light:    '#cccccc',
      },
      animation: {
        'fade-up':     'fadeUp 0.6s ease forwards',
        'fade-in':     'fadeIn 0.5s ease forwards',
        'float':       'float 3s ease-in-out infinite',
        'glow':        'glow 2s ease-in-out infinite alternate',
        'spin-slow':   'spin 8s linear infinite',
        'pulse-slow':  'pulse 3s ease-in-out infinite',
        'slide-left':  'slideLeft 0.5s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
      },
      keyframes: {
        fadeUp:    { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:    { from: { opacity: 0 }, to: { opacity: 1 } },
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        glow:      { from: { textShadow: '0 0 10px #00ff88, 0 0 20px #00ff88' }, to: { textShadow: '0 0 20px #00ff88, 0 0 40px #00ff88, 0 0 60px #00ff88' } },
        slideLeft: { from: { opacity: 0, transform: 'translateX(-30px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        slideRight:{ from: { opacity: 0, transform: 'translateX(30px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
      },
    },
  },
  plugins: [],
}
