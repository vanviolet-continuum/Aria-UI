import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BusStopIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M61 61h119v9H61v-9Zm5 9v84m108-84v84M74 72h91v57H74V72Z" fill={c.surface} />
      <path
        d="M119 73v56m-46-28h91M85 129h73v8H85v-8Zm6 8v17m61-17v17"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M202 70v85" stroke={c.line} />
      <circle cx="202" cy="49" r="18" fill={c.surface} />
      <path
        d="M194 41h16v15h-16V41Zm0 9h16m-14 6v4m12-4v4M55 156h160m-132-74h25m-25 9h17"
        stroke={c.line}
      />
    </Scene>
  )
}
