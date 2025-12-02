# 缩放模式

全局缩放由 `createFitScale` 提供，内部使用 `ResizeObserver` 计算缩放值。

- `height`：按高度缩放，比例为 `容器高度 / 设计稿高度`
- `width`：按宽度缩放，比例为 `容器宽度 / 设计稿宽度`
- `auto`：自动选择按宽或按高，以保持设计比不变


示例：

```ts
app.use(createFitScale({
  target: '#app',
  designHeight: 1080,
  designWidth: 1920,
  scaleMode: 'auto'
}))
```
