import type { FC, ReactNode } from 'react'
import React from 'react'
import './index.less'

interface Props {
  title: string
  padding?: string
  border?: string
  background?: string
  children?: ReactNode
}

export const DemoBlock: FC<Props> = (props) => {
  return (
    <div className="demoBlock">
      <div className="demoTitle">{props.title}</div>
      <div
        className="demoMain"
        style={{
          padding: props.padding,
          background: props.background,
          border: props.border,
        }}
      >
        {props.children}
      </div>
    </div>
  )
}

DemoBlock.defaultProps = {
  padding: '12px 12px',
  background: '#ffffff',
}
