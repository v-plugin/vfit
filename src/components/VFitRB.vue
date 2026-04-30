<script setup lang="ts">
import { useFitPosition } from '../useFitPosition'

const props = defineProps({
  /* 自定义缩放因子，传 0 或不传时使用全局 fitScale */
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
  <div class="vfit-base vfit-rb"
    :style="{ transform: position.scale, transformOrigin: origin, bottom: position.bottom, right: position.right, zIndex: props.z }">
    <slot />
  </div>
</template>

<style scoped>
.vfit-rb {
  transform-origin: 100% 100%;
}
</style>
