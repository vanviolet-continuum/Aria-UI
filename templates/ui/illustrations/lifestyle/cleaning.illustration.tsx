import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function CleaningIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m89 89 8-28h16l9 8-13 6-5 18" fill={c.surface} />
      <path d="M98 61V49h26l10 10-12 10m-9-7v8" stroke={c.line} />
      <path d="M91 89h17l10 15v49H78v-49l13-15Z" fill={c.tint} />
      <path d="M80 117h36v23H80v-23Z" fill={c.surface} stroke={c.line} />
      <path d="M93 123v11m-5-5h10" stroke={c.accent} />
      <path d="m159 120 19-91 7 2-18 91" fill={c.surface} />
      <path d="m145 117 34 7 8 30h-63l21-37Z" fill={c.tint} />
      <path d="m146 130-10 24m19-22-5 22m14-20v20m9-19 4 19" stroke={c.line} />
      <path
        d="M52 78v14m-7-7h14m91-24v10m-5-5h10m-11 39v8m-4-4h8m52-25v10m-5-5h10"
        stroke={c.accent}
      />
      <circle cx="63" cy="116" r="5" stroke={c.line} />
    </CollectionScene>
  )
}
