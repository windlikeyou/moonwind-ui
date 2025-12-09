import { defineConfig, type PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()] as PluginOption[],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        style: resolve(__dirname, 'src/style.ts')
      },
      name: 'MoonwindUi',
      fileName: (format, entryName) => {
        if (entryName === 'style') {
          return `style.${format === 'es' ? 'js' : format === 'umd' ? 'umd.cjs' : format}`
        }

        return `index.${format === 'es' ? 'js' : format === 'umd' ? 'umd.cjs' : format}`
      }
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        // 确保样式文件被正确输出
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css'
          return assetInfo.name!
        }
      }
    },
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})