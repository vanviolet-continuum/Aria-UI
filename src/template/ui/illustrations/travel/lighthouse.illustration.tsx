import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function LighthouseIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M114 65h32l14 84h-60l14-84Z" fill={c.surface} />
      <path d="M110 88h40l4 19h-48l4-19Zm-7 38h54l3 23h-60l3-23Z" fill={c.tint} stroke={c.line} />
      <path d="M110 43h40v23h-40V43Zm-6 0 26-20 26 20h-52Z" fill={c.surface} />
      <path d="M103 67h54v6h-54v-6m27-23v21m-7 84v-22h14v22" stroke={c.line} />
      <path d="m99 47-34-9m34 20-34 9m96-20 34-9m-34 20 34 9M74 154h111" stroke={c.line} />
      <path d="m53 143 17-9 16 10m99-1 13-7 17 9" stroke={c.line} />
    </Scene>
  )
}
