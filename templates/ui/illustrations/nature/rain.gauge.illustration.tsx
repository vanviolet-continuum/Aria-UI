import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function RainGaugeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M110 56h40v88c0 16-40 16-40 0V56Z" fill={c.surface} />
      <path d="M112 108c13-5 22 5 36 0v35c0 13-36 13-36 0v-35Z" fill={c.tint} stroke="none" />
      <path d="m97 41 13 16h40l13-16H97Z" fill={c.tint} />
      <ellipse cx="130" cy="41" rx="33" ry="5" fill={c.surface} stroke={c.line} />
      <path
        d="M131 68h13m-7 13h7m-13 13h13m-7 13h7m-13 13h13m-7 13h7m-31-63v66m-13 18h59m-82-74 4-10m92 25 4-10m-59-61 4-10"
        stroke={c.line}
      />
    </Scene>
  )
}
