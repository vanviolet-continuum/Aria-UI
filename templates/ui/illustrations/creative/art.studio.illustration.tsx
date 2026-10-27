import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function ArtStudioIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m106 24-26 133m62-133 26 133m-50-23-3 23m-33-33h79" stroke={c.line} />
      <rect x="81" y="42" width="86" height="83" rx="3" fill={c.surface} />
      <path d="m93 110 17-28 18 13 13-20 14 35H93Z" fill={c.tint} stroke={c.line} />
      <circle cx="109" cy="63" r="8" fill={c.tint} stroke={c.accent} />
      <path d="M177 113c-23-6-34 16-21 28 10 10 19-4 28 3 20 14 41-29-7-31Z" fill={c.surface} />
      <circle cx="166" cy="127" r="4" fill={c.tint} stroke={c.accent} />
      <circle cx="182" cy="122" r="4" fill={c.tint} stroke={c.line} />
      <circle cx="194" cy="132" r="4" fill={c.tint} stroke={c.accent} />
      <path d="m54 146 9-40 7 2-9 40m2-42c-5-4-5-14 4-18 0 6 8 12 3 20" fill={c.tint} />
      <path d="M47 157h160" stroke={c.line} />
    </CollectionScene>
  )
}
