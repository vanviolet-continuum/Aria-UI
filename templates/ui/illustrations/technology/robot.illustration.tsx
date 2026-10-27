import type { IllustrationProps } from '../shared/illustration.frame'
import { CollectionScene, sceneColors as c } from '../shared/collection.scene'

export function RobotIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M130 41V27" />
      <circle cx="130" cy="22" r="5" fill={c.tint} />
      <rect x="88" y="42" width="84" height="52" rx="14" fill={c.surface} />
      <rect x="98" y="54" width="64" height="22" rx="11" fill={c.tint} stroke={c.line} />
      <circle cx="114" cy="65" r="4" fill={c.ink} stroke="none" />
      <circle cx="146" cy="65" r="4" fill={c.ink} stroke="none" />
      <path d="M122 84h16" stroke={c.line} />
      <path d="M120 95v8m20-8v8" stroke={c.line} />
      <rect x="99" y="103" width="62" height="38" rx="8" fill={c.tint} />
      <path d="m99 111-20 10-11-17m93 7 20 10 11-17M111 142v13h-12m50-13v13h12" strokeWidth="3" />
      <circle cx="65" cy="99" r="6" fill={c.surface} />
      <circle cx="195" cy="99" r="6" fill={c.surface} />
      <circle cx="130" cy="121" r="9" fill={c.surface} stroke={c.line} />
      <path d="m126 121 3 3 6-6M62 52v8m-4-4h8m124 8v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}
