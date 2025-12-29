# 示例与场景

这里展示了常见的大屏布局写法。你可以根据喜好，选择**简洁版（专用组件）**或**通用版（通用组件）**。

::: tip 提示
这两种写法的效果和性能完全一样，只是代码风格不同。
:::

## 1. 左上角 (Logo、天气)

适用于放置 Logo、天气信息等内容。

**✨ 简洁版 (vfit-lt)**
省去了单位，代码更短。
```vue
<vfit-lt :top="20" :left="20">
  <WeatherWidget />
</vfit-lt>
```

**🔧 通用版 (FitContainer)**
需要手动写 `unit="px"`。
```vue
<FitContainer :top="20" :left="20" unit="px">
  <WeatherWidget />
</FitContainer>
```

---

## 2. 右上角 (时间、状态)

适用于放置系统时间、运行状态等。

**✨ 简洁版 (vfit-rt)**
自动设置了缩放原点（右上角），不用操心。
```vue
<vfit-rt :top="20" :right="20">
  <TimeWidget />
</vfit-rt>
```

**🔧 通用版 (FitContainer)**
```vue
<FitContainer :top="20" :right="20" unit="px">
  <TimeWidget />
</FitContainer>
```

---

## 3. 左下角 (图表、列表)

适用于辅助图表、滚动数据列表。

**✨ 简洁版 (vfit-lb)**
```vue
<vfit-lb :bottom="20" :left="20">
  <DataPanel />
</vfit-lb>
```

**🔧 通用版 (FitContainer)**
```vue
<FitContainer :bottom="20" :left="20" unit="px">
  <DataPanel />
</FitContainer>
```

---

## 4. 右下角 (控制面板)

适用于放置操作按钮、图例说明。

**✨ 简洁版 (vfit-rb)**
```vue
<vfit-rb :bottom="20" :right="20">
  <ControlPanel />
</vfit-rb>
```

**🔧 通用版 (FitContainer)**
```vue
<FitContainer :bottom="20" :right="20" unit="px">
  <ControlPanel />
</FitContainer>
```

---

## 5. 屏幕正中心 (主图、地图)

适用于核心数据展示、3D 地图容器。

**✨ 简洁版 (vfit-center)**
**强烈推荐**！它自动帮你把内容完美居中，不需要写复杂的 CSS。
```vue
<vfit-center>
  <MainChart />
</vfit-center>
```

**🔧 通用版 (FitContainer)**
你需要自己写 CSS 变换来实现居中。
```vue
<FitContainer :top="50" :left="50" unit="%">
  <!-- 手动居中 -->
  <div style="transform: translate(-50%, -50%);">
    <MainChart />
  </div>
</FitContainer>
```

---

## 6. 特殊需求：自定义缩放

如果你想让某个组件缩放得小一点（比如只缩放 80%），或者干脆不缩放。

**✨ 简洁版**
```vue
<!-- 强制缩小为 0.8 -->
<vfit-lt :top="100" :left="100" :scale="0.8">
  <MiniMap />
</vfit-lt>
```

**🔧 通用版**
```vue
<FitContainer :top="100" :left="100" unit="px" :scale="0.8">
  <MiniMap />
</FitContainer>
```

---

## 7. 特殊需求：修改单位

简洁版组件默认使用 `px` 单位。如果你想使用百分比 `%` 进行定位，可以通过 `unit` 属性覆盖。

**✨ 简洁版**
```vue
<!-- 使用 10% 的距离定位 -->
<vfit-lt :top="10" :left="10" unit="%">
  <Logo />
</vfit-lt>
```

**🔧 通用版**
```vue
<FitContainer :top="10" :left="10" unit="%">
  <Logo />
</FitContainer>
```
