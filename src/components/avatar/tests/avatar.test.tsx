import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import Avatar from '../'

const classPrefix = `gd-avatar`

const demoImage =
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'

test('should match snapshot', () => {
  const { container } = render(<Avatar src={demoImage} />)
  expect(container.firstChild?.nodeName).toBe('IMG')
  expect(container).toMatchSnapshot()
})

test('renders with size', () => {
  const { getByTestId } = render(
    <Avatar src={demoImage} circle data-testid="avatar" />
  )
  expect(getByTestId('avatar')).toHaveClass(`${classPrefix}-circle`)
})
