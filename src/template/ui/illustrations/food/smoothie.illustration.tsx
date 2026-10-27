import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SmoothieIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m97 62 10 87c1 10 45 10 46 0l10-87H97Z" fill={c.surface} />
      <path d="M101 90c19-6 38 6 58 0l-7 58c0 7-43 7-44 0l-7-58Z" fill={c.tint} stroke="none" />
      <ellipse cx="130" cy="62" rx="33" ry="7" fill={c.tint} stroke={c.line} />
      <path d="M130 130 145 31h26m-66 44 6 51m18-49-1 17" stroke={c.line} />
      <circle cx="173" cy="135" r="15" fill={c.surface} />
      <circle cx="192" cy="146" r="10" fill={c.tint} stroke={c.line} />
      <path d="M173 120v-9m0 9-8-6m8 6 8-6M82 156h116" stroke={c.line} />
    </Scene>
  )
}
