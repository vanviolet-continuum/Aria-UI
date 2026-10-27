import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function ArithmeticIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="56" y="34" width="139" height="104" rx="7" fill={c.surface} />
      <path d="M69 48h111v76H69V48Z" fill={c.tint} stroke={c.line} />
      <g strokeWidth="3">
        <path d="M85 61v19m-9-9h18m19 0h18m-53 34 14-14m-14 0 14 14m22-9h18m-18 6h18" />
        <circle cx="122" cy="63" r="1" />
        <circle cx="122" cy="79" r="1" />
      </g>
      <path d="M146 61h22m-22 9h15m-15 10h19m-19 14h22m-22 10h13" stroke={c.line} />
      <path d="m85 138-7 17m88-17 7 17m-84-12h74" stroke={c.line} />
      <StudyPencil x={200} y={74} angle={15} scale={0.9} />
    </EducationScene>
  )
}
