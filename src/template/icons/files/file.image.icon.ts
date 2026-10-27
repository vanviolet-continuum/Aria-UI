import { createIcon } from '../shared/create.icon'

const sheet = [
  'path',
  { d: 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6' },
] as const

export const FileImage = /* @__PURE__ */ createIcon('FileImage', [
  sheet,
  ['path', { d: 'm5 18 5-6 4 4 2-2 4 4' }],
  ['circle', { cx: 8, cy: 8, r: 1, fill: 'currentColor', stroke: 'none' }],
])
