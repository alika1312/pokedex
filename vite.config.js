/* eslint-disable no-undef */
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import  path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/pokedex/',
  resolve: {
    alias:{
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './lib'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  }
  
})
