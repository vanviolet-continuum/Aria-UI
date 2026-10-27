import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function ReceiptIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m79 29 10 6 10-6 10 6 10-6 10 6 10-6 10 6 10-6 10 6 10-6v124l-10-6-10 6-10-6-10 6-10-6-10 6-10-6-10 6-10-6-10 6V29Z"
        fill={c.surface}
      />
      <path
        d="M96 51h65m-65 11h39m-39 17h40m13 0h12m-65 14h27m26 0h12m-65 14h37m16 0h12m-65 13h65"
        stroke={c.line}
      />
      <path d="M96 132h31m21 0h13" strokeWidth="3" />
      <path d="M61 102H49v40h17m133-89h13v39h-13" stroke={c.line} />
      <circle cx="196" cy="119" r="16" fill={c.tint} />
      <path d="m189 119 5 5 10-11" stroke={c.accent} />
    </CollectionScene>
  )
}
