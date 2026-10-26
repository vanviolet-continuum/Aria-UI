import type { IllustrationProps } from '../frame'
import {
  CollectionScene as EducationScene,
  sceneColors as c,
} from '../collections/collection-scene'
import { StudyPencil } from './education-parts'

export function PencilCaseIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <StudyPencil x={94} y={36} angle={-17} scale={0.8} />
      <StudyPencil x={137} y={26} angle={15} scale={0.85} />
      <path d="m161 89 11-43 10 3-10 43" fill={c.tint} stroke={c.line} />
      <rect x="54" y="85" width="151" height="66" rx="19" fill={c.surface} />
      <path d="M55 103h149m-132 0h112" stroke={c.line} strokeDasharray="3 4" />
      <rect x="166" y="99" width="14" height="7" rx="3" fill={c.tint} />
      <path d="M175 107v8m-94 10h44m-44 9h25" stroke={c.line} />
      <path d="m189 85 13 16m-138 51h127" stroke={c.line} />
    </EducationScene>
  )
}

export function StationerySetIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M52 153h158" stroke={c.line} />
      <StudyPencil x={77} y={39} angle={-12} />
      <StudyPencil x={105} y={33} angle={5} />
      <path
        d="M125 104V53h16v51m-10-42h10m-6 10h6m-10 10h10m-6 10h6"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M70 99h78l-7 54H77l-7-54Z" fill={c.tint} />
      <path d="m83 108 3 35m12-35 1 35m13-35-1 35m13-35-3 35" stroke={c.line} />
      <rect
        x="160"
        y="109"
        width="43"
        height="28"
        rx="5"
        fill={c.surface}
        transform="rotate(12 181 123)"
      />
      <path d="m180 109-5 26m-13 10h39" stroke={c.line} />
      <path d="M177 64v-8m-4 4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function SchoolScissorsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="m121 95-40-54c-10 15-3 35 28 65l12-11Zm13 0 38-54c11 15 4 35-26 65l-12-11Z"
        fill={c.surface}
      />
      <circle cx="128" cy="106" r="8" fill={c.tint} />
      <path d="m121 111-17 22m31-22 17 22" strokeWidth="5" stroke={c.line} />
      <ellipse cx="91" cy="139" rx="19" ry="14" fill={c.tint} transform="rotate(-25 91 139)" />
      <ellipse cx="165" cy="139" rx="19" ry="14" fill={c.tint} transform="rotate(25 165 139)" />
      <ellipse cx="91" cy="139" rx="10" ry="6" stroke={c.line} transform="rotate(-25 91 139)" />
      <ellipse cx="165" cy="139" rx="10" ry="6" stroke={c.line} transform="rotate(25 165 139)" />
      <path d="M48 101h39m70-12h47m-69-37h30" stroke={c.line} strokeDasharray="3 5" />
      <path d="M64 64v9m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function GeometrySetIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M57 142V53l89 89H57Z" fill={c.surface} />
      <path d="M74 124V91l33 33H74Z" fill={c.tint} stroke={c.line} />
      <path d="M58 73h9m-9 15h6m-6 15h9m-9 15h6m15 15v9m16-6v6m16-9v9" stroke={c.line} />
      <path d="M156 53v-22m-7 0h14m-7 22-26 95m26-95 38 88" />
      <circle cx="156" cy="58" r="7" fill={c.tint} />
      <path d="m131 148-2 9m65-16 3 10m-48-47h29m-16-6v12" stroke={c.line} />
      <path d="M61 46a44 44 0 0 1 85 1H61Z" fill={c.tint} stroke={c.line} />
      <path d="M103 26v9m-24 1 6 5m42-5-6 5" stroke={c.line} />
    </EducationScene>
  )
}

export function SchoolRulerIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <g transform="rotate(-24 130 92)">
        <rect x="49" y="69" width="161" height="43" rx="5" fill={c.surface} />
        <path
          d="M62 70v17m12-17v10m12-10v17m12-17v10m12-10v17m12-17v10m12-10v17m12-17v10m12-10v17m12-17v10m12-10v17m12-17v10"
          stroke={c.line}
        />
        <circle cx="62" cy="99" r="3" stroke={c.line} />
        <path d="M86 101h16m13 0h16m13 0h16m13 0h16" stroke={c.line} />
      </g>
      <path
        d="M58 141h100m-100-6v12m100-12v12m-92-6 6-4m-6 4 6 4m78-4-6-4m6 4-6 4"
        stroke={c.accent}
      />
      <StudyPencil x={177} y={92} angle={25} scale={0.8} />
      <path d="M64 50h25m-13-9v18" stroke={c.line} />
    </EducationScene>
  )
}

