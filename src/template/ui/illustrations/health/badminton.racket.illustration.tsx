import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BadmintonRacketIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(-18 128 93)">
        <ellipse cx="128" cy="63" rx="25" ry="37" fill={c.surface} />
        <path
          d="M117 31v64m11-69v74m11-69v64m-34-44h46m-47 13h48m-44 13h40m-33 23 13 22 13-22m-13 22v13"
          stroke={c.line}
        />
        <rect x="122" y="133" width="12" height="25" rx="3" fill={c.tint} />
        <path d="M123 140h10m-10 8h10" stroke={c.line} />
      </g>
      <path d="M170 104h20l-6 26h-8l-6-26Zm6 26c0 10 8 10 8 0" fill={c.surface} stroke={c.line} />
      <path d="M180 104v26m-8-17h16" stroke={c.line} />
    </Scene>
  )
}
