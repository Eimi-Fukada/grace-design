import { DemoBlock } from 'demos'
import { Button } from 'grace-design'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title="不同颜色的按钮">
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
        <Button
          style={{ '--background-color': '#13A8A0', '--text-color': '#fff' }}
        >
          自定义颜色
        </Button>
      </DemoBlock>

      <DemoBlock title="块级按钮">
        <Button block color="primary">
          Block Button
        </Button>
      </DemoBlock>

      <DemoBlock title="无法选中的按钮">
        <Button disabled color="primary">
          Disabled
        </Button>
      </DemoBlock>

      <DemoBlock title="加载中的按钮">
        <Button loadingText="正在加载" loading color="primary">
          Loading
        </Button>
      </DemoBlock>

      <DemoBlock title="带圆角的按钮">
        <Button color="primary" style={{ '--border-radius': '24px' }}>
          rounded
        </Button>
      </DemoBlock>
    </>
  )
}
