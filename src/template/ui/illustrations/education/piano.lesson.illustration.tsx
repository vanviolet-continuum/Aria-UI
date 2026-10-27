import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function PianoLessonIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M50 59h161v81H50V59Z" fill={c.surface} />
      <path d="M50 99h161v24H50V99Zm12 41v17m137-17v17" fill={c.tint} stroke={c.line} />
      <path
        d="M62 100v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23m13-23v23"
        stroke={c.line}
      />
      <path
        d="M70 100v12m13-12v12m26-12v12m13-12v12m13-12v12m26-12v12m13-12v12m13-12v12"
        strokeWidth="5"
      />
      <path
        d="M106 36c10-4 18-2 25 3 8-5 16-7 26-3v42c-10-4-19-2-26 3-7-5-16-7-25-3V36Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M131 39v42m-18-29h11m14 0h12M94 147h63v8H94v-8Zm5 8v5m53-5v5" stroke={c.line} />
    </EducationScene>
  )
}
