import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   '#0a0a0f',
          secondary: '#111118',
          card:      '#16161e',
          hover:     '#1e1e2a',
        },
        border: {
          DEFAULT: '#2a2a3a',
          subtle:  '#1e1e28',
        },
        accent: {
          DEFAULT: '#6366f1',
          hover:   '#818cf8',
          muted:   'rgba(99,102,241,0.12)',
        },
        text: {
          primary:   '#f1f5f9',
          secondary: '#94a3b8',
        },
        category: {
          infrastructure: '#6366f1',
          networking:     '#06b6d4',
          storage:        '#f59e0b',
          kubernetes:     '#22c55e',
          cicd:           '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in':       'fadeIn 0.3s ease-out',
        'slide-up':      'slideUp 0.3s ease-out',
        'shimmer':       'shimmer 1.5s infinite',
        'pulse-slow':    'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':         'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:   { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp:  { from: { transform: 'translateY(20px)', opacity: '0' },
                    to:   { transform: 'translateY(0)', opacity: '1' } },
        shimmer:  { '0%':   { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' } },
        float:    { '0%,100%': { transform: 'translateY(0)' },
                    '50%':     { transform: 'translateY(-10px)' } },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
      },
      boxShadow: {
        'glow-accent':  '0 0 20px rgba(99,102,241,0.3)',
        'glow-success': '0 0 20px rgba(34,197,94,0.2)',
        'card':         '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover':   '0 8px 40px rgba(0,0,0,0.6)',
      },
    },
  },
} satisfies Config