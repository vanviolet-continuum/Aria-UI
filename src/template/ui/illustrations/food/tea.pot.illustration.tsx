import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function TeaPotIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="132" cy="151" rx="77" ry="9" fill={c.surface} stroke={c.line} />
      <path d="M171 82c31-27 59 18 20 37l-7-10c22-13 11-37-8-19" stroke={c.line} strokeWidth="6" />
      <path d="M87 82c-10 5-21 7-37-3 2 27 18 45 44 44" fill={c.tint} />
      <path d="M96 71c-25 15-25 72 4 77h67c29-5 29-62 4-77H96Z" fill={c.surface} />
      <path d="M93 71c0-16 80-16 80 0H93Z" fill={c.tint} />
      <path d="M124 59v-7h16v7" fill={c.tint} />
      <path
        d="M133 87v44m0-29c-13 1-18-8-16-15 11 2 16 7 16 15Zm0 17c15-2 21-11 17-18-10 1-17 8-17 18Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M109 43c-9-9 8-11 1-20m24 20c-9-9 8-11 1-20m23 20c-9-9 8-11 1-20" stroke={c.line} />
    </CollectionScene>
  )
}
