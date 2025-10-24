import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import HiKits from '../packages/hi-kits/src/index'
import '../packages/hi-kits/dist/style.css'

// 设置 Vue 应用
setup((app) => {
  // 这里可以添加全局插件、指令等
  app.use(HiKits)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      extractComponentDescription: (_: any, { notes }: {notes: any}) => {
        if (notes) {
          return typeof notes === 'string' ? notes : notes.markdown || notes.text
        }
        return null
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff'
        },
        {
          name: 'dark',
          value: '#333333'
        },
        {
          name: 'gray',
          value: '#f5f5f5'
        }
      ]
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1200px',
            height: '800px'
          }
        }
      }
    }
  }
}

export default preview