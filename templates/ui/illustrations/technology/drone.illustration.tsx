import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function DroneIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m110 84-28-27m68 27 28-27m-68 45-31 24m72-24 30 24"
        strokeWidth="8"
        stroke={c.line}
      />
      <path d="m110 84-28-27m68 27 28-27m-68 45-31 24m72-24 30 24" />
      <ellipse cx="76" cy="51" rx="29" ry="9" fill={c.surface} />
      <ellipse cx="185" cy="51" rx="29" ry="9" fill={c.surface} />
      <ellipse cx="72" cy="132" rx="29" ry="9" fill={c.surface} />
      <ellipse cx="190" cy="132" rx="29" ry="9" fill={c.surface} />
      <rect x="105" y="75" width="50" height="37" rx="11" fill={c.surface} />
      <path d="M119 112v12h23v-12" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="120" r="6" fill={c.surface} />
      <path d="M119 85h23m-23 8h15M76 51v11m109-11v11M72 132v-8m118 8v-8" stroke={c.line} />
      <path d="M118 148h26m-18 8h10" stroke={c.line} />
    </CollectionScene>
  )
}
