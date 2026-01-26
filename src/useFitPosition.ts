import { reactive, watch, inject, ref, computed } from 'vue'
import { FitScaleKey } from './useFitScale'

export function useFitPosition(props: any, options: {
  origin?: string
  scaleKeys?: string[]
  extraTransform?: string
} = {}) {
  const position = reactive({
    scale: `scale(1) translateZ(0)`,
    top: 'auto',
    bottom: 'auto',
    left: 'auto',
    right: 'auto'
  })

  const origin = computed(() => {
    if (options.origin) return options.origin
    // Default fallback (similar to FitContainer)
    const hasRight = props.right !== undefined
    const hasBottom = props.bottom !== undefined
    if (hasRight && hasBottom) return '100% 100%'
    if (hasRight) return '100% 0'
    if (hasBottom) return '0 100%'
    return '0 0'
  })

  const fitScale = inject(FitScaleKey, ref(1))

  watch([
    () => props.scale,
    () => props.unit,
    () => props.top,
    () => props.bottom,
    () => props.left,
    () => props.right,
    fitScale
  ], () => {
    const s = props.scale && props.scale > 0 ? props.scale : fitScale?.value ?? 1
    const baseTransform = `scale(${s}) translateZ(0)`
    position.scale = options.extraTransform ? `${baseTransform} ${options.extraTransform}` : baseTransform
    const styleKey = ['top', 'bottom', 'left', 'right']
    styleKey.forEach((key) => {
      const val = (props as any)[key]
      if (props.unit === '%') {
        (position as any)[key] = val == undefined ? 'auto' : `${val}${props.unit}`
      } else {
        const needScale = options.scaleKeys ? options.scaleKeys.includes(key) : (key === 'left' || key === 'top')
        ; (position as any)[key] = val == undefined ? 'auto' : `${needScale ? val * s : val}${props.unit}`
      }
    })
  }, { immediate: true })

  return { position, origin }
}
