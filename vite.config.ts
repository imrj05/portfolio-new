import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactOgImage from 'vite-plugin-react-og-image'

const siteUrl = 'https://rajeshwar.tech'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactOgImage({
      host: siteUrl,
      alt: 'Rajeshwar Kashyap — Full-Stack Developer portfolio',
    }),
  ],
})
