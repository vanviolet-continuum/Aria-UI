import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function WritingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M65 42h108v106H65V42Z" fill={c.tint} transform="rotate(-6 119 95)" stroke={c.line} />
      <path d="M76 32h105v119H76V32Z" fill={c.surface} />
      <path d="M91 55h54m-54 13h40m-40 13h69m-69 13h60m-60 13h39m-39 21h69" stroke={c.line} />
      <path d="m141 111 9-28 41-52 12 10-41 52-21 18Z" fill={c.tint} />
      <path d="m150 83 12 10m-3-20 12 10m-25 16 5 4m40-72 5-6 12 10-5 6" stroke={c.line} />
      <path d="M184 131h25v22h-25v-22Zm5 0v-8h15v8" fill={c.surface} />
      <path d="M190 141h13m-146-13h-9m13 14H48" stroke={c.line} />
    </CollectionScene>
  )
}
