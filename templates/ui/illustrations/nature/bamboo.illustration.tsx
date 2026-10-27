import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BambooIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M91 46h14v111H91V46Zm32-18h14v129h-14V28Zm32 34h14v95h-14V62Z" fill={c.surface} />
      <path
        d="M91 67h14m-14 29h14m-14 30h14m18-78h14m-14 31h14m-14 31h14m-14 31h14m18-57h14m-14 30h14m-14 28h14"
        stroke={c.line}
      />
      <path
        d="M137 78c22-21 39-17 41-6-14 9-28 10-41 6Zm0 0c7-28 22-37 32-30-5 18-15 28-32 30ZM91 97c-22-19-40-13-40-2 15 7 28 8 40 2Zm0 0c-3-27-18-38-28-32 2 18 12 28 28 32Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M74 157h113" stroke={c.line} />
    </Scene>
  )
}
