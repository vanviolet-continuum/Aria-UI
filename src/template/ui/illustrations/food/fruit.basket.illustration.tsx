import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function FruitBasketIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M70 102V80a60 60 0 0 1 120 0v22m-110 0V80a50 50 0 0 1 100 0v22" stroke={c.line} />
      <path d="M76 102c-16-27 9-45 27-32 15-12 37 6 23 32H76Z" fill={c.surface} />
      <path d="M102 70v-12m0 6c8-10 17-8 19-4-5 7-11 7-19 4Z" fill={c.tint} stroke={c.line} />
      <path
        d="M139 99c-4-26 3-35 8-43 5 28 19 26 25 38-7 11-22 11-33 5Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="174" cy="91" r="20" fill={c.surface} />
      <path d="M174 72c-1-6 3-8 8-9" stroke={c.line} />
      <path d="m62 103 16 50h108l15-50H62Z" fill={c.tint} />
      <path
        d="M66 114h132m-126 13h122m-118 13h114m-102-36 10 48m17-48 4 48m18-48v48m19-48-4 48m21-48-9 48"
        stroke={c.line}
      />
    </CollectionScene>
  )
}
