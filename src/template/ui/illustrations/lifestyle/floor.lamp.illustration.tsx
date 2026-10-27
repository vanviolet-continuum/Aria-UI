import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FloorLampIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M130 78v72m-28 7h56l-10-7h-36l-10 7Z" fill={c.surface} stroke={c.line} />
      <path d="m105 29-19 49h88l-19-49h-50Z" fill={c.surface} />
      <ellipse cx="130" cy="78" rx="44" ry="7" fill={c.tint} stroke={c.line} />
      <path d="M111 38h38m-45 29h52m-6 18v20m-2 0h4" stroke={c.line} />
      <path d="M130 85c-8 0-13-3-14-7m27 0c-1 4-6 7-13 7m-50 65h16m68 0h17" stroke={c.line} />
    </Scene>
  )
}
