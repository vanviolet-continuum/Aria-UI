import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WindsockIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M78 40v115m-16 0h32" stroke={c.line} strokeWidth="3" />
      <circle cx="78" cy="37" r="4" fill={c.surface} />
      <path d="M87 48c35 6 62 22 104 24v26c-42-2-69-18-104-24V48Z" fill={c.surface} />
      <path d="M108 53v26l20 7V60l-20-7Zm40 14v26l20 4V71l-20-4Z" fill={c.tint} stroke={c.line} />
      <ellipse cx="87" cy="61" rx="5" ry="13" fill={c.tint} />
      <path d="M78 48h9m-9 26h9m116-8h15m-15 16h21m-21 16h15" stroke={c.line} />
      <path d="M126 140h58m-38 9h38" stroke={c.line} />
    </Scene>
  )
}
