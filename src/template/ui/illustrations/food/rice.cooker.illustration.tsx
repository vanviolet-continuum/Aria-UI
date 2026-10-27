import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function RiceCookerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="73" y="76" width="114" height="72" rx="22" fill={c.surface} />
      <path d="M68 79c0-31 124-31 124 0H68Z" fill={c.tint} />
      <path d="M114 57V44h32v13m-44 22h56m-85 12H59v16h14m114-16h14v16h-14" stroke={c.line} />
      <rect x="105" y="101" width="50" height="32" rx="7" fill={c.tint} stroke={c.line} />
      <path d="M116 111h28m-21 12h14" stroke={c.line} />
      <circle cx="145" cy="123" r="2" fill={c.accent} stroke="none" />
      <path d="M88 148v7m84-7v7m-70-19h56" stroke={c.line} />
      <path d="M102 35c-7-7 5-10 0-17m53 17c-7-7 5-10 0-17" stroke={c.line} />
    </Scene>
  )
}
