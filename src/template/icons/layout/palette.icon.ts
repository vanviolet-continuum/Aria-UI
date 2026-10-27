import { createIcon } from '../shared/create.icon'

export const Palette = /* @__PURE__ */ createIcon('Palette', [
  [
    'path',
    {
      d: 'M12 3a9 9 0 1 0 0 18h1a2.5 2.5 0 0 0 1-4.8c-1-.5-.6-2.2.5-2.2H17a4 4 0 0 0 4-4c0-4-4-7-9-7Z',
    },
  ],
  ...[
    { cx: 7, cy: 10 },
    { cx: 10, cy: 6.5 },
    { cx: 15, cy: 7 },
    { cx: 7.5, cy: 15 },
  ].map((p) => ['circle', { ...p, r: 0.9, fill: 'currentColor', stroke: 'none' }] as const),
])
