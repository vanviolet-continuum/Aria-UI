import { createIcon } from '../shared/create.icon'

const sheet = [
  'path',
  { d: 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6' },
] as const

export const FileCheck = /* @__PURE__ */ createIcon('FileCheck', [
  sheet,
  ['path', { d: 'm8 14 3 3 5-6' }],
])
