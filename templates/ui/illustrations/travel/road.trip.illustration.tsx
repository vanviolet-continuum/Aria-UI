import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function RoadTripIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M42 153c31-30 72-26 87-47s-4-29 14-44" stroke={c.line} strokeWidth="18" />
      <path d="M42 153c31-30 72-26 87-47s-4-29 14-44" stroke={c.surface} strokeDasharray="5 8" />
      <path
        d="M76 96V68a9 9 0 0 1 9-9h88a16 16 0 0 1 14 8l20 28v29H61v-17a11 11 0 0 1 15-11Z"
        fill={c.surface}
      />
      <path d="M87 70h33v25H87V70Zm44 0h38l18 25h-56V70Z" fill={c.tint} stroke={c.line} />
      <circle cx="89" cy="124" r="14" fill={c.tint} />
      <circle cx="177" cy="124" r="14" fill={c.tint} />
      <circle cx="89" cy="124" r="5" fill={c.surface} stroke={c.line} />
      <circle cx="177" cy="124" r="5" fill={c.surface} stroke={c.line} />
      <path d="M133 104h10m52 1h10m-140 0h9" stroke={c.line} />
      <rect x="107" y="43" width="47" height="16" rx="3" fill={c.tint} />
      <path d="M119 43v15m23-15v15M48 88V54h18m-18 0 10-12" stroke={c.line} />
    </CollectionScene>
  )
}
