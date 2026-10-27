import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function YogaMatIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M76 72h104c21 0 28 27 11 36l-39 36H76V72Z" fill={c.surface} />
      <ellipse cx="76" cy="108" rx="24" ry="36" fill={c.tint} />
      <ellipse cx="76" cy="108" rx="15" ry="25" fill={c.surface} stroke={c.line} />
      <ellipse cx="76" cy="108" rx="6" ry="13" stroke={c.line} />
      <path d="M103 84h78m-76 13h83m-82 13h70m-75 13h60m-54 13h42m-84 17h108" stroke={c.line} />
    </Scene>
  )
}
