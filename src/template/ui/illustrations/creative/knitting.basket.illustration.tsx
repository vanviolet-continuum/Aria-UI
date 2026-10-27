import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function KnittingBasketIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M76 105V82c0-46 108-46 108 0v23m-97 0V82c0-31 86-31 86 0v23" stroke={c.line} />
      <circle cx="108" cy="91" r="25" fill={c.surface} />
      <circle cx="151" cy="96" r="25" fill={c.tint} stroke={c.line} />
      <path
        d="m91 77 29 35m-21-42 29 34m-38-9 28-16m16 2 28 34m-20-41 28 34m-36-10 28-16"
        stroke={c.line}
      />
      <path d="m68 108 15 46h95l15-46H68Z" fill={c.surface} />
      <path
        d="M72 121h117m-113 15h108m-95-28 8 46m17-46 2 46m20-46-2 46m22-46-6 46m5-71 27-36m-60 37 28-41"
        stroke={c.line}
      />
    </Scene>
  )
}
