import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DrawerUnitIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <rect x="80" y="32" width="100" height="117" rx="6" fill={c.surface} />
      <path
        d="M87 41h86v29H87V41Zm0 35h86v29H87V76Zm0 35h86v29H87v-29Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M118 55h24m-24 35h24m-24 35h24M89 149v8m82-8v8" stroke={c.line} />
      <path d="M100 48h8m48 82h8m-66-35h8" stroke={c.line} />
    </Scene>
  )
}
