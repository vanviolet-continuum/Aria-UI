import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function VirtualRealityIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M81 86V65c0-46 97-46 97 0v21m-84-1V65c0-28 71-28 71 0v20"
        fill={c.tint}
        stroke={c.line}
      />
      <rect x="59" y="72" width="143" height="62" rx="20" fill={c.surface} />
      <path
        d="M80 84h99a11 11 0 0 1 11 11v16a11 11 0 0 1-11 11h-30l-9-11h-18l-9 11H81a11 11 0 0 1-11-11V95a11 11 0 0 1 10-11Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m88 101 12-7 12 7-12 7-12-7Zm65 0 12-7 12 7-12 7-12-7Z" stroke={c.accent} />
      <path d="M59 94h-7v18h7m143-18h7v18h-7" fill={c.tint} />
      <path
        d="m61 35 13 6v15l-13-6V35Zm131-4 13-7 13 7v15l-13 7-13-7V31Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="m192 31 13 7 13-7m-13 7v15M98 150h64" stroke={c.line} />
    </CollectionScene>
  )
}