export function AbacusIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M62 44h136v105H62V44Z" fill={c.surface} />
      <path d="M72 55h116v83H72V55Z" fill={c.tint} stroke={c.line} />
      <path d="M72 72h116M72 94h116M72 116h116" stroke={c.line} />
      <g fill={c.surface}>
        <ellipse cx="87" cy="72" rx="7" ry="10" />
        <ellipse cx="104" cy="72" rx="7" ry="10" />
        <ellipse cx="121" cy="72" rx="7" ry="10" />
        <ellipse cx="170" cy="72" rx="7" ry="10" />
        <ellipse cx="87" cy="94" rx="7" ry="10" />
        <ellipse cx="136" cy="94" rx="7" ry="10" />
        <ellipse cx="153" cy="94" rx="7" ry="10" />
        <ellipse cx="170" cy="94" rx="7" ry="10" />
        <ellipse cx="87" cy="116" rx="7" ry="10" />
        <ellipse cx="104" cy="116" rx="7" ry="10" />
        <ellipse cx="153" cy="116" rx="7" ry="10" />
        <ellipse cx="170" cy="116" rx="7" ry="10" />
      </g>
      <path d="M55 156h150m-125-7-5 7m105-7 5 7m-59-125v8m-4-4h8" stroke={c.line} />
    </EducationScene>
  )
}

export function CrayonsIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path
        d="M73 105V48l8-17 8 17v57m14 0V43l8-17 8 17v62m14 0V50l8-17 8 17v55m14 0V55l8-17 8 17v50"
        fill={c.surface}
      />
      <path
        d="M73 61h16m14-6h16m14 8h16m14 4h16M73 89h16m14-6h16m14 8h16m14 4h16"
        stroke={c.line}
      />
      <path d="m65 101 9 54h109l10-54H65Z" fill={c.tint} />
      <path d="M77 113h103m-99 30h94" stroke={c.line} />
      <path
        d="M110 135c-13-8-12-15-5-17 6-2 10 5 10 5s5-7 10-5c9 4 2 11-15 17Z"
        fill={c.surface}
        stroke={c.accent}
      />
      <path d="M49 79v10m-5-5h10m156 33h12" stroke={c.line} />
    </EducationScene>
  )
}

export function HighlighterIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M54 42h113v111H54V42Z" fill={c.surface} />
      <path d="M69 58h76m-76 13h60m-60 29h76m-76 13h50m-50 23h76" stroke={c.line} />
      <path
        d="M69 82h73v8H69v-8Zm0 39h52v8H69v-8Z"
        fill={c.accent}
        fillOpacity=".3"
        stroke="none"
      />
      <g transform="rotate(24 181 100)">
        <rect x="169" y="50" width="25" height="75" rx="5" fill={c.tint} />
        <path
          d="M174 125v17h15v-17m-15 17 15-7m-20-73h25m-25 13h25"
          fill={c.surface}
          stroke={c.line}
        />
        <path d="M173 50V35h17v15" fill={c.surface} />
      </g>
      <path d="M190 153h22m-167-44h-8" stroke={c.line} />
    </EducationScene>
  )
}

export function GlueStickIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="m64 73 66-15 27 79-66 15-27-79Z" fill={c.surface} stroke={c.line} />
      <path d="m82 91 30-8 8 30-30 8-8-30Z" fill={c.tint} stroke={c.line} />
      <rect x="146" y="69" width="38" height="84" rx="5" fill={c.surface} />
      <path d="M150 69V47c0-9 30-9 30 0v22" fill={c.tint} stroke={c.line} />
      <ellipse cx="165" cy="47" rx="15" ry="5" fill={c.surface} stroke={c.line} />
      <path d="M147 86h36m-36 44h36m-36 12h36m-29-8v7m8-7v7m8-7v7m8-7v7" stroke={c.line} />
      <path d="m162 101-6 11h10l-4 9 12-15h-10l3-5" fill={c.tint} stroke={c.accent} />
      <path
        d="M106 39h25v17h-25V39Z"
        fill={c.tint}
        transform="rotate(-10 118 47)"
        stroke={c.line}
      />
      <path d="M54 132v9m-4-4h8" stroke={c.accent} />
    </EducationScene>
  )
}

export function SchoolBinderIllustration(props: IllustrationProps) {
  return (
    <EducationScene {...props}>
      <path d="M77 34h105v120H77V34Z" fill={c.surface} />
      <path d="M77 34H62v120h15V34Z" fill={c.tint} />
      <path d="M88 45h82v98H88V45Z" stroke={c.line} />
      <path d="M182 54h12v19h-12m0 10h12v19h-12m0 10h12v19h-12" fill={c.tint} stroke={c.line} />
      <path
        d="M86 59c-17-6-23 2-15 10m15 17c-17-6-23 2-15 10m15 17c-17-6-23 2-15 10m31-64h51m-51 12h37m-37 23h51m-51 12h38m-38 23h51"
        stroke={c.line}
      />
      <StudyPencil x={205} y={77} angle={17} scale={0.9} />
      <path d="M47 152h144" stroke={c.line} />
    </EducationScene>
  )
}
