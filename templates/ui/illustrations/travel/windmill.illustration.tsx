import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WindmillIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m106 67-17 87h82l-17-87h-48Z" fill={c.surface} />
      <path d="m100 67 30-30 30 30h-60Z" fill={c.tint} stroke={c.line} />
      <path d="M121 154v-28h18v28m-21-59h24v18h-24V95Z" stroke={c.line} />
      {[0, 90, 180, 270].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 130 72)`}>
          <path d="M130 72V23h16v39l-16 10Z" fill={c.surface} />
          <path d="M131 34h14m-14 11h14m-14 11h14" stroke={c.line} />
        </g>
      ))}
      <circle cx="130" cy="72" r="6" fill={c.tint} />
      <path d="M66 156h128" stroke={c.line} />
    </Scene>
  )
}
