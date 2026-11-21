import react from '@vitejs/plugin-react'
import { qrcode } from 'vite-plugin-qrcode'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      qrcode({
          filter: url => url.startsWith('http://192'),
      })
  ],
    css: {
        modules: {
            localsConvention: 'camelCaseOnly'
        }
    }
})
