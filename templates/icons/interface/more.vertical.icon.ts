import { createIcon } from '../shared/create.icon'

export const MoreVertical = /* @__PURE__ */ createIcon(
  'MoreVertical',
  [4.5, 12, 19.5].map(
    (cy) => ['circle', { cx: 12, cy, r: 1.3, fill: 'currentColor', stroke: 'none' }] as const,
  ),
)
