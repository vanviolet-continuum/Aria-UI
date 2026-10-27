import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function HomeworkIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="66" y="31" width="113" height="125" rx="5" fill={c.surface} />
      <path d="M82 44h66m-66 11h39m-39 45h68m-68 12h54m-54 12h68m-68 16h35" stroke={c.line} />
      <path d="m87 71 12 16m-12 0 12-16m13 8h14m-7-7v14m19-15h13l-13 16h13" stroke={c.accent} />
      <path d="M151 130h48v28h-48v-28Z" fill={c.tint} />
      <path d="m151 130 24 17 24-17m-48 28 17-16m31 16-17-16" stroke={c.line} />
      <StudyPencil x={201} y={58} angle={16} scale={0.8} />
      <path d="M47 107h9m-4-4v8" stroke={c.line} />
    </EducationScene>
  )
}
