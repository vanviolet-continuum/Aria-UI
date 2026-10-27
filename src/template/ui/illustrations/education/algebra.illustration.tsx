import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function AlgebraIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M73 28h104v128H73V28Z" fill={c.surface} />
      <path d="M86 42h49m-49 12h76m-76 51h76m-76 12h45m-45 21h76" stroke={c.line} />
      <path
        d="m89 74 13 16m-13 0 13-16m12 8h15m-7-7v14m18-15c19-2 16 10 2 16h18"
        strokeWidth="2.5"
      />
      <path d="M190 55v36m-13-25h26m-36 64h28m-14-14v28" stroke={c.accent} />
      <path d="M46 76h15m-15 7h15m-16 47 13-17m-13 0 13 17" stroke={c.line} />
      <circle cx="201" cy="108" r="6" fill={c.tint} stroke={c.line} />
      <StudyPencil x={178} y={93} angle={20} scale={0.7} />
    </EducationScene>
  )
}
