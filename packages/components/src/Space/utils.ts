import type { SpaceSize } from './types'
const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
}

export function getNumberSize(size: SpaceSize) {
    if (typeof size === 'string') {
        return spaceSize[size]
    }

    return size || 0
}
