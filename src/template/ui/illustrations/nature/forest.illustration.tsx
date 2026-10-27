import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function ForestIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m49 128 24-39H62l18-31 18 31H87l24 39H49Zm112 5 25-41h-12l20-34 20 34h-12l25 41h-66Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M80 127v28m114-24v24" stroke={c.line} />
      <path d="m94 131 29-47h-14l23-43 24 43h-15l28 47H94Z" fill={c.surface} />
      <path d="M132 154v-47m-12 8 12 10 13-12" />
      <path d="M53 154h156m-104 0c5-8 15-11 15-17m26 17c-2-7-4-10-4-16" stroke={c.line} />
      <path
        d="M64 152c-9-9-3-16 0-19 5 7 7 12 0 19Zm111 0c-9-9-3-16 0-19 5 7 7 12 0 19Z"
        fill={c.tint}
        stroke={c.line}
      />
      <SceneCloud x={158} y={24} scale={0.6} />
    </CollectionScene>
  )
}
