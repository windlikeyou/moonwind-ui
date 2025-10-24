# Hi-Kits

一个基于 Vue 3 + TypeScript 的现代化组件库。

## ✨ 特性

- 🚀 **现代化技术栈**: 基于 Vue 3 + TypeScript + Vite
- 📦 **开箱即用**: 丰富的组件库，满足大部分业务场景
- 🎨 **设计精美**: 精心设计的 UI，提供优秀的用户体验
- 📱 **响应式设计**: 完美适配各种设备尺寸
- 🔧 **高度可定制**: 灵活的主题配置系统
- 📖 **完善文档**: 详细的使用文档和示例
- 🌳 **Tree Shaking**: 支持按需导入，减少打包体积
- 💪 **TypeScript**: 完整的类型定义支持

## 📦 安装

```bash
# npm
npm install hi-kits

# yarn
yarn add hi-kits

# pnpm
pnpm add hi-kits
```

## 🚀 快速开始

### 完整引入

```typescript
import { createApp } from 'vue'
import HiKits from 'hi-kits'
import 'hi-kits/dist/style.css'

const app = createApp(App)
app.use(HiKits)
```

### 按需引入

```vue
<template>
  <hk-button type="primary">Hello Hi-Kits</hk-button>
</template>

<script setup>
import { HkButton } from 'hi-kits'
import 'hi-kits/dist/style.css'
</script>
```

## 📚 文档

访问 [在线文档](https://your-username.github.io/hi-kits) 查看完整的组件文档和示例。

## 🛠️ 本地开发

```bash
# 克隆项目
git clone https://github.com/your-username/hi-kits.git

# 安装依赖
pnpm install

# 启动文档站点
pnpm dev

# 构建组件库
pnpm build

# 构建文档
pnpm build:docs
```

## 📁 项目结构

```
hi-kits/
├── packages/
│   └── hi-kits/          # 组件库源码
│       ├── src/
│       │   ├── components/
│       │   ├── styles/
│       │   └── utils/
│       └── package.json
├── docs/                 # 文档站点
│   ├── .vitepress/
│   ├── components/
│   └── guide/
├── package.json
└── pnpm-workspace.yaml
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

[MIT](./LICENSE) © Hi-Kits

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！