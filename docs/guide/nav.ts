import { components } from './components'

export const navs = [
  {
    title: '组件',
    link: '/components/button',
  },
  {
    title: '贡献者',
    link: '/resources',
  },
  {
    title: '发布日志',
    link: 'https://github.com/',
  },
]

export const sidebar = {
  '/components': [
    {
      title: '基础组件',
      children: components.common,
    },
    {
      title: '视图组件',
      children: components.view,
    },
  ],
}
