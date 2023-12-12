import { DemoBlock } from 'demos'
import { Avatar, Space } from 'grace-design'
import React from 'react'

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Space block wrap>
          <Avatar
            src={
              'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
          />
          <Avatar
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <Avatar
            src={
              'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
          />
        </Space>
      </DemoBlock>

      <DemoBlock title="占位图像">
        <Avatar src="" />
      </DemoBlock>

      <DemoBlock title="圆形头像">
        <Avatar
          src={
            'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          circle
        />
      </DemoBlock>

      <DemoBlock title="自定义大小">
        <Avatar
          src={
            'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          style={{ '--size': '66px' }}
        />
      </DemoBlock>
    </>
  )
}
