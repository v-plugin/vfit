---
aside: false
title: Recipes & Scenarios
description: All vfit usage scenarios — five positioning components (vfit-lt/rt/lb/rb/center), pixel vs percent units, custom scale, z-index layering, and an interactive layout playground.
---

# Recipes & Scenarios

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

## 🎮 Interactive Layout Lab

Uses real `vfit-lt` / `vfit-rt` / `vfit-lb` / `vfit-rb` / `vfit-center` components.

**Drag sliders and toggle parameters** to observe how all 5 positioning components respond to container size, scale, spacing, and unit changes.

<ClientOnly>
  <LayoutDemo />
</ClientOnly>

---

## 1. Top-Left — `vfit-lt`

`top` + `left` multiplied by `scale`. Auto `transform-origin: 0 0`.

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

## 2. Top-Right — `vfit-rt`

`top` + `right` multiplied by `scale`. Auto `transform-origin: 100% 0`.

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

## 3. Bottom-Left — `vfit-lb`

`bottom` + `left` multiplied by `scale`. Auto `transform-origin: 0 100%`.

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

## 4. Bottom-Right — `vfit-rb`

`bottom` + `right` multiplied by `scale`. Auto `transform-origin: 100% 100%`.

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

## 5. Center — `vfit-center`

Auto `top:50%; left:50%` + `translate(-50%,-50%)`. Content scales with `scale`.

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

## 6. Percentage Units `unit="%"`

In percent mode, spacing does not change with `scale`; only content scales.

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

## 7. Custom Scale `:scale`

Pass `:scale` to override global. Pass `0` or omit to use global `fitScale`.

```vue
<vfit-lt :top="30" :left="30" :scale="0.5">
  <MiniWidget />
</vfit-lt>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box tl" style="top:15px;left:15px;width:60px;height:28px;font-size:10px">scale 0.5</div>
  <div class="tag">top:30px left:30px scale:0.5 → actual 15px</div>
</div>

---

## 8. Z-Index `:z`

Higher `z` renders on top. Default `300`.

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
  <div class="box" style="top:10px;left:10px;z-index:999;background:rgba(0,228,255,.6);border:2px solid #00e4ff;width:100px;height:36px;font-size:11px">z=999 (top)</div>
  <div class="box" style="top:26px;left:26px;z-index:100;background:rgba(168,85,247,.5);border:1px solid #a855f7;width:90px;height:32px;font-size:10px">z=100 (bottom)</div>
  <div class="tag">z=999 covers z=100</div>
</div>

---

## 9. Universal `FitContainer`

Use when all four sides are needed or for backward compatibility:

```vue
<FitContainer :top="20" :right="20" :bottom="20" :left="20" unit="px">
  Fill all sides
</FitContainer>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box" style="top:14px;bottom:14px;left:14px;right:14px;display:flex;align-items:center;justify-content:center;background:rgba(0,228,255,.1);border:1px dashed #00e4ff;font-size:13px;border-radius:4px">FitContainer all sides</div>
  <div class="tag">top:14 bottom:14 left:14 right:14</div>
</div>

```vue
<FitContainer :top="50" :left="50" unit="%">
  <div style="transform:translate(-50%,-50%)">Percent centered</div>
</FitContainer>
```

<div class="stage">
  <div class="grid"></div>
  <div class="box ct">Percent centered</div>
  <div class="tag">top:50% left:50%</div>
</div>
