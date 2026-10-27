import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, ScenePlant, sceneColors as c } from '../shared/collection.scene'

export function YogaIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="130" cy="154" rx="85" ry="10" fill={c.tint} stroke={c.line} />
      <circle cx="132" cy="59" r="14" fill={c.surface} stroke={c.line} />
      <path d="M120 54c-3-16 22-21 26-5l-12-4-14 9Z" fill={c.tint} stroke={c.line} />
      <path d="M126 74h12l15 36-15 10-23-7 11-39Z" fill={c.surface} />
      <path d="m124 78-18-15 13-30m19 45 17-15-13-30m-23 0 9-8 8 1 6 7" />
      <path d="m117 113-22 33h15l22-24 17 25h15l-25-36" fill={c.tint} />
      <path d="m119 131 16 9m-33 7H89m60 0h22" stroke={c.line} />
      <ScenePlant x={49} y={94} scale={0.75} />
      <path
        d="M181 68c-16-7-21-23-13-30 12 4 16 14 13 30Zm0 0c2-20 17-27 25-21-5 14-11 19-25 21Z"
        fill={c.tint}
        stroke={c.line}
      />
    </CollectionScene>
  )
}
