import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PaperShredderIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M81 76h98l-7 77H88l-7-77Z" fill={c.surface} />
      <path d="M74 65h112v23H74V65Z" fill={c.tint} />
      <path d="M92 76h76" stroke={c.line} strokeWidth="3" />
      <path d="M105 75V30h51v45" fill={c.surface} />
      <path d="M115 42h31m-31 10h24m-24 10h31M101 102h58v39h-58v-39Z" stroke={c.line} />
      <path d="m111 107 3 28m9-28-1 28m12-28 2 28m10-28-2 28M98 154v4m65-4v4" stroke={c.line} />
    </Scene>
  )
}
