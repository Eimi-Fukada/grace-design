import type { ComponentProps } from 'grace-design/src/global/common-style'
import React, { type FC } from 'react'

type NativeButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = {
  /**
   * 加载状态
   * @description 默认不自带loading动画
   */
  loading?: boolean
  /**
   * 加载状态下的 icon 图标
   */
  loadingIcon?: React.ReactNode
  /**
   * 加载状态下额外展示的文字
   */
  loadingText?: string
  /**
   * 禁用
   */
  disabled?: boolean
  /**
   * 原生 button 元素的 type 属性
   */
  type?: 'submit' | 'reset' | 'button'
  /**
   * 点击事件 返回的是promise 未运行完毕不会触发第二次
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void> | unknown
  /**
   * children
   */
  children?: React.ReactNode
} & ComponentProps &
  // 从NativeButtonProps中，选取指定属性
  Pick<
    NativeButtonProps,
    'onMouseDown' | 'onMouseUp' | 'onTouchStart' | 'onTouchEnd'
  >

// const defaultProps: ButtonProps = {
//   loading: false,
//   type: 'button',
// }

export const Button: FC<ButtonProps> = (props) => {
  const {
    // loading,
    // loadingIcon,
    // loadingText,
    // disabled,
    // type,
    // onClick,
    children,
  } = props

  return <button>{children}</button>
}
