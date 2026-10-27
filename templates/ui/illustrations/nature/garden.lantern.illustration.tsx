import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GardenLanternIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M103 52V40a27 27 0 0 1 54 0v12" stroke={c.line} />
      <path d="M91 56h78l-11 15h-56L91 56Z" fill={c.tint} />
      <path d="M100 71h60v67h-60V71Z" fill={c.surface} />
      <path d="M108 72v65m44-65v65M94 138h72v15H94v-15Z" fill={c.tint} stroke={c.line} />
      <path d="M119 107h22v31h-22v-31Z" fill={c.tint} stroke={c.line} />
      <path d="M130 107v-8m0 0c-13-5-8-14 0-22 0 9 12 15 0 22Z" fill={c.tint} stroke={c.accent} />
      <path d="M111 146h38M86 45h88" stroke={c.line} />
    </Scene>
  )
}
