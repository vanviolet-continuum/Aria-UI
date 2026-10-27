import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PineConeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M130 35c-27 9-44 36-42 74 1 57 83 57 84 0 2-38-15-65-42-74Z" fill={c.surface} />
      <path d="M130 34V24l10-7" stroke={c.line} />
      <path
        d="m113 53 17 13 17-13m-41 15 13 15 11-10 11 10 13-15m-59 20 15 17 20-17 20 17 15-17m-74 22 17 17 22-18 22 18 17-17m-71 21 15 14 17-11 17 11 15-14m-51 16 19 11 19-11"
        stroke={c.line}
      />
      <path d="M101 157h58" stroke={c.line} />
    </Scene>
  )
}
