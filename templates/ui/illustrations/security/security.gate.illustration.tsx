import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SecurityGateIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M56 66h32v88H56V66Zm116 0h32v88h-32V66Z" fill={c.surface} />
      <path d="M63 77h18v20H63V77Zm116 0h18v20h-18V77Z" fill={c.tint} stroke={c.line} />
      <path d="M88 100h39v38H88v-38Zm45 0h39v38h-39v-38Z" fill={c.tint} stroke={c.line} />
      <path
        d="m68 86 4 4 7-8m105 3 8 8m-8 0 8-8M70 112v28m116-28v28m-80-7 14-26m29 26 14-26M46 156h168"
        stroke={c.line}
      />
    </Scene>
  )
}
