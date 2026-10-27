import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PaperClipsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(22 111 92)">
        <path
          d="M129 63v61c0 39-48 39-48 0V50c0-30 37-30 37 0v72c0 19-24 19-24 0V63"
          stroke={c.line}
          strokeWidth="3"
        />
      </g>
      <g transform="rotate(-17 169 112)">
        <path
          d="M183 94v43c0 28-35 28-35 0V83c0-22 27-22 27 0v51c0 14-17 14-17 0V94"
          stroke={c.line}
          strokeWidth="3"
        />
      </g>
      <path d="M69 156h117" stroke={c.line} />
    </Scene>
  )
}
