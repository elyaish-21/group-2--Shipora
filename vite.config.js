import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'group-2--Shipora', // 👈 this must match your repo name exactly
})

