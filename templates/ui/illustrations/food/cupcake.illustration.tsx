import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function CupcakeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m83 100 14 54h68l14-54H83Z" fill={c.tint} />
      <path d="m101 110 7 36m12-36 2 36m18-36-2 36m23-36-7 36" stroke={c.line} />
      <path
        d="M88 102c-14 0-16-19-5-24-5-16 7-29 22-26 2-15 13-20 25-16 11-6 26 0 27 15 19-3 31 9 25 25 12 6 10 26-4 26H88Z"
        fill={c.surface}
      />
      <path d="M98 71c9-5 14-3 20 0m18 8c9-5 14-3 20 0m-44-26 12 2" stroke={c.line} />
      <circle cx="131" cy="27" r="10" fill={c.tint} stroke={c.accent} />
      <path d="M132 17c0-9 6-10 12-10" stroke={c.line} />
      <path d="m92 87 5-2m34 4 4 3m29-31 1 5m-29-21 4 1M66 122l-4 5m131 8 4 4" stroke={c.accent} />
    </CollectionScene>
  )
}
