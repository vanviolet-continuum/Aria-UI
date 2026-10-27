import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function MedicineCabinetIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="75" y="31" width="111" height="123" rx="7" fill={c.surface} />
      <path d="M84 42h93v101H84V42Zm46 0v101" stroke={c.line} />
      <path d="M96 59h10v11h11v10h-11v11H96V80H85V70h11V59Z" fill={c.tint} stroke={c.line} />
      <path
        d="M138 107h31m-80 0h33m-7 16h7m16 0h7m1-47h18v31h-18V76Zm4-9h10v9h-10v-9m-50 47h16v28h-16v-28Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M148 86h14m-14 7h14M107 44v7m-4-4h8" stroke={c.line} />
    </Scene>
  )
}
