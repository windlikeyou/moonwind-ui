import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@moonwind-ui/components': resolve(__dirname, '../packages/components/src'),
      '@moonwind-ui/hooks': resolve(__dirname, '../packages/hooks/src'),
      '@moonwind-ui/utils': resolve(__dirname, '../packages/utils/src'),
      '@moonwind-ui/styles': resolve(__dirname, '../packages/styles/src'),
      '@moonwind-ui/icons': resolve(__dirname, '../packages/icons/src/index.ts'),
      'moonwind-ui': resolve(__dirname, '../packages/moonwind-ui/src/index.ts'),
      '@': resolve(__dirname, '../packages/components/src')
    }
  }
})
