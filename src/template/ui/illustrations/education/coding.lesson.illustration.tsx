import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyBook } from '../shared/education.parts'

export function CodingLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="62" y="36" width="138" height="101" rx="6" fill={c.surface} />
      <path d="M72 46h118v76H72V46Z" fill={c.tint} stroke={c.line} />
      <path d="m100 63-10 10 10 10m22-20 10 10-10 10m-10-24-5 29" stroke={c.accent} />
      <path d="M143 62h35m-35 12h24m-35 24h46m-92 10h36" stroke={c.line} />
      <path d="m62 137-14 14h166l-14-14m-83 0-3 7h33l-3-7" fill={c.surface} stroke={c.line} />
      <StudyBook x={49} y={91} scale={0.65} />
      <path d="M197 25v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
