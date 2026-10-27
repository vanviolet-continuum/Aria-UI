import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function PencilCaseIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <StudyPencil x={94} y={36} angle={-17} scale={0.8} />
      <StudyPencil x={137} y={26} angle={15} scale={0.85} />
      <path d="m161 89 11-43 10 3-10 43" fill={c.tint} stroke={c.line} />
      <rect x="54" y="85" width="151" height="66" rx="19" fill={c.surface} />
      <path d="M55 103h149m-132 0h112" stroke={c.line} strokeDasharray="3 4" />
      <rect x="166" y="99" width="14" height="7" rx="3" fill={c.tint} />
      <path d="M175 107v8m-94 10h44m-44 9h25" stroke={c.line} />
      <path d="m189 85 13 16m-138 51h127" stroke={c.line} />
    </EducationScene>
  )
}
