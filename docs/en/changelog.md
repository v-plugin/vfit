# Changelog

## v2.0.3

- **Fix**: Fixed `:z` prop not working due to hardcoded `z-index` in `vfit-*` component CSS.
- **Fix**: Fixed `right`/`bottom` positioning not scaling with the global scale value. All four sides now scale uniformly.
- **New**: Exported `FitPositionProps` TS type for explicit positioning prop declarations in components.
- **Optimization**: Extracted `.vfit-base` shared CSS class, removing duplicated `will-change`/`backface-visibility`/`perspective` styles across 6 components.
- **Optimization**: Removed non-existent `./style.css` export from `package.json`. CSS is now injected internally.
- **Optimization**: Added null-check for target element in `createFitScale` with console warning.

## v2.0.2

- **Optimization**: Refactored `useFitPosition` with precise `FitPositionProps` type instead of `any`.
- **Optimization**: Changed `ResizeObserver` callback parameter from `any` to `ResizeObserverEntry[]` in `observeScale`.
- **Optimization**: Enabled default terser compression in `vite.config.ts` for smaller bundle size.

## v2.0.1 (2025-12-29)

- **New**: Introduced dedicated positioning components `<vfit-lt>`, `<vfit-rt>`, `<vfit-lb>`, `<vfit-rb>`, `<vfit-center>` to simplify layout code.
- **Optimization**: Refactored core logic into `useFitPosition` and `useFitScale` to improve code reusability.
- **Fix**: Fixed the offset issue of the center component during scaling.

## v1.0.0

- Initial release, including `FitContainer` component and `v-fit` directive.
