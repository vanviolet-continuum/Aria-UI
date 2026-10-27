import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WindTurbineIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m125 84-4 71h18l-4-71h-10Z" fill={c.surface} />
      <path
        d="M130 76c-11-14-15-40-6-58 10 13 15 43 6 58Zm0 0c18-3 43 6 54 23-17 2-45-9-54-23Zm0 0c-6 18-26 36-47 37 7-15 30-35 47-37Z"
        fill={c.tint}
      />
      <circle cx="130" cy="76" r="7" fill={c.surface} />
      <path d="M109 156h42M66 49h25m-15 9h20m71 66h33m-22 10h27" stroke={c.line} />
    </Scene>
  )
}
