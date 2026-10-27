import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SheetMusicStandIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M68 38h124l8 73H61l7-73Z" fill={c.surface} />
      <path d="M78 50h104m-104 10h104m-104 10h104m-104 10h104m-104 10h104" stroke={c.line} />
      <path d="M101 79V55l18-4v22m23 7V56l17 5" stroke={c.accent} />
      <ellipse cx="96" cy="82" rx="5" ry="3" fill={c.tint} />
      <ellipse cx="114" cy="76" rx="5" ry="3" fill={c.tint} />
      <ellipse cx="137" cy="83" rx="5" ry="3" fill={c.tint} />
      <path d="M130 112v35m-25 10 25-13 25 13m-25-13v13M58 112h144" stroke={c.line} />
    </Scene>
  )
}
