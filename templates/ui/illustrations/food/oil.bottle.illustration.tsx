import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function OilBottleIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M119 39h22v33l14 17v59a6 6 0 0 1-6 6h-38a6 6 0 0 1-6-6V89l14-17V39Z"
        fill={c.surface}
      />
      <path d="M117 27h26v13h-26V27Z" fill={c.tint} />
      <path d="M108 102c13-6 29 6 44 0v44h-44v-44Z" fill={c.tint} stroke="none" />
      <path d="M114 85v54m11-95h10" stroke={c.line} />
      <path
        d="M91 143c-14-21-20-42-18-66m4 27c-15 0-21-11-18-18 12 1 18 8 18 18Zm5 21c-3-16 6-26 15-23 0 12-6 18-15 23Z"
        fill={c.tint}
        stroke={c.line}
      />
      <ellipse cx="180" cy="143" rx="24" ry="9" fill={c.surface} stroke={c.line} />
      <ellipse cx="180" cy="143" rx="15" ry="4" fill={c.tint} stroke={c.line} />
    </Scene>
  )
}
