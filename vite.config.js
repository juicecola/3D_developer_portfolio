import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all available network interfaces
    port: process.env.PORT || 3000, // Use the PORT environment variable or default to 3000
  },
})

