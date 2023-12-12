# Avatar 头像

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性    | 说明           | 类型                                                              | 默认值     |
| ------- | -------------- | ----------------------------------------------------------------- | ---------- |
| circle  | 头像是否圆形   | `Boolean`                                                         | 默认 false |
| onClick | 点击事件       | `(event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void` | -          |
| src     | 头像的图片地址 | `string`                                                          | -          |

### CSS 变量

| 属性            | 说明             | 默认值 | 全局变量                    |
| --------------- | ---------------- | ------ | --------------------------- |
| --border-radius | 圆角             | `4px`  | `--gd-avatar-border-radius` |
| --size          | 大小，宽度和高度 | `44px` | `--gd-avatar-size`          |
