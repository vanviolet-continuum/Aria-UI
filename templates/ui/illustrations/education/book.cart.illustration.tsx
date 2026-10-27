import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BookCartIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M64 50h132v93H64V50Zm0 48h132m-132 45h132m-123 0v9m113-9v9"
        stroke={c.line}
        strokeWidth="2.5"
      />
      <circle cx="74" cy="153" r="6" fill={c.surface} />
      <circle cx="186" cy="153" r="6" fill={c.surface} />
      <path
        d="M76 59h12v36H76V59Zm17 7h12v29H93V66Zm18-12h14v41h-14V54Zm30 6h14v35h-14V60Zm20 7h18v28h-18V67Zm-81 44h17v29H80v-29Zm23-6h17v35h-17v-35Zm25 7h17v28h-17v-28Zm24-6h17v34h-17v-34Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M196 58h14v30" stroke={c.line} />
    </Scene>
  )
}
