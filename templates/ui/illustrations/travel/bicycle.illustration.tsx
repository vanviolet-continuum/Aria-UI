import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function BicycleIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="72" cy="123" r="30" fill={c.surface} />
      <circle cx="187" cy="123" r="30" fill={c.surface} />
      <path d="m72 123 38-1-17-39-21 40 70-39-32 38m32-38 45 39-24-61h-16" />
      <path d="M82 80h22m54-18h18v12m-68 49 8 8h9" strokeWidth="3" />
      <circle cx="110" cy="123" r="7" fill={c.tint} />
      <circle cx="72" cy="123" r="4" fill={c.tint} />
      <circle cx="187" cy="123" r="4" fill={c.tint} />
      <path d="m175 80 30-2-4 19h-19l-7-17Z" fill={c.tint} stroke={c.line} />
      <path d="M184 82v12m11-12v12m-74-43 5-4 5 4" stroke={c.line} />
      <path d="M38 155h184m-174-40-7-7m13 3-3-9" stroke={c.line} />
      <SceneCloud x={63} y={35} scale={0.75} />
    </CollectionScene>
  )
}
