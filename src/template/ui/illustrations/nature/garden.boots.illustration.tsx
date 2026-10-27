import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GardenBootsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M119 44h45v67l22 9c19 8 20 25 7 27h-74V44Z" fill={c.tint} stroke={c.line} />
      <path d="M123 53h36m-39 82h76" stroke={c.line} />
      <path d="M73 55h45v66l24 9c17 8 19 24 5 26H73V55Z" fill={c.surface} />
      <path d="M73 65h45m-34 10v43m-11 28h79m-71-12h30m10-3 14 7" stroke={c.line} />
      <path d="M90 88h17v17H90V88Z" fill={c.tint} stroke={c.line} />
      <path d="m94 99 9-7" stroke={c.line} />
    </Scene>
  )
}
