import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PaperFanIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M130 145 46 97a97 97 0 0 1 168 0l-84 48Z" fill={c.surface} />
      {[-150, -135, -120, -105, -90, -75, -60, -45, -30].map((angle) => (
        <path
          key={angle}
          d={`M130 145 ${130 + 97 * Math.cos((angle * Math.PI) / 180)} ${145 + 97 * Math.sin((angle * Math.PI) / 180)}`}
          stroke={c.line}
        />
      ))}
      <path d="M62 107a79 79 0 0 1 136 0" stroke={c.line} />
      <path d="M130 145v13m-5 0h10" strokeWidth="3" />
      <path d="M96 84c10-12 21-16 34-14m18 4c9 3 18 8 25 17" stroke={c.accent} />
    </Scene>
  )
}
