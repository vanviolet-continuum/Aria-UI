import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PortableCoolerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="67" y="69" width="126" height="81" rx="10" fill={c.surface} />
      <path d="M63 58h134v18H63V58Z" fill={c.tint} />
      <path
        d="M90 57V42a7 7 0 0 1 7-7h66a7 7 0 0 1 7 7v15m-69 0V46h58v11m-89 36h119m-111 11v30"
        stroke={c.line}
      />
      <rect x="116" y="88" width="28" height="11" rx="3" fill={c.surface} stroke={c.line} />
      <path d="M59 88h8v26h-8V88Zm134 0h8v26h-8V88Z" fill={c.tint} stroke={c.line} />
      <path d="M117 125h26m-13-13v26m-9-22 18 18m-18 0 18-18" stroke={c.line} />
    </Scene>
  )
}
