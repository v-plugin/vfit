<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import { FitScaleKey } from '../../../src/useFitScale'

const designWidth = 1920
const designHeight = 1080

/* 容器尺寸 */
const stageW = ref(720)
const stageH = ref(400)

/* 自动计算缩放：模拟 vfit auto 模式 */
const autoScale = computed(() => {
  const ratio = designWidth / designHeight
  const rectRatio = stageW.value / stageH.value
  if (rectRatio < ratio) {
    return +(stageW.value / designWidth).toFixed(3)
  }
  return +(stageH.value / designHeight).toFixed(3)
})

/* 手动缩放覆盖 */
const scaleMode = ref<'auto' | 'manual'>('auto')
const manualScale = ref(0.5)

const scale = computed(() => scaleMode.value === 'auto' ? autoScale.value : manualScale.value)

provide(FitScaleKey, scale)

const topVal = ref(20)
const leftVal = ref(20)
const rightVal = ref(20)
const bottomVal = ref(20)
const unit = ref<'px' | '%'>('px')

const stageStyle = computed(() => ({
  width: stageW.value + 'px',
  height: stageH.value + 'px'
}))

const aspectLabel = computed(() => {
  const r = stageW.value / stageH.value
  if (r > 2.2) return '21:9 超宽'
  if (r > 1.7) return '16:9 标准'
  if (r > 1.3) return '4:3'
  if (r > 0.9) return '1:1'
  return '竖屏'
})

const presetAspect = (w: number, h: number) => {
  stageW.value = w
  stageH.value = h
}
</script>

