import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CitrusJuicerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M77 99h104l-9 38c-7 19-79 19-86 0l-9-38Z" fill={c.surface} />
      <ellipse cx="129" cy="99" rx="52" ry="12" fill={c.tint} />
      <path d="M108 96c1-49 41-49 43 0-13 8-29 8-43 0Z" fill={c.surface} />
      <path d="M129 62v36m-10-30-4 28m24-28 5 28" stroke={c.line} />
      <path d="m176 94 18 6-17 8m-17 34h16" stroke={c.line} />
      <circle cx="70" cy="139" r="17" fill={c.tint} />
      <path d="M70 122v34m-17-17h34m-29-12 24 24m0-24-24 24" stroke={c.line} />
    </Scene>
  )
}
