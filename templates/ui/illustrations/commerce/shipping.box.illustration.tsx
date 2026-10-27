import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ShippingBoxIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m69 83 61-19 61 19-61 24-61-24Z" fill={c.tint} />
      <path d="M69 83v51l61 23v-50L69 83Zm61 24 61-24v51l-61 23v-50Z" fill={c.surface} />
      <path
        d="m69 83-24-24 61-19 24 24-61 19Zm61-19 24-24 61 19-24 24-61-19ZM69 83l61 24-24 23-61-25 24-22Zm61 24 61-24 24 22-61 25-24-23Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M130 107v50m21-23 26-10m-26 19 18-7" stroke={c.line} />
    </Scene>
  )
}
