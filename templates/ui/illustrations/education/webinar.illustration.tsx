import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function WebinarIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="49" y="40" width="160" height="103" rx="8" fill={c.surface} />
      <rect x="59" y="50" width="104" height="68" rx="4" fill={c.tint} stroke={c.line} />
      <circle cx="88" cy="73" r="10" fill={c.surface} stroke={c.line} />
      <path
        d="M73 109V99c0-18 30-18 30 0v10m6-15 11-10m-2-24h34v30h-34V60Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M124 68h21m-21 9h13" stroke={c.line} />
      <path
        d="M175 55h23m-23 8h15m-15 13h23m-23 8h15m-15 13h23m-23 8h15M61 128h43m10 0h18m12 0h18"
        stroke={c.line}
      />
      <circle cx="187" cy="128" r="4" fill={c.accent} stroke="none" />
      <path d="M104 143v12m50-12v12m-59 0h68m-95-127h29" stroke={c.line} />
    </EducationScene>
  )
}