<template>
  <div class="ld-root">
    <div class="ld-controls">
      <div class="ld-section-label">容器尺寸</div>
      <div class="ld-ctrl-group">
        <label>预设比例</label>
        <div class="ld-btn-row">
          <button @click="presetAspect(960, 400)">21:9</button>
          <button @click="presetAspect(720, 400)">16:9</button>
          <button @click="presetAspect(520, 400)">4:3</button>
          <button @click="presetAspect(400, 400)">1:1</button>
          <button @click="presetAspect(300, 500)">竖屏</button>
        </div>
      </div>
      <div class="ld-ctrl-group">
        <label>宽度</label>
        <input type="range" v-model.number="stageW" min="200" max="960" step="10" />
        <span>{{ stageW }}px</span>
      </div>
      <div class="ld-ctrl-group">
        <label>高度</label>
        <input type="range" v-model.number="stageH" min="150" max="600" step="10" />
        <span>{{ stageH }}px</span>
      </div>
      <div class="ld-current-ratio">
        当前: {{ stageW }} × {{ stageH }} <b class="ratio-tag">{{ aspectLabel }}</b>
      </div>
    </div>

    <div class="ld-controls">
      <div class="ld-section-label">缩放 &amp; 定位参数</div>
      <div class="ld-ctrl-group">
        <label>缩放模式</label>
        <div class="ld-btn-row">
          <button :class="{ active: scaleMode === 'auto' }" @click="scaleMode = 'auto'">auto 自动</button>
          <button :class="{ active: scaleMode === 'manual' }" @click="scaleMode = 'manual'">手动</button>
        </div>
      </div>
      <div v-if="scaleMode === 'auto'" class="ld-ctrl-group">
        <label>当前 scale</label>
        <span class="ld-auto-scale">{{ scale }}x</span>
        <span class="ld-hint">({{ stageW }}px / {{ designWidth }}px → {{ (stageW / designWidth).toFixed(3) }} , {{ stageH }}px / {{ designHeight }}px → {{ (stageH / designHeight).toFixed(3) }})</span>
      </div>
      <div v-else class="ld-ctrl-group">
        <label>scale</label>
        <div class="ld-btn-row">
          <button :class="{ active: manualScale === 0.3 }" @click="manualScale = 0.3">0.3x</button>
          <button :class="{ active: manualScale === 0.5 }" @click="manualScale = 0.5">0.5x</button>
          <button :class="{ active: manualScale === 0.8 }" @click="manualScale = 0.8">0.8x</button>
          <button :class="{ active: manualScale === 1.2 }" @click="manualScale = 1.2">1.2x</button>
        </div>
        <input type="range" v-model.number="manualScale" min="0.1" max="2" step="0.05" />
        <span>{{ manualScale }}x</span>
      </div>
      <div class="ld-ctrl-group">
        <label>unit</label>
        <div class="ld-btn-row">
          <button :class="{ active: unit === 'px' }" @click="unit = 'px'">px</button>
          <button :class="{ active: unit === '%' }" @click="unit = '%'">%</button>
        </div>
      </div>
      <div class="ld-ctrl-group">
        <label>top</label>
        <input type="range" v-model.number="topVal" min="0" :max="unit === '%' ? 80 : 120" />
        <span>{{ topVal }}{{ unit }}</span>
      </div>
      <div class="ld-ctrl-group">
        <label>left</label>
        <input type="range" v-model.number="leftVal" min="0" :max="unit === '%' ? 80 : 120" />
        <span>{{ leftVal }}{{ unit }}</span>
      </div>
      <div class="ld-ctrl-group">
        <label>right</label>
        <input type="range" v-model.number="rightVal" min="0" :max="unit === '%' ? 80 : 120" />
        <span>{{ rightVal }}{{ unit }}</span>
      </div>
      <div class="ld-ctrl-group">
        <label>bottom</label>
        <input type="range" v-model.number="bottomVal" min="0" :max="unit === '%' ? 80 : 120" />
        <span>{{ bottomVal }}{{ unit }}</span>
      </div>
    </div>

    <div class="ld-stage-wrapper">
      <div class="ld-stage" :style="stageStyle">
        <div class="ld-grid"></div>
        <div class="ld-size-badge">{{ stageW }}×{{ stageH }}</div>

        <vfit-lt :top="topVal" :left="leftVal" :unit="unit">
          <div class="ld-box tl-box">vfit-lt</div>
        </vfit-lt>

        <vfit-rt :top="topVal" :right="rightVal" :unit="unit">
          <div class="ld-box tr-box">vfit-rt</div>
        </vfit-rt>

        <vfit-lb :bottom="bottomVal" :left="leftVal" :unit="unit">
          <div class="ld-box lb-box">vfit-lb</div>
        </vfit-lb>

        <vfit-rb :bottom="bottomVal" :right="rightVal" :unit="unit">
          <div class="ld-box rb-box">vfit-rb</div>
        </vfit-rb>

        <vfit-center>
          <div class="ld-box center-box">vfit-center</div>
        </vfit-center>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ld-root {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.ld-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  align-items: center;
}
.ld-section-label {
  width: 100%;
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-transform: uppercase;
  letter-spacing: .5px;
  margin-bottom: -4px;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 4px;
}
.ld-ctrl-group {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
}
.ld-ctrl-group label {
  color: var(--vp-c-text-2);
  white-space: nowrap;
  font-weight: 500;
  min-width: 32px;
}
.ld-btn-row {
  display: flex;
  gap: 4px;
}
.ld-btn-row button {
  padding: 2px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 12px;
  cursor: pointer;
  transition: all .15s;
}
.ld-btn-row button:hover { border-color: var(--vp-c-brand-1); }
.ld-btn-row button.active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
.ld-ctrl-group input[type="range"] {
  width: 80px;
  accent-color: var(--vp-c-brand-1);
}
.ld-ctrl-group span {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  min-width: 42px;
  font-variant-numeric: tabular-nums;
}
.ld-current-ratio {
  font-size: 12px;
  color: var(--vp-c-text-2);
  margin-left: auto;
}
.ld-auto-scale {
  color: var(--vp-c-brand-1);
  font-weight: 700;
  font-size: 15px;
  min-width: 42px;
}
.ld-hint {
  font-size: 11px;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-mono);
}
.ratio-tag {
  color: var(--vp-c-brand-1);
}
.ld-stage-wrapper {
  overflow-x: auto;
  border-radius: 8px;
}
.ld-stage {
  position: relative;
  background: #010a1b;
  border: 1px solid rgba(0,228,255,.15);
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  transition: width .2s ease, height .2s ease;
}
.ld-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0,228,255,.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,228,255,.08) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}
.ld-size-badge {
  position: absolute;
  bottom: 6px;
  right: 8px;
  font-size: 10px;
  color: rgba(255,255,255,.25);
  font-family: var(--vp-font-family-mono);
  pointer-events: none;
}
.ld-box {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  border-radius: 4px;
  padding: 6px 14px;
}
.ld-stage :deep(.tl-box) { background: rgba(0,228,255,.25); border: 1px solid #00e4ff; }
.ld-stage :deep(.tr-box) { background: rgba(245,158,11,.25); border: 1px solid #f59e0b; }
.ld-stage :deep(.lb-box) { background: rgba(16,185,129,.25); border: 1px solid #10b981; }
.ld-stage :deep(.rb-box) { background: rgba(59,130,246,.25); border: 1px solid #3b82f6; }
.ld-stage :deep(.center-box) {
  background: rgba(168,85,247,.25);
  border: 2px dashed #a855f7;
  font-size: 21px;
  padding: 16px 32px;
}
</style>
