import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function CoursePlaylistIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M62 47h137v94H62V47Z" fill={c.surface} />
      <rect x="71" y="57" width="74" height="51" rx="4" fill={c.tint} stroke={c.line} />
      <path d="m100 70 16 12-16 12V70Z" fill={c.surface} />
      <path
        d="M72 119h72m-72 9h52m30-61h34m-34 10h26m-26 18h34m-34 10h26m-26 18h34m-34 10h26"
        stroke={c.line}
      />
      <path
        d="m62 141-17 11c-3 2-1 5 3 5h165c4 0 6-3 3-5l-17-11M111 141l3 7h35l3-7"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M136 28h50m-43 7h36m-105-6v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}
