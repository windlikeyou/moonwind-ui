import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { createRequire } from 'module'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

export default defineConfig({
  title: 'Moonwind-UI',
  description: '基于 Vue 3 的组件库',
  base: '/moonwind-ui/',
  head: [],
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
      ],
      '/components/': [
        {
          text: '布局组件',
          items: [
            { text: 'Space 间距', link: '/components/space' }
          ]
        },
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'DataGrid 数据表格', link: '/components/data-grid' }
          ]
        }
      ]
    }
  },

  vite: {
    resolve: {
      preserveSymlinks: true,
      alias: {
        '@': resolve(__dirname, '../components/demos'),
        '@moonwind-ui/styles': resolve(__dirname, '../../packages/styles/src/index.ts'),
        '@moonwind-ui/utils': resolve(__dirname, '../../packages/utils/src/index.ts'),
        '@moonwind-ui/hooks': resolve(__dirname, '../../packages/hooks/src/index.ts'),
        '@moonwind-ui/components': resolve(__dirname, '../../packages/components/src/index.ts'),
        'moonwind-ui': resolve(__dirname, '../../packages/moonwind-ui/src/index.ts'),
        'sortablejs': require.resolve('sortablejs/modular/sortable.esm.js'),
        'vuedraggable': require.resolve('vuedraggable/src/vuedraggable.js')
      }
    },
    build: {
      rollupOptions: {
        external: [],
        output: {
          globals: {}
        }
      }
    },
    server: {
      fs: {
        allow: [
          resolve(__dirname, '../../'),
          resolve(__dirname, '../../packages/moonwind-ui')
        ]
      },
      watch: {
        // 监听moonwind-ui构建产物变化，实现自动重载
        ignored: ['!**/packages/moonwind-ui/dist/**']
      }
    },
    optimizeDeps: {
      include: ['moonwind-ui', 'vuedraggable', 'sortablejs', '@vitepress-demo-preview/component'],
    },
    ssr: {
      noExternal: ['moonwind-ui', 'vuedraggable', 'sortablejs', '@vitepress-demo-preview/component', '@vitepress-demo-preview/plugin', 'floating-vue', 'vue-sonner'],
    }
  },

  markdown: {
    config: (md) => {
      md.use(componentPreview, {
        clientOnly: true,
        alias: {
          '@': resolve(__dirname, '../components/demos')
        }
      })
      md.use(containerPreview, {
        clientOnly: true,
        alias: {
          '@': resolve(__dirname, '../components/demos')
        }
      })
    }
  }
})