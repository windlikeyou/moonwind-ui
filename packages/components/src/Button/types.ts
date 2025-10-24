export interface ButtonProps {
  /**
   * 按钮类型
   */
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  
  /**
   * 按钮尺寸
   */
  size?: 'small' | 'medium' | 'large'
  
  /**
   * 原生 button 的 type 属性
   */
  nativeType?: 'button' | 'submit' | 'reset'
  
  /**
   * 是否禁用
   */
  disabled?: boolean
  
  /**
   * 是否加载中
   */
  loading?: boolean
  
  /**
   * 是否圆角
   */
  round?: boolean
  
  /**
   * 是否圆形
   */
  circle?: boolean
}

export interface ButtonEmits {
  /**
   * 点击事件
   */
  click: [event: MouseEvent]
}