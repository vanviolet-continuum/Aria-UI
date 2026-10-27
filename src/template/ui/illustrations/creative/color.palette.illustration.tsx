import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function ColorPaletteIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <g transform="rotate(-32 96 136)">
        <rect x="77" y="32" width="38" height="121" rx="5" fill={c.surface} />
        <path d="M82 39h28v25H82V39Z" fill={c.tint} stroke={c.line} />
        <path d="M82 70h28v25H82V70Z" fill={c.accent} fillOpacity=".25" stroke={c.line} />
        <path d="M82 101h28v24H82v-24Z" fill={c.accent} fillOpacity=".5" stroke={c.line} />
      </g>
      <g transform="rotate(-8 96 136)">
        <rect x="77" y="32" width="38" height="121" rx="5" fill={c.surface} />
        <path d="M82 39h28v25H82V39Z" fill={c.tint} stroke={c.line} />
        <path d="M82 70h28v25H82V70Z" fill={c.accent} fillOpacity=".25" stroke={c.line} />
        <path d="M82 101h28v24H82v-24Z" fill={c.accent} fillOpacity=".5" stroke={c.line} />
      </g>
      <g transform="rotate(18 96 136)">
        <rect x="77" y="32" width="38" height="121" rx="5" fill={c.surface} />
        <path d="M82 39h28v25H82V39Z" fill={c.tint} stroke={c.line} />
        <path d="M82 70h28v25H82V70Z" fill={c.accent} fillOpacity=".25" stroke={c.line} />
        <path d="M82 101h28v24H82v-24Z" fill={c.accent} fillOpacity=".5" stroke={c.line} />
        <circle cx="96" cy="137" r="4" fill={c.tint} />
      </g>
      <circle cx="182" cy="95" r="28" fill={c.surface} stroke={c.line} />
      <path d="M182 67v28h28m-28 0-24 14" fill={c.tint} stroke={c.line} />
      <path d="M170 139h28m-23 9h18" stroke={c.line} />
    </CollectionScene>
  )
}
