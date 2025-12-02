# 定位与原点

## 百分比与像素

- 百分比：位置不受缩放影响，适合相对布局（居中、四角偏移）。
- 像素：位置受缩放影响，`top/left` 与缩放成正比，`right/bottom` 保持实际像素距离不变。


## 四角组合

- 左上（`top + left`）
- 右上（`top + right`）
- 左下（`bottom + left`）
- 右下（`bottom + right`）


## 实战示例

右下角固定 40px，顶部相对比例 80px：

```vue
<FitContainer :top="80" :right="40" unit="px">
  <Widget />
</FitContainer>
```

居中卡片：

```vue
<FitContainer :top="50" :left="50" unit="%">
  <div class="card" style="transform: translate(-50%, -50%);">中心</div>
</FitContainer>
```
