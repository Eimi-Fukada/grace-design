import { defineConfig } from 'dumi'
import { navs, sidebar } from './docs/guide/nav'

export default defineConfig({
  base: '/grace-design',
  publicPath: '/grace-design/',
  title: 'Grace Design',
  favicons: ['/componentlogo.svg', '/favicon.png'],
  outputPath: 'docs-dist',
  cssMinifier: 'esbuild',
  hash: true,
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src/components' }],
  },
  alias: {
    'grace-design/es': process.cwd() + '/src',
    demos: process.cwd() + '/src/demos/index.ts',
  },
  themeConfig: {
    name: 'Grace Design',
    logo: '/componentlogo.svg',
    nav: navs,
    sidebar: sidebar,
    footer: 'Copyright © 2023-present Grace',
    socialLinks: { github: 'https://github.com/' },
    // 配置高清方案，默认为 750 高清方案
    hd: {
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
    },
    // 配置 demo 预览器的设备宽度，默认为 375px
    deviceWidth: 375,
  },
})
