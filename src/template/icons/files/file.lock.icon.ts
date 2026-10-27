import { createIcon } from '../shared/create.icon'

const sheet = [
  'path',
  { d: 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6' },
] as const

export const FileLock = /* @__PURE__ */ createIcon('FileLock', [
  sheet,
  ['rect', { x: 8, y: 13, width: 8, height: 6, rx: 1.5 }],
  ['path', { d: 'M10 13v-2a2 2 0 0 1 4 0v2' }],
])
