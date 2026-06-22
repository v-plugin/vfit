---
title: 快速上手
description: 5 分钟接入 vfit：安装、初始化 createFitScale，用 vfit-lt 等专用组件实现 Vue 3 大屏自适应缩放布局。
---

# 快速上手

## 安装

```bash
npm i vfit
```

## 初始化

```ts
// main.ts
import { createFitScale } from 'vfit'
import 'vfit/style.css' // 必须引入样式文件

app.use(createFitScale({ target: '#app', designHeight: 1080, designWidth: 1920, scaleMode: 'auto' }))
```

::: warning 重要提示
首次使用时必须在入口文件引入样式：`import 'vfit/style.css'`，否则组件样式会丢失。
:::

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
  - `px`：四边位置（`top`/`left`/`right`/`bottom`）均随缩放乘积变化，适合固定像素布局

## 下一步

- [FitContainer 通用组件](/guide/fitcontainer) — 需要四边同时定位或兼容旧代码时使用
- [定位与原点](/guide/positions) — 深入理解像素/百分比模式与 transform-origin 自动推导
- [缩放模式](/guide/scale-modes) — 了解 `height` / `width` / `auto` 三种模式的适用场景
- [API 参考](/guide/api) — 完整参数说明
