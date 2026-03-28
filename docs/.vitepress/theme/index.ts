import DefaultTheme from 'vitepress/theme'
import { computed, defineComponent, h, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: defineComponent({
    name: 'VfitLayout',
    setup() {
      const { lang } = useData()
      const route = useRoute()
      const showPopup = ref(false)
      const dismissed = ref(false)
      const isZh = computed(() => lang.value?.startsWith('zh'))
      const popupTitle = computed(() => isZh.value ? '推荐阅读' : 'Recommended Reading')
      const popupDesc = computed(() =>
        isZh.value
          ? '发现《数字孪生大屏可视化适配方案》，覆盖分辨率、DPI、性能优化与多终端适配实战。'
          : 'Check the Big Screen Adaptation Plan covering resolution, DPI, performance optimization, and multi-device practices.'
      )
      const laterText = computed(() => isZh.value ? '稍后查看' : 'Later')
      const openText = computed(() => isZh.value ? '立即查看' : 'Open Now')

      const updatePopup = () => {
        if (dismissed.value) return
        if (route.path.includes('/dist/index.html')) {
          showPopup.value = false
          return
        }
        showPopup.value = true
      }

      const closePopup = () => {
        dismissed.value = true
        showPopup.value = false
      }

      const openPlan = () => {
        dismissed.value = true
        showPopup.value = false
        window.open('/dist/index.html', '_blank', 'noopener')
      }

      onMounted(updatePopup)
      watch(() => route.path, updatePopup)

      return () => h('div', [
        h(DefaultTheme.Layout),
        showPopup.value
          ? h('div', { class: 'vfit-popup-mask' }, [
              h('div', { class: 'vfit-popup' }, [
                h('div', { class: 'vfit-popup-title' }, popupTitle.value),
                h('div', { class: 'vfit-popup-desc' }, popupDesc.value),
                h('div', { class: 'vfit-popup-actions' }, [
                  h('button', { class: 'vfit-popup-btn ghost', type: 'button', onClick: closePopup }, laterText.value),
                  h('button', { class: 'vfit-popup-btn primary', type: 'button', onClick: openPlan }, openText.value)
                ])
              ])
            ])
          : null
      ])
    }
  })
}
