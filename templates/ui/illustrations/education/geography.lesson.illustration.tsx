import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function GeographyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <circle cx="124" cy="78" r="43" fill={c.surface} />
      <path
        d="m94 48 17 6 1 14-14 8-14-4m75-16-18 4-5 13 14 7 3 18-13 19m-33 1 2-19-15-9 3-12 16 4 13 15-7 18"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M90 30c-27 16-33 49-18 74s48 33 76 17m-26 7v25m-27 1h54m-4-26 9 22m-65-72h76"
        stroke={c.line}
      />
      <path d="M124 35c-25 21-25 64 0 86m0-86c25 21 25 64 0 86" stroke={c.line} />
      <path d="m171 110 18-5 17 9-2 41-18-9-17 6 2-42Z" fill={c.surface} />
      <path d="m188 107-2 39m-10-29 8-2m7 9 10 4" stroke={c.line} />
    </EducationScene>
  )
}
