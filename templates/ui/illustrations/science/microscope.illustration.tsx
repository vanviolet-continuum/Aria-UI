import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function MicroscopeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M92 141c-4-11 1-20 14-23l12-8 18 8 8 23H92Z" fill={c.tint} stroke={c.line} />
      <path d="M145 124c36-11 40-65 4-80l-8 15c24 11 20 43-2 48" fill={c.surface} />
      <path
        d="m104 40 11-16 45 31-11 16-45-31Zm-5 9 10-14 28 19-10 14-28-19Zm17 21 9-12 9 6-9 12-9-6Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="148" cy="79" r="9" fill={c.surface} />
      <circle cx="148" cy="79" r="3" stroke={c.line} />
      <path d="M77 98h65v7H77v-7Zm23 7v21m-26 15h99v14H74v-14Z" fill={c.surface} />
      <path d="m92 96 11-7h17v7m-37 53h81" stroke={c.line} />
      <path d="M184 108h23m-18 12h14M61 57v9m-4-4h8" stroke={c.line} />
    </CollectionScene>
  )
}
