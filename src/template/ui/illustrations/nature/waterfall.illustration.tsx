import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function WaterfallIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m51 149 9-48 18-12 5-49 35-8 24 14 28-12 25 16 10 100H51Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M108 44h40l-6 97c-8 17-32 17-40 0l6-97Z" fill={c.surface} />
      <path d="m118 52-5 75m23-72-5 65m-9-42-3 55" stroke={c.line} />
      <path
        d="M99 139c-21-13-33 1-20 12-7 9 12 15 27 10 12 10 26 7 31 1 26 5 46-4 33-14 13-13-5-22-22-12"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M111 147h23m-17 10h27M72 82h20m65-12h31m-28 42h31" stroke={c.line} />
      <path d="m64 45 9-19 9 19H64Zm111-12 8-17 8 17h-16Z" fill={c.surface} stroke={c.line} />
      <path d="M92 132v-5m53 10 2-5m-42 5-2-5" stroke={c.accent} />
    </CollectionScene>
  )
}
