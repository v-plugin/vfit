# FitContainer

`FitContainer` 是绝对定位并按全局缩放值进行缩放的容器组件。

## 属性

- `top/bottom/left/right?: number`
- `unit?: 'px' | '%'`（默认 `px`）
- `scale?: number`（覆盖全局缩放）
- `z?: number`（默认 `300`）

## 行为

- 使用 `unit='px'` 时：
  - `top/left` 随缩放变化（值乘以 `scale`）
  - `right/bottom` 不随缩放变化（保持屏幕实际像素距离）
- 使用 `unit='%'` 时：位置不随缩放变化，仅内容缩放。


## 原点（transform-origin）

根据传入的边设置缩放原点：

- `right && bottom` → `100% 100%`
- `right` → `100% 0`
- `bottom` → `0 100%`
- 其他 → `0 0`


## 示例

右上角固定像素距离：

```vue
<FitContainer :top="80" :right="40" unit="px">
  <Rankings />
</FitContainer>
```

居中并按比例缩放：

```vue
<FitContainer :top="50" :left="50" unit="%">
  <div class="card">内容</div>
</FitContainer>
```
