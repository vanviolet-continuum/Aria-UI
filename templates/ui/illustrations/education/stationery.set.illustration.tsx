import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function StationerySetIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M52 153h158" stroke={c.line} />
      <StudyPencil x={77} y={39} angle={-12} />
      <StudyPencil x={105} y={33} angle={5} />
      <path
        d="M125 104V53h16v51m-10-42h10m-6 10h6m-10 10h10m-6 10h6"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M70 99h78l-7 54H77l-7-54Z" fill={c.tint} />
      <path d="m83 108 3 35m12-35 1 35m13-35-1 35m13-35-3 35" stroke={c.line} />
      <rect
        x="160"
        y="109"
        width="43"
        height="28"
        rx="5"
        fill={c.surface}
        transform="rotate(12 181 123)"
      />
      <path d="m180 109-5 26m-13 10h39" stroke={c.line} />
      <path d="M177 64v-8m-4 4h8" stroke={c.accent} />
    </EducationScene>
  )
}
