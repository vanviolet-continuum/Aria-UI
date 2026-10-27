import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function JumpRopeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M103 100c-65-9-61-75-16-75 58 0 60 99 91 96 27-3 29-56-5-61"
        stroke={c.line}
        strokeWidth="2.5"
      />
      <path d="m100 98 14-6 24 48c6 11-8 18-14 7l-24-49Z" fill={c.surface} />
      <path d="m166 58 14 4-14 58c-3 13-19 9-16-4l16-58Z" fill={c.tint} />
      <path
        d="m111 107 12-5m-6 17 12-5m-6 17 12-5m25-50 14 4m-17 8 14 4m-17 8 14 4m-17 8 14 4M76 156h112"
        stroke={c.line}
      />
    </Scene>
  )
}
