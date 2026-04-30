import DefaultTheme from 'vitepress/theme'
import { computed, defineComponent, h, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: defineComponent({
    name: 'VfitLayout',
    setup() {
      const { lang } = useData()
      const showPopup = ref(false)
      const dismissed = ref(false)
      const popupSeenKey = 'vfit-dist-popup-seen-in-tab'
      const isZh = computed(() => lang.value?.startsWith('zh'))
      const popupTitle = computed(() => isZh.value ? '推荐阅读' : 'Recommended Reading')
      const popupDesc = computed(() =>
        isZh.value
          ? '推荐导读以下两份内容：'
          : 'Recommended reading:'
      )
      const laterText = computed(() => isZh.value ? '稍后查看' : 'Later')
      const reportTitle = computed(() => isZh.value ? '《大屏适配理论调研报告》' : 'Big Screen Adaptation Theory Research Report')
      const guideTitle = computed(() => isZh.value ? '《vfit.js 大屏适配指南》' : 'vfit.js Big Screen Adaptation Guide')

      const updatePopup = () => {
        if (dismissed.value) return
        showPopup.value = true
      }

      const closePopup = () => {
        dismissed.value = true
        showPopup.value = false
        window.sessionStorage.setItem(popupSeenKey, '1')
      }

      const markSeen = () => {
        dismissed.value = true
        showPopup.value = false
        window.sessionStorage.setItem(popupSeenKey, '1')
      }

      const openReport = () => {
        markSeen()
        window.open('https://vfit-adapt.raychart.cn', '_blank', 'noopener')
      }

      const openGuide = () => {
        markSeen()
        window.open('https://vfit-guide.raychart.cn', '_blank', 'noopener')
      }

      onMounted(() => {
        dismissed.value = window.sessionStorage.getItem(popupSeenKey) === '1'
        updatePopup()
      })

      return () => h('div', [
        h(DefaultTheme.Layout),
        showPopup.value
          ? h('div', { class: 'vfit-popup-mask' }, [
              h('div', { class: 'vfit-popup' }, [
                h('div', { class: 'vfit-popup-title' }, popupTitle.value),
                h('div', { class: 'vfit-popup-desc' }, popupDesc.value),
                h('div', { class: 'vfit-popup-links' }, [
                  h('button', { class: 'vfit-popup-link', type: 'button', onClick: openReport }, [
                    h('div', { class: 'vfit-popup-link-title' }, reportTitle.value),
                    h('div', { class: 'vfit-popup-link-url' }, 'vfit-adapt.raychart.cn')
                  ]),
                  h('button', { class: 'vfit-popup-link', type: 'button', onClick: openGuide }, [
                    h('div', { class: 'vfit-popup-link-title' }, guideTitle.value),
                    h('div', { class: 'vfit-popup-link-url' }, 'vfit-guide.raychart.cn')
                  ])
                ]),
                h('div', { class: 'vfit-popup-actions' }, [
                  h('button', { class: 'vfit-popup-btn ghost', type: 'button', onClick: closePopup }, laterText.value)
                ])
              ])
            ])
          : null
      ])
    }
  })
}
