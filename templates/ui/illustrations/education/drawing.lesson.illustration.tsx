import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function DrawingLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M65 35h111v119H65V35Z" fill={c.surface} />
      <path
        d="M76 35v119m-13-106h15m-15 17h15m-15 17h15m-15 17h15m-15 17h15m-15 17h15"
        stroke={c.line}
      />
      <path d="m95 117 24-40 25 40H95Z" fill={c.tint} stroke={c.line} />
      <circle cx="144" cy="72" r="17" stroke={c.line} />
      <path d="M87 132h77M93 55h24m-24 8h16m17 61 26-17" stroke={c.line} />
      <StudyPencil x={201} y={58} angle={19} scale={1.1} />
      <path d="M43 90v10m-5-5h10" stroke={c.accent} />
    </EducationScene>
  )
}
