# Recipes & Scenarios

This section shows common big screen layouts. You can choose **Concise (Dedicated Components)** or **Universal (FitContainer)** according to your preference.

::: tip Note
The effects and performance of both are exactly the same, just different coding styles.
:::

## 1. Top Left (Logo, Weather)

Suitable for Logo, weather information, etc.

**✨ Concise (vfit-lt)**
Omits units, shorter code.
```vue
<vfit-lt :top="20" :left="20">
  <WeatherWidget />
</vfit-lt>
```

**🔧 Universal (FitContainer)**
Requires `unit="px"` manually.
```vue
<FitContainer :top="20" :left="20" unit="px">
  <WeatherWidget />
</FitContainer>
```

---

## 2. Top Right (Time, Status)

Suitable for system time, running status, etc.

**✨ Concise (vfit-rt)**
Automatically sets the scale origin (top right), worry-free.
```vue
<vfit-rt :top="20" :right="20">
  <TimeWidget />
</vfit-rt>
```

**🔧 Universal (FitContainer)**
```vue
<FitContainer :top="20" :right="20" unit="px">
  <TimeWidget />
</FitContainer>
```

---

## 3. Bottom Left (Charts, Lists)

Suitable for auxiliary charts, scrolling data lists.

**✨ Concise (vfit-lb)**
```vue
<vfit-lb :bottom="20" :left="20">
  <DataPanel />
</vfit-lb>
```

**🔧 Universal (FitContainer)**
```vue
<FitContainer :bottom="20" :left="20" unit="px">
  <DataPanel />
</FitContainer>
```

---

## 4. Bottom Right (Control Panel)

Suitable for operation buttons, legends.

**✨ Concise (vfit-rb)**
```vue
<vfit-rb :bottom="20" :right="20">
  <ControlPanel />
</vfit-rb>
```

**🔧 Universal (FitContainer)**
```vue
<FitContainer :bottom="20" :right="20" unit="px">
  <ControlPanel />
</FitContainer>
```

---

## 5. Screen Center (Main Chart, Map)

Suitable for core data display, 3D map containers.

**✨ Concise (vfit-center)**
**Highly Recommended**! It automatically centers content perfectly without complex CSS.
```vue
<vfit-center>
  <MainChart />
</vfit-center>
```

**🔧 Universal (FitContainer)**
You need to write CSS transforms manually to center.
```vue
<FitContainer :top="50" :left="50" unit="%">
  <!-- Manual centering -->
  <div style="transform: translate(-50%, -50%);">
    <MainChart />
  </div>
</FitContainer>
```

---

## 6. Special Needs: Custom Scale

If you want a component to scale smaller (e.g., only 80%), or not scale at all.

**✨ Concise**
```vue
<!-- Force scale to 0.8 -->
<vfit-lt :top="100" :left="100" :scale="0.8">
  <MiniMap />
</vfit-lt>
```

**🔧 Universal**
```vue
<FitContainer :top="100" :left="100" unit="px" :scale="0.8">
  <MiniMap />
</FitContainer>
```

---

## 7. Special Needs: Change Unit

Concise components use `px` by default. If you want to use percentage `%` for positioning, override it with the `unit` prop.

**✨ Concise**
```vue
<!-- Position using 10% distance -->
<vfit-lt :top="10" :left="10" unit="%">
  <Logo />
</vfit-lt>
```

**🔧 Universal**
```vue
<FitContainer :top="10" :left="10" unit="%">
  <Logo />
</FitContainer>
```
