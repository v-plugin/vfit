<script setup lang="ts">
import { useFitPosition } from '../useFitPosition'

const props = defineProps({
  /* 自定义缩放因子，传 0 或不传时使用全局 fitScale */
  scale: { type: Number, default: 0 },
  z: { type: Number, default: 300 }
})

const { position, origin } = useFitPosition(props, {
  origin: '0 0',
  scaleKeys: [], // No positioning props to scale
  extraTransform: 'translate(-50%, -50%)'
})
</script>

<template>
  <div class="vfit-base vfit-center"
    :style="{ transform: position.scale, transformOrigin: origin, zIndex: props.z }">
    <slot />
  </div>
</template>

<style scoped>
.vfit-center {
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
}
</style>
