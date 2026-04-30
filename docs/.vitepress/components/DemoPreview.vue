<script setup lang="ts">
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const props = withDefaults(defineProps<{
  code: string
  title?: string
  height?: number
}>(), {
  height: 260
})

const { lang } = useData()
const copied = ref(false)
const showCode = ref(true)

const copyText = computed(() => {
  if (copied.value) return lang.value?.startsWith('zh') ? '已复制' : 'Copied'
  return lang.value?.startsWith('zh') ? '复制' : 'Copy'
})

function onCopy() {
  navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<template>
  <div class="demo-preview">
    <div v-if="title" class="dp-title">{{ title }}</div>
    <div class="dp-stage" :style="{ minHeight: height + 'px' }">
      <div class="dp-viewport" :style="{ minHeight: height + 'px' }" key="preview">
        <slot />
      </div>
    </div>
    <div class="dp-toolbar">
      <button class="dp-toggle-btn" @click="showCode = !showCode">
        {{ showCode ? (lang?.startsWith('zh') ? '收起代码' : 'Collapse') : (lang?.startsWith('zh') ? '展开代码' : 'Expand') }}
      </button>
      <button class="dp-copy-btn" @click="onCopy">{{ copyText }}</button>
    </div>
    <div v-show="showCode" class="dp-code">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.demo-preview {
  margin: 24px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}
.dp-title {
  padding: 12px 16px;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
}
.dp-stage {
  background: var(--vp-c-bg);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dp-viewport {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.dp-toolbar {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 8px 16px;
  border-top: 1px solid var(--vp-c-divider);
}
.dp-toggle-btn,
.dp-copy-btn {
  padding: 4px 12px;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 12px;
  cursor: pointer;
  transition: all .2s;
}
.dp-toggle-btn:hover,
.dp-copy-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
.dp-code {
  border-top: 1px solid var(--vp-c-divider);
  overflow-x: auto;
}
.dp-code pre {
  margin: 0;
  padding: 16px;
  font-size: 13px;
  line-height: 1.7;
}
.dp-code code {
  font-family: var(--vp-font-family-mono);
}
</style>
