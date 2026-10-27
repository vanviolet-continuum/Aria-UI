import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function WindChimeIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M130 23v20m-43 1h86m-81 0 38-17 38 17M96 44v27m23-27v39m23-39v28m22-28v40"
        stroke={c.line}
      />
      <path
        d="M91 71h10v62H91V71Zm23 12h10v69h-10V83Zm23-11h10v68h-10V72Zm22 12h10v50h-10V84Z"
        fill={c.surface}
      />
      <path d="M95 77v48m23-36v55m23-66v54m22-42v36m-65 20 4 6m61-9-4 6" stroke={c.line} />
      <path d="M77 81c-9 16-9 34 0 50m105-42c7 12 7 23 0 36" stroke={c.line} />
    </Scene>
  )
}
