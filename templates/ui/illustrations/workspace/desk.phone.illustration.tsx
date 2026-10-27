import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function DeskPhoneIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M77 69h103l22 66v18H58v-18l19-66Z" fill={c.surface} />
      <path
        d="M92 44c22-10 53-10 76 0 14 7 13 27-2 29l-13-15c-15-4-30-4-45 0L94 73c-15-2-16-22-2-29Z"
        fill={c.tint}
      />
      <path d="M104 82h53v18h-53V82Z" fill={c.tint} stroke={c.line} />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          {[0, 1, 2].map((col) => (
            <rect
              key={col}
              x={105 + col * 19}
              y={108 + row * 12}
              width="12"
              height="7"
              rx="2"
              fill={c.surface}
              stroke={c.line}
            />
          ))}
        </g>
      ))}
      <path d="M58 134c-34-10-28-58 8-55m1 0 4 5-4 5m-2 5 5 5-4 5M70 147h118" stroke={c.line} />
    </Scene>
  )
}
