import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function AcademicMedalIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m94 28 35 45 37-45h-28l-10 18-11-18H94Z" fill={c.tint} />
      <path d="m101 29 29 38 29-38m-39 24 13-18" stroke={c.line} />
      <circle cx="130" cy="106" r="40" fill={c.surface} />
      <circle cx="130" cy="106" r="31" fill={c.tint} stroke={c.line} />
      <path
        d="M111 99c8-3 13-1 19 3 6-4 11-6 19-3v20c-7-3-13-1-19 3-6-4-12-6-19-3V99Zm19 3v20m-7-34 7-5 7 5"
        stroke={c.accent}
      />
      <path d="m104 146-6 12m58-12 6 12m-56-3h48" stroke={c.line} />
      <path d="M69 90v10m-5-5h10m127 21v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
