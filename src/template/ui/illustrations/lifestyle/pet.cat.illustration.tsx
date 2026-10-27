import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function PetCatIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M113 102c36-10 57 9 53 37 30 8 44-16 29-28-11-8-4-18 5-11 30 27 4 67-47 49H99l14-47Z"
        fill={c.tint}
      />
      <path
        d="m78 77-1-32 27 18c10-4 18-4 28 0l27-18-1 32c15 32-6 49-40 49S63 109 78 77Z"
        fill={c.surface}
      />
      <path d="m83 73-1-18 16 13m37 0 17-13-1 18m-32-8v13m-11-11 2 9m20-9-2 9" stroke={c.line} />
      <path
        d="m93 90 6 3 6-3m26 0 6 3 6-3m-30 12h10l-5 5-5-5Zm5 5v5m-7 0c4 3 10 3 14 0"
        stroke={c.line}
      />
      <path
        d="m91 104-22-2m22 8-20 5m73-11 22-2m-22 8 20 5M101 148h34m-25-15v15m17-15v15"
        stroke={c.line}
      />
      <circle cx="69" cy="142" r="13" fill={c.surface} stroke={c.line} />
      <path d="m60 133 17 17m-22-7 19-12m-9 24 15-18" stroke={c.line} />
    </CollectionScene>
  )
}
