import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SeedlingTrayIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m55 107 137-7 17 47-143 9-11-49Z" fill={c.surface} />
      <path
        d="m61 116 139-8m-135 23 139-9m-115-17 6 48m26-49 6 47m26-49 6 47m26-49 6 47"
        stroke={c.line}
      />
      {[82, 126, 170].map((x, i) => (
        <g key={x}>
          <path
            d={`M${x} ${111 - i * 2}V${77 - i * 6}m0 17c-17-1-22-12-18-19 13 1 20 9 18 19Zm0-8c1-17 13-23 23-19-1 13-9 19-23 19Z`}
            fill={c.tint}
            stroke={c.line}
          />
        </g>
      ))}
      <path d="M69 144h19m23-2h18m23-2h17m-11-94h16" stroke={c.line} />
    </Scene>
  )
}
