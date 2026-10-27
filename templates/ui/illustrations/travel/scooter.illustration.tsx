import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ScooterIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="83" cy="133" r="21" fill={c.surface} />
      <circle cx="181" cy="133" r="21" fill={c.surface} />
      <circle cx="83" cy="133" r="9" fill={c.tint} stroke={c.line} />
      <circle cx="181" cy="133" r="9" fill={c.tint} stroke={c.line} />
      <path
        d="M59 128c2-40 52-45 68-11h23l-10-44h18l24 54h-22l-5 9h-37c-7-24-36-31-59-8Z"
        fill={c.tint}
      />
      <path d="M150 72V49h-18m-55 40h43v-9H77v9m17 7 18 18m19 10h20" stroke={c.line} />
      <path d="M145 47h17v15h-17V47Z" fill={c.surface} stroke={c.line} />
      <path d="M54 157h153" stroke={c.line} />
    </Scene>
  )
}
