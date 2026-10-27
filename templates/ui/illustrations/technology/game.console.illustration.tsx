import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GameConsoleIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m62 59 131-3 18 32H49l13-29Z" fill={c.tint} />
      <rect x="49" y="88" width="162" height="56" rx="7" fill={c.surface} />
      <path
        d="M64 103h88v10H64v-10Zm-1 27h99m-97 14v10m128-10v10M76 66h101m-91 8h99"
        stroke={c.line}
      />
      <circle cx="188" cy="111" r="10" fill={c.tint} />
      <path d="M188 104v8m-5-6c-6 5-2 13 5 13s11-8 5-13" stroke={c.line} />
      <circle cx="173" cy="132" r="2" fill={c.accent} stroke="none" />
    </Scene>
  )
}
