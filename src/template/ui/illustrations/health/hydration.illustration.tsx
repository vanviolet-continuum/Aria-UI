import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function HydrationIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M105 54V37h48v17l13 15v77a9 9 0 0 1-9 9h-56a9 9 0 0 1-9-9V69l13-15Z"
        fill={c.surface}
      />
      <rect x="104" y="26" width="50" height="12" rx="3" fill={c.tint} />
      <path d="M113 28v8m10-8v8m11-8v8m11-8v8m-52 43h72m-72 55h72" stroke={c.line} />
      <path
        d="M94 106c15-10 27 7 41 0 12-9 23-4 29 0v38a6 6 0 0 1-6 6h-58a6 6 0 0 1-6-6v-38Z"
        fill={c.tint}
        stroke="none"
      />
      <path d="M94 106c15-10 27 7 41 0 12-9 23-4 29 0" stroke={c.line} />
      <path
        d="M129 87c-14 17-17 24-8 30 15 9 23-5 18-13l-10-17Z"
        fill={c.surface}
        stroke={c.accent}
      />
      <path
        d="M102 85v34m0 10v11m81-61c-15-21-16-25-16-25s-17 20-10 29c8 9 16 4 16-4"
        transform="translate(24 10)"
        stroke={c.line}
      />
      <path d="M58 133h17m-9-8v16" stroke={c.accent} />
    </CollectionScene>
  )
}
