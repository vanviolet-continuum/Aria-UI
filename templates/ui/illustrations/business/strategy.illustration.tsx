import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function StrategyIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m53 124 100-23 56 32-105 25-51-34Z" fill={c.surface} />
      <path
        d="m72 119 52 34m-30-39 52 34m-30-39 52 34m-30-39 52 34m-124-3 101-24m-84 35 102-24"
        stroke={c.line}
      />
      <path d="M111 117V96l13-18-9-7 4-23 25-14 18 16-4 22-15 13v32h-32Z" fill={c.surface} />
      <path
        d="m120 48 13 6-3 12 18 4m-15-16 10-11m-15 53h15m-42 21h52v10h-52v-10Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="147" cy="54" r="2" fill={c.ink} stroke="none" />
      <path d="M60 92V62h25m-8-7 8 7-8 7m98 17h22V57m-6 8 6-8 6 8" stroke={c.line} />
    </CollectionScene>
  )
}
