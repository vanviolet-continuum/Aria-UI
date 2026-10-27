import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SnareDrumIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M76 89h108v40c0 26-108 26-108 0V89Z" fill={c.tint} />
      <ellipse cx="130" cy="89" rx="54" ry="19" fill={c.surface} />
      <ellipse cx="130" cy="89" rx="44" ry="13" stroke={c.line} />
      <path
        d="M77 127c24 16 82 16 106 0M87 96v33m21-26v33m22-31v32m22-34v33m21-40v33"
        stroke={c.line}
      />
      <path d="m84 40 85 49M175 40 91 89" stroke={c.line} strokeWidth="3" />
      <path d="M106 151h48" stroke={c.line} />
    </Scene>
  )
}
