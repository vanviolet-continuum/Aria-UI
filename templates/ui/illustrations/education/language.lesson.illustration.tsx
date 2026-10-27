import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function LanguageLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M62 40h81v59h-40l-14 13V99H62V40Z" fill={c.surface} />
      <path d="M124 84h77v54h-19v14l-17-14h-41V84Z" fill={c.tint} stroke={c.line} />
      <path
        d="m83 80 12-25 12 25m-20-8h16m14-17v25m0-25h7c12 0 12 12 0 12h-7m0 0h9c12 0 12 13 0 13h-9"
        strokeWidth="2.5"
      />
      <path
        d="M139 100h45m-25-7v8c-1 15-8 24-21 29m6-23c6 12 16 20 31 23m-28-11h28"
        stroke={c.line}
      />
      <path d="M68 130h31m-31 9h21M171 47v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
