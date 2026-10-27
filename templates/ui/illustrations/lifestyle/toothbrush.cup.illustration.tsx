import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ToothbrushCupIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="m111 107-9-62m-4-3 11-2-3-22-11 2 3 22m2-16 8-1m-8 7 8-1m-7 8 8-1m24 70 7-54m-4-2 11 2 4-25-11-2-4 25m7-18 8 2m-9 5 8 2m-9 5 8 2"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M91 100h78l-7 49c-1 11-63 11-64 0l-7-49Z" fill={c.surface} />
      <ellipse cx="130" cy="100" rx="39" ry="7" fill={c.tint} stroke={c.line} />
      <path d="M106 114v25m15-25v30m15-30v30m15-30v25" stroke={c.line} />
    </Scene>
  )
}
