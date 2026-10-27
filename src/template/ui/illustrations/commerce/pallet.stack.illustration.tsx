import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PalletStackIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M64 77h64v56H64V77Zm69 0h64v56h-64V77ZM96 33h69v40H96V33Z" fill={c.surface} />
      <path
        d="M90 77h13v29H90V77Zm69 0h13v29h-13V77Zm-34-44h12v23h-12V33Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M74 118h36m33 0h36m-72-55h48" stroke={c.line} />
      <path
        d="M55 134h151v10H55v-10Zm0 16h151v7H55v-7m8-6v6m39-6v6m52-6v6m40-6v6"
        fill={c.tint}
        stroke={c.line}
      />
    </Scene>
  )
}
