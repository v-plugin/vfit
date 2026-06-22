---
title: Scale Modes
description: Learn about vfit's three scale modes — height, width, and auto — and how to choose the right one for different big-screen aspect ratios and resolutions.
---

# Scale Modes

Global scaling is provided by `createFitScale`, which uses `ResizeObserver` internally to calculate the scale value.

- `height`: Scales by height, ratio is `container height / design height`
- `width`: Scales by width, ratio is `container width / design width`
- `auto`: Automatically chooses to scale by width or height to maintain the design aspect ratio

Example:

```ts
app.use(createFitScale({
  target: '#app',
  designHeight: 1080,
  designWidth: 1920,
  scaleMode: 'auto'
}))
```
