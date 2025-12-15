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

```vue
<template>
  <div class="viewport">
    <FitContainer :top="90" :left="90" unit="px">
      <div class="box">Content</div>
    </FitContainer>
  </div>
</template>

<style scoped>
.viewport { position: relative; width: 100%; height: 100vh; }
.box { width: 120px; height: 80px; }
</style>
```

## Key Points

- The parent container must set positioning properties: `position: relative` (recommended) or `absolute`
- Two coordinate units:
  - `%`: Position does not change with scaling, suitable for centering/relative positioning
  - `px`: Position changes with the scaling product, suitable for fixed pixel layout
