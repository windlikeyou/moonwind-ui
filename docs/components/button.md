# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

<preview path="./demos/button-basic.vue" title="基础用法" description="使用 type 属性来定义 Button 的样式。"></preview>

## 禁用状态

按钮不可用状态。

<preview path="./demos/button-disabled.vue" title="禁用状态" description="你可以使用 disabled 属性来定义按钮是否可用，它接受一个 Boolean 值。"></preview>

## 加载状态

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<preview path="./demos/button-loading.vue" title="加载状态" description="要设置为 loading 状态，只要设置 loading 属性为 true 即可。"></preview>

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<preview path="./demos/button-size.vue" title="不同尺寸" description="额外的尺寸：large、medium、small，通过设置 size 属性来配置它们。"></preview>

## 圆角按钮

<preview path="./demos/button-round.vue" title="圆角按钮" description="使用 round 属性，它接受一个 Boolean 值。"></preview>

## 圆形按钮

<preview path="./demos/button-circle.vue" title="圆形按钮" description="使用 circle 属性，它接受一个 Boolean 值。"></preview>

## API

### Button Props

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 类型 | string | default / primary / success / warning / danger | default |
| size | 尺寸 | string | large / medium / small | medium |
| disabled | 是否禁用状态 | boolean | — | false |
| loading | 是否加载中状态 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| circle | 是否圆形按钮 | boolean | — | false |
| native-type | 原生 type 属性 | string | button / submit / reset | button |

### Button Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | (event: MouseEvent) |

### Button Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 按钮内容 |