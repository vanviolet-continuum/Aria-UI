import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TulipIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M130 145V70m-24 72-9-52m56 53 12-51" stroke={c.line} />
      <path d="M112 42c8 1 13 5 18 12 5-7 10-11 18-12v18c0 25-36 25-36 0V42Z" fill={c.surface} />
      <path
        d="m130 54-1 19M83 68c6 1 10 5 14 10 4-5 8-9 14-10v14c0 20-28 20-28 0V68Zm67 1c6 1 10 5 14 10 4-5 8-9 14-10v14c0 20-28 20-28 0V69Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M130 129c-27-3-42-23-37-39 23 7 36 21 37 39Zm0 14c1-25 20-43 40-40-3 24-18 38-40 40Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M101 155h60" stroke={c.line} />
    </Scene>
  )
}
