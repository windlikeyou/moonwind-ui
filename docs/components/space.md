# Space 间距

设置组件之间的间距。

## 基础用法

最基础的用法，通过 `MSpace` 组件包裹需要设置间距的元素。

<preview path="./demos/space/basic.vue" title="基础用法" description="最简单的用法。"></preview>

## 垂直间距

通过 `direction` 属性可以设置垂直方向的间距。

<preview path="./demos/space/vertical.vue" title="垂直间距" description="设置 direction 为 vertical。"></preview>

## 间距大小

通过 `size` 属性控制间距大小，支持 `small` | `middle` | `large` 以及自定义数值。

<preview path="./demos/space/size.vue" title="间距大小" description="size 属性控制间距大小。"></preview>

## 对齐方式

通过 `align` 属性设置对齐方式。

<preview path="./demos/space/align.vue" title="对齐方式" description="align 属性控制对齐方式。"></preview>

## 自动换行

通过 `wrap` 属性设置是否自动换行。

<preview path="./demos/space/wrap.vue" title="自动换行" description="wrap 属性控制是否自动换行。"></preview>

## 分隔符

通过 `split` 属性设置分隔符。

<preview path="./demos/space/split.vue" title="分隔符" description="split 属性设置分隔符。"></preview>

## API

### Space Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 对齐方式 | `'start' \| 'end' \| 'center' \| 'baseline'` | - |
| direction | 间距方向 | `'vertical' \| 'horizontal'` | `'horizontal'` |
| size | 间距大小 | `'small' \| 'middle' \| 'large' \| number \| [number, number]` | `'small'` |
| split | 分隔符 | `VNode \| string` | - |
| wrap | 是否自动换行 | `boolean` | `false` |
| fill | 是否占满容器 | `boolean` | `false` |
| fillRatio | 填充比例 | `number` | `100` |

### Space Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 内容 |
