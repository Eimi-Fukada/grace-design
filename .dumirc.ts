import { defineConfig } from 'dumi'
import { navs } from './config/nav'

export default defineConfig({
  title: 'Grace Design',
  favicons: ['/componentlogo.svg', '/favicon.png'],
  outputPath: 'docs-dist',
  cssMinifier: 'esbuild',
  hash: true,
  themeConfig: {
    name: 'Grace Design',
    logo: '/componentlogo.svg',
    nav: navs,
    footer: 'Copyright © 2023-present Grace',
    // 配置高清方案，默认为 750 高清方案
    hd: {
      rules: [],
    },
    // 配置 demo 预览器的设备宽度，默认为 375px
    deviceWidth: 375,
  },
})
