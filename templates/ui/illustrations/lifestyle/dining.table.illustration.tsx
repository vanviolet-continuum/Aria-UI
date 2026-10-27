import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DiningTableIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M83 91v62h11V95m72-4v62h-11V95m-48 1v41m44-41v41" fill={c.surface} stroke={c.line} />
      <path d="M64 76h132v16c0 22-132 22-132 0V76Z" fill={c.tint} />
      <ellipse cx="130" cy="76" rx="66" ry="20" fill={c.surface} />
      <path d="M82 76c24-12 71-12 96 0m-80 8h64m-86 72h108" stroke={c.line} />
    </Scene>
  )
}
