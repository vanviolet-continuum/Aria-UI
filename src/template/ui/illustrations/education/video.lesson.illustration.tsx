import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyBook, StudyPencil } from '../shared/education.parts'

export function VideoLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="51" y="35" width="152" height="103" rx="8" fill={c.surface} />
      <rect x="61" y="45" width="132" height="68" rx="4" fill={c.tint} stroke={c.line} />
      <path d="m117 62 26 17-26 17V62Z" fill={c.surface} />
      <path d="M64 125h123m-101-5v10" stroke={c.line} />
      <circle cx="86" cy="125" r="4" fill={c.accent} stroke="none" />
      <StudyBook x={161} y={110} scale={0.7} />
      <StudyPencil x={55} y={98} angle={-12} scale={0.75} />
      <path d="M76 152h73m-39-14v14m38-14v14" stroke={c.line} />
      <path d="M210 66v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
