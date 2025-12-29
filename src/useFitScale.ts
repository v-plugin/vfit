import { inject, ref, type Ref } from 'vue'

export const FitScaleKey = Symbol('FitScale')

export function useFitScale(): Ref<number> {
  const injectedFitScale = inject<Ref<number>>(FitScaleKey, ref(1))
  return injectedFitScale
}
