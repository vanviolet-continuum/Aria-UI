import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'
import { StudyPencil } from '../shared/education.parts'

export function DigitalTextbookIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="66" y="23" width="130" height="135" rx="11" fill={c.surface} />
      <rect x="74" y="32" width="114" height="114" rx="4" fill={c.tint} stroke={c.line} />
      <path
        d="M129 39v100m-45-91h34m-34 9h25m-25 10h34m22-19h36m-36 9h26m-26 10h36m-92 48h34m-34 10h25m22-10h36m-36 10h26"
        stroke={c.line}
      />
      <path d="m84 102 13-21 14 21H84Zm61-22h27v22h-27V80Z" fill={c.surface} stroke={c.line} />
      <path d="m150 97 9-9 9 9m-43 55h12" stroke={c.line} />
      <StudyPencil x={208} y={74} angle={13} scale={0.95} />
      <path d="M47 116v10m-5-5h10" stroke={c.accent} />
    </EducationScene>
  )
}
