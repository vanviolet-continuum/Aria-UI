import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function DnaIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M94 20c0 35 72 35 72 70s-72 35-72 70m72-140c0 35-72 35-72 70s72 35 72 70"
        stroke={c.surface}
        strokeWidth="9"
      />
      <path d="M94 20c0 35 72 35 72 70s-72 35-72 70" strokeWidth="5" />
      <path d="M166 20c0 35-72 35-72 70s72 35 72 70" stroke={c.accent} strokeWidth="5" />
      <path
        d="M98 32h64m-51 13h38m-34 14h30m-42 14h54m-62 14h70m-66 14h62m-50 14h38m-33 14h28m-41 14h55"
        stroke={c.line}
      />
      <path d="M53 65v35h18m117-34h18v35m-5 31v9m-4-4h8M63 34l5 5" stroke={c.line} />
      <circle cx="68" cy="122" r="8" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
