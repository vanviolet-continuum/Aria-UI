import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function OceanIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M41 113c32-2 45-18 50-45 14-6 46 10 43 39 14 11 29 11 45 0 18 13 32 12 43 4v40H41v-38Z"
        fill={c.tint}
      />
      <path
        d="M90 69c19 0 35 15 31 35-7-12-19-13-29-7 17-4 22 13 14 21-9 7-28 10-43 11"
        fill={c.surface}
        stroke={c.line}
      />
      <path
        d="M40 140c15 10 26 9 39 0 14 10 28 10 41 0 14 10 27 10 41 0 14 10 29 10 43 0m-143 13h29m31 0h22m29 0h25"
        stroke={c.line}
      />
      <circle cx="164" cy="49" r="17" fill={c.surface} stroke={c.line} />
      <path d="M164 23v-7m21 16 5-5m-52 5-5-5" stroke={c.accent} />
      <SceneCloud x={49} y={28} scale={0.6} />
      <path d="m184 82 6-4 6 4m-39 7 5-3 5 3" stroke={c.line} />
    </CollectionScene>
  )
}
