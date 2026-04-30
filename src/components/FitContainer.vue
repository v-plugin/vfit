<script setup lang="ts">
import { useFitPosition } from '../useFitPosition'

const props = defineProps({
  /* 自定义缩放因子，传 0 或不传时使用全局 fitScale */
  scale: { type: Number, default: 0 },
  top: { type: Number },
  bottom: { type: Number },
  left: { type: Number },
  right: { type: Number },
  unit: { type: String, default: 'px' },
  z: { type: Number, default: 300 }
})

const { position, origin } = useFitPosition(props)
</script>

<template>
  <div class="vfit-base fit-container"
    :style="{ transform: position.scale, transformOrigin: origin, top: position.top, bottom: position.bottom, left: position.left, right: position.right, zIndex: props.z }">
    <slot />
  </div>

</template>

<style scoped>
.fit-container {
  transform-origin: 0 0;
}
</style>
