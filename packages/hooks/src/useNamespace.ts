const CONFIG_KEY = Symbol('hk-config')

export interface HiKitsConfig {
  namespace?: string
}

export const provideHiKitsConfig = (config: HiKitsConfig) => {
  // typically called in plugin install, but also export for manual use
  (globalThis as any)[CONFIG_KEY] = config
}

export const useNamespace = (block: string) => {
  const ns = ((globalThis as any)[CONFIG_KEY]?.namespace) || 'hi'
  const b = () => `${ns}-${block}`
  const e = (el: string) => `${ns}-${block}__${el}`
  const m = (mod: string) => `${ns}-${block}--${mod}`
  const is = (name: string, state: boolean) => (state ? `${ns}-${block}--is-${name}` : '')
  return { ns, b, e, m, is }
}