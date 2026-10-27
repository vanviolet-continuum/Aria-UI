import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function RibbonBowIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M122 95 89 150l20-3 8 11 18-57m2-6 34 55-20-3-8 11-18-57" fill={c.surface} />
      <path
        d="M122 88c-46-39-69-22-57 6 10 21 32 22 57-6Zm15 0c46-39 69-22 57 6-10 21-32 22-57-6Z"
        fill={c.tint}
      />
      <path d="M122 88c-34-13-47-10-49-2m64 2c34-13 47-10 49-2" stroke={c.line} />
      <path d="M121 76h17v25h-17V76Z" fill={c.surface} />
      <path d="m126 105-19 36m27-36 19 36" stroke={c.line} />
    </Scene>
  )
}
