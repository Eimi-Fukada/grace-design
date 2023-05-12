import React, { memo, type FC } from 'react'

const Component: FC = (props) => {
  return <div>button</div>
}

const Button = memo(Component)
export default Button
