import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist',
      entryRoot: 'src',
      cleanVueFileName: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MoonwindComponents',
      fileName: (format) => `index.${format === 'es' ? 'js' : format}`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})