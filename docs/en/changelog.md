---
title: Changelog
description: Release notes for all vfit versions, including new features, bug fixes, and improvements.
---

# Changelog

## v2.0.5

- **Fix**: Fixed missing `vfit-base`, `vfit-lt` and other styles after installation.
- **New**: Properly exported `./style.css` in `package.json` exports — users must now manually add `import 'vfit/style.css'` in their entry file.
- **Docs**: Added style import instructions to Getting Started and README.

## v2.0.3

- **Fix**: Fixed `:z` prop not working due to hardcoded `z-index` in `vfit-*` component CSS.
- **Fix**: Fixed `right`/`bottom` positioning not scaling with the global scale value. All four sides now scale uniformly.
- **New**: Exported `FitPositionProps` TS type for explicit positioning prop declarations in components.
- **Optimization**: Extracted `.vfit-base` shared CSS class, removing duplicated `will-change`/`backface-visibility`/`perspective` styles across 6 components.
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
