import type { CSSProperties } from 'react'

/**
 * 通用组件props
 */
export interface ComponentProps {
  /**
   * 样式表
   * @type {string}
   * @memberof
   */
  className?: string | undefined
  /**
   * 内联样式
   * @type {CSSProperties}
   * @memberof
   */
  style?: CSSProperties
}
