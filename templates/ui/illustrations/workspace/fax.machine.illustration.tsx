import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function FaxMachineIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M78 79h107l20 50v23H55v-23l23-50Z" fill={c.surface} />
      <path d="M100 79V31h71v48m-61-34h49m-49 11h32m-32 11h44" stroke={c.line} />
      <path d="M66 90h27l11 35H72L66 90Z" fill={c.tint} stroke={c.line} />
      <path d="M62 86c-17-8-22 34-10 45m2-6-3 6 5 4" stroke={c.line} />
      <path
        d="M107 92h69v14h-69V92Zm-9 48h70v12H98v-12m14-24h7m7 0h7m7 0h7m7 0h7m-49 10h7m7 0h7m7 0h7m7 0h7"
        stroke={c.line}
      />
      <circle cx="185" cy="140" r="3" fill={c.accent} stroke="none" />
    </Scene>
  )
}
