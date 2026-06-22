import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { defineComponent, h, onMounted, ref, computed } from 'vue'
import { useData } from 'vitepress'
import './style.css'
import VFitLT from '../../../src/components/VFitLT.vue'
import VFitRT from '../../../src/components/VFitRT.vue'
import VFitLB from '../../../src/components/VFitLB.vue'
import VFitRB from '../../../src/components/VFitRB.vue'
import VFitCenter from '../../../src/components/VFitCenter.vue'
import '../../../src/style.css'
import LayoutDemo from '../components/LayoutDemo.vue'


const ZipolyCard = defineComponent({
  name: 'ZipolyCard',
  setup() {
    const visible = ref(false)
    const { lang } = useData()
    const isZh = computed(() => lang.value?.startsWith('zh'))

    const tag    = computed(() => isZh.value ? '来自作者的推荐' : 'From the Author')
    const title  = computed(() => isZh.value ? '数字孪生 3D 模型太大？' : 'Digital Twin 3D Too Large?')
    const body   = computed(() =>
      isZh.value
        ? 'Zipoly — 双引擎压缩工作台\nDraco + Meshopt · 体积最高缩减 90%\n加载提速 10× · 完全离线 · 数据不出本地'
        : 'Zipoly — Dual-engine model optimizer\nDraco + Meshopt · Up to 90% size reduction\n10× faster loading · Fully offline'
    )
    const cta    = computed(() => isZh.value ? '免费体验 →' : 'Try Free →')
    const later  = computed(() => isZh.value ? '稍后再说' : 'Later')

    const open = () => {
      window.open('https://zipoly.netlify.app', '_blank', 'noopener')
      dismiss()
    }
    const dismiss = () => {
      visible.value = false
    }

    onMounted(() => {
      setTimeout(() => { visible.value = true }, 3000)
    })

    return () => {
      if (!visible.value) return null

      const features = isZh.value
        ? ['Draco + Meshopt 双引擎', 'GLB / FBX / OBJ 等 7 种格式', '完全离线 · 数据不出本地', '批量处理 · 体检诊断']
        : ['Draco + Meshopt engines', '7 formats incl. GLB / FBX', 'Fully offline · Data stays local', 'Batch process · Health check']

      return h('div', { class: 'zp-mask', onClick: dismiss }, [
        h('div', { class: 'zp-card', onClick: (e: MouseEvent) => e.stopPropagation() }, [

          // ── Hero 区：深色背景 + 网格 + 标题
          h('div', { class: 'zp-hero' }, [
            h('div', { class: 'zp-hero-grid' }),          // 网格装饰
            h('div', { class: 'zp-hero-glow' }),          // 光晕
            h('button', {                                  // 关闭按钮放 hero 内
              class: 'zp-card-x',
              type: 'button',
              'aria-label': 'close',
              onClick: dismiss
            }, '×'),
            h('div', { class: 'zp-hero-content' }, [
              h('span', { class: 'zp-tag' }, tag.value),
              h('h2', { class: 'zp-title' }, title.value),
              // 三列数字
              h('div', { class: 'zp-stats' }, [
                h('div', { class: 'zp-stat' }, [
                  h('div', { class: 'zp-stat-num' }, '90%'),
                  h('div', { class: 'zp-stat-label' }, isZh.value ? '最大压缩率' : 'Max reduction')
                ]),
                h('div', { class: 'zp-stat-sep' }),
                h('div', { class: 'zp-stat' }, [
                  h('div', { class: 'zp-stat-num' }, '10×'),
                  h('div', { class: 'zp-stat-label' }, isZh.value ? '加载提速' : 'Load speed')
                ]),
                h('div', { class: 'zp-stat-sep' }),
                h('div', { class: 'zp-stat' }, [
                  h('div', { class: 'zp-stat-num' }, '7'),
                  h('div', { class: 'zp-stat-label' }, isZh.value ? '支持格式' : 'Formats')
                ]),
              ])
            ])
          ]),

          // ── 下方白色区：feature pills + 按钮
          h('div', { class: 'zp-body' }, [
            h('ul', { class: 'zp-pills' },
              features.map(f => h('li', { class: 'zp-pill' }, [
                h('span', { class: 'zp-pill-dot' }),
                f
              ]))
            ),
            h('div', { class: 'zp-actions' }, [
              h('button', { class: 'zp-btn-primary', type: 'button', onClick: open }, [
                cta.value,
              ]),
              h('button', { class: 'zp-btn-ghost', type: 'button', onClick: dismiss }, later.value)
            ])
          ])
        ])
      ])
    }
  }
})

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('vfit-lt', VFitLT)
    app.component('vfit-rt', VFitRT)
    app.component('vfit-lb', VFitLB)
    app.component('vfit-rb', VFitRB)
    app.component('vfit-center', VFitCenter)
    app.component('LayoutDemo', LayoutDemo)
  },
  Layout: defineComponent({
    name: 'VfitLayout',
    setup() {
      return () => h('div', [
        h(DefaultTheme.Layout),
        h(ZipolyCard)
      ])
    }
  })
} satisfies Theme
