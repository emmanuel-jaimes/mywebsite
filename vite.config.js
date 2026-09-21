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
  },
  animation: {
    'drift-x': 'drift-x 12s ease-in-out infinite',
  },
},
  },

})
