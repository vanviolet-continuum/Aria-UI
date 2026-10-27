import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function ChemistryIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M88 39v51l-31 48c-5 8-1 17 8 17h72c9 0 13-9 8-17l-31-48V39m-32 0h38"
        fill={c.surface}
      />
      <path
        d="M75 119c15-9 27 9 46 0l18 25c2 3 1 5-3 5H66c-4 0-5-2-3-5l12-25Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M163 63v64a18 18 0 0 0 36 0V63m-42 0h48" fill={c.surface} />
      <path d="M167 99c8 5 18-5 28 0v28c0 18-28 18-28 0V99Z" fill={c.tint} stroke={c.line} />
      <path d="M184 77h10m-6 12h6m-6 22h6m-6 11h6" stroke={c.line} />
      <circle cx="99" cy="100" r="4" stroke={c.accent} />
      <circle cx="110" cy="135" r="5" stroke={c.accent} />
      <circle cx="92" cy="73" r="3" stroke={c.accent} />
      <circle cx="180" cy="43" r="7" fill={c.tint} stroke={c.line} />
      <circle cx="163" cy="28" r="4" stroke={c.line} />
    </CollectionScene>
  )
}
