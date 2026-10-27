import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function MusicIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m119 88 36-52 12 8-36 52c16 11 13 24 1 31-3 18-27 32-46 18s-16-37-1-45c4-14 20-21 34-12Z"
        fill={c.surface}
      />
      <path d="m95 118 64-78m-60 80 64-78m-65 82 67-81" stroke={c.line} />
      <circle cx="106" cy="112" r="12" fill={c.tint} />
      <path d="m90 131 16 11m44-110 9-12 14 11-9 13-14-12Z" fill={c.tint} />
      <path d="M65 67V43l23-5v24m-23-12 23-5" stroke={c.accent} />
      <ellipse cx="59" cy="70" rx="6" ry="4" fill={c.tint} />
      <ellipse cx="82" cy="65" rx="6" ry="4" fill={c.tint} />
      <path d="M183 98V72l17 5" stroke={c.accent} />
      <ellipse cx="177" cy="101" rx="6" ry="4" fill={c.tint} />
      <path d="M151 150h45" stroke={c.line} />
    </CollectionScene>
  )
}
