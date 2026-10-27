import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function SavingsIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M78 77c-11-14-17-4-11 6-16 16-16 43 3 56v15h17l3-9h63l4 9h17v-18c12-8 15-13 17-24h13V91h-17c-5-13-16-21-33-24l-7-15-21 12c-21-2-36 2-48 13Z"
        fill={c.surface}
      />
      <path d="M94 77h38" strokeWidth="4" stroke={c.line} />
      <circle cx="167" cy="91" r="3" fill={c.ink} stroke="none" />
      <path d="M61 102c-16 5-22-9-12-13 10-2 13 11 5 13m50 33h35" stroke={c.line} />
      <circle cx="119" cy="37" r="19" fill={c.tint} />
      <path d="M124 30h-7c-8 0-8 8 0 8h4c8 0 8 8 0 8h-8m6-20v24" stroke={c.accent} />
      <path d="M187 44v10m-5-5h10m-132 7v6m-3-3h6" stroke={c.line} />
    </CollectionScene>
  )
}
