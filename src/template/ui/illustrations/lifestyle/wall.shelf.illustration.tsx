import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function WallShelfIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M65 79h12v45H65V79Zm16 6h12v39H81V85Z" fill={c.surface} />
      <path d="M66 91h10m6 30h10" stroke={c.line} />
      <g transform="rotate(-8 101 106)">
        <rect x="95" y="79" width="13" height="45" rx="2" fill={c.tint} stroke={c.line} />
        <path d="M96 87h11m-11 29h11" stroke={c.line} />
      </g>
      <path
        d="M129 103V74m0 16c-17 0-22-12-18-20 13 1 20 10 18 20Zm0-9c1-18 13-26 24-21 0 13-10 21-24 21Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="m114 102 4 22h22l4-22h-30Z" fill={c.surface} />
      <rect x="162" y="70" width="37" height="54" rx="3" fill={c.surface} />
      <path d="M168 77h25v39h-25V77Z" fill={c.tint} stroke={c.line} />
      <path d="m168 110 10-13 7 7 8-9" stroke={c.line} />
      <circle cx="184" cy="86" r="3" fill={c.accent} stroke="none" />
      <rect x="47" y="124" width="166" height="9" rx="2" fill={c.tint} />
      <path d="M66 134v12h14m100-12v12h14" stroke={c.line} />
    </StillLifeScene>
  )
}
