import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function VolleyballIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="130" cy="91" r="55" fill={c.surface} />
      <path
        d="M130 91c-1-26 15-44 35-43m-35 43c-22 13-46 7-53-12m53 12c24 13 31 37 18 52"
        stroke={c.line}
      />
      <path
        d="M118 92c-5-26 6-45 24-55m-35 50c-7-21-4-35 6-48m11 63c-19 16-39 14-47 2m53 9c-17 18-34 19-45 12m55-28c24 9 40 24 35 43m-24-53c20 4 31 13 34 27"
        stroke={c.line}
      />
      <path d="M96 156h68" stroke={c.line} />
    </Scene>
  )
}
