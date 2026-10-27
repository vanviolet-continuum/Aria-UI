import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function VideoEditingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="51" y="34" width="158" height="113" rx="7" fill={c.surface} />
      <path d="M51 51h158m-158 62h158m-107 0v34m-39-26h28m-28 10h17" stroke={c.line} />
      <rect x="64" y="62" width="130" height="42" rx="3" fill={c.tint} />
      <path d="m123 72 17 11-17 11V72Z" fill={c.surface} />
      <rect x="110" y="120" width="32" height="9" rx="2" fill={c.tint} stroke={c.line} />
      <rect x="146" y="120" width="47" height="9" rx="2" fill={c.tint} stroke={c.accent} />
      <path d="M111 138h19m6 0h31m5 0h21M150 113v32" stroke={c.accent} />
      <path d="m61 42 3 0m7 0h3m7 0h3m101 113h33v6h-33v-6Z" stroke={c.line} />
      <path d="M105 157h51m-44-10v10m37-10v10" />
    </CollectionScene>
  )
}
