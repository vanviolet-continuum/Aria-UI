import { createIcon } from '../shared/create.icon'

const folder = [
  'path',
  { d: 'M3 8V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z' },
] as const

export const Folder = /* @__PURE__ */ createIcon('Folder', [folder])
