import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'MercadoLocal QR',
        short_name: 'MercadoLocal',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0d6efd',
        icons: [{ src: 'icon-192.png', sizes: '192x192', type: 'image/png' }]
      },
      workbox: { globPatterns: ['**/*.{js,css,html,json,png}'] }
    })
  ]
})
