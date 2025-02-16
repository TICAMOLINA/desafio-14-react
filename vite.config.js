import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// https://vite.dev/config/shared-options.html#css-devsourcemap
export default defineConfig({
  plugins: [react()],
  css: { 
    devSourcemap: true 
  }
})
