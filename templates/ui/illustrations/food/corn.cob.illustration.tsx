import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CornCobIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M108 112V62c0-55 45-55 45 0v50h-45Z" fill={c.surface} />
      <path
        d="M119 30v87m11-92v92m11-87v87m-32-68h43m-43 13h43m-43 13h43m-43 13h43m-43 13h43"
        stroke={c.line}
      />
      <path
        d="M130 153c-35-15-54-51-50-77 25 8 43 36 50 77Zm0 0c35-15 54-51 50-77-25 8-43 36-50 77Z"
        fill={c.tint}
      />
      <path d="m90 93 40 60 40-60m-46 61v6h12v-6" stroke={c.line} />
    </Scene>
  )
}
