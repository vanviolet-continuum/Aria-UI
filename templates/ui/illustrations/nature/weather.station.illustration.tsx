import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WeatherStationIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="66" y="44" width="129" height="103" rx="10" fill={c.surface} />
      <rect x="76" y="55" width="109" height="74" rx="5" fill={c.tint} stroke={c.line} />
      <path d="M132 56v73m-56-34h109" stroke={c.line} />
      <circle cx="103" cy="76" r="10" fill={c.surface} stroke={c.line} />
      <path
        d="M103 61v-3m0 33v3m-15-18h-3m33 0h3m-25 31h21m-21 9h13m32-45h13m-13 9h26m-26 26h23m-23 9h15"
        stroke={c.line}
      />
      <path d="M111 138h38m-65 10v7m94-7v7" stroke={c.line} />
    </Scene>
  )
}
