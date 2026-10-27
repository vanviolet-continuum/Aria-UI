import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function QuiltingBlockIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M72 33h116v116H72V33Z" fill={c.surface} />
      <path d="M80 41h100v100H80V41Z" stroke={c.line} strokeDasharray="3 4" />
      <path d="M88 49h84v84H88V49Z" fill={c.tint} stroke={c.line} />
      <path d="m130 49 42 42-42 42-42-42 42-42Z" fill={c.surface} />
      <path d="M130 49v84M88 91h84m-84-42 84 84m0-84-84 84" stroke={c.line} />
      <path d="m130 77 14 14-14 14-14-14 14-14Z" fill={c.tint} />
      <path
        d="M72 150v7m12-7v7m12-7v7m12-7v7m12-7v7m12-7v7m12-7v7m12-7v7m12-7v7m12-7v7"
        stroke={c.line}
      />
    </Scene>
  )
}
