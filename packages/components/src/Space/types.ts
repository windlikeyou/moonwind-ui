import type { CSSProperties, HTMLAttributes, VNode } from "vue"

type SpaceType = 'small' | 'middle' | 'large' | undefined
export type SpaceSize = SpaceType | number

export interface SpaceProps {
    class?: string
    style?: CSSProperties
    size?: SpaceSize | [SpaceSize, SpaceSize]
    direction?: 'horizontal' | 'vertical'
    align?: 'start' | 'end' | 'center' | 'baseline'
    split?: VNode | string
    wrap?: boolean
}
