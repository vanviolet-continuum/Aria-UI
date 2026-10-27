import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function AlarmSirenIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M93 126V80c0-50 74-50 74 0v46H93Z" fill={c.surface} />
      <path d="M102 83c0-30 22-39 39-30m-39 39v23" stroke={c.line} />
      <path d="M88 126h84v26H88v-26Z" fill={c.tint} />
      <path
        d="M99 138h62m-62 7h62M130 24V13m-41 24-8-8m90 8 8-8m-111 40H55m150 0h-13"
        stroke={c.line}
      />
      <path d="M118 116V88h24v28m-12-28V74" stroke={c.line} />
    </Scene>
  )
}
