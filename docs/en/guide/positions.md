# Positioning & Origin

## Percentage vs Pixel

- Percentage: Position is unaffected by scaling, suitable for relative layout (centering, corner offsets).
- Pixel: All four sides (`top`/`left`/`right`/`bottom`) scale uniformly with the global scale value, ensuring accurate spacing relative to the design across all resolutions.

## Corner Combinations

- Top Left (`top + left`)
- Top Right (`top + right`)
- Bottom Left (`bottom + left`)
- Bottom Right (`bottom + right`)

## Practical Examples

Fixed 40px from bottom right, relative 80px from top:

```vue
<FitContainer :top="80" :right="40" unit="px">
  <Widget />
</FitContainer>
```

Centered card:

```vue
<FitContainer :top="50" :left="50" unit="%">
  <div class="card" style="transform: translate(-50%, -50%);">Center</div>
</FitContainer>
```
