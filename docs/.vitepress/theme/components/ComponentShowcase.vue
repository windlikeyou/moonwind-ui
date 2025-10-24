<template>
  <div class="component-showcase">
    <div class="showcase-header">
      <h2 class="showcase-title">
        <span class="title-icon">✨</span>
        组件总览
      </h2>
      <p class="showcase-subtitle">
        探索我们精心设计的组件库，每个组件都经过精心优化
      </p>
    </div>

    <div class="showcase-stats">
      <div class="stat-item">
        <div class="stat-number">{{ componentCount }}</div>
        <div class="stat-label">组件数量</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">100%</div>
        <div class="stat-label">TypeScript</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">Vue 3</div>
        <div class="stat-label">技术栈</div>
      </div>
    </div>

    <div class="showcase-grid">
      <div 
        v-for="component in components" 
        :key="component.name"
        class="showcase-card"
        :class="{ 'coming-soon': component.comingSoon }"
        @click="handleCardClick(component)"
      >
        <div class="card-header">
          <div class="card-icon" :style="{ background: component.color }">
            {{ component.icon }}
          </div>
          <div class="card-info">
            <h3 class="card-title">{{ component.name }}</h3>
            <p class="card-description">{{ component.description }}</p>
          </div>
          <div class="card-status" v-if="component.comingSoon">
            <span class="status-badge">即将推出</span>
          </div>
        </div>

        <div class="card-demo" v-if="!component.comingSoon">
          <!-- Button 组件演示 -->
          <div v-if="component.name === 'Button 按钮'" class="button-demo">
            <HiButton type="primary" size="small">主要</HiButton>
            <HiButton type="success" size="small">成功</HiButton>
            <HiButton type="warning" size="small">警告</HiButton>
            <HiButton type="danger" size="small">危险</HiButton>
          </div>
          <!-- DataGrid 组件演示 -->
          <div v-else-if="component.name === 'DataGrid 数据表格'" class="datagrid-demo">
            <HiDataGrid 
              :columns="dataGridColumns" 
              :dataSource="dataGridData" 
              :height="120"
            />
          </div>
          <!-- 默认占位符 -->
          <div v-else class="demo-placeholder">
            <div class="placeholder-content">
              <div class="placeholder-icon">{{ component.icon }}</div>
              <div class="placeholder-text">{{ component.name }}</div>
            </div>
          </div>
        </div>

        <div class="card-coming-soon" v-else>
          <div class="coming-soon-content">
            <div class="coming-soon-icon">🚧</div>
            <div class="coming-soon-text">敬请期待</div>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-tags">
            <span 
              v-for="tag in component.tags" 
              :key="tag" 
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
          <div class="card-actions" v-if="!component.comingSoon">
            <button class="action-btn" @click.stop="viewDocs(component)">
              查看文档
            </button>
          </div>
        </div>

        <div class="card-overlay"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vitepress'
import { HiButton, HiDataGrid } from 'hi-kits'

const router = useRouter()

// DataGrid 数据定义
const dataGridColumns = [
  { field: 'name', headerName: '姓名', width: 80 },
  { field: 'age', headerName: '年龄', width: 60 },
  { field: 'city', headerName: '城市', width: 80 }
]

const dataGridData = [
  { name: '张三', age: 25, city: '北京' },
  { name: '李四', age: 30, city: '上海' }
]

