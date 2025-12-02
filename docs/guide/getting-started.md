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

## 关键点

- 父容器需设置定位属性：`position: relative`（推荐）或 `absolute`
- 两种坐标单位：
  - `%`：位置不随缩放变化，适合居中/相对位置
  - `px`：位置随缩放乘积变化，适合固定像素布局


