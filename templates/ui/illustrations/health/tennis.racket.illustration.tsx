import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TennisRacketIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(23 131 93)">
        <ellipse cx="131" cy="66" rx="29" ry="39" fill={c.surface} />
        <ellipse cx="131" cy="66" rx="23" ry="32" stroke={c.line} />
        <path
          d="M120 38v56m11-60v64m11-60v56m-33-40h44m-44 13h44m-41 13h38m-32 26 13 21 13-21m-13 21v6"
          stroke={c.line}
        />
        <rect x="124" y="131" width="14" height="28" rx="4" fill={c.tint} />
        <path d="M125 139h12m-12 8h12" stroke={c.line} />
      </g>
      <circle cx="76" cy="140" r="15" fill={c.tint} stroke={c.line} />
      <path d="M66 129c12 2 16 9 14 25" stroke={c.line} />
    </Scene>
  )
}
