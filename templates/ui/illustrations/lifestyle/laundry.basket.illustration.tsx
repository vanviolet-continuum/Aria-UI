import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function LaundryBasketIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="m78 69 9 86h86l9-86H78Z" fill={c.surface} />
      <ellipse cx="130" cy="69" rx="52" ry="9" fill={c.tint} />
      <path d="M92 67V46h63v21m-57-21V32h65v35" fill={c.surface} stroke={c.line} />
      <path d="M107 42h46m-48 14h40m-57 28h84" stroke={c.line} />
      {[0, 1, 2].map((row) => (
        <g key={row}>
          {[0, 1, 2, 3, 4].map((col) => (
            <rect
              key={col}
              x={92 + col * 15}
              y={92 + row * 18}
              width="9"
              height="10"
              rx="2"
              fill={c.tint}
              stroke={c.line}
            />
          ))}
        </g>
      ))}
      <path d="M106 145h48" stroke={c.line} />
    </Scene>
  )
}
