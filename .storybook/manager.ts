import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'light',
  brandTitle: 'Hi-Kits',
  brandUrl: 'https://github.com/hi-kits/hi-kits',
  brandImage: undefined,
  brandTarget: '_self',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e1e5e9',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode: 'Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#1ea7fd',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e1e5e9',
  inputTextColor: '#333333',
  inputBorderRadius: 4,

  colorPrimary: '#1ea7fd',
  colorSecondary: '#585c6d'
})

addons.setConfig({
  theme,
  panelPosition: 'bottom',
  selectedPanel: 'storybook/controls/panel'
})