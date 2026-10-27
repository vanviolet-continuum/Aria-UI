import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CampingBackpackIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M96 47c0-23 68-23 68 0m-64 4c-22-3-35 20-32 58m92-58c22-3 35 20 32 58"
        stroke={c.line}
      />
      <path d="M84 56c0-26 92-26 92 0v90a9 9 0 0 1-9 9H93a9 9 0 0 1-9-9V56Z" fill={c.surface} />
      <rect x="72" y="46" width="116" height="26" rx="12" fill={c.tint} />
      <path
        d="M97 47v23m66-23v23m-68 26h25v45H95V96Zm45 0h25v45h-25V96Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M105 72v34h12V72m26 0v34h12V72m-47 16h6m32 0h6" stroke={c.line} />
      <path d="M72 105H62v37h22m92-37h22v37h-22" stroke={c.line} />
    </Scene>
  )
}
