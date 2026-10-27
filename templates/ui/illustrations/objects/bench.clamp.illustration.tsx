import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BenchClampIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M149 39H99c-20 0-28 13-28 33v45c0 20 8 33 28 33h50v-19h-49c-7 0-10-4-10-12V70c0-8 3-12 10-12h49V39Z"
        fill={c.surface}
      />
      <path d="M139 31h18v33h-18V31Z" fill={c.tint} />
      <path d="M144 80v69m-12-72h25v11h-25V77Z" fill={c.surface} stroke={c.line} />
      <path
        d="M138 95h12m-12 9h12m-12 9h12m-12 9h12m-12 9h12m-12 9h12M118 153h53m-50-4v8m47-8v8"
        stroke={c.line}
      />
    </Scene>
  )
}
