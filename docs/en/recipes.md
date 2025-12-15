# Recipes & Scenarios

## Fixed Pixel Distance from Top Right

```vue
<FitContainer :top="80" :right="40" unit="px">
  <Rankings />
</FitContainer>
```

## Fixed Pixel Distance from Bottom Left

```vue
<FitContainer :bottom="40" :left="60" unit="px">
  <StatusBar />
</FitContainer>
```

## Centered Card (Percentage Coordinates)

```vue
<FitContainer :top="50" :left="50" unit="%">
  <div class="card" style="transform: translate(-50%, -50%);">Center</div>
</FitContainer>
```

## Override Global Scale

```vue
<FitContainer :top="120" :left="100" unit="px" :scale="0.8">
  <MiniMap />
</FitContainer>
```
