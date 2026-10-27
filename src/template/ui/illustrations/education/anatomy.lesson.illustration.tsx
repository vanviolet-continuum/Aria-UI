import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function AnatomyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="61" y="29" width="139" height="124" rx="5" fill={c.surface} />
      <circle cx="122" cy="54" r="10" fill={c.tint} stroke={c.line} />
      <path
        d="m114 65-10 8-13 34 9 4 13-25v28l-7 28h10l6-25 6 25h10l-7-28V86l13 25 9-4-13-34-10-8h-16Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M122 78c-6-6-14 1-9 7l9 8 9-8c5-6-3-13-9-7Z" fill={c.surface} stroke={c.accent} />
      <path
        d="M153 53h32m-24 18h24m-30 21h30m-30 21h30m-18 20h18m-46-80h8m-48 39H79m26 31H79"
        stroke={c.line}
      />
      <path d="M45 89v10m-5-5h10" stroke={c.accent} />
    </EducationScene>
  )
}
