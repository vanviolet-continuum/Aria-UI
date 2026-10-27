import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function RocketIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M102 119c-14-40-6-72 28-99 34 27 42 59 28 99h-56Z" fill={c.surface} />
      <path d="M107 49c14-4 32-4 46 0m-45 58h44" stroke={c.line} />
      <circle cx="130" cy="77" r="16" fill={c.tint} />
      <circle cx="130" cy="77" r="9" stroke={c.line} />
      <path d="m101 88-22 24-2 28 25-21m56-31 22 24 2 28-25-21" fill={c.tint} />
      <path
        d="M116 120c-15 13 2 21 1 37l13-12 13 12c-1-16 16-24 1-37"
        fill={c.tint}
        stroke={c.accent}
      />
      <path d="M130 124v12" stroke={c.accent} strokeWidth="3" />
      <SceneCloud x={45} y={125} scale={0.7} />
      <SceneCloud x={181} y={135} scale={0.6} />
      <path d="M71 43v10m-5-5h10m109 29v8m-4-4h8M57 84l4-6m135-48 4 5" stroke={c.line} />
    </CollectionScene>
  )
}
