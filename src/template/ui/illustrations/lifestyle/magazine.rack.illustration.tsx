import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MagazineRackIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M84 40h80v90H84V40Z" fill={c.surface} transform="rotate(-8 124 85)" />
      <path d="M105 49h74v86h-74V49Z" fill={c.surface} />
      <path d="M119 63h45m-45 12h32m-32 15h45m-45 12h35" stroke={c.line} />
      <path d="M70 90h118l-13 61H84L70 90Z" fill={c.tint} />
      <path
        d="M80 104h98m-92 14h87m-81 14h76m-65-41v58m26-58v58m26-58v58m-64 2-5 6m89-6 5 6"
        stroke={c.line}
      />
    </Scene>
  )
}
