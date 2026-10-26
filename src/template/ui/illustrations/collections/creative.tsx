import type { IllustrationProps } from '../frame'
import { CollectionScene, sceneColors as c } from './collection-scene'

export function ArtStudioIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m106 24-26 133m62-133 26 133m-50-23-3 23m-33-33h79" stroke={c.line} />
      <rect x="81" y="42" width="86" height="83" rx="3" fill={c.surface} />
      <path d="m93 110 17-28 18 13 13-20 14 35H93Z" fill={c.tint} stroke={c.line} />
      <circle cx="109" cy="63" r="8" fill={c.tint} stroke={c.accent} />
      <path d="M177 113c-23-6-34 16-21 28 10 10 19-4 28 3 20 14 41-29-7-31Z" fill={c.surface} />
      <circle cx="166" cy="127" r="4" fill={c.tint} stroke={c.accent} />
      <circle cx="182" cy="122" r="4" fill={c.tint} stroke={c.line} />
      <circle cx="194" cy="132" r="4" fill={c.tint} stroke={c.accent} />
      <path d="m54 146 9-40 7 2-9 40m2-42c-5-4-5-14 4-18 0 6 8 12 3 20" fill={c.tint} />
      <path d="M47 157h160" stroke={c.line} />
    </CollectionScene>
  )
}

export function MusicIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m119 88 36-52 12 8-36 52c16 11 13 24 1 31-3 18-27 32-46 18s-16-37-1-45c4-14 20-21 34-12Z"
        fill={c.surface}
      />
      <path d="m95 118 64-78m-60 80 64-78m-65 82 67-81" stroke={c.line} />
      <circle cx="106" cy="112" r="12" fill={c.tint} />
      <path d="m90 131 16 11m44-110 9-12 14 11-9 13-14-12Z" fill={c.tint} />
      <path d="M65 67V43l23-5v24m-23-12 23-5" stroke={c.accent} />
      <ellipse cx="59" cy="70" rx="6" ry="4" fill={c.tint} />
      <ellipse cx="82" cy="65" rx="6" ry="4" fill={c.tint} />
      <path d="M183 98V72l17 5" stroke={c.accent} />
      <ellipse cx="177" cy="101" rx="6" ry="4" fill={c.tint} />
      <path d="M151 150h45" stroke={c.line} />
    </CollectionScene>
  )
}

export function PhotographyStudioIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M91 42h93v95H91V42Z" fill={c.tint} stroke={c.line} />
      <path d="M91 136c10-7 21-9 32-3 16 8 41-1 61 3m-101 9h109m-55-9v13" stroke={c.line} />
      <path d="m45 56 25-14 19 30-25 15-19-31Z" fill={c.surface} />
      <path d="M64 87v65m-15 5 15-14 15 14m-24-96 24 17" stroke={c.line} />
      <path d="M104 81h56v31h-56V81Zm9 0v-8h24v8" fill={c.surface} />
      <circle cx="135" cy="96" r="11" fill={c.tint} />
      <circle cx="135" cy="96" r="5" stroke={c.line} />
      <path d="m129 112-17 44m23-44 16 44m-19-44v44" stroke={c.line} />
      <path
        d="m193 77 18-9 8 22-18 9-8-22Zm13 20v55m-13 5 13-12 13 12"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M99 35h77" stroke={c.line} />
    </CollectionScene>
  )
}

export function VideoEditingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="51" y="34" width="158" height="113" rx="7" fill={c.surface} />
      <path d="M51 51h158m-158 62h158m-107 0v34m-39-26h28m-28 10h17" stroke={c.line} />
      <rect x="64" y="62" width="130" height="42" rx="3" fill={c.tint} />
      <path d="m123 72 17 11-17 11V72Z" fill={c.surface} />
      <rect x="110" y="120" width="32" height="9" rx="2" fill={c.tint} stroke={c.line} />
      <rect x="146" y="120" width="47" height="9" rx="2" fill={c.tint} stroke={c.accent} />
      <path d="M111 138h19m6 0h31m5 0h21M150 113v32" stroke={c.accent} />
      <path d="m61 42 3 0m7 0h3m7 0h3m101 113h33v6h-33v-6Z" stroke={c.line} />
      <path d="M105 157h51m-44-10v10m37-10v10" />
    </CollectionScene>
  )
}

export function DesignToolsIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M62 113c7-86 128-85 136 0" stroke={c.accent} strokeWidth="3" />
      <path d="M62 113V54m136 59V54M62 54h136" stroke={c.line} />
      <g fill={c.surface}>
        <rect x="57" y="49" width="10" height="10" />
        <rect x="125" y="49" width="10" height="10" />
        <rect x="193" y="49" width="10" height="10" />
        <circle cx="62" cy="113" r="5" />
        <circle cx="198" cy="113" r="5" />
      </g>
      <path d="m112 118 18-38 18 38-8 20h-20l-8-20Z" fill={c.surface} />
      <path d="M130 80v30m-10 28h20v16h-20v-16Z" fill={c.tint} />
      <circle cx="130" cy="114" r="4" fill={c.tint} />
      <path
        d="m75 134 13-7 16 29H75v-22Zm14 5-5 3 9 10m68-21 7-4 16 29h-9l-14-25Z"
        fill={c.tint}
        stroke={c.line}
      />
    </CollectionScene>
  )
}

