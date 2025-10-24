import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        style: resolve(__dirname, 'src/index.scss')
      },
      name: 'HiKitsStyles',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css'
          return assetInfo.name as string
        }
      }
    },
    cssCodeSplit: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 移除 additionalData 以避免与 @use 规则冲突
      }
    }
  }
})