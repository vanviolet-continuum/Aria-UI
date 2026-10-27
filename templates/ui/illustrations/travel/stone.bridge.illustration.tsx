import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function StoneBridgeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M48 108c45-28 119-28 164 0v32h-32c-5-45-95-45-100 0H48v-32Z" fill={c.surface} />
      <path
        d="M48 108c45-28 119-28 164 0M48 117c13-8 23-13 37-16m90 0c14 3 24 8 37 16"
        stroke={c.line}
      />
      <path
        d="M66 98v12m23-23 3 13m25-18 2 14m24-14-2 14m27-9-3 13m27-2-4 13M51 128h31m96 0h31"
        stroke={c.line}
      />
      <path d="M51 151h45m14 8h54m11-8h35" stroke={c.line} />
      <path d="M48 94c45-28 119-28 164 0" stroke={c.line} />
    </Scene>
  )
}
