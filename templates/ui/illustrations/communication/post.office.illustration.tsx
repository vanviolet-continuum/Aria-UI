import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PostOfficeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M64 47h132v108H64V47Z" fill={c.surface} />
      <path d="M58 47h144v13H58V47Z" fill={c.tint} />
      <path d="M78 78h47v55H78V78Zm60 0h43v77h-43V78Z" stroke={c.line} />
      <path
        d="M104 23h51v15h-51V23Zm0 0 25 10 26-10m-96 47h142M78 104h47m41 4v10"
        stroke={c.line}
      />
      <path d="M49 123c0-19 27-19 27 0v26H49v-26Z" fill={c.tint} />
      <path d="M54 123h17m-8 26v8M83 155h121" stroke={c.line} />
    </Scene>
  )
}
