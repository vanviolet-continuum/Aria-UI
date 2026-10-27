import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TentPegIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <g transform="rotate(24 112 97)">
        <path d="M107 39h27v13h-14v94l-13 13V39Z" fill={c.surface} />
        <path d="M113 58v79" stroke={c.line} />
      </g>
      <g transform="rotate(-10 157 111)">
        <path d="M151 61h26v12h-14v75l-12 12V61Z" fill={c.tint} />
        <path d="M157 80v60" stroke={c.line} />
      </g>
      <path
        d="M91 45c-39-11-57 25-36 42 20 16 41-6 27-21m-1 0-2 12 12-3m-37 78h139"
        stroke={c.line}
      />
    </Scene>
  )
}
