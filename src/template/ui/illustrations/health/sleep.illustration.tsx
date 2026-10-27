import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function SleepIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M47 91v64m166-43v43M48 132h164v-20H48v20Z" fill={c.tint} />
      <path d="M55 94h51a9 9 0 0 1 9 9v9H55V94Z" fill={c.surface} stroke={c.line} />
      <path d="M106 89h71c21 0 35 9 35 23H106V89Z" fill={c.surface} />
      <path d="M119 95v17m0 28h70" stroke={c.line} />
      <path
        d="M87 24c-11 19 5 36 24 30-15 17-37 6-35-12 0-8 4-15 11-18Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M133 44h12l-12 15h12m13-34h16l-16 20h16m-60 19h8l-8 10h8" stroke={c.accent} />
      <path d="M190 58v9m-4-4h8m-66-37v6m-3-3h6" stroke={c.line} />
    </CollectionScene>
  )
}
