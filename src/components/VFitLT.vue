<script setup lang="ts">
import { useFitPosition } from '../useFitPosition'

const props = defineProps({
  scale: { type: Number, default: 0 },
  top: { type: Number },
  left: { type: Number },
  unit: { type: String, default: 'px' },
  z: { type: Number, default: 300 }
})

const { position, origin } = useFitPosition(props)
</script>

<template>
  <div class="vfit-lt"
    :style="{ transform: position.scale, transformOrigin: origin, top: position.top, left: position.left, zIndex: props.z }">
    <slot />
  </div>
</template>

<style scoped>
.vfit-lt {
  position: absolute;
  transform-origin: 0 0;
  z-index: 300;
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
