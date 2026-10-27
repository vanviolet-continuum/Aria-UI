import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function WateringCanIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M76 98C40 66 35 136 74 132m2-23c-22-22-24 17-2 12" fill={c.tint} stroke={c.line} />
      <path d="m148 109 32-33 13 9-33 50-12-26Z" fill={c.tint} />
      <ellipse cx="190" cy="80" rx="9" ry="14" transform="rotate(-34 190 80)" fill={c.surface} />
      <path d="m186 75 6 9m-1-13 6 9" stroke={c.line} />
      <rect x="72" y="89" width="88" height="60" rx="13" fill={c.surface} />
      <path d="M81 83h70v10H81V83Z" fill={c.tint} />
      <path d="M89 83V70a27 27 0 0 1 54 0v13m-45 0V70a18 18 0 0 1 36 0v13" stroke={c.line} />
      <path d="M82 104v28m6 8h55" stroke={c.line} />
      <path d="M115 125c-6-13 3-22 12-20 2 10-4 17-12 20Z" fill={c.tint} stroke={c.line} />
    </StillLifeScene>
  )
}