export function ColorPaletteIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <g transform="rotate(-32 96 136)">
        <rect x="77" y="32" width="38" height="121" rx="5" fill={c.surface} />
        <path d="M82 39h28v25H82V39Z" fill={c.tint} stroke={c.line} />
        <path d="M82 70h28v25H82V70Z" fill={c.accent} fillOpacity=".25" stroke={c.line} />
        <path d="M82 101h28v24H82v-24Z" fill={c.accent} fillOpacity=".5" stroke={c.line} />
      </g>
      <g transform="rotate(-8 96 136)">
        <rect x="77" y="32" width="38" height="121" rx="5" fill={c.surface} />
        <path d="M82 39h28v25H82V39Z" fill={c.tint} stroke={c.line} />
        <path d="M82 70h28v25H82V70Z" fill={c.accent} fillOpacity=".25" stroke={c.line} />
        <path d="M82 101h28v24H82v-24Z" fill={c.accent} fillOpacity=".5" stroke={c.line} />
      </g>
      <g transform="rotate(18 96 136)">
        <rect x="77" y="32" width="38" height="121" rx="5" fill={c.surface} />
        <path d="M82 39h28v25H82V39Z" fill={c.tint} stroke={c.line} />
        <path d="M82 70h28v25H82V70Z" fill={c.accent} fillOpacity=".25" stroke={c.line} />
        <path d="M82 101h28v24H82v-24Z" fill={c.accent} fillOpacity=".5" stroke={c.line} />
        <circle cx="96" cy="137" r="4" fill={c.tint} />
      </g>
      <circle cx="182" cy="95" r="28" fill={c.surface} stroke={c.line} />
      <path d="M182 67v28h28m-28 0-24 14" fill={c.tint} stroke={c.line} />
      <path d="M170 139h28m-23 9h18" stroke={c.line} />
    </CollectionScene>
  )
}

export function PodcastIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="109" y="26" width="42" height="79" rx="21" fill={c.surface} />
      <path d="M118 40h24m-26 11h28m-28 11h28m-28 11h28m-26 11h24" stroke={c.line} />
      <path d="M96 80v10a34 34 0 0 0 68 0V80m-34 44v30m-22 0h44" strokeWidth="3" />
      <path
        d="M74 56c-9 14-9 34 0 48m-10-56c-12 18-12 45 0 64m122-56c9 14 9 34 0 48m10-56c12 18 12 45 0 64"
        stroke={c.line}
      />
      <path
        d="M67 136v7m8-14v21m8-17v13m93-10v7m8-14v21m8-17v13"
        stroke={c.accent}
        strokeWidth="3"
      />
    </CollectionScene>
  )
}

export function WritingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M65 42h108v106H65V42Z" fill={c.tint} transform="rotate(-6 119 95)" stroke={c.line} />
      <path d="M76 32h105v119H76V32Z" fill={c.surface} />
      <path d="M91 55h54m-54 13h40m-40 13h69m-69 13h60m-60 13h39m-39 21h69" stroke={c.line} />
      <path d="m141 111 9-28 41-52 12 10-41 52-21 18Z" fill={c.tint} />
      <path d="m150 83 12 10m-3-20 12 10m-25 16 5 4m40-72 5-6 12 10-5 6" stroke={c.line} />
      <path d="M184 131h25v22h-25v-22Zm5 0v-8h15v8" fill={c.surface} />
      <path d="M190 141h13m-146-13h-9m13 14H48" stroke={c.line} />
    </CollectionScene>
  )
}

export function SculptureIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M87 123h86v12H87v-12Zm8 12h70v21H95v-21Z" fill={c.surface} />
      <path d="M102 135v21m56-21v21" stroke={c.line} />
      <path
        d="M97 119V98c0-7 10-12 21-15V72c-16-9-14-38-1-44 19-13 42 1 40 20l-3 23-12 7v7c12 2 23 7 23 15v19H97Z"
        fill={c.tint}
      />
      <path
        d="m118 83 13 19 11-17m-32 2 11 25m34-20-16 24m-21-44 13 7 11-1m-28-35 11-7 12 5 17-2"
        stroke={c.line}
      />
      <path d="m142 51 7 8-7 3m-5 8h7" stroke={c.line} />
      <path
        d="m64 119-8-14 8-22 8 22-8 14Zm0 0v35m-7 0h14m114-69v69m-7-69h14V71h-14v14Z"
        fill={c.surface}
        stroke={c.line}
      />
    </CollectionScene>
  )
}

export function TheaterIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M49 39h163v113H49V39Z" fill={c.surface} stroke={c.line} />
      <path
        d="M49 39c2 42 9 58 33 71l-10 42H49V39Zm163 0c-2 42-9 58-33 71l10 42h23V39Z"
        fill={c.tint}
      />
      <path d="M48 31h165v13H48V31Z" fill={c.surface} />
      <path d="M57 48v89m9-89c0 27 2 42 10 53m128-53v89m-9-89c0 27-2 42-10 53" stroke={c.line} />
      <path d="M86 64c18 8 37 8 54 0v31c-3 25-42 25-54 0V64Z" fill={c.surface} />
      <path d="M97 82h6m17 0h6m-26 14c8 8 18 8 26 0" stroke={c.line} />
      <path d="M126 84c17 7 34 7 50 0v28c-3 23-39 23-50 0V84Z" fill={c.tint} />
      <path d="M136 101h6m15 0h6m-26 17c7-8 16-8 24 0M44 154h174" stroke={c.line} />
    </CollectionScene>
  )
}
