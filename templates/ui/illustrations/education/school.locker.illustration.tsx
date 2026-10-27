import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function SchoolLockerIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M58 33h144v121H58V33Z" fill={c.surface} />
      <path
        d="M106 33v121m48-121v121M68 47h28m-28 7h28m-28 7h28m20-14h28m-28 7h28m-28 7h28m20-14h28m-28 7h28m-28 7h28m-124 72h28m20 0h28m20 0h28"
        stroke={c.line}
      />
      <path d="M91 86v14m48-14v14m48-14v14" strokeWidth="3" stroke={c.line} />
      <path d="M116 45h27v25h-27V45Z" fill={c.tint} stroke={c.line} />
      <path d="m122 58 5 5 10-11" stroke={c.accent} />
      <path d="M169 125h34l7 29h-48l7-29Zm6 0v-7h21v7" fill={c.tint} stroke={c.line} />
      <path d="M178 136h18m-119 18v5m85-5v5" stroke={c.line} />
    </EducationScene>
  )
}
