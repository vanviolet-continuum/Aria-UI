import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function OliveBranchIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M96 155c8-47 28-88 60-125" stroke={c.line} />
      <path
        d="M111 110c-27 4-39-12-34-26 20 2 31 13 34 26Zm12-28c-3-26 12-39 26-33-2 19-11 30-26 33Zm13-26c-17 1-25-11-20-20 13 2 20 9 20 20Zm-13 42c2-24 20-35 33-27-6 18-17 26-33 27Zm-20 35c-25-2-34-20-25-31 18 6 26 16 25 31Zm11-14c10-22 29-25 39-14-11 14-24 19-39 14Z"
        fill={c.tint}
        stroke={c.line}
      />
      <ellipse cx="126" cy="121" rx="6" ry="9" transform="rotate(35 126 121)" fill={c.surface} />
      <ellipse cx="115" cy="92" rx="6" ry="9" transform="rotate(-20 115 92)" fill={c.surface} />
      <path d="M82 157h74" stroke={c.line} />
    </Scene>
  )
}
