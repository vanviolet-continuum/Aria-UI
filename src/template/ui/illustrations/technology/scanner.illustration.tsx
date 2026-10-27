import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function ScannerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M66 95V37a7 7 0 0 1 7-7h115a7 7 0 0 1 7 7v58" fill={c.surface} />
      <path d="M77 42h107v42H77V42Z" fill={c.tint} stroke={c.line} />
      <path d="m66 96-12 37v18h152v-18l-11-37H66Z" fill={c.surface} />
      <path d="M54 133h152m-130-30h108l6 22H70l6-22Z" fill={c.tint} stroke={c.line} />
      <path d="m98 107 58-1 7 16-60 1-5-16Zm13 5h30m-28 6h36" stroke={c.line} />
      <circle cx="191" cy="143" r="2" fill={c.accent} stroke="none" />
      <path d="M66 143h18" stroke={c.line} />
    </Scene>
  )
}
