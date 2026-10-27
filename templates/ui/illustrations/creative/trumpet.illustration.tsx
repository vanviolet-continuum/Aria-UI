import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TrumpetIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M70 78h99V65l35-15v63l-35-15V86H70v-8Z" fill={c.surface} />
      <ellipse cx="204" cy="81.5" rx="7" ry="31.5" fill={c.tint} />
      <path
        d="M86 86v24c0 28 79 28 79 0V86m-67 0v24c0 13 55 13 55 0V86"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M108 67v38m18-38v38m18-38v38m-42-38h12m6 0h12m6 0h12M70 74H55v15h15m51 43v15m-16 0h33"
        stroke={c.line}
      />
      <path d="M66 155h130" stroke={c.line} />
    </Scene>
  )
}
