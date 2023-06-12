/* eslint-disable @typescript-eslint/restrict-template-expressions */
import classNames from 'classnames'
import React, { type FC } from 'react'
import { withNativeProps } from '../../../src/utils/native-props'
import type { ComponentProps } from '../../global/common-style'

const classPrefix = `gd-space`

export type SpaceProps = {
  /**
   * 间距方向
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * 交叉轴对齐方式
   */
  align?: 'start' | 'end' | 'center' | 'baseline'
  /**
   * 主轴对齐方式
   */
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  /**
   * 是否自动换行，仅在 `horizontal` 时有效
   */
  wrap?: boolean
  /**
   * 是否渲染为块级元素
   */
  block?: boolean
  /**
   *
   * @param event 点击事件
   * @returns
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  /**
   * children
   */
  children?: React.ReactNode
} & ComponentProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>

export const Space: FC<SpaceProps> = (props) => {
  const { direction = 'horizontal', onClick } = props

  return withNativeProps(
    props,
    <div
      style={props.style}
      className={classNames(props.className, classPrefix, {
        [`${classPrefix}-wrap`]: props.wrap,
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${props.align}`]: !!props.align,
        [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
      })}
      onClick={onClick}
    >
      {React.Children.map(props.children, (child) => {
        return (
          child !== null &&
          child !== undefined && (
            <div className={`${classPrefix}-item`}>{child}</div>
          )
        )
      })}
    </div>
  )
}
