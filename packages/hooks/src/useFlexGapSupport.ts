import { onMounted, ref } from "vue"
import {detectFlexGapSupported} from '@moonwind-ui/utils'

export const useFlexGapSupport = () => {
  const flexible = ref(false)
  
  onMounted(() => {
    flexible.value = detectFlexGapSupported()
  })

  return flexible
}