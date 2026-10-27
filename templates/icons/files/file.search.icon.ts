import { createIcon } from '../shared/create.icon'

const sheet = [
  'path',
  { d: 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6' },
] as const

export const FileSearch = /* @__PURE__ */ createIcon('FileSearch', [
  sheet,
  ['circle', { cx: 11, cy: 14, r: 3 }],
  ['path', { d: 'm13 16 3 3' }],
])
