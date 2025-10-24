import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom'
  },
  resolve: {
    alias: {
      '@hi-kits': resolve(__dirname, 'packages'),
      'hi-kits': resolve(__dirname, 'packages/hi-kits/src')
    }
  }
})