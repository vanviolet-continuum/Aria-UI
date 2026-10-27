import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SunflowerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 151V91m0 40c-27-1-38-17-34-30 22 1 35 15 34 30Zm0-15c1-22 19-34 34-27-3 19-15 27-34 27Z"
        fill={c.tint}
        stroke={c.line}
      />
      {Array.from({ length: 10 }, (_, i) => (
        <ellipse
          key={i}
          cx="130"
          cy="40"
          rx="8"
          ry="17"
          transform={`rotate(${i * 36} 130 68)`}
          fill={c.surface}
          stroke={c.line}
        />
      ))}
      <circle cx="130" cy="68" r="19" fill={c.tint} />
      <path
        d="M121 62h1m8 0h1m8 0h1m-23 7h1m8 0h1m8 0h1m-18 7h1m8 0h1M103 155h54"
        stroke={c.line}
      />
    </Scene>
  )
}
