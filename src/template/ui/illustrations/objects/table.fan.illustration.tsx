import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function TableFanIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M122 110h16l6 37h-28l6-37Z" fill={c.tint} stroke={c.line} />
      <rect x="96" y="147" width="68" height="10" rx="5" fill={c.surface} />
      <circle cx="130" cy="69" r="43" fill={c.surface} />
      <path d="M130 27v84M88 69h84" stroke={c.line} />
      <g fill={c.tint} stroke={c.line}>
        <path d="M130 69c-25 10-35-12-20-21 16-8 25 8 20 21Z" />
        <path d="M130 69c-25 10-35-12-20-21 16-8 25 8 20 21Z" transform="rotate(120 130 69)" />
        <path d="M130 69c-25 10-35-12-20-21 16-8 25 8 20 21Z" transform="rotate(240 130 69)" />
      </g>
      <circle cx="130" cy="69" r="35" stroke={c.line} />
      <circle cx="130" cy="69" r="7" fill={c.surface} />
      <path d="M130 116v20m-9 16h18" stroke={c.line} />
      <circle cx="152" cy="152" r="1.5" fill={c.accent} stroke="none" />
    </StillLifeScene>
  )
}
