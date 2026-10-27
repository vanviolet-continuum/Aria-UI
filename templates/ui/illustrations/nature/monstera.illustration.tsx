import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function MonsteraIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M130 132c-3-22-10-41-25-59m25 59c0-24 10-43 28-65" stroke={c.line} />
      <path
        d="M124 102c-31 0-59-19-45-41 8-13 23-11 30 2 3-17 18-17 25-6 10 17 1 36-10 45Z"
        fill={c.tint}
      />
      <path
        d="M139 89c-15-25-6-58 16-57 16 0 22 12 14 25 17-5 26 8 18 20-12 18-32 20-48 12Z"
        fill={c.tint}
      />
      <path d="M124 102 98 69m41 20 22-42" stroke={c.line} />
      <path
        d="m86 72 14 6m-12 7 21 6m20-22-9 12m43-42-1 14m18 5-17 7m10 9-18 2"
        stroke={c.surface}
        strokeWidth="3.5"
      />
      <path d="m105 128 6 29h39l6-29h-51Z" fill={c.surface} />
      <path d="M107 135h47m-37 7 2 9m23-9-2 9" stroke={c.line} />
    </StillLifeScene>
  )
}
