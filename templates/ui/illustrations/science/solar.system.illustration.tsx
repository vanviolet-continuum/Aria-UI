import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function SolarSystemIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="130" cy="90" rx="91" ry="52" stroke={c.line} />
      <ellipse cx="130" cy="90" rx="67" ry="38" stroke={c.line} />
      <ellipse cx="130" cy="90" rx="42" ry="24" stroke={c.line} />
      <circle cx="130" cy="90" r="19" fill={c.tint} />
      <path
        d="M130 65v-5m0 60v-5m-25-25h-5m60 0h-5m-43-17-4-4m40 38 4 4m-40-4-4 4m40-38 4-4"
        stroke={c.accent}
      />
      <circle cx="88" cy="88" r="6" fill={c.surface} />
      <circle cx="160" cy="56" r="9" fill={c.tint} />
      <circle cx="204" cy="121" r="13" fill={c.surface} />
      <path d="m196 122 17-4" stroke={c.line} />
      <circle cx="60" cy="57" r="9" fill={c.surface} stroke={c.line} />
      <path d="M75 141v8m-4-4h8m109-113v6m-3-3h6" stroke={c.line} />
      <circle cx="133" cy="142" r="3" fill={c.accent} stroke="none" />
    </CollectionScene>
  )
}
