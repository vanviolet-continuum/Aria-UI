import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function RainCloudIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M83 103c-30 0-38-38-11-50 9-29 49-29 62-5 29-15 56 6 51 27 27 12 18 38-9 38H91"
        fill={c.surface}
      />
      <path d="M82 68c6-12 19-16 30-12" stroke={c.line} />
      <path
        d="m88 124-9 18m36-23-9 18m37-13-9 18m37-23-9 18m-67 12-4 8m49-8-4 8"
        stroke={c.accent}
        strokeWidth="2.5"
      />
      <path d="M58 155h17m108 0h20" stroke={c.line} />
    </Scene>
  )
}
