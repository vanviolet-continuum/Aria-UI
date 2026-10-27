import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function DesignToolsIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M62 113c7-86 128-85 136 0" stroke={c.accent} strokeWidth="3" />
      <path d="M62 113V54m136 59V54M62 54h136" stroke={c.line} />
      <g fill={c.surface}>
        <rect x="57" y="49" width="10" height="10" />
        <rect x="125" y="49" width="10" height="10" />
        <rect x="193" y="49" width="10" height="10" />
        <circle cx="62" cy="113" r="5" />
        <circle cx="198" cy="113" r="5" />
      </g>
      <path d="m112 118 18-38 18 38-8 20h-20l-8-20Z" fill={c.surface} />
      <path d="M130 80v30m-10 28h20v16h-20v-16Z" fill={c.tint} />
      <circle cx="130" cy="114" r="4" fill={c.tint} />
      <path
        d="m75 134 13-7 16 29H75v-22Zm14 5-5 3 9 10m68-21 7-4 16 29h-9l-14-25Z"
        fill={c.tint}
        stroke={c.line}
      />
    </CollectionScene>
  )
}
