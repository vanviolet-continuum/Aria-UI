import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ExamResultsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M66 30h106v124H66V30Z" fill={c.surface} />
      <path d="M81 45h51m-51 12h34m-34 34h72m-72 13h54m-54 13h72m-72 20h38" stroke={c.line} />
      <circle cx="145" cy="60" r="18" fill={c.tint} stroke={c.accent} />
      <path d="m136 66 9-17 9 17m-13-6h8" stroke={c.accent} />
      <path d="M165 154v-21h14v21m8 0v-34h14v34m8 0v-49h14v49" fill={c.tint} stroke={c.line} />
      <path d="M162 156h62m-38-72 5 6 10-12M47 73v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
