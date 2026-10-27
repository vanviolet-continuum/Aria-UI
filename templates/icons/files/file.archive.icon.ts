import { createIcon } from '../shared/create.icon'

const sheet = [
  'path',
  { d: 'M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6' },
] as const

export const FileArchive = /* @__PURE__ */ createIcon('FileArchive', [
  sheet,
  ['path', { d: 'M10 5h1m0 3h1m-2 3h1m0 3h1m-2 2h3v3h-3v-3Z' }],
])
