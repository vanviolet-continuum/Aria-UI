import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function TelescopeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m73 86 98-41 12 30-98 41-12-30Z" fill={c.surface} />
      <path d="m153 53 12 30m-6-35 14 34m-96 10-15 6 6 15 15-6" fill={c.tint} stroke={c.line} />
      <path d="m170 45 8-3 13 31-8 3-13-31Z" fill={c.tint} />
      <path d="M127 98v19m0 0-35 39m35-39 36 39m-36-39v39" />
      <path d="M110 124h34m-8-24 13 11" stroke={c.line} />
      <circle cx="127" cy="110" r="6" fill={c.surface} />
      <path d="M85 25v10m-5-5h10m119 17v8m-4-4h8M48 120v8m-4-4h8" stroke={c.accent} />
      <path
        d="M120 24c-9 13 1 25 14 22-10 12-27 4-27-7 0-7 6-13 13-15Z"
        fill={c.tint}
        stroke={c.line}
      />
    </CollectionScene>
  )
}
