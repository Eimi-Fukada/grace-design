import type { CSSProperties } from 'react'

/**
 * 通用组件props
 */
export interface ComponentProps<T extends string = never> {
  /**
   * 样式表
   * @type {string}
   * @memberof
   */
  className?: string
  /**
   * 内联样式
   * @type {CSSProperties}
   * @memberof
   */
  style?: CSSProperties & Partial<Record<T, string>>
}
