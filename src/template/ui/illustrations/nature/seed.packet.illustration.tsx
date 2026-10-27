import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function SeedPacketIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M80 31h97v124H80V31Z" fill={c.surface} />
      <path d="M80 43h97m-97 99h97m-88-104h80m-80 109h80" stroke={c.line} strokeDasharray="3 4" />
      <path d="M94 61h69v62H94V61Z" fill={c.tint} stroke={c.line} />
      <path
        d="M128 116V85m0 13c-18-1-23-13-19-20 13 1 21 9 19 20Zm0-8c1-18 14-25 24-20 0 13-9 20-24 20Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M108 132h40m-54-17h6" stroke={c.line} />
      <ellipse
        cx="195"
        cy="142"
        rx="5"
        ry="8"
        transform="rotate(25 195 142)"
        fill={c.tint}
        stroke={c.line}
      />
      <ellipse
        cx="207"
        cy="151"
        rx="5"
        ry="8"
        transform="rotate(-20 207 151)"
        fill={c.surface}
        stroke={c.line}
      />
    </Scene>
  )
}
