import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FootballIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="130" cy="91" r="55" fill={c.surface} />
      <path d="m130 68 22 16-9 26h-26l-9-26 22-16Z" fill={c.tint} />
      <path d="M130 68V47m22 37 21-7m-30 33 13 18m-39-18-13 18m4-44-21-7" stroke={c.line} />
      <path
        d="m115 38 15 9 15-9m32 23-4 16 12 13m-15 39-14-1-7 14m-38 0-7-14-14 1M75 90l12-13-4-16"
        stroke={c.line}
      />
      <path d="M96 156h68" stroke={c.line} />
    </Scene>
  )
}
