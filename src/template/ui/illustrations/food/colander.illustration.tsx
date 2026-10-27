import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ColanderIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M74 86H54V69h28m104 17h20V69h-28" fill={c.surface} stroke={c.line} />
      <path d="M72 74h116c-1 45-17 68-58 68s-57-23-58-68Z" fill={c.surface} />
      <ellipse cx="130" cy="74" rx="58" ry="10" fill={c.tint} />
      <path d="M107 141v12h46v-12" stroke={c.line} />
      <g stroke={c.line}>
        <circle cx="93" cy="98" r="2" />
        <circle cx="111" cy="99" r="2" />
        <circle cx="130" cy="100" r="2" />
        <circle cx="149" cy="99" r="2" />
        <circle cx="167" cy="98" r="2" />
        <circle cx="102" cy="116" r="2" />
        <circle cx="121" cy="119" r="2" />
        <circle cx="140" cy="119" r="2" />
        <circle cx="159" cy="116" r="2" />
      </g>
      <path d="M116 149h28" stroke={c.line} />
    </Scene>
  )
}
