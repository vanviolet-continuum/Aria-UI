import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function GardenBenchIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M65 61h130v15H65V61Zm0 22h130v15H65V83Z" fill={c.surface} />
      <path d="M71 48v61m118-61v61" stroke={c.line} />
      <path d="m64 110-9 16h150l-9-16H64Zm-9 16v8h150v-8M68 134v23m124-23v23" fill={c.tint} />
      <path
        d="M65 118h130m-119 16v15m108-15v15M51 99h27m104 0h27m-145 0v11m132-11v11"
        stroke={c.line}
      />
      <path d="M46 157h168m-127-88h27m35 22h28" stroke={c.line} />
    </Scene>
  )
}
