import type { IllustrationProps } from '../shared/illustration.frame'
import {
  CollectionScene as EducationScene,
  SceneCloud,
  sceneColors as c,
} from '../shared/collection.scene'

export function PlaygroundIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m50 152 19-99 21 99m-27-70h112m-7-29 20 99m-20-99-19 99M69 53h99" stroke={c.line} />
      <path d="M85 53v63m32-63v63m-37 0h43v7H80v-7Z" fill={c.surface} />
      <path d="M151 75h26v15l35 59h-18l-43-59V75Z" fill={c.tint} />
      <path d="M151 75v76m-15-76v76m0-58h15m-15 20h15m-15 20h15m-15-58h41" stroke={c.line} />
      <path d="M40 155h181" stroke={c.line} />
      <SceneCloud x={110} y={17} scale={0.6} />
      <path d="m48 126-5-8m161-30h12" stroke={c.line} />
    </EducationScene>
  )
}
