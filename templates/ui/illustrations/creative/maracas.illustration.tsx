import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MaracasIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(-18 98 99)">
        <ellipse cx="98" cy="71" rx="24" ry="35" fill={c.surface} />
        <path d="M75 62h46m-46 17h46m-29 25v46c0 10 12 10 12 0v-46" fill={c.tint} stroke={c.line} />
      </g>
      <g transform="rotate(18 163 99)">
        <ellipse cx="163" cy="71" rx="24" ry="35" fill={c.surface} />
        <path
          d="M140 62h46m-46 17h46m-29 25v46c0 10 12 10 12 0v-46"
          fill={c.tint}
          stroke={c.line}
        />
      </g>
      <path d="M122 29v8m-4-4h8m-63 45-6-5m144-10 6-5" stroke={c.line} />
    </Scene>
  )
}
