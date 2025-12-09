import type { InjectionKey } from "vue";

export type DirectionType = 'ltr' | 'rtl' | undefined;

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export interface ConfigConsumerProps {
  direction?: DirectionType;
  space?: {
    size?: SizeType | number;
  }
}

export const SPACE_CONFIG_INJECTION_KEY: InjectionKey<ConfigConsumerProps> = Symbol('SPACE_CONFIG_INJECTION_KEY');