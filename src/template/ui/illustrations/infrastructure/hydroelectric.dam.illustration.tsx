import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function HydroelectricDamIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M46 100c26-18 47-17 72-5l96-23v65H46v-37Z" fill={c.tint} stroke={c.line} />
      <path d="M86 56c39 12 65 12 99 0l-15 85c-23 15-44 15-69 0L86 56Z" fill={c.surface} />
      <path
        d="M86 56V44c39 12 65 12 99 0v12m-84 14 14 63m15-60 3 67m25-67-9 67m20-68-12 63"
        stroke={c.line}
      />
      <path d="M120 115h13v27m9-27h13v27M60 147h55m13 11h51m-6-11h36" stroke={c.line} />
      <path d="M54 91h21m-15 9h17m115-15h18" stroke={c.line} />
    </Scene>
  )
}
