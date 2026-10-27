import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DocumentTubeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(30 130 91)">
        <path d="M113 35h34v113h-34V35Z" fill={c.surface} />
        <ellipse cx="130" cy="35" rx="17" ry="6" fill={c.tint} />
        <path d="M113 142h34v11h-34v-11m0-98h34m-24 11v69" stroke={c.line} />
        <path d="M114 78h32v41h-32V78Z" fill={c.tint} stroke={c.line} />
        <path d="M121 90h18m-18 9h11m-11 9h18" stroke={c.line} />
      </g>
      <path d="M59 150h40m68-117h24" stroke={c.line} />
    </Scene>
  )
}
