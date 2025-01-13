import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '', // Changed to an empty string for root deployment
  plugins: [react()],
})
