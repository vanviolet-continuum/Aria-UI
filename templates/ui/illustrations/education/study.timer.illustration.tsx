import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function StudyTimerIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <circle cx="122" cy="85" r="45" fill={c.surface} />
      <path d="M122 50a35 35 0 0 1 35 35h-35V50Z" fill={c.tint} stroke={c.accent} />
      <path
        d="M122 53v8m32 24h-8m-24 32v-8m-32-24h8m24-45V27m-11 0h22m-11 58-15 18"
        stroke={c.line}
      />
      <circle cx="122" cy="85" r="4" fill={c.accent} stroke="none" />
      <path d="M67 135h116v20H67c-12 0-12-20 0-20Z" fill={c.tint} />
      <path d="M72 144h104m-72-14-6 5m49-5 6 5m-97-69-6-5m132 2 6-5" stroke={c.line} />
      <StudyPencil x={193} y={93} angle={17} scale={0.8} />
    </EducationScene>
  )
}
