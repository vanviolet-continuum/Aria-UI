import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BathroomCaddyIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M68 96h125l-8 57H76l-8-57Z" fill={c.surface} />
      <path
        d="M83 109h95m-93 13h92m-91 13h89m-81-39 5 57m20-57v57m21-57v57m22-57-5 57"
        stroke={c.line}
      />
      <path
        d="M83 95V62h24v33m-19-33V50h14v12m20 33V51h25v44m-20-44V36h15v15m18 44V70h18v25"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M130 36v-9h22m-62 48h9m29-11h12m-12 12h12m26 4h6" stroke={c.line} />
    </Scene>
  )
}
