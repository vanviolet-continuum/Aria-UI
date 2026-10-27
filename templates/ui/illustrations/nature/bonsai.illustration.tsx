import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function BonsaiIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path
        d="M118 132c17-19 0-36 13-56l-17-15 7-7 22 18c-11 25 4 42-10 60h-15Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m133 99 32-22m-37 27-29-21" stroke={c.line} strokeWidth="3" />
      <path d="M98 53c-3-23 24-32 38-22 19-13 43 1 37 23-18 11-52 13-75-1Z" fill={c.tint} />
      <path
        d="M56 84c0-19 18-27 31-20 17-11 39 2 34 20-18 9-47 9-65 0Zm93-2c-2-17 17-26 30-18 16-9 35 3 29 20-17 8-42 8-59-2Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M111 48c7-6 15-7 23-3m-62 31c7-5 15-5 22-2m70 0c7-4 15-4 22-1" stroke={c.line} />
      <ellipse cx="130" cy="132" rx="48" ry="7" fill={c.surface} stroke={c.line} />
      <path d="m83 132 9 23h76l9-23c-24 8-70 8-94 0Z" fill={c.surface} />
      <path d="M99 145h62m-62 10v3m62-3v3" stroke={c.line} />
    </StillLifeScene>
  )
}
