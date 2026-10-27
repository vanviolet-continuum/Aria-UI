import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FireExtinguisherIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M110 62h41v22c10 4 14 13 14 24v39a8 8 0 0 1-8 8h-53a8 8 0 0 1-8-8v-39c0-11 4-20 14-24V62Z"
        fill={c.surface}
      />
      <path
        d="M112 62V45h21v17m-16-17V31h44v8h-26m-2 13c35-1 55 9 49 38m-6-5h14v27h-14V85Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M108 105h45v33h-45v-33Z" fill={c.tint} stroke={c.line} />
      <path d="M119 115h24m-24 11h17m-28 22h45" stroke={c.line} />
      <circle cx="109" cy="49" r="8" fill={c.surface} stroke={c.line} />
      <path d="m109 49 3-3" stroke={c.line} />
    </Scene>
  )
}
