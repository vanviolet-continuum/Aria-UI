import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function CameraLensIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M93 58h74v76c0 24-74 24-74 0V58Z" fill={c.surface} />
      <ellipse cx="130" cy="58" rx="37" ry="16" fill={c.tint} />
      <ellipse cx="130" cy="58" rx="26" ry="11" fill={c.surface} stroke={c.line} />
      <ellipse cx="130" cy="58" rx="15" ry="6" fill={c.tint} stroke={c.line} />
      <path
        d="M94 77c20 11 52 11 72 0m-72 13c20 11 52 11 72 0m-72 31c20 11 52 11 72 0m-72 11c20 11 52 11 72 0m-64-34v17m10-13v16m10-15v16m11-16v16m11-17v16m10-20v17"
        stroke={c.line}
      />
      <path d="M105 155h50" stroke={c.line} />
    </Scene>
  )
}
