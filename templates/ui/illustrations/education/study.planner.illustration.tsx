import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function StudyPlannerIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M55 41c28-7 51-3 75 9 24-12 47-16 75-9v107c-28-6-52-2-75 10-23-12-47-16-75-10V41Z"
        fill={c.surface}
      />
      <path
        d="M130 50v108m-61-99h44m-44 12h29m-29 17h44m-44 20h44m-44 20h44m30-66h45m-45 12h29"
        stroke={c.line}
      />
      <path
        d="M144 91h15v15h-15V91Zm26 0h15v15h-15V91Zm-26 25h15v15h-15v-15Zm26 0h15v15h-15v-15Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m146 98 4 4 8-9m14 30 4 4 7-8" stroke={c.accent} />
      <StudyPencil x={205} y={100} angle={16} scale={0.7} />
    </EducationScene>
  )
}
