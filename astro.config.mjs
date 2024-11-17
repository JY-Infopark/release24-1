import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    AstroPWA({
      manifest: {
        name: 'Jesus Youth Infopark',
        short_name: 'JY Infopark',
        description: 'Jesus Youth Infopark Community',
        theme_color: '#4361ee',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  site: 'https://jesusyouth.org'
});