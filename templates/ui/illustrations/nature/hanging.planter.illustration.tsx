import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HangingPlanterIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 25c0-10 13-10 13-2 0 6-13 7-13 16m0 0-46 68m46-68 46 68m-46-68v68"
        stroke={c.line}
      />
      <path d="M84 108h92c-4 32-20 45-46 45s-42-13-46-45Z" fill={c.surface} />
      <ellipse cx="130" cy="108" rx="46" ry="7" fill={c.tint} stroke={c.line} />
      <path
        d="M121 108c-4-23-23-35-32-22-12 17 6 27 10 46m38-24c0-19 18-30 27-19 11 13 1 20-7 33"
        stroke={c.line}
      />
      <path
        d="M103 101c-16 4-23-7-19-15 12 0 17 5 19 15Zm-3 19c15-8 24 0 22 9-11 4-18 0-22-9Zm49-19c-2-15 7-23 16-18 1 11-5 17-16 18Z"
        fill={c.tint}
        stroke={c.line}
      />
    </Scene>
  )
}
