<script setup lang="ts">
import { useFitPosition } from '../useFitPosition'

const props = defineProps({
  scale: { type: Number, default: 0 },
  z: { type: Number, default: 300 }
})

const { position, origin } = useFitPosition(props, {
  origin: '50% 50%',
  scaleKeys: [], // No positioning props to scale
  extraTransform: 'translate(-50%, -50%)'
})
</script>

<template>
  <div class="vfit-center"
    :style="{ transform: position.scale, transformOrigin: origin, zIndex: props.z }">
    <slot />
  </div>
</template>

<style scoped>
.vfit-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 50% 50%;
  z-index: 300;
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
