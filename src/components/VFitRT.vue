<script setup lang="ts">
import { useFitPosition } from '../useFitPosition'

const props = defineProps({
  scale: { type: Number, default: 0 },
  top: { type: Number },
  right: { type: Number },
  unit: { type: String, default: 'px' },
  z: { type: Number, default: 300 }
})

const { position, origin } = useFitPosition(props, {
  origin: '100% 0',
  scaleKeys: ['top', 'right']
})
</script>

<template>
  <div class="vfit-rt"
    :style="{ transform: position.scale, transformOrigin: origin, top: position.top, right: position.right, zIndex: props.z }">
    <slot />
  </div>
</template>

<style scoped>
.vfit-rt {
  position: absolute;
  transform-origin: 100% 0;
  z-index: 300;
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
