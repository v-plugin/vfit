<script setup lang="ts">
import { useFitPosition } from '../useFitPosition'

const props = defineProps({
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
  <div class="vfit-lb"
    :style="{ transform: position.scale, transformOrigin: origin, bottom: position.bottom, left: position.left, zIndex: props.z }">
    <slot />
  </div>
</template>

<style scoped>
.vfit-lb {
  position: absolute;
  transform-origin: 0 100%;
  z-index: 300;
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
