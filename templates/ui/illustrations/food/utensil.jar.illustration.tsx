import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function UtensilJarIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="m106 103-14-45m0 0c-24-28 2-45 10-10 1 7-2 10-10 10m39 45V39m-9 0h18V25h-18v14m7-14v14m27 64 10-51m-8 1 17 3 4-23-17-3-4 23Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M91 96h78l-6 52c-1 12-65 12-66 0l-6-52Z" fill={c.surface} />
      <ellipse cx="130" cy="96" rx="39" ry="6" fill={c.tint} stroke={c.line} />
      <path d="M108 109v30m15-30v35m15-35v35m15-35v30" stroke={c.line} />
    </Scene>
  )
}
