<script setup lang="ts">
import { useFitPosition } from '../useFitPosition'

const props = defineProps({
  /* 自定义缩放因子，传 0 或不传时使用全局 fitScale */
  scale: { type: Number, default: 0 },
  bottom: { type: Number },
  left: { type: Number },
  unit: { type: String, default: 'px' },
  z: { type: Number, default: 300 }
})

const { position, origin } = useFitPosition(props, {
  origin: '0 100%',
  scaleKeys: ['bottom', 'left']
})
</script>

<template>
  <div class="vfit-base vfit-lb"
    :style="{ transform: position.scale, transformOrigin: origin, bottom: position.bottom, left: position.left, zIndex: props.z }">
    <slot />
  </div>
</template>

<style scoped>
.vfit-lb {
  transform-origin: 0 100%;
}
</style>
