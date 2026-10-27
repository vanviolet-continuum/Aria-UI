import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HikingBootIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M84 48h54v53l48 17c23 8 24 27 8 30H64v-22l13-19 7-59Z" fill={c.surface} />
      <path d="M64 140h139v14H64v-14Z" fill={c.tint} />
      <path
        d="M89 61h40m-40 0-4 39 21 23h48m-57-50 28-3m-29 15 29-4m-29 16 29-4m-18 14 25-7m-11 19 26-7"
        stroke={c.line}
      />
      <path
        d="M75 154v4m17-4v4m17-4v4m17-4v4m17-4v4m17-4v4m17-4v4m-92-45-12 18h25"
        stroke={c.line}
      />
      <path d="M156 122c11-2 20 0 27 5" stroke={c.line} />
    </Scene>
  )
}
