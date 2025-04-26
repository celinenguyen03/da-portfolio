import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Base path for GitHub Pages - replace 'repo-name' with your actual repository name
  // Comment this out for local development if needed
  base: '/da-portfolio/',
})
