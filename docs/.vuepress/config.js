module.exports = {
  title: "每日精选文章合集",
  description: "精选文章, 每日更新，每日热文，文章合集",
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: 'draven, blog, 前端, 技术博客, 德莱问'}],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?f7e6799f17989e184072a05d38820494";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  theme: 'reco',
  themeConfig: {
    author: 'dravenwu',
    startYear: '2021',
    valineConfig: {
      appId: 'j2HkS1t6CpVpw4mzhvpRyVQA-gzGzoHsz',// your appId
      appKey: 'i5YI6RXIUCeVja0t1DQjphDI', // your appKey
      meta: ['nick', 'mail'],
      requiredFields: ['mail'],
    },
    nav: [
      { text: "文章列表", link: "/menu.html", icon: 'reco-menu' },
      { text: "关于我", link: "/about.html", icon: 'reco-account'},
      { text: '掘金', link: 'https://juejin.cn/user/1732486056921614', icon: 'reco-juejin'},
      { text: 'GitHub', link: 'https://github.com/dravenww/curated-article', icon: 'reco-github'},
      { text: '工程化模板', items: [
          {
            text: 'vite|element-ui|Vue2',
            link: 'https://github.com/tnfe/vite-vue2-pro'
          },
          {
            text: 'vite|antd|react',
            link: 'https://github.com/tnfe/vite-concent-pro'
          },
          {
            text: 'webpack|react|concent',
            link: 'https://github.com/tnfe/concent-pro'
          },
        ],
        icon: 'reco-github'
      },
    ],
    displayAllHeaders: true,
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};
