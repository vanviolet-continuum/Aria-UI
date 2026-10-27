import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PasswordTokenIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="76" y="65" width="122" height="74" rx="18" fill={c.surface} />
      <path d="M77 85c-54 12-54-47-17-47 19 0 26 10 23 21" stroke={c.line} />
      <rect x="92" y="79" width="89" height="24" rx="4" fill={c.tint} stroke={c.line} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${102 + i * 13} 85v10`} stroke={c.line} strokeWidth="3" />
      ))}
      <circle cx="168" cy="120" r="7" fill={c.tint} stroke={c.line} />
      <path d="M100 118h37m-37 9h24M92 151h85" stroke={c.line} />
    </Scene>
  )
}
