import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CuttingBoardIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M118 27h24v25h27a9 9 0 0 1 9 9v86a9 9 0 0 1-9 9H91a9 9 0 0 1-9-9V61a9 9 0 0 1 9-9h27V27Z"
        fill={c.surface}
      />
      <circle cx="130" cy="38" r="4" stroke={c.line} />
      <path d="M96 68v66m14-71v79m15-73v30m0 17v25m16-76v68m16-62v70" stroke={c.line} />
      <path d="M111 97c0 8 8 11 8 19m22-27c-1 9 6 12 6 19" stroke={c.line} />
      <path d="M90 149h79" stroke={c.line} />
      <path
        d="m195 93 9-1-2 47-9-1 2-45Zm0 0-1-36c11 8 13 20 10 35"
        fill={c.tint}
        stroke={c.line}
      />
    </Scene>
  )
}
