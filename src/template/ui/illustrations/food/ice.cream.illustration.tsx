import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function IceCreamIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m94 92 37 68 36-68H94Z" fill={c.tint} />
      <path d="m105 97 37 43m-22-43 28 32m-44-15 27-17m-20 30 40-25m-33 39 25-17" stroke={c.line} />
      <path
        d="M88 95c-12-2-11-19-1-22-3-16 7-25 21-24 3-15 21-22 33-11 18-5 32 7 28 24 17 2 24 22 10 32-5 5-10-2-15 2-6 7-12-3-19 1-7 7-12-4-19 0-8 6-11-5-17-1-7 4-13-1-21-1Z"
        fill={c.surface}
      />
      <path d="M100 66c5-11 21-13 27-5m12-12c9-3 17 3 17 11m-31 19c9-7 18-6 24 0" stroke={c.line} />
      <circle cx="128" cy="28" r="8" fill={c.tint} stroke={c.accent} />
      <path
        d="m129 20 5-8m-44 28 3 5m72 51 3 5m-51-31 4 1m-14-17 3 2m48 13-3 3"
        stroke={c.accent}
      />
    </CollectionScene>
  )
}
