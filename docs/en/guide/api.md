# API

## `createFitScale(options)`

- `target?: string | HTMLElement` (default `#app`)
- `designHeight?: number` (default `1080`)
- `designWidth?: number` (default `1920`)
- `scaleMode?: 'height' | 'width' | 'auto'` (default `auto`)

Returns the plugin object. Upon installation, it injects the global scale into `app.provide`.

## `useFitScale()`

Get the current scale value `Ref<number>` within a component.

## `FitContainer` Component

- `top/bottom/left/right?: number`
- `unit?: 'px' | '%'` (default `px`)
- `scale?: number` (overrides global scale)
- `z?: number` (default `300`)
