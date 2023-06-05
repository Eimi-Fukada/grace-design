import classNames from 'classnames'
import React, { useState, type FC } from 'react'
import type { ComponentProps } from '../../global/common-style'
import { isPromise } from '../../utils/validate'

const classPrefix = `gd-button`

type NativeButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = {
  /**
   * 是否是块级元素
   */
  block?: boolean
  /**
   * 加载状态
   * @description 默认不自带loading动画
   */
  loading?: boolean | 'auto'
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

export const Button: FC<ButtonProps> = (props) => {
  const {
    block = false,
    loading = false,
    loadingIcon,
    loadingText,
    disabled,
    type,
    onClick,
    className,
    style,
    children,
  } = props

  const [innerLoading, setInnerLoading] = useState(false)
  const buttonLoading = loading === 'auto' ? innerLoading : loading

  const handleClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (onClick == null) return

    const promise = onClick(event)

    if (isPromise(promise)) {
      try {
        setInnerLoading(true)
        await promise
        setInnerLoading(false)
      } catch (e) {
        setInnerLoading(false)
        throw e
      }
    }
  }

  return (
    <button
      style={style}
      type={type}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={handleClick}
      className={classNames(className, classPrefix, {
        [`${classPrefix}-block`]: block,
      })}
      disabled={disabled}
      onMouseDown={props.onMouseDown}
      onMouseUp={props.onMouseUp}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
    >
      {buttonLoading ? (
        <div>
          {loadingIcon}
          {loadingText}
        </div>
      ) : (
        children
      )}
    </button>
  )
}
