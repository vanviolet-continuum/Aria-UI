import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SecurityCameraIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m71 52 110 22-14 45-111-29 15-38Z" fill={c.surface} />
      <path d="m76 45 112 23-5 15L69 59l7-14Z" fill={c.tint} />
      <path d="m163 81 14 4-8 27-14-4 8-27Z" fill={c.tint} stroke={c.line} />
      <path d="m163 88 7 2-4 13-7-2 4-13Z" fill={c.surface} stroke={c.line} />
      <path
        d="m105 103-12 25h36v21m-9-1h18v9h-18v-9M79 69l48 11m-54 3 24 7m89 12 14 5m-17 8 13 8m-20 5 10 10"
        stroke={c.line}
      />
    </Scene>
  )
}
