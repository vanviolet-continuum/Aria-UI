import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function StudyDashboardIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="46" y="32" width="168" height="120" rx="8" fill={c.surface} />
      <path d="M46 50h168m-128 0v102m-28-90h17m-17 13h17m-17 13h11" stroke={c.line} />
      <rect x="95" y="60" width="47" height="32" rx="4" fill={c.tint} stroke={c.line} />
      <rect x="151" y="60" width="53" height="32" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M106 71h24m-24 10h14m56-12 4 5 9-9" stroke={c.accent} />
      <path
        d="M98 138v-30m0 30h48m-41-6 10-12 12 3 15-17m18 3h35m-35 13h35m-35 13h23"
        stroke={c.line}
      />
      <path d="M111 43h38m-91 0h12" stroke={c.line} />
    </EducationScene>
  )
}
