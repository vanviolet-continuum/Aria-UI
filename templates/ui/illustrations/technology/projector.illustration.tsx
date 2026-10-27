import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ProjectorIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m66 69 125-12 18 31-153 12 10-31Z" fill={c.surface} />
      <path d="M56 99h153v44H56V99Z" fill={c.surface} />
      <path d="m76 80 105-10m-101 17 105-10" stroke={c.line} />
      <circle cx="166" cy="121" r="18" fill={c.tint} />
      <circle cx="166" cy="121" r="11" fill={c.surface} stroke={c.line} />
      <path d="M69 113h43m-43 8h43m-43 8h43m-38 14v11m115-11v11" stroke={c.line} />
      <circle cx="194" cy="108" r="2" fill={c.accent} stroke="none" />
      <path d="m175 44 16-9m-8 16 18-3" stroke={c.line} />
    </Scene>
  )
}
