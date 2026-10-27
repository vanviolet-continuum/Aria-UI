import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function CoffeeGrinderIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <path d="M130 71V49h47" strokeWidth="2.5" />
      <ellipse cx="185" cy="49" rx="12" ry="6" fill={c.surface} />
      <circle cx="130" cy="49" r="3" fill={c.tint} stroke={c.line} />
      <path d="M83 73h94l-12 29H96L83 73Z" fill={c.tint} />
      <ellipse cx="130" cy="73" rx="47" ry="8" fill={c.surface} />
      <path d="M96 80h68" stroke={c.line} />
      <path d="M110 102h40v8h-40v-8Z" fill={c.surface} stroke={c.line} />
      <rect x="84" y="110" width="92" height="44" rx="5" fill={c.surface} />
      <rect x="96" y="121" width="68" height="23" rx="3" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="132" r="3" fill={c.surface} />
      <path d="M89 154v3m82-3v3m-78-41h74" stroke={c.line} />
    </StillLifeScene>
  )
}
