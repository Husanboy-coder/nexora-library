import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nexora-library/',
  server: {
    port: 3000,
    open: false,
  },
  build: {
    chunkSizeWarningLimit: 1000,
  }
})
