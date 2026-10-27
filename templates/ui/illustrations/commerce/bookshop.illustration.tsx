import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BookshopIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M64 42h132v113H64V42Z" fill={c.surface} />
      <path d="M60 64h140v9H60v-9Z" fill={c.tint} />
      <path d="M77 85h43v53H77V85Zm64 0h42v53h-42V85Zm-15-11h10v81h-10V74Z" stroke={c.line} />
      <path
        d="M78 109h41m23 0h40m-96-16v15m9-15v15m9-15v15m47-15v15m10-15v15m10-15v15m-85 10v18m9-18v18m10-18v18m47-18v18m10-18v18m10-18v18"
        stroke={c.line}
      />
      <path
        d="M114 49c6-3 11-1 16 2 5-3 10-5 16-2v10c-6-2-12-1-16 2-4-3-10-4-16-2V49Zm16 2v10"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M55 156h150" stroke={c.line} />
    </Scene>
  )
}
