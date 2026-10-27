import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function KeyIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M104 88c-2 27-38 38-56 16S43 49 69 46c18-2 33 8 37 24l69 1 19 19-16 17-15-13-13 12-13-13-33-5Z"
        fill={c.surface}
      />
      <circle cx="73" cy="74" r="12" fill={c.tint} stroke={c.line} />
      <path d="M109 79h62m0 0 12 11" stroke={c.line} />
      <path d="M109 89c19 5 28 22 30 36" stroke={c.line} />
      <path d="m128 126 27-7 18 29-27 8-18-30Z" fill={c.tint} />
      <circle cx="142" cy="130" r="3" fill={c.surface} stroke={c.line} />
      <path d="m145 140 14-4m-10 11 13-4" stroke={c.line} />
      <path d="M206 68v10m-5-5h10m-131 64v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}
