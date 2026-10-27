import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyBook } from '../shared/education.parts'

export function LessonPlanIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M57 38h106v116H57V38Z" fill={c.surface} />
      <path d="M72 55h61m-61 12h42m-20 23h51m-51 22h51m-51 22h38" stroke={c.line} />
      <path d="m72 87 4 4 8-8m-12 26 4 4 8-8m-12 26 4 4 8-8" stroke={c.accent} />
      <path d="M174 56h26v62h-26V56Z" fill={c.tint} stroke={c.line} />
      <path d="M180 65h14m-14 10h14m-14 10h14m-14 10h14m-14 10h14" stroke={c.line} />
      <StudyBook x={142} y={112} scale={0.65} />
      <path d="M174 39v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
