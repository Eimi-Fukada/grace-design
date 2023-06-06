# Button 按钮

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性        | 说明                                                                                | 类型                                                                                | 默认值      |
| ----------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------- |
| color       | 按钮的颜色                                                                          | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'`                      | `'default'` |
| block       | 是否是块级元素                                                                      | `boolean`                                                                           | `false`     |
| disabled    | 是否禁用                                                                            | `boolean`                                                                           | `false`     |
| loading     | 是否处于加载状态，`'auto'` 模式会监听 `onClick` 的 `Promise` 状态自动更新 `loading` | `boolean \| 'auto'`                                                                 | `false`     |
| loadingText | 加载状态下额外展示的文字                                                            | `string`                                                                            | -           |
| onClick     | 点击事件                                                                            | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void>` | -           |
| type        | 原生 `button` 元素的 `type` 属性                                                    | `'submit' \| 'reset' \| 'button'`                                                   | `'button'`  |

### CSS 变量

| 属性               | 说明     | 默认值                       | 全局变量                       |
| ------------------ | -------- | ---------------------------- | ------------------------------ |
| --background-color | 背景颜色 | `var(--gd-color-background)` | `--gd-button-background-color` |
| --border-color     | 边框颜色 | `var(--gd-color-border)`     | `--gd-button-border-color`     |
| --border-radius    | 圆角大小 | `8px`                        | `--gd-button-border-radius`    |
| --border-style     | 边框样式 | `solid`                      | `--gd-button-border-style`     |
| --border-width     | 边框宽度 | `1px`                        | `--gd-button-border-width`     |
| --text-color       | 文字颜色 | `var(--gd-color-text)`       | `--gd-button-text-color`       |
