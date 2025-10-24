# Hi-Kits 开发文档

## 项目概述

Hi-Kits 是一个基于 Vue 3 + TypeScript 的现代化组件库，采用 monorepo 架构，使用 pnpm 进行包管理。

## 项目结构

```
hi-kits/
├── packages/
│   └── hi-kits/              # 组件库核心包
│       ├── src/
│       │   ├── components/   # 组件源码
│       │   │   └── Button/   # Button 组件
│       │   ├── styles/       # 样式文件
│       │   ├── types/        # 类型定义
│       │   ├── index.ts      # 主入口
│       │   └── style.ts      # 样式入口
│       ├── dist/             # 构建产物
│       ├── package.json
│       ├── tsconfig.json
│       └── vite.config.ts
├── docs/                     # VitePress 文档站点
│   ├── .vitepress/
│   │   ├── config.ts         # VitePress 配置
│   │   └── theme/            # 自定义主题
│   ├── components/           # 组件文档
│   ├── guide/                # 指南文档
│   └── index.md              # 首页
├── example/                  # 使用示例
├── .changeset/               # 版本管理
├── package.json              # 根配置
├── pnpm-workspace.yaml       # workspace 配置
└── README.md
```

## 开发命令

### 安装依赖
```bash
pnpm install
```

### 开发模式
```bash
# 启动文档站点
pnpm dev

# 或者在 docs 目录下
cd docs && pnpm dev
```

### 构建
```bash
# 构建组件库
pnpm build

# 构建文档
pnpm build:docs

# 构建所有
pnpm build && pnpm build:docs
```

### 测试
```bash
# 运行测试
pnpm test

# 测试覆盖率
pnpm test:coverage
```

### 代码检查
```bash
# ESLint 检查
pnpm lint

# 类型检查
pnpm type-check
```

## 组件开发

### 创建新组件

1. 在 `packages/hi-kits/src/components/` 下创建组件目录
2. 创建组件文件：
   - `ComponentName.vue` - 组件实现
   - `types.ts` - 类型定义
   - `index.ts` - 导出文件

3. 在 `packages/hi-kits/src/components/index.ts` 中导出新组件

### 组件规范

- 使用 Vue 3 Composition API (`<script setup>`)
- 完整的 TypeScript 类型定义
- 统一的命名规范（HkComponentName）
- 完善的 Props 和 Events 定义
- Scoped 样式

### 样式规范

- 使用 CSS 变量进行主题定制
- 遵循 BEM 命名规范
- 响应式设计
- 无障碍访问支持

## 文档编写

### 组件文档结构

```markdown
# 组件名称

组件描述

## 基础用法

基础示例和代码

## API

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |

### Events
| 事件名 | 说明 | 回调参数 |

### Slots
| 插槽名 | 说明 |
```

## 发布流程

### 版本管理

使用 Changesets 进行版本管理：

```bash
# 添加变更记录
pnpm changeset

# 生成版本和更新日志
pnpm changeset version

# 发布到 npm
pnpm changeset publish
```

### 发布检查清单

- [ ] 所有测试通过
- [ ] 代码检查通过
- [ ] 文档更新完整
- [ ] 构建产物正确
- [ ] 版本号符合语义化规范

## 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速的构建工具
- **VitePress** - 静态站点生成器
- **pnpm** - 快速、节省磁盘空间的包管理器
- **ESLint** - 代码质量检查
- **Vitest** - 单元测试框架
- **Changesets** - 版本管理工具

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交代码
4. 创建 Pull Request

## 常见问题

### 构建失败

检查 TypeScript 类型错误和依赖版本兼容性。

### 文档站点无法启动

确保组件库已构建，检查路径别名配置。

### 样式不生效

检查样式导入路径和 CSS 变量定义。

## 联系方式

如有问题，请提交 Issue 或联系维护团队。