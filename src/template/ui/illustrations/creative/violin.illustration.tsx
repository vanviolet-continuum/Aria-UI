import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ViolinIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M121 32h18v22h-18V32Zm4 22h10v33h-10V54Z" fill={c.surface} />
      <path
        d="M122 78c-24-7-34 10-18 25-18 17-14 46 26 46s44-29 26-46c16-15 6-32-18-25"
        fill={c.tint}
      />
      <path
        d="M127 43v93m6-93v93m-15-30h24m-18 31h12m-21-50c-10 7 5 13-4 22m34-22c10 7-5 13 4 22m-29-67h-8m28 0h8"
        stroke={c.line}
      />
      <path d="m182 31-16 122m9-124-16 122" stroke={c.line} />
      <path d="M159 145h7v12h-7v-12Z" fill={c.surface} stroke={c.line} />
    </Scene>
  )
}
