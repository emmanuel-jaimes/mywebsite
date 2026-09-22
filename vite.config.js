import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],

  theme: {
    extend: {
      keyframes: {
        'drift-x': {
          '0%, 100%': {transform: 'translateX(calc(var(--drift, 20vw) * -1))'},
          '50%': {transform: 'translateX(var(--drift, 20vw))'},
        },
        'drift-y': {
          '0%, 100%': {transform: 'translateY(calc(var(--drift, 20vh) * -1))'},
          '50%': {transform: 'translateY(var(--drift, 20vh))'},
        },
  },
  animation: {
    'drift-x': 'drift-x 6s ease-in-out infinite',
    'drift-y': 'drift-y 6s ease-in-out infinite',
  },
},
  },

})
