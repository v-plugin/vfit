<script setup lang="ts">
import { useFitPosition } from '../useFitPosition'

const props = defineProps({
  scale: { type: Number, default: 0 },
  bottom: { type: Number },
  right: { type: Number },
  unit: { type: String, default: 'px' },
  z: { type: Number, default: 300 }
})

const { position, origin } = useFitPosition(props, {
  origin: '100% 100%',
  scaleKeys: ['bottom', 'right']
})
</script>

<template>
  <div class="vfit-rb"
    :style="{ transform: position.scale, transformOrigin: origin, bottom: position.bottom, right: position.right, zIndex: props.z }">
    <slot />
  </div>
</template>

<style scoped>
.vfit-rb {
  position: absolute;
  transform-origin: 100% 100%;
  z-index: 300;
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
