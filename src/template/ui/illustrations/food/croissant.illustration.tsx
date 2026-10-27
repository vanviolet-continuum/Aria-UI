import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CroissantIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <ellipse cx="130" cy="143" rx="76" ry="12" fill={c.surface} stroke={c.line} />
      <path d="M65 108c7-69 123-69 130 0l-25 28c-24-26-56-26-80 0l-25-28Z" fill={c.tint} />
      <path
        d="M82 74c-3 23 2 39 11 56m8-70c-2 22 2 40 10 60m22-63v56m25-53c2 22-2 40-10 60m29-46c3 23-2 39-11 56"
        stroke={c.line}
      />
      <path d="M66 108c10-4 16 1 24 15m105-15c-10-4-16 1-24 15m-58 23h35" stroke={c.line} />
    </Scene>
  )
}
