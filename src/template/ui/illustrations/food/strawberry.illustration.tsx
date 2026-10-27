import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function StrawberryIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M82 60c-12 29 13 78 48 97 35-19 60-68 48-97-8-22-88-22-96 0Z" fill={c.surface} />
      <path d="m130 63-31 6 10-17-15-12 27 1 9-17 9 17 27-1-15 12 10 17-31-6Z" fill={c.tint} />
      <path d="M130 25v-8" stroke={c.line} />
      {[
        { y: 80, x: [100, 120, 140, 160] },
        { y: 99, x: [104, 122, 140, 157] },
        { y: 118, x: [113, 130, 147] },
        { y: 136, x: [124, 137] },
      ].map((row) => (
        <g key={row.y}>
          {row.x.map((x) => (
            <path key={x} d={`M${x} ${row.y}l-1 5`} stroke={c.line} />
          ))}
        </g>
      ))}
    </Scene>
  )
}
