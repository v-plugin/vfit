# 示例与场景

## 右上角固定像素距离

```vue
<FitContainer :top="80" :right="40" unit="px">
  <Rankings />
</FitContainer>
```

## 左下角固定像素距离

```vue
<FitContainer :bottom="40" :left="60" unit="px">
  <StatusBar />
</FitContainer>
```

## 居中卡片（百分比坐标）

```vue
<FitContainer :top="50" :left="50" unit="%">
  <div class="card" style="transform: translate(-50%, -50%);">Center</div>
</FitContainer>
```

## 覆盖全局缩放

```vue
<FitContainer :top="120" :left="100" unit="px" :scale="0.8">
  <MiniMap />
</FitContainer>
```

