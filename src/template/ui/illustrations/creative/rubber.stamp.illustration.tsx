import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function RubberStampIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M114 92c-13-15-19-29-12-45 11-21 45-21 56 0 7 16 1 30-12 45v10h-32V92Z"
        fill={c.surface}
      />
      <path d="M109 48c6-10 15-13 24-10m-19 64h32v10h-32v-10Z" fill={c.tint} stroke={c.line} />
      <path d="M87 112h86v19H87v-19Zm-6 19h98v13H81v-13Z" fill={c.surface} />
      <path d="M84 144h92v8H84v-8Z" fill={c.tint} stroke={c.line} />
      <path d="M97 120h66m-66 18h66" stroke={c.line} />
    </Scene>
  )
}