const components = ref([
  {
    name: 'Button 按钮',
    description: '常用的操作按钮，支持多种类型和尺寸',
    icon: '🔘',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    tags: ['基础', '交互'],
    link: '/components/button',
    comingSoon: false
  },
  {
    name: 'DataGrid 数据表格',
    description: '功能强大的数据表格，支持排序、筛选等',
    icon: '📊',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    tags: ['数据', '表格'],
    link: '/components/data-grid',
    comingSoon: false
  },
  {
    name: 'Input 输入框',
    description: '文本输入组件，支持多种输入类型',
    icon: '📝',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    tags: ['表单', '输入'],
    link: '/components/input',
    comingSoon: true
  },
  {
    name: 'Select 选择器',
    description: '下拉选择组件，支持单选和多选',
    icon: '📋',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    tags: ['表单', '选择'],
    link: '/components/select',
    comingSoon: true
  },
  {
    name: 'Modal 对话框',
    description: '模态对话框，用于重要信息展示',
    icon: '🪟',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    tags: ['反馈', '弹窗'],
    link: '/components/modal',
    comingSoon: true
  },
  {
    name: 'Card 卡片',
    description: '信息承载容器，可承载文字、列表、图片等',
    icon: '🃏',
    color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    tags: ['布局', '容器'],
    link: '/components/card',
    comingSoon: true
  }
])

const componentCount = computed(() => {
  return components.value.filter(c => !c.comingSoon).length
})

const handleCardClick = (component: any) => {
  if (!component.comingSoon && component.link) {
    router.go(component.link)
  }
}

const viewDocs = (component: any) => {
  if (component.link) {
    router.go(component.link)
  }
}
</script>

<style scoped>
.component-showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px;
}

.showcase-header {
  text-align: center;
  margin-bottom: 48px;
}

.showcase-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.title-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.showcase-subtitle {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.showcase-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-bottom: 64px;
  padding: 32px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.showcase-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 24px;
  backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  min-height: 280px;
  display: flex;
  flex-direction: column;
}

.showcase-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.05) 0%, 
    rgba(118, 75, 162, 0.05) 50%, 
    rgba(240, 147, 251, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.showcase-card:hover::before {
  opacity: 1;
}

.showcase-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.15);
  border-color: rgba(102, 126, 234, 0.3);
}

.showcase-card.coming-soon {
  opacity: 0.7;
  cursor: default;
}

.showcase-card.coming-soon:hover {
  transform: translateY(-4px) scale(1.01);
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
  position: relative;
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card-info {
  flex: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.card-description {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0;
}

.card-status {
  position: absolute;
  top: -8px;
  right: -8px;
}

.status-badge {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-demo {
  flex: 1;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}

.button-demo {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.datagrid-demo {
  width: 100%;
}

.demo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}

.placeholder-content {
  text-align: center;
  color: var(--vp-c-text-2);
}

.placeholder-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.placeholder-text {
  font-size: 0.9rem;
  font-weight: 500;
}

.card-coming-soon {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    rgba(102, 126, 234, 0.1) 0%, 
    rgba(118, 75, 162, 0.1) 100%);
  border: 2px dashed rgba(102, 126, 234, 0.3);
  border-radius: 12px;
  margin-bottom: 20px;
  min-height: 100px;
}

.coming-soon-content {
  text-align: center;
  color: var(--vp-c-text-2);
}

.coming-soon-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.coming-soon-text {
  font-weight: 500;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.card-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  background: rgba(102, 126, 234, 0.1);
  color: rgba(102, 126, 234, 0.8);
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.card-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

/* 暗色模式适配 */
.dark .showcase-card {
  background: rgba(26, 26, 26, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .card-demo {
  background: rgba(26, 26, 26, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .showcase-stats {
  background: rgba(26, 26, 26, 0.8);
  border-color: rgba(255, 255, 255, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .showcase-title {
    font-size: 2.5rem;
    flex-direction: column;
    gap: 8px;
  }
  
  .showcase-stats {
    flex-direction: column;
    gap: 24px;
    padding: 24px;
  }
  
  .showcase-card:hover {
    transform: translateY(-6px) scale(1.01);
  }
}

@media (max-width: 480px) {
  .component-showcase {
    padding: 40px 16px;
  }
  
  .showcase-title {
    font-size: 2rem;
  }
  
  .showcase-grid {
    grid-template-columns: 1fr;
  }
}
</style>