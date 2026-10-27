import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SnowGlobeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <circle cx="130" cy="82" r="52" fill={c.surface} />
      <path d="M86 110c24-16 62-16 88 0" fill={c.tint} stroke={c.line} />
      <path d="M110 82h30v28h-30V82Zm-6 0 21-19 21 19h-42Z" fill={c.tint} stroke={c.line} />
      <path d="M120 110V94h10v16m22-7 12-21 12 21h-24Zm12 0v10" stroke={c.line} />
      <circle cx="106" cy="58" r="2" fill={c.accent} stroke="none" />
      <circle cx="148" cy="52" r="2" fill={c.accent} stroke="none" />
      <circle cx="159" cy="72" r="2" fill={c.accent} stroke="none" />
      <path d="M91 122h78l10 31H81l10-31Z" fill={c.surface} />
      <path d="M86 143h88m-69-11h50" stroke={c.line} />
    </Scene>
  )
}
