import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function BudgetIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="62" y="35" width="113" height="122" rx="8" fill={c.surface} />
      <rect x="91" y="27" width="54" height="17" rx="5" fill={c.tint} />
      <path d="M102 27a16 16 0 0 1 32 0" stroke={c.line} />
      <path d="M82 64h62m-62 13h43m-21 18h40m-40 21h40m-40 21h28" stroke={c.line} strokeWidth="3" />
      <path d="m81 94 4 4 8-9m-12 26 4 4 8-9m-12 26 4 4 8-9" stroke={c.accent} />
      <circle cx="181" cy="118" r="29" fill={c.tint} />
      <path d="M181 89v29h29" fill={c.surface} />
      <path d="m181 118-20 21m-103-8H47m6-23H42" stroke={c.line} />
    </CollectionScene>
  )
}
