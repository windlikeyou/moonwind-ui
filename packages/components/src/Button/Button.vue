<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :type="nativeType"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps, ButtonEmits } from './types'
import { useNamespace } from '@hi-kits/hooks';

defineOptions({
  name: 'HiButton'
})

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'medium',
  nativeType: 'button',
  disabled: false,
  loading: false,
  round: false,
  circle: false
})

const emit = defineEmits<ButtonEmits>()
const {b,m,is}=useNamespace('button')

const buttonClasses = computed(() => [
  b(),
  m(props.type),
  m(props.size),
  
  is('disabled',props.disabled),
  is('loading',props.loading),
  {
    [m('round')]: props.round,
    [m('circle')]: props.circle
  }
])

const handleClick = (event: MouseEvent) => {
  if (props.disabled || props.loading) return
  emit('click', event)
}
</script>