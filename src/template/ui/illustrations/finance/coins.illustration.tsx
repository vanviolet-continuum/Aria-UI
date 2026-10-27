import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function CoinsIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M57 118v31c0 13 54 13 54 0v-31H57Z" fill={c.tint} />
      <ellipse cx="84" cy="118" rx="27" ry="9" fill={c.surface} />
      <path d="M57 129c0 13 54 13 54 0m-54 10c0 13 54 13 54 0" stroke={c.line} />
      <path d="M115 86v62c0 13 54 13 54 0V86h-54Z" fill={c.tint} />
      <ellipse cx="142" cy="86" rx="27" ry="9" fill={c.surface} />
      <path
        d="M115 98c0 13 54 13 54 0m-54 12c0 13 54 13 54 0m-54 12c0 13 54 13 54 0m-54 12c0 13 54 13 54 0m-54 12c0 13 54 13 54 0"
        stroke={c.line}
      />
      <circle cx="191" cy="129" r="27" fill={c.surface} />
      <circle cx="191" cy="129" r="20" stroke={c.line} />
      <path d="M196 119h-7c-9 0-9 10 0 10h4c9 0 9 10 0 10h-8m6-24v28" stroke={c.accent} />
      <circle cx="113" cy="42" r="18" fill={c.tint} />
      <path d="M113 31v22m-6-11h12m59 9v10m-5-5h10" stroke={c.line} />
    </CollectionScene>
  )
}
