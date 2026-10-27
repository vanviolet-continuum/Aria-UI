import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function SculptureIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M87 123h86v12H87v-12Zm8 12h70v21H95v-21Z" fill={c.surface} />
      <path d="M102 135v21m56-21v21" stroke={c.line} />
      <path
        d="M97 119V98c0-7 10-12 21-15V72c-16-9-14-38-1-44 19-13 42 1 40 20l-3 23-12 7v7c12 2 23 7 23 15v19H97Z"
        fill={c.tint}
      />
      <path
        d="m118 83 13 19 11-17m-32 2 11 25m34-20-16 24m-21-44 13 7 11-1m-28-35 11-7 12 5 17-2"
        stroke={c.line}
      />
      <path d="m142 51 7 8-7 3m-5 8h7" stroke={c.line} />
      <path
        d="m64 119-8-14 8-22 8 22-8 14Zm0 0v35m-7 0h14m114-69v69m-7-69h14V71h-14v14Z"
        fill={c.surface}
        stroke={c.line}
      />
    </CollectionScene>
  )
}
