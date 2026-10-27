import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function GamingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="77" y="29" width="111" height="69" rx="6" fill={c.surface} />
      <rect x="85" y="37" width="95" height="52" rx="2" fill={c.tint} stroke={c.line} />
      <path d="m102 72 16-14 13 8 19-18 14 24m-42 26v13m24-13v13m-33 0h42" stroke={c.line} />
      <path
        d="M82 103h84c15 0 31 36 24 45-8 12-22-8-31-14h-70c-9 6-24 26-32 14-7-9 10-45 25-45Z"
        fill={c.surface}
      />
      <path d="M84 112v17m-8-8h16" strokeWidth="4" />
      <circle cx="160" cy="117" r="3" fill={c.accent} stroke="none" />
      <circle cx="170" cy="127" r="3" fill={c.accent} stroke="none" />
      <circle cx="116" cy="128" r="7" fill={c.tint} stroke={c.line} />
      <circle cx="140" cy="128" r="7" fill={c.tint} stroke={c.line} />
      <path d="M47 64v10m-5-5h10m155 27h12" stroke={c.line} />
    </CollectionScene>
  )
}
