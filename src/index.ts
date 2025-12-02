import type { App, Ref } from 'vue'
import { ref, inject } from 'vue'
import { observeScale } from './scale'
import FitContainer from './components/FitContainer.vue'

export const FitScaleKey = Symbol('FitScale')

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
    }
  }
}

export function useFitScale(): Ref<number> {
  const injectedFitScale = inject<Ref<number>>(FitScaleKey, ref(1))
  return injectedFitScale
}

export { FitContainer }