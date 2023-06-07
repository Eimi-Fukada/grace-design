import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Button from '../'

const classPrefix = `gd-button`

test('should match snapshot', () => {
  const { container } = render(<Button color="primary">主要按钮</Button>)
  expect(container.firstChild?.nodeName).toBe('BUTTON')
  expect(container).toMatchSnapshot()
})

test('should children correctly', () => {
  const { getByText, getByTestId } = render(
    <Button
      data-testid="button"
      className="aa"
      style={{ margin: 8 }}
      color="primary"
    >
      主要按钮
    </Button>
  )
  expect(getByText('主要按钮')).toHaveTextContent('主要按钮')
  expect(getByTestId('button')).toHaveClass('aa')
  expect(getByTestId('button')).toHaveAttribute('style')
})

test('renders with color', () => {
  const { getByText } = render(
    <>
      <Button color="primary">Primary</Button>
      <Button color="success">Success</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
    </>
  )
  expect(getByText('Primary')).toHaveClass(`${classPrefix}-primary`)
  expect(getByText('Success')).toHaveClass(`${classPrefix}-success`)
  expect(getByText('Danger')).toHaveClass(`${classPrefix}-danger`)
  expect(getByText('Warning')).toHaveClass(`${classPrefix}-warning`)
})

test('renders with block', () => {
  const { getByText } = render(
    <Button block color="primary">
      Block
    </Button>
  )
  expect(getByText('Block')).toHaveClass(`${classPrefix}-block`)
})

test('renders with disabled', () => {
  const { getByRole } = render(<Button disabled>Disabled</Button>)
  const button = getByRole('button')
  expect(button).toBeDisabled()
})

test('renders with loading and loadingText', () => {
  const { getByTestId } = render(
    <Button loading loadingText="加载中" data-testid="btn">
      Loading
    </Button>
  )
  expect(getByTestId('btn')).toHaveClass(`${classPrefix}-loading`)

  // children no render
  expect(() => {
    screen.getByText('Loading')
  }).toThrow(/Unable to find an element with the text: Loading./)

  screen.getByText('加载中')
})

test('renders with type', () => {
  const { getByRole } = render(<Button type="submit">submit</Button>)
  const button = getByRole('button')
  expect(button).toHaveAttribute('type', 'submit')
  expect(button).not.toHaveAttribute('type', 'button')
})

test('renders with onClick', () => {
  class DefaultButton extends React.Component {
    state = {
      loading: false,
    }

    enterLoading = () => {
      this.setState({ loading: true })
    }

    render() {
      const { loading } = this.state
      return (
        <Button
          loading={loading}
          loadingText="加载中"
          onClick={this.enterLoading}
        >
          Button
        </Button>
      )
    }
  }
  const { getByText } = render(<DefaultButton />)
  fireEvent.click(getByText('Button'))
  screen.getByText('加载中')
})
