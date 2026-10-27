import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ArchiveBoxIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M67 77h126v77H67V77Z" fill={c.surface} />
      <path d="M61 63h138v20H61V63Z" fill={c.tint} />
      <path d="M82 63V43h36l9 8h48v12" fill={c.surface} stroke={c.line} />
      <path d="M92 43V31h82v20M73 90h114" stroke={c.line} />
      <rect x="104" y="104" width="52" height="31" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M115 115h30m-30 10h20m-39 21h68" stroke={c.line} />
    </Scene>
  )
}
