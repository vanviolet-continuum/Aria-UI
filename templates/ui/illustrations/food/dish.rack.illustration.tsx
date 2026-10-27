import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DishRackIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M55 145h152v10H55v-10Z" fill={c.surface} />
      <path d="M63 138V98m136 40V98m-136 40h136" stroke={c.line} />
      {[85, 113, 141].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="100" rx="19" ry="37" fill={c.surface} />
          <ellipse cx={x} cy="100" rx="12" ry="29" stroke={c.line} />
        </g>
      ))}
      <path
        d="M62 118h139m-139 20h139m-131-19v19m27-19v19m27-19v19m27-19v19m27-19v19M171 95h27v39h-27V95Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M179 95V71m-3 0v13c0 5 6 5 6 0V71m8 24V71c-8 5-8 16 0 18" stroke={c.line} />
    </Scene>
  )
}
