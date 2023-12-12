import classNames from 'classnames'
import React, { type FC } from 'react'
import { withNativeProps } from '../../../src/utils/native-props'
import type { ComponentProps } from '../../global/common-style'

const classPrefix = `gd-avatar`

export type AvatarProps = {
  src: string
  circle?: boolean
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
} & ComponentProps<'--size' | '--border-radius'>

export const Avatar: FC<AvatarProps> = (props) => {
  return withNativeProps(
    props,
    <img
      style={props.style}
      className={classNames(props.className, classPrefix, {
        [`${classPrefix}-circle`]: props.circle,
      })}
      src={
        props.src ||
        'https://twmw.oss-ap-southeast-1.aliyuncs.com/aliyun-oss/avatar.png'
      }
      onClick={props.onClick}
    />
  )
}
