import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function AirplaneIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m48 100 47-1 40-63 18 1-21 62h52l15-23 12 1-5 28c-15 18-48 21-97 20l-29 22-15-3 16-22-26-6-7-16Z"
        fill={c.surface}
      />
      <path d="m102 120 38 21h17l-22-24m-49-10h88" stroke={c.line} />
      <path
        d="M106 106h3m10 0h3m10 0h3m10 0h3m10 0h3m-99-2 10-1"
        stroke={c.accent}
        strokeWidth="4"
      />
      <SceneCloud x={51} y={39} scale={0.8} />
      <SceneCloud x={166} y={132} scale={0.7} />
      <path d="M39 127h21m-12 9h20m-32 9h15" stroke={c.line} />
    </CollectionScene>
  )
}
