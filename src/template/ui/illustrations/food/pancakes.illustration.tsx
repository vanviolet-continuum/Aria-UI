import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PancakesIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <ellipse cx="130" cy="145" rx="73" ry="13" fill={c.surface} stroke={c.line} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path d={`M79 ${104 - i * 16}h102v18c0 22-102 22-102 0v-18Z`} fill={c.surface} />
          <ellipse cx="130" cy={104 - i * 16} rx="51" ry="12" fill={c.tint} stroke={c.line} />
        </g>
      ))}
      <path
        d="M95 65c19-11 51-11 70 0v22c0 12-12 12-12 0V77c-7 3-15 4-23 4v17c0 12-13 12-13 0V80c-8-1-16-3-22-6v-9Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m117 48 26-4 10 13-27 5-9-14Z" fill={c.surface} />
      <path d="m126 62-1 9m18-27-1 11" stroke={c.line} />
    </Scene>
  )
}
