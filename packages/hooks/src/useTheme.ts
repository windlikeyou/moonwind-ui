import { ref, onMounted } from 'vue'

export type ThemeName = 'light' | 'dark'

const currentTheme = ref<ThemeName>('light')

export const useTheme = () => {
  const setTheme = (t: ThemeName) => {
    currentTheme.value = t
    const root = document.documentElement
    root.setAttribute('data-theme', t)
  }
  onMounted(() => {
    const root = document.documentElement
    const t = (root.getAttribute('data-theme') as ThemeName) || 'light'
    currentTheme.value = t
  })
  return { theme: currentTheme, setTheme }
}