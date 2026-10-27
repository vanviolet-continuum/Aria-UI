import { createIcon } from '../shared/create.icon'

export const Banknote = /* @__PURE__ */ createIcon('Banknote', [
  ['rect', { x: 2, y: 5, width: 20, height: 14, rx: 2 }],
  ['circle', { cx: 12, cy: 12, r: 3 }],
  [
    'path',
    { d: 'M6 12h.01m12 0h.01M2 9c3 0 4-1 4-4m12 0c0 3 1 4 4 4M2 15c3 0 4 1 4 4m12 0c0-3 1-4 4-4' },
  ],
])
