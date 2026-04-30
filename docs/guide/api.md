# API

## `createFitScale(options)`

- `target?: string | HTMLElement`（默认 `#app`）— 观测目标元素。若元素不存在会打印警告。
- `designHeight?: number`（默认 `1080`）
- `designWidth?: number`（默认 `1920`）
- `scaleMode?: 'height' | 'width' | 'auto'`（默认 `auto`）

返回插件对象，安装后在 `app.provide` 中注入全局 `fitScale`（`Ref<number>`），同时挂载到 `globalProperties.$fitScale`。


## `useFitScale()`

在组件内获取当前缩放值 `Ref<number>`。


## `FitPositionProps` 类型

```ts
export interface FitPositionProps {
  scale?: number
  top?: number
  bottom?: number
  left?: number
  right?: number
  unit?: string
}
```


## 专用定位组件

包含 `<vfit-lt>`, `<vfit-rt>`, `<vfit-lb>`, `<vfit-rb>`, `<vfit-center>`。

**四角组件属性：**
- `<vfit-lt>`: `top`, `left`, `unit`, `scale`, `z`
- `<vfit-rt>`: `top`, `right`, `unit`, `scale`, `z`
- `<vfit-lb>`: `bottom`, `left`, `unit`, `scale`, `z`
- `<vfit-rb>`: `bottom`, `right`, `unit`, `scale`, `z`

**居中组件属性：**
- `<vfit-center>`: `scale`, `z`（自动绝对居中，无需定位参数）

> 所有 `vfit-*` 组件共享 `.vfit-base` 公共 CSS 基类。各组件仅声明自身独有的 `transform-origin`。

## `FitContainer` 组件

- `top/bottom/left/right?: number`
- `unit?: 'px' | '%'`（默认 `px`）
- `scale?: number`（自定义缩放因子，传 `0` 或不传则使用全局 `fitScale`）
- `z?: number`（默认 `300`）

### 缩放行为

- `unit='px'`：四边位置（`top`/`left`/`right`/`bottom`）均乘以缩放系数。
- `unit='%'`：位置不变，仅内容缩放。
- `transform-origin` 根据传入的边自动推导。
