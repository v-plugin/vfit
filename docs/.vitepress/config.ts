import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'vfit.js',
  description: 'Vue 3 的轻量缩放与定位解决方案，提供 FitContainer 组件与 v-fit 指令，支持大屏适配、自动缩放与像素级定位。',
  
  // SEO & URL Optimization
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://web-vfit.netlify.app'
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'keywords', content: 'vue3, vfit, scale, fit-container, data-visualization, dashboard, 大屏适配, 缩放, 定位, 前端组件' }],
    ['meta', { name: 'author', content: '一颗烂土豆' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'vfit - Vue 3 轻量级大屏适配方案' }],
    ['meta', { property: 'og:description', content: '提供 FitContainer 组件与 v-fit 指令，轻松实现大屏数据可视化项目的自适应缩放与精确定位。' }],
    ['meta', { property: 'og:image', content: 'https://web-vfit.netlify.app/logo.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?3f9898ae59cecad3e95da9f1499005ee";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],

  appearance: 'light',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '指南', link: '/guide/getting-started' },
      { text: 'API', link: '/guide/api' },
      { text: '示例', link: '/recipes' },
    
      { text: '联系', link: '/contact' },
        { text: '赞助', link: '/sponsor' },
      {
        text: '生态链接',
        items: [
          { text: 'Mflow', link: 'https://web-mflow.netlify.app/' },
          { text: '生态卡片页', link: '/ecosystem' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        { text: '快速上手', link: '/guide/getting-started' },
        { text: 'FitContainer', link: '/guide/fitcontainer' },
        { text: '定位与原点', link: '/guide/positions' },
        { text: '缩放模式', link: '/guide/scale-modes' },
        { text: 'API', link: '/guide/api' }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/v-plugin/vfit' }
    ],
    outline: 'deep',
    footer: {
      message: '作者：一颗烂土豆 · MIT Licensed',
      copyright: '© 2025 一颗烂土豆'
    },
    search: {
      provider: 'local'
    }
  }
})
