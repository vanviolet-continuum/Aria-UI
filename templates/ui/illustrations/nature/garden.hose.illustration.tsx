import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GardenHoseIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="117" cy="105" r="45" fill={c.surface} />
      <circle cx="117" cy="105" r="35" stroke={c.line} />
      <circle cx="117" cy="105" r="25" stroke={c.line} />
      <circle cx="117" cy="105" r="15" fill={c.tint} stroke={c.line} />
      <path d="M117 105c0-53 74-9 74-55" stroke={c.line} strokeWidth="5" />
      <path d="m183 48 14 1 4-25-15-1-3 25Z" fill={c.surface} />
      <path d="m184 36-13-3-3 10 15 4m4-23 16 1m-16 6 13 1" stroke={c.line} />
      <path d="m198 16 2-8m-12 8-2-7m20 12 6-5" stroke={c.accent} />
      <path d="M69 155h113" stroke={c.line} />
    </Scene>
  )
}
