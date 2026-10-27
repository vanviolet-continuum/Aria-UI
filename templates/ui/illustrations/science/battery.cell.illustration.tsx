import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BatteryCellIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M108 41h45v104c0 19-45 19-45 0V41Z" fill={c.surface} />
      <ellipse cx="130.5" cy="41" rx="22.5" ry="7" fill={c.tint} />
      <path d="M121 35V25h19v10m-32 32h45m-45 62h45" fill={c.tint} stroke={c.line} />
      <path d="M131 48v11m-5-5h10m-11 87h12" stroke={c.line} />
      <path d="m129 80-13 21h14l-6 18 22-29h-15l7-10h-9Z" fill={c.tint} stroke={c.line} />
      <path d="M80 75h13m-6-6v12m84 32h13" stroke={c.line} />
    </Scene>
  )
}
