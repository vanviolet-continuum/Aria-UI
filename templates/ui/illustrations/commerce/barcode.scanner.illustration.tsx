import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function BarcodeScannerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(-18 114 95)">
        <path d="M99 78h25v66c0 15-25 15-25 0V78Z" fill={c.tint} />
        <path d="M82 42h72v45H82V42Z" fill={c.surface} />
        <path d="M139 48h15v32h-15V48Z" fill={c.tint} stroke={c.line} />
        <path d="M94 54h32m-32 11h22m-10 35h11m-11 11h11m-11 11h11" stroke={c.line} />
      </g>
      <path d="M180 78h31v65h-31V78Z" fill={c.surface} stroke={c.line} />
      <path d="M187 88v45m7-45v45m9-45v45m-47-42 17 7m-19 6 19 3m-18 10h18" stroke={c.line} />
    </Scene>
  )
}
