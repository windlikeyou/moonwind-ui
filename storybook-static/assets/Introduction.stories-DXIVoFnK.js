const p={title:"Introduction",parameters:{layout:"fullscreen",docs:{page:()=>`
        <div style="padding: 40px; font-family: 'Inter', sans-serif;">
          <h1 style="color: #1ea7fd; margin-bottom: 24px;">Hi-Kits 组件库</h1>
          <p style="font-size: 18px; line-height: 1.6; margin-bottom: 32px;">
            欢迎使用 Hi-Kits 组件库！这是一个基于 Vue 3 和 TypeScript 构建的现代化组件库。
          </p>
          
          <h2 style="color: #333; margin: 32px 0 16px 0;">🚀 特性</h2>
          <ul style="line-height: 1.8; margin-bottom: 32px;">
            <li><strong>Vue 3 + TypeScript</strong>: 完全基于 Vue 3 Composition API 和 TypeScript 开发</li>
            <li><strong>现代化构建</strong>: 使用 Vite 进行快速构建和开发</li>
            <li><strong>完整的类型支持</strong>: 提供完整的 TypeScript 类型定义</li>
            <li><strong>可定制主题</strong>: 支持主题定制和样式覆盖</li>
            <li><strong>文档完善</strong>: 提供详细的文档和示例</li>
            <li><strong>测试覆盖</strong>: 包含完整的单元测试</li>
          </ul>

          <h2 style="color: #333; margin: 32px 0 16px 0;">📦 安装</h2>
          <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 32px;">
# 使用 npm
npm install hi-kits

# 使用 yarn  
yarn add hi-kits

# 使用 pnpm
pnpm add hi-kits
          </pre>

          <h2 style="color: #333; margin: 32px 0 16px 0;">🔧 使用方式</h2>
          <h3 style="color: #666; margin: 24px 0 12px 0;">完整引入</h3>
          <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
import { createApp } from 'vue'
import HiKits from 'hi-kits'
import 'hi-kits/dist/style.css'

const app = createApp(App)
app.use(HiKits)
app.mount('#app')
          </pre>

          <h3 style="color: #666; margin: 24px 0 12px 0;">按需引入</h3>
          <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 32px;">
import { HkButton } from 'hi-kits'
import 'hi-kits/dist/style.css'
          </pre>

          <h2 style="color: #333; margin: 32px 0 16px 0;">🎨 组件预览</h2>
          <p style="line-height: 1.6; margin-bottom: 32px;">
            在左侧导航栏中选择不同的组件来查看它们的使用方式和效果。每个组件都提供了：
          </p>
          <ul style="line-height: 1.8; margin-bottom: 32px;">
            <li><strong>基础用法</strong>: 展示组件的基本使用方式</li>
            <li><strong>属性配置</strong>: 通过控制面板调整组件属性</li>
            <li><strong>不同状态</strong>: 展示组件在不同状态下的表现</li>
            <li><strong>代码示例</strong>: 提供完整的代码示例</li>
          </ul>

          <p style="font-size: 18px; color: #1ea7fd; text-align: center; margin-top: 48px;">
            开始探索 Hi-Kits 组件库吧！🎉
          </p>
        </div>
      `}}},t={};var i,r,o;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const s=["Welcome"];export{t as Welcome,s as __namedExportsOrder,p as default};
