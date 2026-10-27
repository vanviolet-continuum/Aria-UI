import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PowerBankIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="89" y="37" width="83" height="117" rx="12" fill={c.surface} />
      <path d="M90 55h81m-68-10h27m9 0h12" stroke={c.line} />
      <path d="m129 75-16 27h17l-9 25 26-34h-18l9-18h-9Z" fill={c.tint} stroke={c.accent} />
      <path d="M107 141h4m9 0h4m9 0h4m9 0h4M131 37V24c0-16 49-11 49 11v18" stroke={c.line} />
      <rect x="174" y="51" width="13" height="18" rx="3" fill={c.surface} stroke={c.line} />
    </Scene>
  )
}
