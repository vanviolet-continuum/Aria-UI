import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function TramIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path d="M58 67h130c14 0 22 10 22 23v50H49V77a9 9 0 0 1 9-10Z" fill={c.surface} />
      <path
        d="M57 78h26v31H57V78Zm34 0h26v31H91V78Zm34 0h26v31h-26V78Zm34 0h27v62h-27V78Zm36 5h13v26h-13V83Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path
        d="M50 117h108m-108 10h108m16-48v60m-68-73 15-24 20 24m-20-24 17-16m-30 0h60"
        stroke={c.line}
      />
      <circle cx="78" cy="142" r="10" fill={c.surface} />
      <circle cx="179" cy="142" r="10" fill={c.surface} />
      <path d="M44 156h173" stroke={c.line} />
    </Scene>
  )
}
