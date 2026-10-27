import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ComputerMouseIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M130 45V32c0-14 40-13 40-8" stroke={c.line} />
      <rect x="164" y="18" width="12" height="12" rx="3" fill={c.surface} stroke={c.line} />
      <path d="M91 86c0-55 78-55 78 0v24c0 56-78 56-78 0V86Z" fill={c.surface} />
      <path d="M92 91h76m-38-46v45m-27 15v12m54-12v12" stroke={c.line} />
      <rect x="125" y="61" width="10" height="20" rx="5" fill={c.tint} />
      <path d="M111 151h38m-77-43h9m99 0h9" stroke={c.line} />
    </Scene>
  )
}
