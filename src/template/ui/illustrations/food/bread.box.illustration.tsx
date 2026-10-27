import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BreadBoxIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M57 83c0-53 146-53 146 0v65H57V83Z" fill={c.surface} />
      <path d="M67 83c0-39 126-39 126 0v49H67V83Z" fill={c.tint} stroke={c.line} />
      <path d="M69 81h122M68 94h124M68 107h124M68 120h124" stroke={c.line} />
      <rect x="111" y="98" width="38" height="8" rx="4" fill={c.surface} />
      <path d="M58 140h144m-130 8v6m116-6v6" stroke={c.line} />
      <path d="M103 31c-5-6 5-8 0-14m26 14c-5-6 5-8 0-14m26 14c-5-6 5-8 0-14" stroke={c.line} />
    </Scene>
  )
}
