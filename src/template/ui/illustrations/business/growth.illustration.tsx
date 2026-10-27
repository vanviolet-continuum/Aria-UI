import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function GrowthIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="64" y="125" width="29" height="28" rx="3" fill={c.tint} stroke={c.line} />
      <rect x="112" y="106" width="29" height="47" rx="3" fill={c.surface} />
      <rect x="160" y="81" width="29" height="72" rx="3" fill={c.tint} stroke={c.line} />
      <path
        d="M126 105V53m0 27c-27-2-38-20-32-33 21 1 34 15 32 33Zm0-14c1-27 21-43 40-36 0 22-16 35-40 36Z"
        fill={c.surface}
      />
      <path d="m102 55 24 25m0-14 29-26" stroke={c.line} />
      <path d="M47 155h165m-145-47 18-13m91-28 21-15m-11 0h11v11" stroke={c.line} />
      <circle cx="78" cy="77" r="7" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
