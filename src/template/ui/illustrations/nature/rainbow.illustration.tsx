import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function RainbowIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M54 128V99a76 76 0 0 1 152 0v29" fill={c.tint} />
      <path d="M68 128V99a62 62 0 0 1 124 0v29" fill={c.surface} stroke={c.line} />
      <path d="M83 128V99a47 47 0 0 1 94 0v29" fill={c.tint} stroke={c.line} />
      <path d="M98 128V99a32 32 0 0 1 64 0v29" fill={c.surface} stroke={c.accent} />
      <SceneCloud x={35} y={112} scale={1.2} />
      <SceneCloud x={166} y={112} scale={1.2} />
      <path d="m114 145-3 7m34-7 3 7M35 46v10m-5-5h10m169-20v8m-4-4h8" stroke={c.accent} />
      <path d="M111 122h38" stroke={c.line} />
    </CollectionScene>
  )
}
