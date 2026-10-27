import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function EcologyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M83 40h94v14l15 18v63c0 25-124 25-124 0V72l15-18V40Z" fill={c.surface} />
      <path
        d="M83 40h94V29H83v11Zm-13 85c37-11 77-11 120 0v10c0 22-120 22-120 0v-10Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M125 121V71m0 26c-18-1-27-15-22-24 16 2 24 12 22 24Zm0-12c1-22 18-32 30-27 0 17-12 27-30 27Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M90 125c-9-12-1-22 4-26 7 12 9 19-4 26Zm70-1c-8-10-5-20 4-24 6 11 6 19-4 24Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M49 78c-5 16-5 27 1 38m-5-7 5 7 5-7m158 7c5-16 5-27-1-38m-5 7 5-7 5 7"
        stroke={c.accent}
      />
    </EducationScene>
  )
}
