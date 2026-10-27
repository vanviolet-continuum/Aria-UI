import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function AirportTerminalIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M49 92h133v58H49V92Z" fill={c.surface} />
      <path d="m44 92 19-23h101l24 23H44Z" fill={c.tint} />
      <path d="M60 103h109v34H60v-34Zm22 0v34m21-34v34m22-34v34m22-34v34" stroke={c.line} />
      <path
        d="M181 70h19v80h-19V70Zm-10-27h39v27h-39V43Zm-4 0 9-14h29l10 14h-48Z"
        fill={c.surface}
      />
      <path
        d="M183 44v26m15-26v26M96 53h45m-24 0-10-14m10 14-10 10m24-10 7-7M41 153h179"
        stroke={c.line}
      />
    </Scene>
  )
}
