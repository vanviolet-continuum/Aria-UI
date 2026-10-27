import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CrystalClusterIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m110 152-9-94 25-32 27 28-8 98h-35Z" fill={c.surface} />
      <path d="m101 58 26 14 26-18m-27-28 1 46-4 80" stroke={c.line} />
      <path d="m85 152-28-54 6-28 28 14 26 68H85Z" fill={c.tint} stroke={c.line} />
      <path d="m63 70 17 34 27 47m-50-53 23 6 11-20" stroke={c.line} />
      <path d="m143 152 14-67 24-21 21 23-31 65h-28Z" fill={c.surface} />
      <path d="m157 85 23 13 22-11m-21-23-1 34-20 54M71 156h117" stroke={c.line} />
    </Scene>
  )
}
