import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Space from '../'

const classPrefix = `gd-space`

test('should match snapshot', () => {
  const { container } = render(<Space>test</Space>)
  expect(container.firstChild?.nodeName).toBe('DIV')
  expect(container).toMatchSnapshot()
})

test('renders basic', () => {
  const { getByTestId, container } = render(
    <Space>
      <div data-testid="block">block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const gdSpace = container.getElementsByClassName('gd-space')[0]
  expect(gdSpace).toHaveClass(`${classPrefix}-horizontal`)
  expect(gdSpace.firstChild).toHaveStyle('margin-right: var(--horizontal-size)')
  expect(getByTestId('block').parentElement).toHaveClass(`${classPrefix}-item`)
})

test('renders with wrap', () => {
  const { container } = render(
    <Space wrap>
      <div>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const gdSpace = container.getElementsByClassName('gd-space')[0]
  expect(gdSpace).toHaveClass(`${classPrefix}-wrap`)
})

test('renders with direction', () => {
  const { container } = render(
    <Space direction="vertical">
      <div>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const gdSpace = container.getElementsByClassName('gd-space')[0]
  expect(gdSpace).toHaveClass(`${classPrefix}-vertical`)
})

test('renders with justify', () => {
  const justify = 'center'
  const { container } = render(
    <Space justify={justify}>
      <div>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const gdSpace = container.getElementsByClassName('gd-space')[0]
  expect(gdSpace).toHaveClass(`${classPrefix}-justify-${justify}`)
})

test('renders with align', () => {
  const align = 'end'
  const { container } = render(
    <Space align={align}>
      <div>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const gdSpace = container.getElementsByClassName('gd-space')[0]
  expect(gdSpace).toHaveClass(`${classPrefix}-align-${align}`)
})

test('renders with block', () => {
  const { container } = render(
    <Space block>
      <div>block1</div>
      <div>block2</div>
      <div>block3</div>
    </Space>
  )
  const gdSpace = container.getElementsByClassName('gd-space')[0]
  expect(gdSpace).toHaveClass(`${classPrefix}-block`)
})

test('renders with onClick event', () => {
  const onClick = jest.fn()
  const { getByText } = render(<Space onClick={onClick}>Block</Space>)
  fireEvent.click(getByText('Block'))
  expect(onClick).toBeCalledTimes(1)
})
