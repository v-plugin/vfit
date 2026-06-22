---
title: 更新日志
description: vfit 各版本更新记录，包含新功能、Bug 修复与优化详情。
---

# 更新日志

## v2.0.5

- **修复**: 修复用户安装后 `vfit-base`、`vfit-lt` 等样式丢失的问题。
- **新增**: 在 `package.json` exports 中正确导出 `./style.css`，用户现在需要在入口文件手动引入 `import 'vfit/style.css'`。
- **文档**: 在快速上手和 README 中新增样式导入提示。

## v2.0.3

- **修复**: 修复 `vfit-*` 组件中 `z-index` 硬编码导致 `:z` 参数不生效的问题。
- **修复**: 修正 `right`/`bottom` 定位未随缩放系数变化的偏差，四边现已统一缩放。
- **新增**: 导出 `FitPositionProps` TS 类型，方便在组件中显式声明定位 Props。
- **优化**: 抽取 `.vfit-base` 公共 CSS 类，消除 6 个组件中重复的 `will-change`/`backface-visibility`/`perspective` 样式。
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
