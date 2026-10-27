import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function FossilStudyIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m58 84 20-41 63-9 41 38-4 62-37 20-63-11-20-59Z" fill={c.tint} stroke={c.line} />
      <path
        d="M150 120c-37 16-72-16-57-45 12-25 49-25 62-4 10 16-1 36-18 35-15 0-24-17-13-26 9-7 19 1 13 9"
        fill={c.surface}
      />
      <path
        d="m101 63 9 8m4-17 4 10m10-12v11m15-9-4 11m16-2-9 7m14 7-10 3m8 13-10-3m-1 15-7-8m-7 9v-9m-13 4 6-8m-15 2 9-5m-14-3 10-1"
        stroke={c.line}
      />
      <path
        d="m171 127 20-47 8 3-20 48m-11-7 16 7-6 24-22-9 12-22Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m166 136-6 13m12-10-6 13m12-10-6 12m-84-8-12 9m130-28 6 7" stroke={c.line} />
    </EducationScene>
  )
}
