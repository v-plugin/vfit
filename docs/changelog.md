# 更新日志

## v2.0.3

- **修复**: 修复 `vfit-*` 组件中 `z-index` 硬编码导致 `:z` 参数不生效的问题。
- **修复**: 修正 `right`/`bottom` 定位未随缩放系数变化的偏差，四边现已统一缩放。
- **新增**: 导出 `FitPositionProps` TS 类型，方便在组件中显式声明定位 Props。
- **优化**: 抽取 `.vfit-base` 公共 CSS 类，消除 6 个组件中重复的 `will-change`/`backface-visibility`/`perspective` 样式。
- **优化**: 移除不存在的 `./style.css` 导出路径，CSS 已内聚到库内自动注入。
- **优化**: `createFitScale` 增加 target 元素空值校验，元素不存在时打印警告。

## v2.0.2

- **优化**: 重构核心定位逻辑 `useFitPosition`，使用 `FitPositionProps` 精确类型替代 `any`。
- **优化**: `observeScale` 中 `ResizeObserver` 回调参数从 `any` 改为 `ResizeObserverEntry[]`。
- **优化**: `vite.config.ts` 启用 terser 默认压缩，缩小产出体积。

## v2.0.1 (2025-12-29)

- **新增**: 引入专用定位组件 `<vfit-lt>`, `<vfit-rt>`, `<vfit-lb>`, `<vfit-rb>`, `<vfit-center>`，简化布局代码。
- **优化**: 重构核心逻辑为 `useFitPosition` 和 `useFitScale`，提高代码复用性。
- **修复**: 修复居中组件在缩放时的偏移问题。

## v1.0.0

- 初始版本发布，包含 `FitContainer` 组件和 `v-fit` 指令。
