import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { HiDataGrid } from '../packages/hi-kits/src'
import type { DataGridColumn, FetchResult } from '../packages/hi-kits/src'

// 模拟数据类型
interface User {
  id: number
  name: string
  email: string
  age: number
  department: string
  status: 'active' | 'inactive'
  joinDate: string
}

// 模拟数据
const mockUsers: User[] = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', age: 28, department: '技术部', status: 'active', joinDate: '2023-01-15' },
  { id: 2, name: '李四', email: 'lisi@example.com', age: 32, department: '产品部', status: 'active', joinDate: '2022-08-20' },
  { id: 3, name: '王五', email: 'wangwu@example.com', age: 25, department: '设计部', status: 'inactive', joinDate: '2023-03-10' },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', age: 30, department: '技术部', status: 'active', joinDate: '2022-12-05' },
  { id: 5, name: '钱七', email: 'qianqi@example.com', age: 27, department: '运营部', status: 'active', joinDate: '2023-02-18' },
  { id: 6, name: '孙八', email: 'sunba@example.com', age: 35, department: '产品部', status: 'inactive', joinDate: '2021-11-30' },
  { id: 7, name: '周九', email: 'zhoujiu@example.com', age: 29, department: '技术部', status: 'active', joinDate: '2023-04-22' },
  { id: 8, name: '吴十', email: 'wushi@example.com', age: 26, department: '设计部', status: 'active', joinDate: '2023-01-08' }
]

// 列定义
const columns: DataGridColumn<User>[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 80,
    sortable: true
  },
  {
    field: 'name',
    headerName: '姓名',
    width: 120,
    sortable: true,
    filter: true
  },
  {
    field: 'email',
    headerName: '邮箱',
    width: 200,
    sortable: true,
    filter: true
  },
  {
    field: 'age',
    headerName: '年龄',
    width: 80,
    sortable: true,
    filter: 'agNumberColumnFilter'
  },
  {
    field: 'department',
    headerName: '部门',
    width: 120,
    sortable: true,
    filter: true
  },
  {
    field: 'status',
    headerName: '状态',
    width: 100,
    sortable: true,
    filter: true,
    cellRenderer: (params: any) => {
      const status = params.value
      const color = status === 'active' ? '#52c41a' : '#ff4d4f'
      const text = status === 'active' ? '激活' : '禁用'
      return `<span style="color: ${color}; font-weight: bold;">${text}</span>`
    }
  },
  {
    field: 'joinDate',
    headerName: '入职日期',
    width: 120,
    sortable: true,
    filter: 'agDateColumnFilter'
  }
]

// 模拟异步数据获取
const mockFetch = async (params: any): Promise<FetchResult<User>> => {
  console.log('Fetch params:', params)
  
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const { current = 1, pageSize = 10 } = params
  const start = (current - 1) * pageSize
  const end = start + pageSize
  
  return {
    data: mockUsers.slice(start, end),
    total: mockUsers.length,
    current,
    pageSize
  }
}

const meta: Meta<typeof HiDataGrid> = {
  title: 'Components/DataGrid',
  component: HiDataGrid,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '基于 ag-grid-community 的高性能数据表格组件，支持分页、排序、筛选、行选择等功能。'
      }
    }
  },
  argTypes: {
    columns: {
      description: '表格列定义',
      control: { type: 'object' }
    },
    dataSource: {
      description: '静态数据源',
      control: { type: 'object' }
    },
    fetch: {
      description: '异步数据获取函数',
      control: { type: 'function' }
    },
    loading: {
      description: '加载状态',
      control: { type: 'boolean' }
    },
    pagination: {
      description: '分页配置',
      control: { type: 'object' }
    },
    rowSelection: {
      description: '行选择配置',
      control: { type: 'object' }
    },
    height: {
      description: '表格高度',
      control: { type: 'text' }
    },
    bordered: {
      description: '是否显示边框',
      control: { type: 'boolean' }
    }
  }
}

export default meta
type Story = StoryObj<typeof HiDataGrid>

// 基础用法
export const Basic: Story = {
  name: '基础用法',
  args: {
    columns,
    dataSource: mockUsers.slice(0, 5),
    height: '400px'
  },
  parameters: {
    docs: {
      description: {
        story: '最基本的表格用法，使用静态数据源。'
      }
    }
  }
}

