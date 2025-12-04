# vfit-react

[vfit](https://github.com/v-plugin/vfit) 的 React 版本 - 一个轻量级的大屏适配与定位解决方案。

## 特性

- **全局缩放提供者**：自动计算并根据窗口/容器大小提供全局缩放值。
- **智能适配容器**：自动定位并缩放子元素，支持固定像素和百分比定位。
- **灵活模式**：支持基于宽度、高度或自动检测的缩放模式。

## 安装

```bash
npm install vfit-react
```

## 使用方法

### 1. 配置 Provider

使用 `FitScaleProvider` 包裹你的应用。

```tsx
// App.tsx
import React from 'react'
import { FitScaleProvider } from 'vfit-react'

const App = () => {
  return (
    <FitScaleProvider options={{ designHeight: 1080, designWidth: 1920, scaleMode: 'auto' }}>
      <MyDashboard />
    </FitScaleProvider>
  )
}

export default App
```

### 2. 使用 FitContainer

使用 `FitContainer` 来定位元素。它会自动应用全局缩放。

```tsx
import React from 'react'
import { FitContainer } from 'vfit-react'

const MyDashboard = () => {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* 百分比定位 - 保持居中 */}
      <FitContainer top={50} left={50} unit="%">
        <div style={{ transform: 'translate(-50%, -50%)', border: '1px solid red' }}>
          Centered Content
        </div>
      </FitContainer>

      {/* 像素定位 - 随屏幕缩放 */}
      <FitContainer top={100} left={100} unit="px">
        <div style={{ width: 200, height: 100, background: 'lightblue' }}>
          Scaled Box
        </div>
      </FitContainer>
    </div>
  )
}
```

### 3. useFitScale Hook

你也可以直接获取原始缩放值。

```tsx
import React from 'react'
import { useFitScale } from 'vfit-react'

const ScaleDisplay = () => {
  const scale = useFitScale()
  return <div>Current Scale: {scale}</div>
}
```

## API

### FitScaleProvider 属性 (Props)

| 属性 | 类型 | 默认值 | 描述 |
|------|------|---------|-------------|
| options.target | `string \| HTMLElement` | `document.body` | 监听调整大小的容器 |
| options.designHeight | `number` | `1080` | 设计稿高度 |
| options.designWidth | `number` | `1920` | 设计稿宽度 |
| options.scaleMode | `'height' \| 'width' \| 'auto'` | `'auto'` | 缩放模式 |

### FitContainer 属性 (Props)

| 属性 | 类型 | 默认值 | 描述 |
|------|------|---------|-------------|
| top | `number` | - | 顶部距离 |
| bottom | `number` | - | 底部距离 |
| left | `number` | - | 左侧距离 |
| right | `number` | - | 右侧距离 |
| unit | `'px' \| '%'` | `'px'` | 定位单位 |
| z | `number` | `300` | 层级 (z-index) |
| scale | `number` | - | 覆盖全局缩放值 |
| className | `string` | - | 自定义类名 |
| style | `CSSProperties` | - | 自定义样式 |

## License

MIT
