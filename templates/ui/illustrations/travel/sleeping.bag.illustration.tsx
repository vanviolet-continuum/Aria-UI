import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SleepingBagIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M97 44c0-31 66-31 66 0v91c0 31-66 31-66 0V44Z" fill={c.surface} />
      <path d="M105 45c0-20 50-20 50 0v25h-50V45Z" fill={c.tint} stroke={c.line} />
      <path d="M155 64v75m-49-51h49m-49 18h49m-49 18h49m-46 18h40" stroke={c.line} />
      <path d="M151 71h8v9h-8V71Z" fill={c.surface} />
      <path d="M118 51h24m-61 57h8m83-20h12m-13 64h15" stroke={c.line} />
    </Scene>
  )
}
