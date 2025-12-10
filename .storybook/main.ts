import type { StorybookConfig } from '@storybook/vue3-vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-controls'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  viteFinal: async (cfg, { configType }) => {
    if (configType === 'PRODUCTION') {
      cfg.base = '/moonwind-ui/storybook/'
    } else {
      cfg.base = '/'
    }
    cfg.resolve = cfg.resolve || {}
    cfg.resolve.alias = {
      ...(cfg.resolve.alias || {}),
      '@moonwind-ui/styles': resolve(__dirname, '../packages/styles/src/index.ts'),
      '@moonwind-ui/utils': resolve(__dirname, '../packages/utils/src/index.ts'),
      '@moonwind-ui/hooks': resolve(__dirname, '../packages/hooks/src/index.ts'),
      '@moonwind-ui/components': resolve(__dirname, '../packages/components/src/index.ts'),
      'moonwind-ui': resolve(__dirname, '../packages/moonwind-ui/src/index.ts')
    }
    cfg.plugins = [...(cfg.plugins || []), vue()]
    return cfg
  }
}

export default config
