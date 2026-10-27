import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function ProjectPlanningIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="47" y="39" width="166" height="110" rx="8" fill={c.surface} />
      <path
        d="M47 65h166m-122 0v84m34-84v84m34-84v84m34-84v84M63 52h23m18 0h10m24 0h10m24 0h10m-82 25h109m-109 23h109m-109 23h109"
        stroke={c.line}
      />
      <path d="M64 81h15m-15 23h15m-15 23h15" strokeWidth="3" stroke={c.line} />
      <rect x="102" y="76" width="50" height="12" rx="4" fill={c.tint} stroke={c.accent} />
      <rect x="135" y="99" width="50" height="12" rx="4" fill={c.tint} />
      <rect x="169" y="122" width="34" height="12" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M74 31v16m111-16v16m-55 18v75" stroke={c.accent} strokeDasharray="4 4" />
      <circle cx="130" cy="65" r="4" fill={c.accent} stroke="none" />
    </CollectionScene>
  )
}
