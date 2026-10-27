import { createIcon } from '../shared/create.icon'

export const Grid = /* @__PURE__ */ createIcon(
  'Grid',
  [
    [3, 13].flatMap((x) =>
      [3, 13].map((y) => ['rect', { x, y, width: 8, height: 8, rx: 2 }] as const),
    ),
  ].flat(),
)
