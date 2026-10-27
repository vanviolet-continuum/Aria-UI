import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function SchoolRulerIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <g transform="rotate(-24 130 92)">
        <rect x="49" y="69" width="161" height="43" rx="5" fill={c.surface} />
        <path
          d="M62 70v17m12-17v10m12-10v17m12-17v10m12-10v17m12-17v10m12-10v17m12-17v10m12-10v17m12-17v10m12-10v17m12-17v10"
          stroke={c.line}
        />
        <circle cx="62" cy="99" r="3" stroke={c.line} />
        <path d="M86 101h16m13 0h16m13 0h16m13 0h16" stroke={c.line} />
      </g>
      <path
        d="M58 141h100m-100-6v12m100-12v12m-92-6 6-4m-6 4 6 4m78-4-6-4m6 4-6 4"
        stroke={c.accent}
      />
      <StudyPencil x={177} y={92} angle={25} scale={0.8} />
      <path d="M64 50h25m-13-9v18" stroke={c.line} />
    </EducationScene>
  )
}
