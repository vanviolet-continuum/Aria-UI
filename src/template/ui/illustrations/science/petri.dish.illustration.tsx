import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PetriDishIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M64 98h132v25c0 35-132 35-132 0V98Z" fill={c.surface} />
      <ellipse cx="130" cy="98" rx="66" ry="26" fill={c.tint} />
      <ellipse cx="130" cy="98" rx="55" ry="19" stroke={c.line} />
      <path d="M65 121c31 18 100 18 130 0" stroke={c.line} />
      <ellipse cx="104" cy="96" rx="10" ry="5" fill={c.surface} stroke={c.line} />
      <ellipse cx="145" cy="101" rx="12" ry="6" fill={c.surface} stroke={c.line} />
      <ellipse cx="133" cy="88" rx="5" ry="3" fill={c.surface} stroke={c.line} />
      <path d="M108 45h77m-75-6v12m54-12v12m-58 2-17 33m-4 4 4-4 4 1" stroke={c.line} />
      <path d="M90 156h80" stroke={c.line} />
    </Scene>
  )
}
