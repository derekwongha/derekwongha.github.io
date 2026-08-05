import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDirectory = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDirectory, 'index.html'),
        tastelocal: resolve(rootDirectory, 'projects/tastelocal/index.html'),
        smartshop: resolve(rootDirectory, 'projects/smartshop/index.html'),
        hopehands: resolve(rootDirectory, 'projects/hopehands/index.html'),
      },
    },
  },
})
