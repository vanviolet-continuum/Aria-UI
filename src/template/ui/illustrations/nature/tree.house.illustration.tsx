import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function TreeHouseIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M107 153v-50l-16-17 9-8 24 21 14-12 9 6-17 21v39" fill={c.tint} stroke={c.line} />
      <path
        d="M84 94C46 99 44 65 62 56c-8-27 28-44 46-26 12-26 52-22 58 0 29-13 54 14 42 36 25 18 7 44-20 36"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M88 67h86v53H88V67Z" fill={c.surface} />
      <path d="m76 70 55-37 55 37H76Z" fill={c.surface} />
      <path d="M82 63h96m-78 21h62m-62 15h62" stroke={c.line} />
      <rect x="118" y="81" width="25" height="39" rx="2" fill={c.tint} />
      <rect x="96" y="80" width="15" height="16" fill={c.tint} stroke={c.line} />
      <path d="M82 121h100m-15 0 8 34m-25-34 8 34m-6-25h17m-14 10h17m-14 10h16" />
      <path d="M58 156h146m-127-3 4-9 4 9m106-6 4-8 4 8" stroke={c.line} />
    </CollectionScene>
  )
}
