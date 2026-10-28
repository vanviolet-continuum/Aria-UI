import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { IncomingMessage, ServerResponse } from 'node:http'
import { fileURLToPath, URL } from 'node:url'

const repositoryRoot = fileURLToPath(new URL('../', import.meta.url))

function demoHistory(request: IncomingMessage, response: ServerResponse, next: () => void) {
  const pathname = request.url?.split('?')[0] ?? ''
  if (!request.headers.accept?.includes('text/html')) return next()
  if (pathname === '/' || pathname === '/preview') {
    response.writeHead(302, { Location: '/preview/' })
    response.end()
    return
  }
  // Dot-case routes such as course.builder are pages; only known asset extensions are excluded.
  const assetExtension =
    /\.(?:html|css|[cm]?[jt]sx?|json|svg|png|jpe?g|gif|webp|ico|woff2?|ttf|map|md)$/i
  if (pathname.startsWith('/preview/') && !assetExtension.test(pathname.split('/').at(-1) ?? '')) {
    request.url = '/preview/index.html'
  }
  next()
}

// Keep the repository root so the demo can consume the portable kit directly.
export default defineConfig({
  root: repositoryRoot,
  envDir: fileURLToPath(new URL('./', import.meta.url)),
  cacheDir: fileURLToPath(new URL('../node_modules/.vite-demo', import.meta.url)),
  optimizeDeps: { entries: ['preview/index.html'] },
  resolve: { alias: { '@templates': fileURLToPath(new URL('../templates', import.meta.url)) } },
  server: { host: '127.0.0.1', port: 5174, open: '/preview/' },
  preview: { host: '127.0.0.1', port: 4174, open: '/preview/' },
  build: {
    outDir: fileURLToPath(new URL('./dist', import.meta.url)),
    rollupOptions: {
      input: fileURLToPath(new URL('./index.html', import.meta.url)),
      output: {
        manualChunks(id) {
          if (id.includes('/node_modules/@fullcalendar/')) return 'calendar-vendor'
          if (id.includes('/node_modules/@radix-ui/')) return 'radix-vendor'
          if (/\/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react-vendor'
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'aria-teams-history',
      configureServer(server) {
        server.middlewares.use(demoHistory)
      },
      configurePreviewServer(server) {
        server.middlewares.use(demoHistory)
      },
    },
  ],
})
