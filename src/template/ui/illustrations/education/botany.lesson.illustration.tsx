import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function BotanyLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M62 29h107v125H62V29Z" fill={c.surface} />
      <path d="M76 43h56m-56 10h34" stroke={c.line} />
      <path
        d="M113 126V74m0 20c-24 0-27-17-26-24 19 0 28 12 26 24Zm0-11c0-23 19-31 28-26-2 19-14 26-28 26Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M96 125c9 0 15 5 17 14 4-11 10-15 20-14" stroke={c.line} />
      <circle cx="186" cy="111" r="23" fill={c.surface} />
      <path d="M181 98c-11 5-12 22-2 24 14 1 13-18 2-24Z" fill={c.tint} />
      <path d="m181 99 1 15m20 15 15 19m-89-52h21m-50 16H77" stroke={c.line} />
    </EducationScene>
  )
}
