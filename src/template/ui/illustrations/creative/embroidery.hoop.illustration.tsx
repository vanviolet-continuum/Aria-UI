import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function EmbroideryHoopIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="130" cy="95" r="53" fill={c.surface} />
      <circle cx="130" cy="95" r="45" stroke={c.line} />
      <path d="M117 43V30h26v13m-22-20v7m18-7v7m-25-2h32" stroke={c.line} />
      <path
        d="M130 126V85m0 21c-21 0-28-15-24-24 16 1 25 11 24 24Zm0-10c1-22 18-32 30-26-1 16-12 26-30 26Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M107 128h46m-58-26 5-3m63 17 5-3" stroke={c.line} strokeDasharray="2 4" />
      <path d="m174 70 23-34m-7 5 5 3m-3-5 2 1" stroke={c.line} />
    </Scene>
  )
}
