import { defineConfig } from 'vitepress'
import { resolve } from 'path'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

export default defineConfig({
  title: 'Hi-Kits',
  description: '基于 Vue 3 的组件库',
  head: [
    ['script', { src: 'https://unpkg.com/ag-grid-community/dist/ag-grid-community.min.js' }],
  ],
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
          text: '组件',
          items: [
            { text: '概览', link: '/components/' },
            { text: 'Button 按钮', link: '/components/button' },
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
        '@hi-kits/styles': resolve(__dirname, '../../packages/styles'),
        '@hi-kits/utils': resolve(__dirname, '../../packages/utils'),
        '@hi-kits/hooks': resolve(__dirname, '../../packages/hooks')
      }
    },
    build: {
      rollupOptions: {
        external: ['ag-grid-community'],
        output: {
          globals: {
            'ag-grid-community': 'agGrid'
          }
        }
      }
    },
    server: {
      fs: {
        allow: [
          resolve(__dirname, '../../'),
          resolve(__dirname, '../../packages/hi-kits')
        ]
      },
      watch: {
        // 监听hi-kits构建产物变化，实现自动重载
        ignored: ['!**/packages/hi-kits/dist/**']
      }
    },
    optimizeDeps: {
      include: ['hi-kits'],
    },
    ssr: {
      noExternal: ['hi-kits'],
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