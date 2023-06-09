/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import classNames from 'classnames'
import type { ReactElement } from 'react'
import React from 'react'
import type { ComponentProps } from '../global/common-style'

export function withNativeProps<T extends ComponentProps>(
  props: T,
  element: ReactElement
) {
  const p = {
    ...element.props,
  }
  if (props.className) {
    p.className = classNames(element.props.className, props.className)
  }
  if (props.style) {
    p.style = {
      ...p.style,
      ...props.style,
    }
  }
  for (const key in props) {
    if (!props.hasOwnProperty(key)) continue
    if (key.startsWith('data-')) {
      p[key] = props[key]
    }
  }
  return React.cloneElement(element, p)
}
