import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function PassportIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect
        x="74"
        y="30"
        width="93"
        height="124"
        rx="8"
        fill={c.tint}
        transform="rotate(-8 120 92)"
        stroke={c.line}
      />
      <rect x="85" y="27" width="93" height="125" rx="7" fill={c.surface} />
      <path d="M95 28v123m20-103h35m-39 86h43" stroke={c.line} />
      <circle cx="132" cy="90" r="24" fill={c.tint} />
      <ellipse cx="132" cy="90" rx="10" ry="24" stroke={c.line} />
      <path d="M108 90h48m-45-11h42m-42 22h42" stroke={c.line} />
      <path d="m162 101 37 13-13 36-37-13 13-36Z" fill={c.surface} />
      <circle cx="175" cy="125" r="10" stroke={c.accent} />
      <path d="m165 135 15 5m-14-25 14 5" stroke={c.line} />
      <path d="m52 85 8-3 10-14 5 2-5 14 9 4-1 4-25-2-1-5Z" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
