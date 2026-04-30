# API

## `createFitScale(options)`

- `target?: string | HTMLElement` (default `#app`) — observation target element. A warning is logged if the element is not found.
- `designHeight?: number` (default `1080`)
- `designWidth?: number` (default `1920`)
- `scaleMode?: 'height' | 'width' | 'auto'` (default `auto`)

Returns the plugin object. Upon installation, it injects the global `fitScale` (a `Ref<number>`) into the app via `provide` and `globalProperties.$fitScale`.


## `useFitScale()`

Get the current scale value as `Ref<number>` within a component.


## `FitPositionProps` (TypeScript)

```ts
export interface FitPositionProps {
  scale?: number
  top?: number
  bottom?: number
  left?: number
  right?: number
  unit?: string
}
```


## Dedicated Positioning Components

Includes `<vfit-lt>`, `<vfit-rt>`, `<vfit-lb>`, `<vfit-rb>`, `<vfit-center>`.

**Corner Component Props:**
- `<vfit-lt>`: `top`, `left`, `unit`, `scale`, `z`
- `<vfit-rt>`: `top`, `right`, `unit`, `scale`, `z`
- `<vfit-lb>`: `bottom`, `left`, `unit`, `scale`, `z`
- `<vfit-rb>`: `bottom`, `right`, `unit`, `scale`, `z`

**Center Component Props:**
- `<vfit-center>`: `scale`, `z` (auto-centered, no positioning props required)

> All `vfit-*` components use a shared `.vfit-base` CSS class for common styles. Each component only specifies its own `transform-origin`.

## `FitContainer` Component

- `top/bottom/left/right?: number`
- `unit?: 'px' | '%'` (default `px`)
- `scale?: number` (custom scale factor; pass `0` or omit to use global `fitScale`)
- `z?: number` (default `300`)

### Scaling Behavior

- `unit='px'`: All four sides (`top`/`left`/`right`/`bottom`) are multiplied by the scale value.
- `unit='%'`: Position is unchanged, only content scales.
- `transform-origin` is auto-detected based on which sides are specified.
