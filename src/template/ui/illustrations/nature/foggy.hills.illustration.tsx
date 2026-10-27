import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FoggyHillsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M46 111c26-56 62-56 88 0 29-67 64-63 83 0v43H46v-43Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path
        d="M46 140c40-31 74-30 102-2 27-24 51-25 69-7v23H46v-14Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M57 94h91m-71 12h116M43 120h70m22 0h86M58 133h104m-58 12h101" stroke={c.line} />
      <circle cx="124" cy="47" r="14" fill={c.tint} stroke={c.line} />
      <path d="M44 155h175" stroke={c.line} />
    </Scene>
  )
}
