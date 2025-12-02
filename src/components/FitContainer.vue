<script setup lang="ts">
import { reactive, watch, inject, ref, computed } from 'vue'
import { FitScaleKey } from '../index'

const position = reactive({
  scale: `scale(1)`,
  top: 'auto',
  bottom: 'auto',
  left: 'auto',
  right: 'auto'
})

const props = defineProps({
  scale: { type: Number, default: 0 },
  top: { type: Number },
  bottom: { type: Number },
  left: { type: Number },
  right: { type: Number },
  unit: { type: String, default: 'px' },
  z: { type: Number, default: 300 }
})
const origin = computed(() => {
  const hasRight = props.right !== undefined
  const hasBottom = props.bottom !== undefined
  if (hasRight && hasBottom) return '100% 100%'
  if (hasRight) return '100% 0'
  if (hasBottom) return '0 100%'
  return '0 0'
})
const fitScale = inject(FitScaleKey, ref(1))

watch([() => props.scale, fitScale], () => {
  const s = props.scale && props.scale > 0 ? props.scale : fitScale?.value ?? 1
  position.scale = `scale(${s})`
  const styleKey = ['top', 'bottom', 'left', 'right']
  styleKey.forEach((key) => {
    const val = (props as any)[key]
    if (props.unit === '%') {
      (position as any)[key] = val == undefined ? 'auto' : `${val}${props.unit}`
    } else {
      const needScale = key === 'left' || key === 'top'
        ; (position as any)[key] = val == undefined ? 'auto' : `${needScale ? val * s : val}${props.unit}`
    }
  })
}, { immediate: true })
</script>

<template>
  <div class="fit-container"
    :style="{ transform: position.scale, transformOrigin: origin, top: position.top, bottom: position.bottom, left: position.left, right: position.right, zIndex: props.z }">
    <slot />
  </div>

</template>

<style scoped>
.fit-container {
  position: absolute;
  transform-origin: 0 0;
  z-index: 300;
  will-change: transform;
}
</style>
