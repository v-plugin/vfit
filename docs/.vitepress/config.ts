import { defineConfig, type HeadConfig } from 'vitepress'

const SITE_URL = 'https://vfit.raychart.cn'

export default defineConfig({
  lang: 'zh-CN',
  title: 'vfit.js',
  description: 'Vue 3 可视化大屏适配方案，提供 FitContainer 及 5 种专用方位定位组件，支持大屏自适应缩放与像素级精准定位。',

  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: SITE_URL
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'keywords', content: 'vue3, vfit, scale, fit-container, data-visualization, dashboard, big-screen, 大屏适配, 可视化大屏, 缩放, 定位' }],
    ['meta', { name: 'author', content: 'RayChart' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'vfit.js' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@RayChart' }],
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

  // 动态注入 hreflang + canonical + og 标签
  transformHead({ pageData, siteConfig, page }) {
    const heads: HeadConfig[] = []
    const isEn = page.startsWith('en/')

    // 规范化路径（去掉 index，统一以 / 结尾或无后缀）
    const normalize = (p: string) =>
      p.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')

    const cleanPage = normalize(page)
    const zhPath = isEn ? cleanPage.replace(/^en\//, '') : cleanPage
    const enPath = isEn ? cleanPage : (cleanPage ? `en/${cleanPage}` : 'en/')

    const zhUrl = `${SITE_URL}/${zhPath}`
    const enUrl = `${SITE_URL}/${enPath}`
    const selfUrl = isEn ? enUrl : zhUrl

    // robots noindex（frontmatter 中 robots: noindex, follow，以及 404 页面）
    const robotsValue = pageData.frontmatter?.robots as string | undefined
    if (robotsValue) {
      heads.push(['meta', { name: 'robots', content: robotsValue }])
    } else if (page === '404.md') {
      heads.push(['meta', { name: 'robots', content: 'noindex, follow' }])
    }

    // Canonical
    heads.push(['link', { rel: 'canonical', href: selfUrl }])

    // Hreflang（自引用 + 对方 + x-default）
    heads.push(['link', { rel: 'alternate', hreflang: 'zh-CN', href: zhUrl }])
    heads.push(['link', { rel: 'alternate', hreflang: 'en', href: enUrl }])
    heads.push(['link', { rel: 'alternate', hreflang: 'x-default', href: zhUrl }])

    // OG URL
    heads.push(['meta', { property: 'og:url', content: selfUrl }])

    // 按语言设置 og:title / og:description / og:image
    if (isEn) {
      const title = pageData.title ? `${pageData.title} | vfit.js` : 'vfit.js — Big Screen Adapter for Vue 3'
      const desc = pageData.description || 'Auto-scale Vue 3 components for any screen resolution. FitContainer + 5 positioning components.'
      heads.push(['meta', { property: 'og:title', content: title }])
      heads.push(['meta', { property: 'og:description', content: desc }])
      heads.push(['meta', { property: 'og:locale', content: 'en_US' }])
      heads.push(['meta', { property: 'og:locale:alternate', content: 'zh_CN' }])
      heads.push(['meta', { property: 'og:image', content: `${SITE_URL}/og-image-en.png` }])
      heads.push(['meta', { name: 'twitter:title', content: title }])
      heads.push(['meta', { name: 'twitter:description', content: desc }])
      heads.push(['meta', { name: 'twitter:image', content: `${SITE_URL}/og-image-en.png` }])
    } else {
      const title = pageData.title ? `${pageData.title} | vfit.js` : 'vfit.js — Vue 3 可视化大屏适配方案'
      const desc = pageData.description || 'Vue 3 大屏适配插件，FitContainer 组件 + 5 种定位组件，自动缩放，精准还原设计稿。'
      heads.push(['meta', { property: 'og:title', content: title }])
      heads.push(['meta', { property: 'og:description', content: desc }])
      heads.push(['meta', { property: 'og:locale', content: 'zh_CN' }])
      heads.push(['meta', { property: 'og:locale:alternate', content: 'en_US' }])
      heads.push(['meta', { property: 'og:image', content: `${SITE_URL}/og-image.png` }])
      heads.push(['meta', { name: 'twitter:title', content: title }])
      heads.push(['meta', { name: 'twitter:description', content: desc }])
      heads.push(['meta', { name: 'twitter:image', content: `${SITE_URL}/og-image.png` }])
    }

    return heads
  },

  appearance: true,

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
            text: '推荐阅读',
            items: [
              { text: '大屏适配理论调研报告', link: 'https://vfit-adapt.raychart.cn' },
              { text: 'vfit.js 大屏适配指南', link: 'https://vfit-guide.raychart.cn' }
            ]
          },
          {
            text: '生态链接',
            items: [
              { text: 'vfit-react', link: 'https://www.npmjs.com/package/vfit-react' },
              { text: 'RayChart.js', link: 'https://raychart.cn/' },
              { text: 'Mflow', link: 'https://mflow.raychart.cn/' },
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
          message: '作者：RayChart · MIT Licensed',
          copyright: '© 2025 RayChart'
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
      description: 'Auto-scale Vue 3 components for any screen resolution. FitContainer + 5 positioning components.',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/getting-started' },
          { text: 'API', link: '/en/guide/api' },
          { text: 'Examples', link: '/en/recipes' },
          { text: 'Changelog', link: '/en/changelog' },
          { text: 'Contact', link: '/en/contact' },
          { text: 'Sponsor', link: '/en/sponsor' },
          {
            text: 'Recommended',
            items: [
              { text: 'Big Screen Adaptation Research', link: 'https://vfit-adapt.raychart.cn' },
              { text: 'vfit.js Adaptation Guide', link: 'https://vfit-guide.raychart.cn' }
            ]
          },
          {
            text: 'Ecosystem',
            items: [
              { text: 'vfit-react', link: 'https://www.npmjs.com/package/vfit-react' },
              { text: 'RayChart.js', link: 'https://raychart.cn/' },
              { text: 'Mflow', link: 'https://mflow.raychart.cn/' },
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
          message: 'Author: RayChart · MIT Licensed',
          copyright: '© 2025 RayChart'
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
