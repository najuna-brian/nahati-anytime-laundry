import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

/**
 * Site is hosted at the domain root (e.g. Namecheap → nahatilaundry.online / www).
 * For GitHub Pages under a subfolder only, set base to that folder, e.g. `/repo-name/`.
 */
const BASE = '/'

/**
 * Canonical host for meta tags, Open Graph, and JSON-LD (no trailing slash).
 * Apex currently redirects to www in Namecheap — default www + HTTPS.
 * Override per environment: `VITE_SITE_ORIGIN=https://nahatilaundry.online npm run build`
 */
const SITE_ORIGIN = (process.env.VITE_SITE_ORIGIN || 'https://www.nahatilaundry.online').replace(/\/$/, '')

const CANONICAL = `${SITE_ORIGIN}/`
const OG_IMAGE = `${SITE_ORIGIN}/android-chrome-512x512.png`

function htmlMetaInject() {
  return {
    name: 'nahati-html-meta',
    transformIndexHtml(html) {
      return html
        .replaceAll('__CANONICAL__', CANONICAL)
        .replaceAll('__OG_IMAGE__', OG_IMAGE)
        .replaceAll('__JSONLD_IMAGE__', OG_IMAGE)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE,
  plugins: [
    htmlMetaInject(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'android-chrome-192x192.png', 'android-chrome-512x512.png'],
      manifest: {
        name: 'Nahati Anytime Laundry',
        short_name: 'Nahati Laundry',
        description: '24/7 professional laundry pickup and delivery in Kampala. Fast, reliable garment care.',
        theme_color: '#0f172a',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: BASE,
        start_url: BASE,
        icons: [
          { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
        ],
      },
      workbox: {
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'CacheFirst',
            options: { cacheName: 'images-cache', expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 * 24 * 30 } },
          },
          {
            urlPattern: ({ url, request }) =>
              request.mode === 'navigate' ||
              (url.pathname.startsWith('/assets/') && url.origin === self.location.origin),
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'app-cache' },
          },
        ],
      },
    }),
  ],
})
