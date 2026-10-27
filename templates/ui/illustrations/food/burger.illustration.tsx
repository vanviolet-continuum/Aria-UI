import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function BurgerIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="130" cy="151" rx="79" ry="10" fill={c.surface} stroke={c.line} />
      <path d="M66 81c0-61 128-61 128 0H66Z" fill={c.tint} />
      <path d="M70 132h120c-1 17-12 21-25 21H95c-13 0-24-4-25-21Z" fill={c.tint} />
      <path
        d="M66 87c9-8 18 9 28 0s18 9 28 0 18 9 28 0 18 9 28 0 18 9 22 0v13H66V87Z"
        fill={c.surface}
        stroke={c.line}
      />
      <rect x="66" y="101" width="129" height="14" rx="7" fill={c.surface} />
      <path d="m71 115 30 5 14 13 14-15 27 11 17-12 18-2" fill={c.tint} stroke={c.accent} />
      <path d="M71 127h119" strokeWidth="8" stroke={c.line} />
      <path
        d="m102 56 3 3m21-13 2 4m23 4 4 2m-18 12 3 2m-52-2 4 1m42-11 3 2m-19 6 1 3m48-6 3 3"
        stroke={c.accent}
      />
      <path d="M52 145h12m133 0h14" stroke={c.line} />
    </CollectionScene>
  )
}
