import ButtonComponent from './Button.vue'
import { withInstall } from '@hi-kits/utils'
import type { Plugin } from 'vue'

const HiButton: typeof ButtonComponent & Plugin = withInstall(ButtonComponent)

export default HiButton
export * from './types'