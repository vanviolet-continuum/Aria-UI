import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TravelMapIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m52 55 51-15 53 15 52-15v99l-52 16-53-16-51 16V55Z" fill={c.surface} />
      <path
        d="M103 40v99m53-84v100m-96-76 27-9 28 17 25-8 25 14 33-10m-138 42 26-8 27 13 25-9 25 13 35-11"
        stroke={c.line}
      />
      <path d="m75 108 20-15 24 12 26-21 35 14" stroke={c.accent} strokeDasharray="4 5" />
      <circle cx="75" cy="108" r="4" fill={c.surface} />
      <path d="M178 94c-24-23 16-41 16-17 0 8-7 14-16 17Z" fill={c.tint} />
      <circle cx="181" cy="76" r="4" fill={c.surface} stroke={c.line} />
    </Scene>
  )
}
