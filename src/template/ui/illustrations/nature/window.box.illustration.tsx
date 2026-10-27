import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WindowBoxIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="65" y="32" width="130" height="103" rx="3" fill={c.surface} />
      <path d="M75 42h110v83H75V42Zm55 0v83m-55-42h110" stroke={c.line} />
      <path d="M105 128V95m26 33V87m26 41V99" stroke={c.line} />
      <g fill={c.tint} stroke={c.line}>
        <path d="M105 81c11-11 23 2 12 11 6 12-10 17-15 6-13 7-20-7-8-13-1-8 7-10 11-4Z" />
        <path d="M131 73c11-11 23 2 12 11 6 12-10 17-15 6-13 7-20-7-8-13-1-8 7-10 11-4Z" />
        <path d="M157 85c11-11 23 2 12 11 6 12-10 17-15 6-13 7-20-7-8-13-1-8 7-10 11-4Z" />
      </g>
      <path d="m63 127 9 28h116l9-28H63Z" fill={c.surface} />
      <path d="M67 136h126m-111 8h96" stroke={c.line} />
    </Scene>
  )
}
