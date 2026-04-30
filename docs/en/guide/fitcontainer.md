# FitContainer

`FitContainer` is a container component that is absolutely positioned and scaled according to the global scale value. For common corner or center layouts, prefer the dedicated components (`vfit-lt` / `vfit-rt` / `vfit-lb` / `vfit-rb` / `vfit-center`) for cleaner code.

## Props

- `top/bottom/left/right?: number`
- `unit?: 'px' | '%'` (default `px`)
- `scale?: number` (overrides global scale; pass `0` or omit to use global `fitScale`)
- `z?: number` (default `300`)

## Behavior

- When using `unit='px'`: All four sides (`top`/`left`/`right`/`bottom`) are multiplied by the scale value, ensuring proportional spacing relative to the design.
- When using `unit='%'`: Position does not change with scaling, only content scales.

## Origin (transform-origin)

Sets the scaling origin based on the provided edges:

- `right && bottom` → `100% 100%`
- `right` → `100% 0`
- `bottom` → `0 100%`
- Others → `0 0`

## Examples

Fixed pixel distance from top right:

```vue
<FitContainer :top="80" :right="40" unit="px">
  <Rankings />
</FitContainer>
```

Centered and scaled proportionally:

```vue
<FitContainer :top="50" :left="50" unit="%">
  <div class="card">Content</div>
</FitContainer>
```
