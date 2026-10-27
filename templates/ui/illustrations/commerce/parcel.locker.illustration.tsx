import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ParcelLockerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="65" y="32" width="131" height="123" rx="6" fill={c.surface} />
      <path d="M74 42h76v103H74V42Zm38 0v103m-38-69h76m-76 35h76" stroke={c.line} />
      <path
        d="M99 55v8m38-8v8m-38 26v8m38-8v8m-38 26v8m38-8v8M160 51h26v25h-26V51Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M166 60h14m-14 8h9m-9 21h3m8 0h3m-14 9h3m8 0h3m-14 9h3m8 0h3m-16 24h21"
        stroke={c.line}
      />
    </Scene>
  )
}
