import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Ensures React Router client-side routes work on direct URL access / refresh
    historyApiFallback: true,
  },
})
