module.exports = {
  title: "德莱问的技术合集",
  description: "draven's blog, 每日更新，优质文章，合集",
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: 'draven, blog, 前端, 技术博客, 德莱问'}],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/awesome/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "文章列表",
        link: "/menu.html",
      },
      { text: '订阅', link: 'https://dravenww.github.io/awesome/feed.xml'},
      { text: 'wp2vite', link: 'https://github.com/tnfe/wp2vite'},
      { text: '掘金', link: 'https://juejin.cn/user/1732486056921614'},
      { text: 'GitHub', link: 'https://github.com/dravenww/awesome'},
      { text: '工程化模板', items: [
          {
            text: '小程序-云开发',
            link: 'https://github.com/dravenww/crumb-diary'
          },
          {
            text: 'react-concent',
            link: 'https://github.com/tnfe/concent-pro'
          },
          {
            text: 'vite-react',
            link: 'https://github.com/tnfe/vite-concent-pro'
          },
        ]
      },
    ],
    displayAllHeaders: true,
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};