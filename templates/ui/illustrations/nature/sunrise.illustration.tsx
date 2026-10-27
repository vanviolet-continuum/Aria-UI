import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function SunriseIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M82 98a48 48 0 0 1 96 0" fill={c.tint} />
      <path
        d="M130 34V23m-42 25-8-8m92 8 8-8M67 82H55m138 0h12"
        stroke={c.accent}
        strokeWidth="3"
      />
      <path d="M38 100c34-16 56-8 86 0s61 15 98-3v44H38v-41Z" fill={c.surface} stroke={c.line} />
      <path d="M39 128c39-22 57-9 87 3s60 21 96-2v23H39v-24Z" fill={c.tint} stroke={c.line} />
      <path d="M106 110h47m-37 10h25m-14 21h34m-20 9h14" stroke={c.accent} />
      <path d="m55 65 6-4 6 4m113 50 6-4 6 4" stroke={c.line} />
      <path d="M38 153h184" />
    </CollectionScene>
  )
}
