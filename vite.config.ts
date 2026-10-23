import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { headMetadata } from './scripts/metadata.mjs'

export default defineConfig({
  plugins: [react(), {
    name: 'portfolio-metadata',
    transformIndexHtml: html => html.replace('<!--portfolio-metadata-->', headMetadata()),
  }],
})
