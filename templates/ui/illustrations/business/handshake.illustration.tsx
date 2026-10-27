import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function HandshakeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m48 68 30-19 25 42-30 25-25-48Zm164-1-28-17-27 40 30 26 25-49Z" fill={c.tint} />
      <path d="m79 64 25-5 24 6 12 14 32 24-24 27-51-30-8-11" fill={c.surface} />
      <path d="m181 66-29-7-20 3-24 20c-7 8 2 17 11 10l16-11 39 26 11-16" fill={c.surface} />
      <path
        d="m105 106-5 7c-6 7 2 14 8 8l5-6m0 0-5 7c-4 7 4 14 10 8l5-6m0 0-4 6c-4 7 5 13 10 7l4-5m0 0c-2 9 7 12 13 5l17-19m-50-15 32 25m-23-33 33 25"
        stroke={c.line}
      />
      <path d="m75 76 4 7m108-7-4 7M115 38l-3-9m22 8 3-9m18 14 7-6m-49 112h37" stroke={c.accent} />
    </CollectionScene>
  )
}
