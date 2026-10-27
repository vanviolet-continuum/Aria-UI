import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function HeartCareIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M130 145S63 108 63 71c0-31 42-44 67-16 25-28 67-15 67 16 0 37-67 74-67 74Z"
        fill={c.tint}
      />
      <path d="M49 93h44l13-21 17 43 14-29 9 7h66" stroke={c.surface} strokeWidth="7" />
      <path d="M49 93h44l13-21 17 43 14-29 9 7h66" />
      <path d="M79 62c3-9 12-13 21-10" stroke={c.line} strokeWidth="3" />
      <circle cx="196" cy="132" r="18" fill={c.surface} />
      <path d="M196 122v20m-10-10h20" stroke={c.accent} strokeWidth="4" />
      <path d="M67 143h27m-15 9h27" stroke={c.line} />
    </CollectionScene>
  )
}
