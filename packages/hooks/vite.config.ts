import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.build.json',
      outDir: 'dist',
      entryRoot: 'src'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MoonwindHooks',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['vue', '@moonwind-ui/utils'],
      output: {
        globals: {
          vue: 'Vue',
          '@moonwind-ui/utils': 'MoonwindUiUtils'
        }
      }
    }
  }
})
