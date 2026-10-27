import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function PlanetIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="130" cy="89" r="48" fill={c.tint} />
      <path
        d="M91 62c24 15 48 3 68 15m-74 6c17 5 26 1 40 8m-25 32c26-9 42 7 65-6"
        stroke={c.line}
      />
      <path
        d="M86 73c-30 10-48 22-44 31 6 14 49 13 97 0s83-34 78-47c-3-8-20-10-42-7m1 9c15-1 24 0 25 4 3 7-25 22-65 33s-74 15-78 8c-2-4 9-11 26-18"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M85 91a48 48 0 0 0 91-19" />
      <circle cx="63" cy="38" r="8" fill={c.surface} stroke={c.line} />
      <path d="M182 126v10m-5-5h10m9-96v8m-4-4h8m-104 100v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}
