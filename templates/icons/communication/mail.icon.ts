import { createIcon } from '../shared/create.icon'

const envelope = ['rect', { x: 3, y: 5, width: 18, height: 14, rx: 3 }] as const
const flap = ['path', { d: 'm4 7 8 6 8-6' }] as const

export const Mail = /* @__PURE__ */ createIcon('Mail', [envelope, flap])
