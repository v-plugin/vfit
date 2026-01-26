import type { App } from 'vue'
import { ref } from 'vue'
import { observeScale } from './scale'
import { FitScaleKey } from './useFitScale'
import FitContainer from './components/FitContainer.vue'
import VFitLT from './components/VFitLT.vue'
import VFitRT from './components/VFitRT.vue'
import VFitLB from './components/VFitLB.vue'
import VFitRB from './components/VFitRB.vue'
import VFitCenter from './components/VFitCenter.vue'


export type FitScaleOptions = { target?: string | HTMLElement; designHeight?: number; designWidth?: number; scaleMode?: 'height' | 'width' | 'auto' }

export function createFitScale(options: FitScaleOptions = {}) {
  const fitScale = ref(1)
  let fitScaleObserver: ResizeObserver | null = null
  return {
    install(app: App) {
      const rootEl = typeof options.target === 'string' ? document.querySelector(options.target) : options.target
      const target = (rootEl || document.querySelector('#app')) as HTMLElement
      fitScaleObserver = observeScale(target, options.designHeight ?? 1080, (v) => { fitScale.value = v }, options.scaleMode ?? 'auto', options.designWidth ?? 1920)
      app.provide(FitScaleKey, fitScale)
      ;(app.config.globalProperties as any).$fitScale = fitScale
      app.component('FitContainer', FitContainer)
      app.component('vfit-lt', VFitLT)
      app.component('vfit-rt', VFitRT)
      app.component('vfit-lb', VFitLB)
      app.component('vfit-rb', VFitRB)
      app.component('vfit-center', VFitCenter)
    }
  }
}

export { FitContainer, VFitLT, VFitRT, VFitLB, VFitRB, VFitCenter }
export { useFitScale } from './useFitScale'
