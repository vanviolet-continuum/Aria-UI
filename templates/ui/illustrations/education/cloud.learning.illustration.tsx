import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function CloudLearningIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M91 94c-30 1-41-38-14-50 7-29 48-29 59-6 29-17 58 5 52 29 25 14 14 39-10 39h-25"
        fill={c.surface}
        stroke={c.line}
      />
      <path
        d="M98 59c11-5 21-2 32 4 11-6 21-9 32-4v35c-11-4-22-1-32 5-10-6-21-9-32-5V59Z"
        fill={c.tint}
      />
      <path d="M130 63v36m-23-28 14 3m17 0 14-3" stroke={c.line} />
      <path
        d="M130 106v17m-23-12v12m46-12v12M87 134h86v23H87v-23Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M99 145h62m-25-17 5 5m-37-3 5 5m70-4 5 5" stroke={c.line} />
      <circle cx="59" cy="118" r="6" fill={c.tint} stroke={c.accent} />
    </EducationScene>
  )
}
