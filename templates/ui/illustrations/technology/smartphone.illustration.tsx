import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function SmartphoneIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="87" y="21" width="85" height="138" rx="14" fill={c.surface} />
      <rect x="94" y="30" width="71" height="119" rx="8" fill={c.tint} stroke={c.line} />
      <path d="M114 30v6h31v-6m-24 116h18" stroke={c.line} />
      <circle cx="130" cy="73" r="17" fill={c.surface} />
      <path d="m123 73 5 5 10-11" stroke={c.accent} strokeWidth="3" />
      <path d="M110 104h40m-33 10h26" stroke={c.line} strokeWidth="3" />
      <rect x="114" y="124" width="33" height="10" rx="5" fill={c.surface} stroke={c.line} />
      <path
        d="M55 61c-9-9-9-23 0-32m8 25c-5-5-5-13 0-18m134 59c9 9 9 23 0 32m-8-25c5 5 5 13 0 18"
        stroke={c.line}
      />
      <circle cx="55" cy="116" r="10" fill={c.surface} />
      <path d="M55 112v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}
