# Getting Started

## Installation

```bash
npm i vfit
```

## Initialization

```ts
// main.ts
import { createFitScale } from 'vfit'
import 'vfit/style.css'

app.use(createFitScale({ target: '#app', designHeight: 1080, designWidth: 1920, scaleMode: 'auto' }))
```

## Your First Container

We recommend using **Dedicated Positioning Components** (like `vfit-lt`) for quick layout, as they are more concise and easier to maintain.

```vue
<template>
  <div class="viewport">
    <!-- Top-left corner, 90px from top/left -->
    <vfit-lt :top="90" :left="90">
      <div class="box">Content</div>
    </vfit-lt>
  </div>
</template>

<style scoped>
.viewport { position: relative; width: 100%; height: 100vh; }
.box { width: 120px; height: 80px; }
</style>
```

> If you need compatibility with old code or complex positioning, you can also use the [FitContainer](/en/guide/fitcontainer) general component.

## Key Points

- The parent container must set positioning properties: `position: relative` (recommended) or `absolute`
- Two coordinate units:
  - `%`: Position does not change with scaling, suitable for centering/relative positioning
  - `px`: Position changes with the scaling product, suitable for fixed pixel layout
