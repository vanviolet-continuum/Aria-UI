import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PantryShelfIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M58 39h144v116H58V39Zm0 59h144" fill={c.surface} />
      <path d="M69 50h122v38H69V50Zm0 59h122v35H69v-35Z" fill={c.tint} stroke={c.line} />
      <path
        d="M79 59h24v29H79V59Zm-1 0v-7h26v7m10 29V55h29v33m10 0V65h26v23M79 121h30v23H79v-23m4 0v-9h22v9m13 23v-29h23v29m10 0v-23h28v23"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M85 71h12m24-3h15m22 10h15m-89 54h19m20-4h12m22 5h15" stroke={c.line} />
    </Scene>
  )
}
