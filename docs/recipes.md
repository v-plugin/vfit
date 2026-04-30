---
aside: false
---

# 示例与场景

<style>
.stage {
  position: relative;
  width: 100%;
  height: 200px;
  background: #010a1b;
  border-radius: 8px;
  margin: 8px 0;
}
.stage .grid {
  position: absolute; inset: 0;
  background-image: linear-gradient(rgba(0,228,255,.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,228,255,.06) 1px, transparent 1px);
  background-size: 30px 30px;
}
.stage .box {
  position: absolute;
  color: #fff; font-weight: bold;
  font-size: 12px;
  border-radius: 4px;
  padding: 6px 14px;
  white-space: nowrap;
}
.stage .box.tl { top: 16px; left: 16px; background: rgba(0,228,255,.35); border: 1px solid #00e4ff; }
.stage .box.tr { top: 16px; right: 16px; background: rgba(245,158,11,.35); border: 1px solid #f59e0b; }
.stage .box.bl { bottom: 16px; left: 16px; background: rgba(16,185,129,.35); border: 1px solid #10b981; }
.stage .box.br { bottom: 16px; right: 16px; background: rgba(59,130,246,.35); border: 1px solid #3b82f6; }
.stage .box.ct {
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(168,85,247,.35);
  border: 2px dashed #a855f7;
  font-size: 14px;
  padding: 12px 28px;
}
.stage .tag {
  position: absolute;
  top: 6px; right: 8px;
  font-size: 10px;
  color: rgba(255,255,255,.35);
  font-family: monospace;
}
</style>

## 🎮 交互式布局实验台

下方使用真正的 `vfit-lt` / `vfit-rt` / `vfit-lb` / `vfit-rb` / `vfit-center` 组件。

**拖拽滑块、切换参数**，观察 5 个定位组件在不同容器尺寸、缩放倍数、间距和单位下的实时变化。

<ClientOnly>
  <LayoutDemo />
</ClientOnly>

---

## 1. 左上角 — `vfit-lt`

`top` + `left` 均乘以全局 `scale`，`transform-origin` 自动设为 `0 0`。

```vue
<vfit-lt :top="20" :left="20">
  <Logo />
</vfit-lt>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box tl">vfit-lt</div>
  <div class="tag">top:16px left:16px</div>
</div>

---

## 2. 右上角 — `vfit-rt`

`top` + `right` 均乘以 `scale`，`transform-origin` 自动设为 `100% 0`。

```vue
<vfit-rt :top="20" :right="20">
  <Clock />
</vfit-rt>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box tr">vfit-rt</div>
  <div class="tag">top:16px right:16px</div>
</div>

---

## 3. 左下角 — `vfit-lb`

`bottom` + `left` 均乘以 `scale`，`transform-origin` 自动设为 `0 100%`。

```vue
<vfit-lb :bottom="20" :left="20">
  <Chart />
</vfit-lb>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box bl">vfit-lb</div>
  <div class="tag">bottom:16px left:16px</div>
</div>

---

## 4. 右下角 — `vfit-rb`

`bottom` + `right` 均乘以 `scale`，`transform-origin` 自动设为 `100% 100%`。

```vue
<vfit-rb :bottom="20" :right="20">
  <Panel />
</vfit-rb>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box br">vfit-rb</div>
  <div class="tag">bottom:16px right:16px</div>
</div>

---

## 5. 居中 — `vfit-center`

自动 `top:50%; left:50%` + `translate(-50%,-50%)`，内容随 scale 缩放。

```vue
<vfit-center>
  <MainMap />
</vfit-center>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box ct">vfit-center</div>
</div>

---

## 6. 百分比单位 `unit="%"`

百分比模式下四边间距不随 `scale` 变化，仅内容缩放。

```vue
<vfit-lt :top="10" :left="10" unit="%">
  <Banner />
</vfit-lt>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box tl" style="top:10%;left:10%">10%,10%</div>
  <div class="tag">top:10% left:10%</div>
</div>

---

## 7. 自定义缩放 `:scale`

传 `:scale` 覆盖全局值，传 `0` 或不传则走全局 `fitScale`。

```vue
<vfit-lt :top="30" :left="30" :scale="0.5">
  <MiniWidget />
</vfit-lt>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box tl" style="top:15px;left:15px;width:60px;height:28px;font-size:10px">scale 0.5</div>
  <div class="tag">top:30px left:30px scale:0.5 → 实际 15px</div>
</div>

---

## 8. 层级 `:z`

`z` 越大越靠前，默认 `300`。

```vue
<vfit-lt :top="10" :left="10" :z="999">
  <TopLayer />
</vfit-lt>
<vfit-lt :top="30" :left="30" :z="100">
  <BottomLayer />
</vfit-lt>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box" style="top:10px;left:10px;z-index:999;background:rgba(0,228,255,.6);border:2px solid #00e4ff;width:100px;height:36px;font-size:11px">z=999 (上层)</div>
  <div class="box" style="top:26px;left:26px;z-index:100;background:rgba(168,85,247,.5);border:1px solid #a855f7;width:90px;height:32px;font-size:10px">z=100 (下层)</div>
  <div class="tag">z=999 覆盖在 z=100 上方</div>
</div>

---

## 9. 通用组件 `FitContainer`

需要四边同用或兼容旧代码时使用：

```vue
<FitContainer :top="20" :right="20" :bottom="20" :left="20" unit="px">
  四边撑满
</FitContainer>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box" style="inset:14px;display:flex;align-items:center;justify-content:center;background:rgba(0,228,255,.1);border:1px dashed #00e4ff;font-size:13px;border-radius:4px">FitContainer 四边撑满</div>
  <div class="tag">top:14 bottom:14 left:14 right:14</div>
</div>

```vue
<FitContainer :top="50" :left="50" unit="%">
  <div style="transform:translate(-50%,-50%)">百分比居中</div>
</FitContainer>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box ct">百分比居中</div>
  <div class="tag">top:50% left:50%</div>
</div>
```
