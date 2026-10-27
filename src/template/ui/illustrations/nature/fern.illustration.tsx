import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function FernIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <g fill={c.tint} stroke={c.line}>
        <path d="M134 53c-13-10-9-23 0-28 8 8 9 18 0 28Z" />
        <path d="M131 70c-18-1-26-12-22-23 15 4 23 12 22 23Z" />
        <path d="M132 79c2-19 14-29 27-25-4 16-14 24-27 25Z" />
        <path d="M130 88c-21 0-35-13-32-26 19 4 30 13 32 26Z" />
        <path d="M130 101c3-21 18-33 35-28-6 18-19 27-35 28Z" />
        <path d="M130 109c-25 0-41-13-38-29 22 4 36 14 38 29Z" />
        <path d="M129 124c5-19 20-28 36-21-7 14-19 21-36 21Z" />
      </g>
      <path
        d="M130 133c0-38-3-56 4-91m-4 65L99 88m32 9 26-17m-26-12-16-15m18 24 19-17"
        stroke={c.line}
      />
      <path d="m107 130 6 27h34l6-27h-46Z" fill={c.surface} />
      <path d="M109 137h42m-30 7v7m18-7v7" stroke={c.line} />
    </StillLifeScene>
  )
}
