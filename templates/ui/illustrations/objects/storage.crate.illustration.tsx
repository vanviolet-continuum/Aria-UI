import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function StorageCrateIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m58 69 105-18 42 30-105 21-42-33Z" fill={c.surface} />
      <path d="M58 69v66l42 22V102L58 69Zm42 33 105-21v57l-105 19v-55Z" fill={c.tint} />
      <path
        d="m58 88 42 30 105-22M58 108l42 27 105-21M71 80v61m15-49v57m39-52v55m54-65v56"
        stroke={c.line}
      />
      <path d="m137 105 29-6v9l-29 6v-9Z" fill={c.surface} stroke={c.line} />
      <path d="m78 65 40 33m-20-37 40 33m-20-37 40 33m-20-37 40 33" stroke={c.line} />
    </Scene>
  )
}
