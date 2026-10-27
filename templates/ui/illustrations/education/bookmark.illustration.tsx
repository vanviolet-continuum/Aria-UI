import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function BookmarkIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M64 54h94v101H64c-15 0-15-22 0-22h94" fill={c.surface} />
      <path d="M66 54v79m0 10h83" stroke={c.line} />
      <path d="M112 26h64v103l-32-21-32 21V26Z" fill={c.tint} />
      <path
        d="m144 44 5 11 12 2-9 8 2 12-10-6-10 6 2-12-9-8 12-2 5-11Z"
        fill={c.surface}
        stroke={c.accent}
      />
      <path d="M123 89h42m-35 9h28" stroke={c.line} />
      <path d="M184 78h18v16h-18m0 11h18v16h-18M86 33v8m-4-4h8m113 97 6 5" stroke={c.line} />
    </EducationScene>
  )
}
