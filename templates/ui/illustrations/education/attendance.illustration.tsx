import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function AttendanceIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="76" y="35" width="108" height="120" rx="7" fill={c.surface} />
      <rect x="104" y="26" width="52" height="19" rx="5" fill={c.tint} />
      <path d="M117 26c0-16 25-16 25 0" stroke={c.line} />
      <circle cx="100" cy="69" r="8" fill={c.tint} stroke={c.line} />
      <circle cx="100" cy="99" r="8" fill={c.tint} stroke={c.line} />
      <circle cx="100" cy="129" r="8" fill={c.tint} stroke={c.line} />
      <path d="M117 65h28m-28 9h21m-21 21h28m-28 9h21m-21 21h28m-28 9h21" stroke={c.line} />
      <path d="m157 68 4 4 9-10m-13 37 4 4 9-10m-13 32 11 11m-11 0 11-11" stroke={c.accent} />
      <path d="M52 82v11m-5-5h10m146 35v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}