// 分页表格
export const WithPagination: Story = {
  name: '分页表格',
  args: {
    columns,
    dataSource: mockUsers,
    pagination: {
      current: 1,
      pageSize: 5,
      total: mockUsers.length,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: true
    },
    height: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: '支持分页的表格，可以配置页码、每页条数等。'
      }
    }
  }
}

// 异步数据获取
export const WithFetch: Story = {
  name: '异步数据获取',
  args: {
    columns,
    fetch: mockFetch,
    pagination: {
      current: 1,
      pageSize: 5,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: true
    },
    height: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: '使用 fetch 函数异步获取数据，支持分页、排序、筛选等参数传递。'
      }
    }
  }
}

// 行选择 - 多选
export const WithCheckboxSelection: Story = {
  name: '多选行选择',
  args: {
    columns,
    dataSource: mockUsers,
    rowSelection: {
      type: 'checkbox',
      selectedKeys: [],
      onChange: (selectedKeys: any[], selectedRows: User[]) => {
        console.log('Selected keys:', selectedKeys)
        console.log('Selected rows:', selectedRows)
      }
    },
    pagination: {
      current: 1,
      pageSize: 5,
      showSizeChanger: true
    },
    height: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: '支持多选的行选择功能，使用复选框进行选择。'
      }
    }
  }
}

// 行选择 - 单选
export const WithRadioSelection: Story = {
  name: '单选行选择',
  args: {
    columns,
    dataSource: mockUsers,
    rowSelection: {
      type: 'radio',
      selectedKeys: [],
      onChange: (selectedKeys: any[], selectedRows: User[]) => {
        console.log('Selected keys:', selectedKeys)
        console.log('Selected rows:', selectedRows)
      }
    },
    pagination: {
      current: 1,
      pageSize: 5
    },
    height: '500px'
  },
  parameters: {
    docs: {
      description: {
        story: '支持单选的行选择功能，使用单选框进行选择。'
      }
    }
  }
}

// 加载状态
export const Loading: Story = {
  name: '加载状态',
  args: {
    columns,
    dataSource: [],
    loading: true,
    height: '400px'
  },
  parameters: {
    docs: {
      description: {
        story: '表格的加载状态展示。'
      }
    }
  }
}

// 空数据
export const Empty: Story = {
  name: '空数据',
  args: {
    columns,
    dataSource: [],
    height: '400px',
    locale: {
      emptyText: '暂无数据'
    }
  },
  parameters: {
    docs: {
      description: {
        story: '表格无数据时的展示效果。'
      }
    }
  }
}

// 自定义高度和边框
export const CustomStyle: Story = {
  name: '自定义样式',
  args: {
    columns,
    dataSource: mockUsers,
    height: '600px',
    bordered: true,
    pagination: {
      current: 1,
      pageSize: 6
    }
  },
  parameters: {
    docs: {
      description: {
        story: '自定义表格高度和边框样式。'
      }
    }
  }
}

// 完整功能演示
export const FullFeatures: Story = {
  name: '完整功能演示',
  render: (args) => ({
    components: { HiDataGrid },
    setup() {
      const loading = ref(false)
      const selectedKeys = ref<number[]>([])
      
      const handleFetch = async (params: any): Promise<FetchResult<User>> => {
        loading.value = true
        try {
          const result = await mockFetch(params)
          return result
        } finally {
          loading.value = false
        }
      }
      
      const handleSelectionChange = (keys: number[], rows: User[]) => {
        selectedKeys.value = keys
        console.log('Selection changed:', { keys, rows })
      }
      
      return {
        args: {
          ...args,
          fetch: handleFetch,
          loading: loading.value,
          rowSelection: {
            type: 'checkbox',
            selectedKeys: selectedKeys.value,
            onChange: handleSelectionChange
          }
        }
      }
    },
    template: '<HiDataGrid v-bind="args" />'
  }),
  args: {
    columns,
    pagination: {
      current: 1,
      pageSize: 5,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: true
    },
    height: '600px',
    bordered: true
  },
  parameters: {
    docs: {
      description: {
        story: '展示 DataGrid 组件的完整功能，包括异步数据获取、分页、行选择、加载状态等。'
      }
    }
  }
}