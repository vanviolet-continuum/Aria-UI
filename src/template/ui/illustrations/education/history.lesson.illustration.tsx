import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function HistoryLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M84 43h92v106H84V43Z" fill={c.surface} />
      <path
        d="M84 43H66c-12 0-12 20 0 20h18m92 66h16c12 0 12 20 0 20h-16"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M97 58h62m-62 10h41m-37 17 30-12 30 12h-60Zm5 6h49m-45 0v27m12-27v27m17-27v27m12-27v27m-45 5h49m-49 10h49"
        stroke={c.line}
      />
      <path d="M130 83v1" stroke={c.accent} strokeWidth="4" />
      <path d="M51 91v61m-5-52h10m-10 20h10m-10 20h10" stroke={c.line} />
      <circle cx="51" cy="100" r="4" fill={c.surface} />
      <circle cx="51" cy="120" r="4" fill={c.tint} />
      <circle cx="51" cy="140" r="4" fill={c.surface} />
      <path d="M197 53v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
