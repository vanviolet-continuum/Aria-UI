import { createIcon } from '../shared/create.icon'

const sheet = [
  'path',
  { d: 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6' },
] as const

export const FileX = /* @__PURE__ */ createIcon('FileX', [
  sheet,
  ['path', { d: 'm9 11 6 6m-6 0 6-6' }],
])
