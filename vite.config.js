import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages project-site path. Change this if your repository has another name.
  base: '/mohit-portfolio/',
  plugins: [react()],
})
