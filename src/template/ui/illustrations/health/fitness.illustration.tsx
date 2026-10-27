import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function FitnessIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M49 153h169" stroke={c.line} />
      <g transform="rotate(-18 114 116)">
        <rect x="69" y="108" width="88" height="16" rx="4" fill={c.tint} />
        <rect x="57" y="92" width="17" height="48" rx="4" fill={c.surface} />
        <rect x="42" y="100" width="15" height="32" rx="3" fill={c.tint} />
        <rect x="154" y="92" width="17" height="48" rx="4" fill={c.surface} />
        <rect x="171" y="100" width="15" height="32" rx="3" fill={c.tint} />
      </g>
      <path d="M178 65V51h25v14l6 9v69a7 7 0 0 1-7 7h-23a7 7 0 0 1-7-7V74l6-9Z" fill={c.surface} />
      <path d="M178 51v-8h25v8m-29 38h33m-33 34h33" fill={c.tint} stroke={c.line} />
      <path d="m189 95-7 13h10l-3 10 12-15h-11l3-8" fill={c.tint} stroke={c.accent} />
      <path
        d="M73 75c-15-24 19-38 29-15 11-23 44-9 29 15l-29 22-29-22Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m83 68 5 5 9-10" stroke={c.accent} />
    </CollectionScene>
  )
}
