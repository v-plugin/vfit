# API

## `createFitScale(options)`

- `target?: string | HTMLElement` (default `#app`)
- `designHeight?: number` (default `1080`)
- `designWidth?: number` (default `1920`)
- `scaleMode?: 'height' | 'width' | 'auto'` (default `auto`)

Returns the plugin object. Upon installation, it injects the global scale into `app.provide`.

## `useFitScale()`

Get the current scale value `Ref<number>` within a component.

## Dedicated Positioning Components

Includes `<vfit-lt>`, `<vfit-rt>`, `<vfit-lb>`, `<vfit-rb>`, `<vfit-center>`.

**Corner Component Props:**
- `<vfit-lt>`: `top`, `left`, `unit`, `scale`, `z`
- `<vfit-rt>`: `top`, `right`, `unit`, `scale`, `z`
- `<vfit-lb>`: `bottom`, `left`, `unit`, `scale`, `z`
- `<vfit-rb>`: `bottom`, `right`, `unit`, `scale`, `z`

**Center Component Props:**
- `<vfit-center>`: `scale`, `z` (Automatically absolutely centered, no positioning props required)

## `FitContainer` Component

- `top/bottom/left/right?: number`
- `unit?: 'px' | '%'` (default `px`)
- `scale?: number` (overrides global scale)
- `z?: number` (default `300`)
