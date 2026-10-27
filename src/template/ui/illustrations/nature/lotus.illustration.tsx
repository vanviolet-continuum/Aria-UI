import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function LotusIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <ellipse cx="130" cy="142" rx="64" ry="12" fill={c.tint} stroke={c.line} />
      <path d="M130 134v-16m-1 24 51-3" stroke={c.line} />
      <path
        d="M130 120c-48 5-67-24-60-43 28-1 52 18 60 43Zm0 0c48 5 67-24 60-43-28-1-52 18-60 43Z"
        fill={c.surface}
      />
      <path
        d="M130 120c-33-7-45-38-32-58 20 8 32 31 32 58Zm0 0c33-7 45-38 32-58-20 8-32 31-32 58Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M130 119c-21-22-21-51 0-74 21 23 21 52 0 74Z" fill={c.surface} />
      <path d="M130 63v43M59 151h19m106 0h20" stroke={c.line} />
    </Scene>
  )
}
