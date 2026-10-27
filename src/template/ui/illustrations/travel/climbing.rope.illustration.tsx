import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ClimbingRopeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <ellipse cx="127" cy="89" rx="48" ry="60" fill={c.surface} />
      <ellipse cx="127" cy="89" rx="38" ry="50" stroke={c.line} />
      <ellipse cx="127" cy="89" rx="28" ry="40" stroke={c.line} />
      <ellipse cx="127" cy="89" rx="18" ry="30" stroke={c.line} />
      <path d="M79 86h96v17H79V86Z" fill={c.tint} />
      <path d="M90 92h74m-30 57c0 14 52 16 58-3 4-12-9-22-22-14m18 5 4 9 8-5" stroke={c.line} />
      <path d="M123 118v15m10-15v15M63 148h29" stroke={c.line} />
    </Scene>
  )
}
