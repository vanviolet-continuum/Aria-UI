import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function MeetingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="91" y="29" width="77" height="44" rx="6" fill={c.surface} stroke={c.line} />
      <path d="M104 43h49m-49 10h25m9 0h15m-49 10h34" stroke={c.line} />
      <circle cx="73" cy="88" r="11" fill={c.surface} stroke={c.line} />
      <path d="M56 124v-12c0-20 34-20 34 0v12H56Z" fill={c.tint} />
      <circle cx="130" cy="88" r="11" fill={c.surface} stroke={c.line} />
      <path d="M113 124v-12c0-20 34-20 34 0v12h-34Z" fill={c.surface} />
      <circle cx="187" cy="88" r="11" fill={c.surface} stroke={c.line} />
      <path d="M170 124v-12c0-20 34-20 34 0v12h-34Z" fill={c.tint} />
      <path d="m56 121-11 15h170l-11-15H56Zm7 15v21m134-21v21" fill={c.surface} />
      <path d="m113 127 20-1 8 5h-21l-7-4Zm-42 1h9m95 0h9" stroke={c.line} />
      <path d="M67 86h12m45 0h12m45 0h12" stroke={c.line} />
    </CollectionScene>
  )
}
