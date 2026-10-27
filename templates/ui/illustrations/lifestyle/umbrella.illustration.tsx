import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function UmbrellaIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M57 91c4-69 142-69 147 0-11-13-25-13-36 0-11-13-25-13-37 0-11-13-25-13-37 0-11-13-25-13-37 0Z"
        fill={c.surface}
      />
      <path
        d="M94 91c0-27 15-49 37-58 22 9 37 31 37 58-11-13-25-13-37 0-11-13-25-13-37 0Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M131 33v-9m0 67v45c0 23-27 22-27 4" strokeWidth="3" />
      <path
        d="m53 49-4 9m29-25-4 9m114-9-4 9m27 17-4 9m-147 47-4 9m141-11-4 9m-109 8-3 7m90-6-3 7"
        stroke={c.line}
      />
      <ellipse cx="133" cy="158" rx="55" ry="5" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
