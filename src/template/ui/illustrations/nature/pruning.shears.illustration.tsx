import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PruningShearsIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M126 92c-34-6-45-36-21-60-4 23 6 34 30 40l-9 20Z" fill={c.surface} />
      <path d="M132 91c31-8 42-30 28-54 0 20-8 29-30 34" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="89" r="9" fill={c.surface} />
      <path
        d="m125 97-20 48c-4 10-20 3-16-7l26-46m21 5 18 48c4 10 20 3 16-7l-26-46"
        fill={c.tint}
      />
      <path d="m104 126 11-3 4 5 8-6 7 5 9-6 10 4" stroke={c.line} />
      <path d="M126 89h8m-71 23 8-7m121-26 8-4M66 153h127" stroke={c.line} />
    </Scene>
  )
}
