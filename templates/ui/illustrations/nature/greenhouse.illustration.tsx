import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GreenhouseIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m56 69 74-39 74 39v85H56V69Z" fill={c.surface} />
      <path
        d="m56 69 74 24 74-24m-74-39v124m-37-104v104m74-104v104M56 112h148M74 60l56 33 56-33"
        stroke={c.line}
      />
      <path d="M116 115h28v39h-28v-39Z" fill={c.tint} stroke={c.line} />
      <path d="m65 138 4 15h15l4-15H65Zm108 0 4 15h15l4-15h-23Z" fill={c.tint} stroke={c.line} />
      <path
        d="M76 137v-17m0 10c-9-1-14-8-11-13 9 0 12 6 11 13Zm107 7v-17m0 8c1-9 8-14 14-11-1 8-6 12-14 11Z"
        fill={c.tint}
        stroke={c.line}
      />
    </Scene>
  )
}
