# vfit

官网：https://web-vfit.netlify.app

作者：一颗烂土豆

Vue 3 的轻量缩放与定位解决方案。通过插件提供全局缩放值，并内置 `FitContainer` 组件，让页面元素在不同分辨率下保持比例与位置一致。

## 安装与初始化

```
npm i vfit
```

```ts
// main.ts
import { createFitScale } from 'vfit'
import 'vfit/style.css'

app.use(createFitScale({ target: '#app', designHeight: 1080, designWidth: 1920, scaleMode: 'auto' }))
```

## 快速上手

- 父容器需设置定位属性：`position: relative`（推荐）或 `absolute`
- 两种坐标单位：
  - `%`：位置不随缩放变化，适合居中/相对位置
  - `px`：位置随缩放乘积变化，适合固定像素布局

### 居中（百分比）

```vue
<template>
  <div class="viewport">
    <FitContainer :top="50" :left="50" unit="%">
      <div class="card">内容</div>
    </FitContainer>
  </div>
</template>

<style scoped>
.viewport { position: relative; width: 100%; height: 100vh; }
.card { transform: translate(-50%, -50%); }
</style>
```

要点：`top/left` 为百分比时，位置不受缩放影响；仅内部内容按比例缩放。

### 像素定位（随缩放）

```vue
<template>
  <div class="viewport">
    <FitContainer :top="90" :left="90" unit="px">
      <div class="box">内容</div>
    </FitContainer>
  </div>
</template>

<style scoped>
.viewport { position: relative; width: 100%; height: 100vh; }
.box { width: 120px; height: 80px; }
</style>
```

要点：容器缩放后，像素坐标会乘以缩放值（如 `left * scale`）。

## API 精简版

- `createFitScale({ target?, designHeight?, designWidth?, scaleMode? })`
  - `target`：监听缩放的容器（默认 `#app`）
  - `designHeight`：设计稿高度（默认 `1080`）
  - `designWidth`：设计稿宽度（默认 `1920`）
  - `scaleMode`：`'height' | 'width' | 'auto'`（默认 `auto`）
    - `height`：按高度缩放，比例为 `容器高度 / 设计稿高度`
    - `width`：按宽度缩放，比例为 `容器宽度 / 设计稿宽度`
    - `auto`：根据容器宽高比与设计比（`设计稿宽度 / 设计稿高度`）自动选择按宽或按高
- `useFitScale()`：在组件内获取当前缩放值 `Ref<number>`
- `FitContainer` 组件属性：
  - `top/bottom/left/right?: number`
  - `unit?: 'px' | '%'`（默认 `px`）
  - `scale?: number`（覆盖全局缩放）

## 小贴士

- 使用 `unit='px'` 时，`top/left` 随缩放变化，`right/bottom` 保持实际像素距离不变
- 使用 `right` 时，缩放原点为右上角；同时设置 `bottom` 与 `right` 时为右下角
- 首次接入时，务必引入样式：`import 'vfit/style.css'`
