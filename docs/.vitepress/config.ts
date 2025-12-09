import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

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
        '@moonwind-ui/styles': resolve(__dirname, '../../packages/styles/src'),
        '@moonwind-ui/utils': resolve(__dirname, '../../packages/utils'),
        '@moonwind-ui/hooks': resolve(__dirname, '../../packages/hooks'),
        '@moonwind-ui/components': resolve(__dirname, '../../packages/components/src'),
        'moonwind-ui': resolve(__dirname, '../../packages/moonwind-ui/src')
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
      include: ['moonwind-ui'],
    },
    ssr: {
      noExternal: ['moonwind-ui'],
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