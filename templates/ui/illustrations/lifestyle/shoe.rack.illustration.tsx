import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ShoeRackIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M63 71v84m134-84v84M58 91h144v8H58v-8Zm0 52h144v8H58v-8Z" fill={c.surface} />
      <path
        d="M78 70h17l13 8h18v12H76V77l2-7Zm60 0h17l13 8h18v12h-50V77l2-7ZM78 122h17l13 8h18v12H76v-13l2-7Zm60 0h17l13 8h18v12h-50v-13l2-7Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M88 76h10m50 0h10m-70 52h10m50 0h10M65 49h130" stroke={c.line} />
    </Scene>
  )
}
