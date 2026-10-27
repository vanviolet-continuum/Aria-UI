import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function StaplerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M64 125h135v24H64v-24Z" fill={c.surface} />
      <path d="m84 65 104 21-5 24L75 93c-19-3-13-33 9-28Z" fill={c.tint} />
      <path d="m77 93 9 32h25l-10-28m87 13-2 20h-15v-23" fill={c.surface} stroke={c.line} />
      <path d="m90 75 84 16M70 136h119m-99-12 13-3m-30 28v6m118-6v6" stroke={c.line} />
    </Scene>
  )
}
