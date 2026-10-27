import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function AcousticGuitarIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M121 26h18v26h-18V26Zm3 26h12v40h-12V52Z" fill={c.surface} />
      <path
        d="M122 80c-28-9-42 17-22 31-22 13-13 42 30 42s52-29 30-42c20-14 6-40-22-31"
        fill={c.tint}
      />
      <circle cx="130" cy="106" r="13" fill={c.surface} />
      <path
        d="M127 36v100m6-100v100m-18 1h30m-24-103h-7m7 9h-7m25-9h7m-7 9h7m-22 18h12m-12 9h12"
        stroke={c.line}
      />
      <path d="M118 141h24" stroke={c.line} strokeWidth="3" />
    </Scene>
  )
}
