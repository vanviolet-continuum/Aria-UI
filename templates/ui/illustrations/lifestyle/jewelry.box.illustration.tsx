import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function JewelryBoxIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M74 94V49c0-30 112-30 112 0v45" fill={c.surface} />
      <path d="M84 48c0-18 92-18 92 0v33H84V48Z" fill={c.tint} stroke={c.line} />
      <path d="M66 95h128v54H66V95Z" fill={c.surface} />
      <path d="M66 110h128m-114-8h100m-50 9v38" stroke={c.line} />
      <path d="M88 136c-9-16 1-26 13-20 9 8-1 20-13 20Z" fill={c.tint} stroke={c.line} />
      <path d="m95 115 7-9 7 9-7 7-7-7Zm55 5 9-5 9 5-9 11-9-11Z" fill={c.surface} stroke={c.line} />
      <path d="M122 141h16v8h-16v-8Z" fill={c.tint} />
    </Scene>
  )
}
