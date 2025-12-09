import type { Preview } from '@storybook/vue3'
import '@moonwind-ui/styles'

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    layout: 'centered'
  }
}

export default preview
