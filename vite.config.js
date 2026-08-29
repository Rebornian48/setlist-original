import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/setlist-ori/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: false,
  },
})
