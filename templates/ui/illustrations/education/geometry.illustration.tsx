import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function GeometryIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m52 133 55-94 55 94H52Z" fill={c.surface} />
      <path d="m74 120 33-57 33 57H74Z" fill={c.tint} stroke={c.line} />
      <path d="M94 133v-13m24 13v-13m-58 0 10-6m3-17 10 6m58 11 10 6" stroke={c.line} />
      <circle cx="175" cy="69" r="30" fill={c.surface} />
      <path d="M175 69h30m-30 0 17-23m-17 23-14 25" stroke={c.line} />
      <circle cx="175" cy="69" r="3" fill={c.accent} stroke="none" />
      <path d="M166 109h35v35h-35v-35Z" fill={c.tint} stroke={c.line} />
      <path d="m173 137 20-20m-27-8 35 35M62 153h145" stroke={c.line} />
      <StudyPencil x={45} y={54} angle={-16} scale={0.55} />
    </EducationScene>
  )
}
