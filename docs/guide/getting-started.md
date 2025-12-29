# 快速上手

## 安装

```bash
npm i vfit
```

## 初始化

```ts
// main.ts
import { createFitScale } from 'vfit'
import 'vfit/style.css'

app.use(createFitScale({ target: '#app', designHeight: 1080, designWidth: 1920, scaleMode: 'auto' }))
```

## 第一个容器

推荐使用 **专用定位组件**（如 `vfit-lt`）来快速布局，它更简洁且易于维护。

```vue
<template>
  <div class="viewport">
    <!-- 左上角，距离顶部/左侧 90px -->
    <vfit-lt :top="90" :left="90">
      <div class="box">内容</div>
    </vfit-lt>
  </div>
</template>

<style scoped>
.viewport { position: relative; width: 100%; height: 100vh; }
.box { width: 120px; height: 80px; }
</style>
```

> 如果需要兼容旧代码或复杂定位，也可以使用 [FitContainer](/guide/fitcontainer) 通用组件。

## 关键点

- 父容器需设置定位属性：`position: relative`（推荐）或 `absolute`
- 两种坐标单位：
  - `%`：位置不随缩放变化，适合居中/相对位置
  - `px`：位置随缩放乘积变化，适合固定像素布局


