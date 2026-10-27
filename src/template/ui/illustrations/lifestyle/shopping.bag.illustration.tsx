import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function ShoppingBagIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M70 69h104l9 84H61l9-84Z" fill={c.surface} />
      <path d="M94 76V48a28 28 0 0 1 56 0v28" />
      <path d="m71 70 9 83m93-83-9 83" stroke={c.line} />
      <path
        d="M119 102s-9-13-18-4c-13 13 18 29 18 29s31-16 18-29c-9-9-18 4-18 4Z"
        fill={c.tint}
        stroke={c.accent}
      />
      <path d="M165 97h35l8 58h-35l-8-58Z" fill={c.tint} stroke={c.line} />
      <path d="M176 101V85c0-16 17-16 17 0v16" stroke={c.line} />
      <path d="M47 113v10m-5-5h10m139-66v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}
