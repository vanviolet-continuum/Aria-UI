import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ClassScheduleIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="48" y="41" width="164" height="112" rx="7" fill={c.surface} />
      <path
        d="M48 65h164m-132 0v88m33-88v88m33-88v88m33-88v88m-131-59h164m-164 29h164M74 32v19m112-19v19"
        stroke={c.line}
      />
      <path d="M58 51h20m18 0h9m24 0h9m24 0h9m24 0h7" stroke={c.line} />
      <rect x="87" y="73" width="18" height="13" rx="3" fill={c.tint} stroke={c.accent} />
      <rect x="120" y="102" width="18" height="13" rx="3" fill={c.tint} />
      <rect x="153" y="131" width="18" height="13" rx="3" fill={c.tint} stroke={c.line} />
      <rect x="186" y="73" width="18" height="13" rx="3" fill={c.tint} stroke={c.accent} />
      <path d="M59 80h12m-12 29h12m-12 29h12" stroke={c.line} />
    </EducationScene>
  )
}
