import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PreservingJarIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M99 52h62v20c16 6 21 17 21 30v40a12 12 0 0 1-12 12H90a12 12 0 0 1-12-12v-40c0-13 5-24 21-30V52Z"
        fill={c.surface}
      />
      <path d="M94 44h72v11H94V44Z" fill={c.tint} />
      <path d="M104 43V32h52v11m-60 21h68m-82 36h96m-96 36h96" stroke={c.line} />
      <rect x="105" y="105" width="50" height="24" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M117 117h26M88 81v51m83-51v51m-9-69h10v17h-10M95 63H85v17h10" stroke={c.line} />
      <path d="M111 146h38" stroke={c.line} />
    </Scene>
  )
}
