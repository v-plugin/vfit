# FitContainer

`FitContainer` 是绝对定位并按全局缩放值进行缩放的容器组件。常见四角或居中布局推荐使用专用定位组件（`vfit-lt` / `vfit-rt` / `vfit-lb` / `vfit-rb` / `vfit-center`），代码更简洁。

## 属性

- `top/bottom/left/right?: number`
- `unit?: 'px' | '%'`（默认 `px`）
- `scale?: number`（自定义缩放因子，传 `0` 或不传则使用全局 `fitScale`）
- `z?: number`（默认 `300`）

## 行为

- 使用 `unit='px'` 时：四边位置（`top`/`left`/`right`/`bottom`）均随缩放变化（值乘以 `scale`），确保元素按比例贴合设计稿。
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
