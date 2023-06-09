import classNames from 'classnames'
import React, { type FC } from 'react'
import { withNativeProps } from '../../../src/utils/native-props'
import type { ComponentProps } from '../../global/common-style'

const classPrefix = `gd-button`

export type ButtonProps = {
  /**
   * 按钮颜色
   */
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  /**
   * 是否是块级元素
   */
  block?: boolean
  /**
   * 加载状态
   * @description 默认不自带loading动画
   */
  loading?: boolean
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
   * 点击事件
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void> | unknown
  /**
   * children
   */
  children?: React.ReactNode
} & ComponentProps<
  | '--text-color'
  | '--background-color'
  | '--border-radius'
  | '--border-width'
  | '--border-style'
  | '--border-color'
>

export const Button: FC<ButtonProps> = (props) => {
  const {
    color = 'default',
    block = false,
    loading = false,
    type = 'button',
  } = props

  const disabled = props.disabled ?? props.loading

  return withNativeProps(
    props,
    <button
      style={props.style}
      type={type}
      onClick={props.onClick}
      className={classNames(
        props.className,
        classPrefix,
        color ? `${classPrefix}-${color}` : null,
        {
          [`${classPrefix}-block`]: block,
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-loading`]: loading,
        }
      )}
      disabled={disabled}
    >
      {loading ? (
        <div className={`${classPrefix}-loading-wrapper`}>
          {props.loadingText}
        </div>
      ) : (
        props.children
      )}
    </button>
  )
}
