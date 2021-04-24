module.exports = {
  title: "draven's awesome",
  description: "draven's awesome, 每日更新，优质文章，合集",
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/awesome/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    navbar: false,
    displayAllHeaders: true,
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};