import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TrailSignIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M124 26h12v130h-12V26Z" fill={c.tint} stroke={c.line} />
      <path d="M72 44h100l21 17-21 17H72V44Zm116 47H86l-20 17 20 17h102V91Z" fill={c.surface} />
      <path d="M87 56h58m-58 10h37m-33 37h76m-60 11h60" stroke={c.line} />
      <path d="M107 155h46m-67 1-4-10m94 10 4-10" stroke={c.line} />
    </Scene>
  )
}
