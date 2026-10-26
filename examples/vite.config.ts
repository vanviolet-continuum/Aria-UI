import { mergeConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import base from '../vite.config'
import { demoApiPlugin } from './mocks/demo-api'

export default mergeConfig(base, {
  root: fileURLToPath(new URL('.', import.meta.url)),
  publicDir: false,
  cacheDir: fileURLToPath(new URL('../node_modules/.vite-examples', import.meta.url)),
  plugins: [demoApiPlugin()],
  server: { port: 5174, fs: { allow: [fileURLToPath(new URL('..', import.meta.url))] } },
  preview: { port: 4174 },
  build: { outDir: '../dist-examples', emptyOutDir: true },
  resolve: { alias: { '@examples': fileURLToPath(new URL('.', import.meta.url)) } },
})
