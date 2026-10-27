import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function JamJarIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M91 66h78v79c0 15-78 15-78 0V66Z" fill={c.surface} />
      <path d="M94 99c23-6 48 6 72 0v45c0 9-72 9-72 0V99Z" fill={c.tint} stroke="none" />
      <path d="M90 44h80l10 30-16-6-10 9-12-9-12 9-12-9-12 9-10-9-16 6 10-30Z" fill={c.surface} />
      <path
        d="M102 45v24m17-24v26m21-26v26m18-26v24M87 56h86m-80 10h74M102 93h56v43h-56V93Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="123" cy="118" r="8" fill={c.surface} stroke={c.line} />
      <circle cx="139" cy="118" r="8" fill={c.surface} stroke={c.line} />
      <path d="M131 114v-9m-5 2 5-2 6 2m-25 40h35" stroke={c.line} />
    </Scene>
  )
}
