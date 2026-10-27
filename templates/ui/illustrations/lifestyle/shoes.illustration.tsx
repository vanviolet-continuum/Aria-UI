import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function ShoesIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m96 53 29 14 18 32 47 17c17 6 20 20 9 24H80V98l16-45Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M83 97c4 5 13 5 18-1l6-6 30 32 38 10c13 4 15 19 4 22H48v-19c2-15 16-15 22-33l2-13 11 8Z"
        fill={c.surface}
      />
      <path
        d="M49 144h137m-81-27 15-9m-7 17 15-9m-7 17 15-9M79 105l-8 24H52m39-15 20 22 35 2m-27-54 12-7m-5 17 13-8m-7 18 14-7"
        stroke={c.line}
      />
      <path d="M151 117c6-5 12-5 15-1m-6-4 2 8" stroke={c.accent} />
      <path d="M55 70h16m-9-13h18m108 41h17" stroke={c.line} />
    </CollectionScene>
  )
}
