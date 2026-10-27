import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function HighlighterIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M54 42h113v111H54V42Z" fill={c.surface} />
      <path d="M69 58h76m-76 13h60m-60 29h76m-76 13h50m-50 23h76" stroke={c.line} />
      <path
        d="M69 82h73v8H69v-8Zm0 39h52v8H69v-8Z"
        fill={c.accent}
        fillOpacity=".3"
        stroke="none"
      />
      <g transform="rotate(24 181 100)">
        <rect x="169" y="50" width="25" height="75" rx="5" fill={c.tint} />
        <path
          d="M174 125v17h15v-17m-15 17 15-7m-20-73h25m-25 13h25"
          fill={c.surface}
          stroke={c.line}
        />
        <path d="M173 50V35h17v15" fill={c.surface} />
      </g>
      <path d="M190 153h22m-167-44h-8" stroke={c.line} />
    </EducationScene>
  )
}
