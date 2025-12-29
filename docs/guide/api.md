# API

## `createFitScale(options)`

- `target?: string | HTMLElement`（默认 `#app`）
- `designHeight?: number`（默认 `1080`）
- `designWidth?: number`（默认 `1920`）
- `scaleMode?: 'height' | 'width' | 'auto'`（默认 `auto`）

返回插件对象，安装后在 `app.provide` 中注入全局缩放。


## `useFitScale()`

在组件内获取当前缩放值 `Ref<number>`。


## 专用定位组件

包含 `<vfit-lt>`, `<vfit-rt>`, `<vfit-lb>`, `<vfit-rb>`, `<vfit-center>`。

**四角组件属性：**
- `<vfit-lt>`: `top`, `left`, `unit`, `scale`, `z`
- `<vfit-rt>`: `top`, `right`, `unit`, `scale`, `z`
- `<vfit-lb>`: `bottom`, `left`, `unit`, `scale`, `z`
- `<vfit-rb>`: `bottom`, `right`, `unit`, `scale`, `z`

**居中组件属性：**
- `<vfit-center>`: `scale`, `z` (自动绝对居中，无需定位参数)

## `FitContainer` 组件

- `top/bottom/left/right?: number`
- `unit?: 'px' | '%'`（默认 `px`）
- `scale?: number`（覆盖全局缩放）
- `z?: number`（默认 `300`）


