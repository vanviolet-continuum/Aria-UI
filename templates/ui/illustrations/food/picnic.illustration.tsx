import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function PicnicIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m44 123 125-20 51 41-135 18-41-39Z" fill={c.surface} stroke={c.line} />
      <path
        d="m67 120 42 39m-12-43 42 39m-12-44 42 39m-12-44 40 38m-141-14 134-18m-124 28 135-18m-125 27 135-18"
        stroke={c.line}
      />
      <path d="m82 79 8 49h63l9-49H82Z" fill={c.tint} />
      <path
        d="M96 79V66a27 27 0 0 1 54 0v13m-43 0V66a16 16 0 0 1 32 0v13"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M86 93h72m-69 14h66m-52-27 4 47m29-47-4 47" stroke={c.line} />
      <path d="M172 97h24v32h-24V97Z" fill={c.surface} />
      <path d="M196 102h6c8 0 8 16-6 16m-18-31c-5-5 5-8 0-12" stroke={c.line} />
      <path d="M51 93c-7-10-5-18 3-19 9 3 8 12-3 19Z" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
