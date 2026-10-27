import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function InvestmentIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M55 43v108h155" stroke={c.line} />
      <rect x="70" y="116" width="24" height="35" rx="3" fill={c.tint} />
      <rect x="107" y="91" width="24" height="60" rx="3" fill={c.surface} />
      <rect x="144" y="65" width="24" height="86" rx="3" fill={c.tint} />
      <path d="m68 91 40-28 30 10 47-44m-17 0h17v17" stroke={c.accent} strokeWidth="3" />
      <circle cx="108" cy="63" r="4" fill={c.surface} />
      <circle cx="138" cy="73" r="4" fill={c.surface} />
      <ellipse cx="188" cy="143" rx="22" ry="7" fill={c.surface} />
      <path d="M166 143v9c0 9 44 9 44 0v-9" fill={c.tint} />
      <ellipse cx="188" cy="134" rx="22" ry="7" fill={c.surface} />
      <path d="M166 134v9c0 9 44 9 44 0v-9" fill={c.tint} stroke={c.line} />
      <ellipse cx="188" cy="134" rx="22" ry="7" fill={c.surface} stroke={c.line} />
    </CollectionScene>
  )
}
