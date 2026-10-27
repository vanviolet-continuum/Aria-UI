import type { IllustrationProps } from '../shared/illustration.frame'
import { StillLifeScene, colors as c } from '../shared/still.life.scene'

export function ArmchairIllustration(props: IllustrationProps) {
  return (
    <StillLifeScene {...props}>
      <rect x="75" y="49" width="110" height="88" rx="22" fill={c.tint} />
      <rect x="87" y="63" width="86" height="55" rx="13" fill={c.surface} stroke={c.line} />
      <path d="M130 68v39" stroke={c.line} />
      <rect x="86" y="113" width="88" height="28" rx="9" fill={c.tint} stroke={c.line} />
      <rect x="58" y="80" width="28" height="63" rx="13" fill={c.surface} />
      <rect x="174" y="80" width="28" height="63" rx="13" fill={c.surface} />
      <path d="M67 102v23m126-23v23M75 143v12h9l4-12m84 0 4 12h9v-12" stroke={c.line} />
      <g transform="rotate(-8 113 88)">
        <rect x="96" y="74" width="34" height="28" rx="7" fill={c.tint} stroke={c.line} />
        <path d="M103 81h20m-20 14h20" stroke={c.line} />
      </g>
      <path d="M91 145h78" stroke={c.line} />
    </StillLifeScene>
  )
}
