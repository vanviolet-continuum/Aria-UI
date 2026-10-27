import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function SpellingPracticeIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M57 84h148v71H57V84Z" fill={c.surface} />
      <path d="M69 102h124m-124 16h124m-124 16h124" stroke={c.line} strokeDasharray="4 4" />
      <rect
        x="65"
        y="37"
        width="37"
        height="37"
        rx="4"
        fill={c.tint}
        transform="rotate(-7 83 55)"
      />
      <rect x="111" y="34" width="37" height="37" rx="4" fill={c.surface} />
      <rect
        x="157"
        y="39"
        width="37"
        height="37"
        rx="4"
        fill={c.tint}
        transform="rotate(7 175 57)"
      />
      <path d="m76 63 7-17 8 17m-12-5h9m34-16v21h7c10 0 10-10 0-10h-7m0 0h7c9 0 9-11 0-11h-7m59 9c-16-10-20 17-3 17l5-2" />
      <path d="m82 146 5-9m-5 0 5 9m23-9v9m22-5h8m-8 5h8" stroke={c.accent} />
      <StudyPencil x={203} y={99} angle={16} scale={0.65} />
    </EducationScene>
  )
}
