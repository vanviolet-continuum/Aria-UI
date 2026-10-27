import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function WalletIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M64 68V52a8 8 0 0 1 7-8l105-14v38H64Z" fill={c.tint} stroke={c.line} />
      <path d="m81 61 23-34 53 32-4 9H81v-7Z" fill={c.surface} />
      <path d="m96 57 10-16 31 18" stroke={c.line} />
      <rect x="56" y="64" width="143" height="88" rx="11" fill={c.surface} />
      <path d="M65 74h123m-123 67h123" stroke={c.line} strokeDasharray="3 5" />
      <path d="M167 93h39v32h-39a10 10 0 0 1-10-10v-12a10 10 0 0 1 10-10Z" fill={c.tint} />
      <circle cx="173" cy="109" r="4" fill={c.surface} />
      <path d="M77 112h29m-29 9h17m93-76 7-6m8 20h9" stroke={c.line} />
      <circle cx="64" cy="33" r="6" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
