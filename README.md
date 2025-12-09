# Moonwind UI

<p align="center">
  <img src="./docs/public/logo.svg" width="200" alt="Moonwind UI Logo" />
</p>

<p align="center">
  一个基于 Vue 3 和 TypeScript 构建的现代化组件库。
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/moonwind-ui"><img src="https://img.shields.io/npm/v/moonwind-ui.svg" alt="npm package"></a>
  <a href="https://github.com/windlikeyou/moonwind-ui/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/moonwind-ui.svg" alt="License"></a>
</p>

## ✨ 特性

- 🌈 **精美设计**：遵循现代设计规范，提供一致的视觉体验。
- 📦 **开箱即用**：提供丰富的高质量组件，满足常见业务需求。
- 🛡️ **类型安全**：使用 TypeScript 编写，提供完整的类型定义文件。
- ⚡ **按需加载**：支持 Tree Shaking，有效减小包体积。
- 🌍 **国际化**：内置多语言支持。
- 🎨 **主题定制**：支持灵活的样式定制。

## 📦 安装

推荐使用包管理器进行安装：

### npm
```bash
npm install moonwind-ui
```

### pnpm
```bash
pnpm add moonwind-ui
```

### yarn
```bash
yarn add moonwind-ui
```

## 🔨 快速开始

在你的 Vue 应用入口文件（通常是 `main.ts` 或 `main.js`）中引入并注册：

```typescript
import { createApp } from 'vue'
import App from './App.vue'

// 引入组件库
import MoonwindUI from 'moonwind-ui'
// 引入样式
import 'moonwind-ui/dist/style.css'

const app = createApp(App)

// 注册组件库
app.use(MoonwindUI)

app.mount('#app')
```

## 📚 文档

访问 [在线文档](https://windlikeyou.github.io/moonwind-ui/) 查看完整的组件文档和示例。

访问 [Storybook](https://windlikeyou.github.io/moonwind-ui/storybook/) 查看组件的交互式示例。

## 🤝 贡献

欢迎参与贡献！请查阅 [贡献指南](./DEVELOPMENT.md) 了解更多信息。

## 📄 许可证

本项目采用 [MIT](./LICENSE) 许可证。

