import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TuningForkIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M103 29h10v67a17 17 0 0 0 34 0V29h10v67a27 27 0 0 1-22 27v33h-10v-33a27 27 0 0 1-22-27V29Z"
        fill={c.surface}
      />
      <path
        d="M107 37v55m45-55v55M86 48c-7 13-7 28 0 41m88-41c7 13 7 28 0 41M75 41c-11 18-11 39 0 57m110-57c11 18 11 39 0 57"
        stroke={c.line}
      />
      <path d="M105 157h50" stroke={c.line} />
    </Scene>
  )
}
