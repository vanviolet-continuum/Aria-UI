import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function LaundryIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="64" y="34" width="112" height="123" rx="8" fill={c.surface} />
      <path d="M64 62h112" stroke={c.line} />
      <rect x="75" y="44" width="28" height="9" rx="2" fill={c.tint} stroke={c.line} />
      <circle cx="155" cy="48" r="6" fill={c.tint} />
      <circle cx="120" cy="109" r="35" fill={c.tint} />
      <circle cx="120" cy="109" r="26" fill={c.surface} stroke={c.line} />
      <path d="M96 116c8-11 14 10 24 0s17 10 24 0m-31-27c-8 2-14 9-15 16" stroke={c.line} />
      <path d="M181 94V76h17v18l7 6v48h-31v-48l7-6Z" fill={c.tint} stroke={c.line} />
      <path d="M178 119h23m-17-35h10m-17 53h25" stroke={c.line} />
      <circle cx="191" cy="47" r="7" fill={c.surface} stroke={c.line} />
      <circle cx="208" cy="60" r="4" stroke={c.line} />
    </CollectionScene>
  )
}
