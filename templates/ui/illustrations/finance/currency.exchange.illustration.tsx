import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function CurrencyExchangeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="94" cy="92" r="36" fill={c.surface} />
      <circle cx="94" cy="92" r="28" stroke={c.line} />
      <path d="M102 80H90c-12 0-12 12 0 12h8c12 0 12 12 0 12H85m9-30v37" stroke={c.accent} />
      <circle cx="167" cy="116" r="36" fill={c.tint} />
      <circle cx="167" cy="116" r="28" stroke={c.line} />
      <path d="M180 101c-23-13-30 25-8 31l9-3m-30-18h22m-22 9h19" />
      <path
        d="M80 44c37-21 77-12 105 12m-2-16 3 17-17-1M178 158c-43 14-85 7-112-15m2 17-3-18 17 2"
        stroke={c.line}
      />
      <path d="M211 81v10m-5-5h10M47 120v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}
