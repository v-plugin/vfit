import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'vfit.js',
  description: 'Vue 3 可视化大屏适配方案，提供 FitContainer 组件与 v-fit 指令，支持大屏自适应缩放与像素级精准定位。',
  
  // SEO & URL Optimization
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://web-vfit.netlify.app'
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'keywords', content: 'vue3, vfit, scale, fit-container, data-visualization, dashboard, big-screen, 大屏适配, 可视化大屏, 缩放, 定位' }],
    ['meta', { name: 'author', content: '一颗烂土豆' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'vfit - Vue 3 可视化大屏适配方案' }],
    ['meta', { property: 'og:description', content: '专为大屏数据可视化设计，一键实现全屏自适应与精准定位。' }],
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
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '指南', link: '/guide/getting-started' },
          { text: 'API', link: '/guide/api' },
          { text: '示例', link: '/recipes' },
          { text: '更新日志', link: '/changelog' },
          { text: '联系', link: '/contact' },
          { text: '赞助', link: '/sponsor' },
          {
            text: '生态链接',
            items: [
              { text: 'vfit-react', link: 'https://www.npmjs.com/package/vfit-react' },
              { text: 'RayChart.js', link: 'https://chart3js.netlify.app/' },
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
        footer: {
          message: '作者：一颗烂土豆 · MIT Licensed',
          copyright: '© 2025 一颗烂土豆'
        },
        outline: { label: '本页目录' },
        docFooter: { prev: '上一篇', next: '下一篇' },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        lastUpdatedText: '上次更新',
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'vfit.js',
      description: 'Visualization Big Screen Adapter Solution for Vue 3',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/getting-started' },
          { text: 'API', link: '/en/guide/api' },
          { text: 'Examples', link: '/en/recipes' },
          { text: 'Changelog', link: '/en/changelog' },
          { text: 'Contact', link: '/en/contact' },
          { text: 'Sponsor', link: '/en/sponsor' },
          {
            text: 'Ecosystem',
            items: [
              { text: 'vfit-react', link: 'https://www.npmjs.com/package/vfit-react' },
              { text: 'Mflow', link: 'https://web-mflow.netlify.app/' },
              { text: 'Ecosystem Page', link: '/en/ecosystem' }
            ]
          }
        ],
        sidebar: {
          '/en/guide/': [
            { text: 'Getting Started', link: '/en/guide/getting-started' },
            { text: 'FitContainer', link: '/en/guide/fitcontainer' },
            { text: 'Positioning & Origin', link: '/en/guide/positions' },
            { text: 'Scale Modes', link: '/en/guide/scale-modes' },
            { text: 'API', link: '/en/guide/api' }
          ]
        },
        footer: {
          message: 'Author: 一颗烂土豆 · MIT Licensed',
          copyright: '© 2025 一颗烂土豆'
        },
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        lastUpdatedText: 'Last updated',
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/v-plugin/vfit' }
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results for',
                resetButtonTitle: 'Reset search',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate'
                }
              }
            }
          }
        }
      }
    }
  }
})
