import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SkateboardIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(22 130 91)">
        <rect x="108" y="24" width="44" height="134" rx="22" fill={c.surface} />
        <rect x="116" y="35" width="28" height="112" rx="14" fill={c.tint} stroke={c.line} />
        <path d="M103 54h54m-54 73h54" stroke={c.line} strokeWidth="4" />
        <rect x="98" y="46" width="10" height="16" rx="4" fill={c.surface} />
        <rect x="152" y="46" width="10" height="16" rx="4" fill={c.surface} />
        <rect x="98" y="119" width="10" height="16" rx="4" fill={c.surface} />
        <rect x="152" y="119" width="10" height="16" rx="4" fill={c.surface} />
        <path d="M130 71v40m-6-28h12m-12 16h12" stroke={c.line} />
      </g>
    </Scene>
  )
}
