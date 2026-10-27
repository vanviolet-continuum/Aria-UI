import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, SceneCloud, sceneColors as c } from '../shared/collection.scene'

export function SailboatIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M64 124h133l-24 27H88l-24-27Z" fill={c.tint} />
      <path d="M130 124V28m-5 9-50 76h50V37Z" fill={c.surface} />
      <path d="m139 48 44 65h-44V48Z" fill={c.tint} stroke={c.line} />
      <path d="M111 61v50m-23 20h73" stroke={c.line} />
      <path
        d="M48 153c9-5 17-5 26 0s18 5 27 0 18-5 27 0 18 5 27 0 18-5 27 0 18 5 27 0"
        stroke={c.line}
      />
      <path d="m130 29 20 5-20 7" fill={c.tint} />
      <SceneCloud x={47} y={41} scale={0.7} />
      <circle cx="192" cy="49" r="14" fill={c.tint} stroke={c.line} />
      <path d="m178 92 6-4 6 4" stroke={c.line} />
    </CollectionScene>
  )
}
