import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function CalculusIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="51" y="31" width="160" height="116" rx="7" fill={c.surface} />
      <path
        d="M69 51v78h122m-122-20h122m-122-20h122m-122-20h122m-97-18v78m25-78v78m25-78v78m25-78v78"
        stroke={c.line}
      />
      <path d="M82 120c31 0 31-50 57-50s28 39 54 6" stroke={c.accent} strokeWidth="3" />
      <path d="M108 128V96c11-19 17-26 31-26 12 0 17 9 25 16v42h-56Z" fill={c.tint} stroke="none" />
      <path
        d="M108 96c11-19 17-26 31-26 12 0 17 9 25 16m-44 28V91m12 23V81m12 33V83m12 31V91"
        stroke={c.accent}
      />
      <path d="M183 47c-12-11-10 25-19 14M81 157h97" stroke={c.line} />
      <StudyPencil x={200} y={105} angle={19} scale={0.6} />
    </EducationScene>
  )
}
