import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function MountainIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="177" cy="49" r="18" fill={c.tint} stroke={c.line} />
      <path d="m40 150 58-92 58 92H40Z" fill={c.tint} stroke={c.line} />
      <path d="m91 150 66-117 66 117H91Z" fill={c.surface} />
      <path d="m137 68 12 7 8-11 10 13 12-5-22-39-20 35Z" fill={c.tint} />
      <path d="m157 64-13 49 17-10-4 47" stroke={c.line} />
      <path d="m78 90 20-32 20 32-13-5-7 8-7-9-13 6Z" fill={c.surface} stroke={c.line} />
      <path d="M36 151h190m-107 0c2-15 16-23 18-37m-81 29v-17m-6 9 6-6 6 6" />
      <SceneCloud x={46} y={35} scale={0.75} />
      <path d="m194 100 5-4 5 4m-14 13 5-4 5 4" stroke={c.line} />
    </CollectionScene>
  )
}
