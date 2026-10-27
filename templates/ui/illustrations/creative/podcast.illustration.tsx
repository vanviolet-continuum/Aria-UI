import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function PodcastIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="109" y="26" width="42" height="79" rx="21" fill={c.surface} />
      <path d="M118 40h24m-26 11h28m-28 11h28m-28 11h28m-26 11h24" stroke={c.line} />
      <path d="M96 80v10a34 34 0 0 0 68 0V80m-34 44v30m-22 0h44" strokeWidth="3" />
      <path
        d="M74 56c-9 14-9 34 0 48m-10-56c-12 18-12 45 0 64m122-56c9 14 9 34 0 48m10-56c12 18 12 45 0 64"
        stroke={c.line}
      />
      <path
        d="M67 136v7m8-14v21m8-17v13m93-10v7m8-14v21m8-17v13"
        stroke={c.accent}
        strokeWidth="3"
      />
    </CollectionScene>
  )
}
