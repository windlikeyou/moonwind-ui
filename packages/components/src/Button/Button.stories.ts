import type { Meta, StoryObj } from '@storybook/vue3'
import HkButton from './Button.vue'

const meta: Meta<typeof HkButton> = {
  title: 'Components/Button',
  component: HkButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Hi-Kits 按钮组件，支持多种类型、尺寸和状态。'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      description: '按钮类型'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '按钮尺寸'
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用'
    },
    loading: {
      control: { type: 'boolean' },
      description: '是否加载中'
    },
    onClick: { action: 'clicked' }
  },
  args: {
    onClick: () => {}
  }
}

export default meta
type Story = StoryObj<typeof meta>

// 默认按钮
export const Default: Story = {
  render: () => ({
    components: { HkButton },
    template: '<HkButton>Default Button</HkButton>'
  })
}

// 主要按钮
export const Primary: Story = {
  render: () => ({
    components: { HkButton },
    template: '<HkButton type="primary">Primary Button</HkButton>'
  })
}

// 成功按钮
export const Success: Story = {
  render: () => ({
    components: { HkButton },
    template: '<HkButton type="success">Success Button</HkButton>'
  })
}

// 警告按钮
export const Warning: Story = {
  render: () => ({
    components: { HkButton },
    template: '<HkButton type="warning">Warning Button</HkButton>'
  })
}

// 危险按钮
export const Danger: Story = {
  render: () => ({
    components: { HkButton },
    template: '<HkButton type="danger">Danger Button</HkButton>'
  })
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { HkButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <HkButton size="small">Small</HkButton>
        <HkButton size="medium">Medium</HkButton>
        <HkButton size="large">Large</HkButton>
      </div>
    `
  })
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { HkButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <HkButton disabled>Default Disabled</HkButton>
        <HkButton type="primary" disabled>Primary Disabled</HkButton>
        <HkButton type="success" disabled>Success Disabled</HkButton>
      </div>
    `
  })
}

// 加载状态
export const Loading: Story = {
  render: () => ({
    components: { HkButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <HkButton loading>Loading</HkButton>
        <HkButton type="primary" loading>Primary Loading</HkButton>
        <HkButton type="success" loading>Success Loading</HkButton>
      </div>
    `
  })
}

// 所有类型展示
export const AllTypes: Story = {
  render: () => ({
    components: { HkButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <HkButton>Default</HkButton>
        <HkButton type="primary">Primary</HkButton>
        <HkButton type="secondary">Secondary</HkButton>
        <HkButton type="success">Success</HkButton>
        <HkButton type="warning">Warning</HkButton>
        <HkButton type="danger">Danger</HkButton>
      </div>
    `
  })
}

// 交互示例
export const Interactive: Story = {
  render: () => ({
    components: { HkButton },
    template: '<HkButton type="primary" @click="handleClick">Click me!</HkButton>',
    methods: {
      handleClick() {
        alert('Button clicked!')
      }
    }
  })
}