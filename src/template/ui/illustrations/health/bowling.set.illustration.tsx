import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BowlingSetIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M92 58c-12-25 19-35 22-12 1 17-8 20 1 38 17 34 20 63-14 63s-31-29-14-63c5-11 8-16 5-26Z"
        fill={c.surface}
      />
      <path d="M90 71h23m-24 8h27" stroke={c.accent} />
      <path
        d="M146 42c-10-21 16-28 18-10 1 14-7 18 1 33 14 29 17 53-11 53s-26-24-12-53c5-9 6-13 4-23Z"
        fill={c.surface}
      />
      <path d="M145 52h19m-20 7h22" stroke={c.line} />
      <circle cx="166" cy="128" r="29" fill={c.tint} />
      <circle cx="157" cy="115" r="3" fill={c.surface} stroke={c.line} />
      <circle cx="170" cy="112" r="3" fill={c.surface} stroke={c.line} />
      <circle cx="165" cy="126" r="3" fill={c.surface} stroke={c.line} />
      <path d="M66 157h137" stroke={c.line} />
    </Scene>
  )
}
