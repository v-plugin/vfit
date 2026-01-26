<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  // Check if already seen in this session
  const hasSeen = sessionStorage.getItem('vfit-raychart-announcement')
  if (!hasSeen) {
    show.value = true
  }
})

const close = () => {
  show.value = false
  sessionStorage.setItem('vfit-raychart-announcement', 'true')
}

const go = () => {
  close()
  window.open('https://chart3js.netlify.app/', '_blank')
}
</script>

<template>
  <div v-if="show" class="announcement-overlay">
    <div class="announcement-modal">
      <div class="modal-content">
        <h3>🚀 新生态工具发布</h3>
        <p class="desc">
          <strong>RayChart.js</strong><br>
          打造好用的 Web 3D 可视化图表引擎
        </p>
        <div class="actions">
          <button class="btn primary" @click="go">立即查看</button>
          <button class="btn secondary" @click="close">继续浏览</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.announcement-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
}

.announcement-modal {
  background: var(--vp-c-bg);
  padding: 30px;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--vp-c-divider);
  text-align: center;
  animation: popIn 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

@keyframes popIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

h3 {
  margin: 0 0 16px;
  font-size: 24px;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}

.desc {
  margin-bottom: 24px;
  line-height: 1.6;
  font-size: 16px;
  color: var(--vp-c-text-1);
}

.actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn {
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn.primary {
  background: var(--vp-c-brand-1);
  color: white;
}

.btn.primary:hover {
  background: var(--vp-c-brand-2);
}

.btn.secondary {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.btn.secondary:hover {
  background: var(--vp-c-bg-mute);
}
</style>
