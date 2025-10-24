# 快速开始

本节将介绍如何在项目中使用 Hi-Kits。

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import HiKits from 'hi-kits'
import 'hi-kits/dist/style.css'

import App from './App.vue'

const app = createApp(App)

app.use(HiKits)
app.mount('#app')
```

## 按需引入

Hi-Kits 支持基于 ES modules 的 tree shaking，按需引入可以有效减少打包体积。

```vue
<template>
  <hk-button type="primary" @click="handleClick">
    点击我
  </hk-button>
</template>

<script setup lang="ts">
import { HkButton } from 'hi-kits'
import 'hi-kits/dist/style.css'

const handleClick = () => {
  console.log('按钮被点击了！')
}
</script>
```

## 手动引入

你也可以手动引入需要的组件。

```vue
<template>
  <hk-button type="primary">主要按钮</hk-button>
</template>

<script setup lang="ts">
import { HkButton } from 'hi-kits'

// 如果你只想引入特定组件的样式
// import 'hi-kits/dist/components/button/style.css'
</script>
```

## 全局配置

在引入 Hi-Kits 时，可以传入一个全局配置对象。

```typescript
import { createApp } from 'vue'
import HiKits from 'hi-kits'

const app = createApp(App)

app.use(HiKits, {
  // 全局配置
  size: 'large', // 设置组件默认尺寸
  zIndex: 2000,  // 设置弹出层的初始 z-index
})
```

## 开始使用

现在你可以启动你的项目了。如果你是使用 Vite 创建的项目：

```bash
npm run dev
```

如果一切正常，你应该能看到页面正常渲染。接下来就可以愉快地使用 Hi-Kits 开发你的应用了！

## 下一步

- [组件总览](/components/) - 查看所有可用组件
- [Button 组件](/components/button) - 了解按钮组件的使用方法