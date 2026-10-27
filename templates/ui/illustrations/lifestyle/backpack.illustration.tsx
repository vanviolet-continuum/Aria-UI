import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function BackpackIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M109 41v-9a7 7 0 0 1 7-7h28a7 7 0 0 1 7 7v9m-32-2v-5h22v5M83 58c-14 12-16 39-12 72m106-72c14 12 16 39 12 72"
        stroke={c.line}
      />
      <path
        d="M80 69a50 50 0 0 1 100 0v74a10 10 0 0 1-10 10H90a10 10 0 0 1-10-10V69Z"
        fill={c.surface}
      />
      <path d="M90 73a40 40 0 0 1 80 0" stroke={c.line} />
      <path d="M92 69h76v23a7 7 0 0 1-7 7H99a7 7 0 0 1-7-7V69Z" fill={c.tint} stroke={c.line} />
      <rect x="96" y="108" width="68" height="35" rx="7" fill={c.tint} />
      <path d="M97 121h66m-13 0v7m-27-46h14v22h-14V82Z" fill={c.surface} stroke={c.line} />
      <path d="M70 109H59v31h21m100-31h21v31h-21m-115-19h10m112 0h10" stroke={c.line} />
    </CollectionScene>
  )
}
