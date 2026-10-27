import type { IllustrationProps } from '../shared/illustration.frame'
import { ScenePerson } from '../shared/scene.person'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function DramaClassIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M78 43h99m-63-16h28v11h-28V27Z" fill={c.surface} />
      <path d="m121 39-40 98h97l-43-98" fill={c.tint} stroke="none" opacity=".65" />
      <ScenePerson x={131} y={47} scale={0.78} pose="waving" />
      <path d="M65 145h131v12H65v-12Z" fill={c.surface} stroke={c.line} />
      <path d="M48 58h30v45H48V58Z" fill={c.surface} />
      <path d="M55 69h16m-16 8h16m-16 8h11m-11 8h16" stroke={c.line} />
      <path d="M180 66c10 4 20 4 30 0v22c-4 14-26 14-30 0V66Z" fill={c.surface} stroke={c.line} />
      <path d="M188 79h3m8 0h3m-14 9c4 4 10 4 14 0m-15 24h18m-14 7h10" stroke={c.line} />
    </EducationScene>
  )
}
