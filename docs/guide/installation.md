# 安装

## 环境要求

- Node.js 16+
- Vue 3.3+

## 包管理器安装

### npm

```bash
npm install hi-kits
```

### yarn

```bash
yarn add hi-kits
```

### pnpm

```bash
pnpm add hi-kits
```

## CDN 引入

你可以通过 CDN 的方式引入 Hi-Kits，适合快速原型开发。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/hi-kits/dist/style.css">

<!-- 引入 Vue 3 -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!-- 引入 Hi-Kits -->
<script src="https://unpkg.com/hi-kits/dist/hi-kits.umd.cjs"></script>
```

## 版本说明

Hi-Kits 遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范。

- **主版本号**: 不兼容的 API 修改
- **次版本号**: 向下兼容的功能性新增
- **修订号**: 向下兼容的问题修正

建议在生产环境中锁定版本号，避免因版本更新导致的意外问题。