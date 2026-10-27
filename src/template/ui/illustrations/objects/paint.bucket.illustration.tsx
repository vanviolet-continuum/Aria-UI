import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function PaintBucketIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M82 73c-12-63 108-63 96 0" stroke={c.line} />
      <path d="M83 72h94l-7 72c-2 17-78 17-80 0l-7-72Z" fill={c.surface} />
      <ellipse cx="130" cy="72" rx="47" ry="10" fill={c.tint} />
      <path
        d="M105 74v21c0 10 10 10 10 0V81h10v36c0 11 12 11 12 0V81h17v10c0 11 10 11 10 0V77"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M96 136h68m-63 9h58m-29-46h-1" stroke={c.line} />
    </Scene>
  )
}
