import { createIcon } from '../shared/create.icon'

const folder = [
  'path',
  { d: 'M3 8V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z' },
] as const

export const FolderLock = /* @__PURE__ */ createIcon('FolderLock', [
  folder,
  ['rect', { x: 8, y: 13, width: 8, height: 6, rx: 1.5 }],
  ['path', { d: 'M10 13v-2a2 2 0 0 1 4 0v2' }],
])
