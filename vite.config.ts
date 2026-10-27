import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  cacheDir: 'node_modules/.vite-starter',
  optimizeDeps: { entries: ['index.html'] },
  server: { host: '127.0.0.1', port: 5173 },
  preview: { host: '127.0.0.1', port: 4173 },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/@fullcalendar/')) return 'calendar-vendor'
          if (id.includes('/node_modules/@radix-ui/')) return 'radix-vendor'
          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react-vendor'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@templates': fileURLToPath(new URL('./templates', import.meta.url)),
    },
  },
})
