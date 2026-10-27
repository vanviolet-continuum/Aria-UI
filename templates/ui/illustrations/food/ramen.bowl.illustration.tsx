import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function RamenBowlIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M67 98h126c-4 36-23 54-63 54S71 134 67 98Z" fill={c.surface} />
      <ellipse cx="130" cy="98" rx="63" ry="13" fill={c.tint} stroke={c.line} />
      <path d="M106 151v6h48v-6m-77-36c26 13 77 13 106 0" stroke={c.line} />
      <path
        d="M90 98c-6-17 8-25 12-12s14 10 12-3c-1-11 10-13 14-3m14 14c-6-17 20-29 28-11 3 8-3 16-12 19"
        fill={c.surface}
        stroke={c.line}
      />
      <ellipse cx="155" cy="88" rx="6" ry="8" fill={c.tint} stroke={c.line} />
      <path
        d="m82 63 103 12M82 54l103 11M116 52c-7-6 5-9 0-16m22 16c-7-6 5-9 0-16"
        stroke={c.line}
      />
    </Scene>
  )
}
