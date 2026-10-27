import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BedsideTableIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M83 79h95v68H83V79Zm-7-9h109v11H76V70Z" fill={c.surface} />
      <path d="M91 88h79v25H91V88Zm0 34h79v25H91v-25Z" fill={c.tint} stroke={c.line} />
      <path d="M119 101h24m-24 34h24m-53 12v10m81-10v10" stroke={c.line} />
      <path d="M119 29h24l10 24h-44l10-24Zm12 24v14m-14 0h29" fill={c.surface} stroke={c.line} />
      <path d="M91 67h17m-16-5h18" stroke={c.line} />
    </Scene>
  )
}
