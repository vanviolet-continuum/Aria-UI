import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene as Scene, colors as c } from '../shared/still.life.scene'

export function StandMixerIllustration(props: IllustrationProps) {
  return (
    <Scene {...props}>
      <path
        d="M90 57c0-18 17-29 33-22h42c13 0 24 11 24 24v77h-26V72h-58c-9 0-15-6-15-15Z"
        fill={c.surface}
      />
      <path d="M164 51v21m-58-27h30" stroke={c.line} />
      <circle cx="178" cy="84" r="6" fill={c.tint} stroke={c.line} />
      <path d="M112 72v14m-9 0h18l-3 28h-12l-3-28Zm6 0v28m6-28v28" stroke={c.line} />
      <path d="M74 111h76c-1 26-14 34-38 34s-37-8-38-34Z" fill={c.tint} />
      <ellipse cx="112" cy="111" rx="38" ry="6" fill={c.surface} stroke={c.line} />
      <path d="M76 145h111v10H76v-10Z" fill={c.surface} />
      <path d="M84 150h92" stroke={c.line} />
    </Scene>
  )
}
