import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const config: StorybookConfig = {
  stories: [
    '../packages/hi-kits/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  typescript: {
    check: false
  },
  viteFinal: async (config) => {
    // 确保 Vue 插件存在
    const hasVuePlugin = config.plugins?.some(plugin => 
      plugin && typeof plugin === 'object' && 'name' in plugin && plugin.name === 'vite:vue'
    )
    
    if (!hasVuePlugin) {
      config.plugins = config.plugins || []
      config.plugins.push(vue())
    }

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': resolve(__dirname, '../packages/hi-kits/src'),
          'hi-kits': resolve(__dirname, '../packages/hi-kits/src/index.ts')
        }
      }
    }
  }
}

export default config