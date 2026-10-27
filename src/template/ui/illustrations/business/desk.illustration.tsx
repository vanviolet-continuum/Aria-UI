import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function DeskIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="87" y="41" width="99" height="64" rx="5" fill={c.surface} />
      <rect x="94" y="48" width="85" height="47" rx="2" fill={c.tint} stroke={c.line} />
      <path
        d="M126 105v15m21-15v15m-31 0h41M47 125h169v9H47v-9Zm12 9v24m145-24v24"
        fill={c.surface}
      />
      <path d="m106 125 5-8h51l5 8" fill={c.tint} stroke={c.line} />
      <path d="M54 124V86l20-18m-10 6-12-9 19-18 13 13-20 14Z" fill={c.surface} />
      <path d="M46 124h24m123-4v-17h17v17m0-13h5v9h-5" stroke={c.line} />
      <path d="M108 64h44m-44 10h56m-56 10h30" stroke={c.line} />
      <path d="M167 142h29v13h-29v-13Z" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
