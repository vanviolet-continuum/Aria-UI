import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CheeseBoardIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <ellipse cx="129" cy="132" rx="76" ry="21" fill={c.surface} />
      <path d="M54 132v8c0 26 150 26 150 0v-8" stroke={c.line} />
      <path d="m82 117 16-43 71 28-3 27-84-12Z" fill={c.tint} />
      <path d="m98 74 16 43 52 12m-52-12 55-15" stroke={c.line} />
      <circle cx="137" cy="116" r="4" fill={c.surface} stroke={c.line} />
      <circle cx="158" cy="117" r="3" fill={c.surface} stroke={c.line} />
      <circle cx="105" cy="95" r="3" fill={c.surface} stroke={c.line} />
      <path
        d="m175 120 8-35 7 2-5 35m-2-35 5-23c12 9 12 21 2 23M71 138h29m31 4h32"
        stroke={c.line}
      />
    </Scene>
  )
}
