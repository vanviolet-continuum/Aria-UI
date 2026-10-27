import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene as EducationScene, sceneColors as c } from '../shared/collection.scene'

export function BookStackIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M65 126h128v28H65c-18 0-18-28 0-28Z" fill={c.tint} />
      <path d="M67 134h121v12H67c-8 0-8-12 0-12Z" fill={c.surface} stroke={c.line} />
      <path d="M181 99H61v27h120c18 0 18-27 0-27Z" fill={c.surface} />
      <path d="M177 107H66v11h111c8 0 8-11 0-11Z" fill={c.tint} stroke={c.line} />
      <g transform="rotate(-9 124 83)">
        <path d="M73 69h119v28H73c-18 0-18-28 0-28Z" fill={c.tint} />
        <path d="M73 77h114v12H73c-8 0-8-12 0-12Z" fill={c.surface} stroke={c.line} />
      </g>
      <path d="M99 50h56v17H99V50Z" fill={c.surface} stroke={c.line} />
      <path d="m142 99 2 33 7-6 8 5-2-32" fill={c.accent} fillOpacity=".3" stroke={c.line} />
      <path d="M121 32v9m-4-4h8m65 3 4 6" stroke={c.accent} />
    </EducationScene>
  )
}
