import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function AvocadoIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M143 43c0-17 25-19 29 0 4 23 24 48 24 73 0 43-65 43-65 0 0-25 10-50 12-73Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M104 43c0-17 27-19 31 0 4 23 26 48 26 73 0 52-83 52-83 0 0-25 24-50 26-73Z"
        fill={c.surface}
      />
      <path
        d="M111 48c0-9 13-10 15 0 3 24 25 47 25 68 0 39-63 39-63 0 0-21 21-45 23-68Z"
        fill={c.tint}
        stroke={c.line}
      />
      <ellipse cx="120" cy="115" rx="21" ry="25" fill={c.surface} />
      <path d="M110 104c3-4 7-6 11-6M102 155h71" stroke={c.line} />
    </Scene>
  )
}
