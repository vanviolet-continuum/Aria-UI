import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HandSawIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m58 68 104 20-5 39-97-28-2-31Z" fill={c.surface} />
      <path
        d="m61 99 4 9 6-6 5 9 7-6 5 9 7-6 5 9 7-6 5 9 7-6 5 9 7-6 5 9 7-6 5 9 7-6"
        stroke={c.line}
      />
      <path d="m162 83 28-9 17 10-11 56-37-12 3-45Z" fill={c.tint} />
      <path d="m174 94 13-6 8 3-7 32-15-4 1-25Z" fill={c.surface} />
      <path d="m75 78 67 15m-88 61h147" stroke={c.line} />
    </Scene>
  )
}
