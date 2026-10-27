import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyBook } from '../shared/education.parts'

export function ResearchIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M69 32h101v122H69V32Z" fill={c.surface} />
      <path d="M83 46h61m-61 12h41m-41 24h68m-68 12h43m-43 29h36m-36 12h49" stroke={c.line} />
      <rect x="84" y="72" width="29" height="32" rx="3" fill={c.tint} stroke={c.line} />
      <circle cx="168" cy="102" r="28" fill={c.surface} />
      <circle cx="168" cy="102" r="21" fill={c.tint} stroke={c.line} />
      <path d="m189 123 24 26-8 8-24-27m-26-34h25m-25 10h18" stroke={c.line} />
      <StudyBook x={43} y={117} scale={0.6} />
      <path d="M188 47v9m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
