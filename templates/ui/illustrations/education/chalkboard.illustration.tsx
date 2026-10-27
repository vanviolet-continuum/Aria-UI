import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function ChalkboardIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <rect x="51" y="38" width="158" height="101" rx="5" fill={c.surface} />
      <path d="M60 47h140v79H60V47Z" fill={c.tint} />
      <path
        d="M71 109h27V82l-27 27Zm43-3 18-31 18 31h-36Zm53-20a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
        stroke={c.line}
      />
      <path d="M74 61h49m10 0h39m-62 65h32m-68 13-5 16m118-16 5 16" stroke={c.line} />
      <path d="M49 139h163v7H49v-7Z" fill={c.surface} />
      <path d="m159 126 24-3 3 10-24 3-3-10Z" fill={c.tint} stroke={c.line} />
      <path d="M78 135h16" stroke={c.accent} strokeWidth="4" />
    </EducationScene>
  )
}
