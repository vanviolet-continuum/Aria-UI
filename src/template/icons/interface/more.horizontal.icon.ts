import { createIcon } from '../shared/create.icon'

export const MoreHorizontal = /* @__PURE__ */ createIcon(
  'MoreHorizontal',
  [4.5, 12, 19.5].map(
    (cx) => ['circle', { cx, cy: 12, r: 1.3, fill: 'currentColor', stroke: 'none' }] as const,
  ),
)
