import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function LifelongLearningIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M82 69c-38-15-58 39-25 54 26 12 44-10 73-38 29-28 47-50 73-38 33 15 13 69-25 54m-1-13 1 13 14-2"
        stroke={c.line}
        strokeWidth="3"
      />
      <path
        d="M91 113c15-5 27-2 39 5 12-7 24-10 39-5v33c-15-4-28-1-39 7-11-8-24-11-39-7v-33Z"
        fill={c.surface}
      />
      <path d="M130 118v35m-29-27 18 4m22 0 18-4m-58 10 18 4m22 0 18-4" stroke={c.line} />
      <path d="M112 62c-12-17 4-35 19-29 17 6 18 21 8 29v11h-27V62Z" fill={c.tint} />
      <path d="M115 73h21v9h-21v-9m6-1V58l-6-6m17 20V58l6-6" stroke={c.line} />
      <path d="M91 36v8m-4-4h8m71-16v8m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}
