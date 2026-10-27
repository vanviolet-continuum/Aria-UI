import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function TargetIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="125" cy="89" r="58" fill={c.surface} />
      <circle cx="125" cy="89" r="43" fill={c.tint} stroke={c.line} />
      <circle cx="125" cy="89" r="28" fill={c.surface} stroke={c.line} />
      <circle cx="125" cy="89" r="12" fill={c.tint} stroke={c.accent} />
      <path
        d="m90 137-10 21m79-21 10 21M125 89l62-54m-14 12 3-17 21-9-10 14 17-5-8 21-17 2m-51 26-3 10 11-2"
        fill={c.surface}
      />
      <path d="M97 158h57M49 62l7 3m-7 52 7-3m142-8 8 3" stroke={c.line} />
    </CollectionScene>
  )
}
