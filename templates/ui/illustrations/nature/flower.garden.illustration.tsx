import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function FlowerGardenIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M76 138V75m54 66V56m50 82V84" />
      <path
        d="M76 116c-20 0-25-12-25-18 14 0 25 7 25 18Zm54-26c17 0 24-10 24-17-15 0-24 7-24 17Zm50 36c20 0 27-12 27-19-17 0-27 7-27 19Z"
        fill={c.tint}
        stroke={c.line}
      />
      <g fill={c.surface}>
        <path d="M76 48c12-15 25 1 14 11 18 3 12 23-3 20 1 18-20 18-22 1-16 7-25-11-9-19-14-10-1-25 12-14l8 1Z" />
        <path d="M130 29c11-13 23 1 13 10 17 3 11 21-2 18 1 16-18 16-20 1-14 6-22-10-8-17-12-9-1-23 11-13l6 1Z" />
        <path d="M180 62c10-13 23 1 13 10 17 3 11 21-2 18 1 16-18 16-20 1-14 6-22-10-8-17-12-9-1-23 11-13l6 1Z" />
      </g>
      <g fill={c.accent} stroke="none">
        <circle cx="76" cy="65" r="7" />
        <circle cx="130" cy="44" r="7" />
        <circle cx="180" cy="77" r="7" />
      </g>
      <path d="m48 134 7 24h147l7-24H48Z" fill={c.tint} />
      <path d="M58 144h141" stroke={c.line} />
    </CollectionScene>
  )
}
