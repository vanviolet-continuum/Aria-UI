import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WovenBasketIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M87 88V65c0-37 86-37 86 0v23m-77 0V65c0-24 68-24 68 0v23" stroke={c.line} />
      <path d="m67 89 14 58c3 14 95 14 98 0l14-58H67Z" fill={c.surface} />
      <ellipse cx="130" cy="89" rx="63" ry="9" fill={c.tint} />
      <path
        d="M72 108h116m-112 14h108m-105 14h102m-96-42 12 58m12-55 5 58m18-58v58m19-60-6 58m24-62-13 60"
        stroke={c.line}
      />
    </Scene>
  )
}
