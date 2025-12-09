import SpaceComponent from './Space.vue'
import { withInstall } from '@moonwind-ui/utils'
import type { Plugin } from 'vue'
import type {SpaceProps, SpaceSize} from './types'

const MSpace:typeof SpaceComponent & Plugin = withInstall(SpaceComponent)

export {
    MSpace,
    type SpaceProps,
    type SpaceSize,
}

export default MSpace
