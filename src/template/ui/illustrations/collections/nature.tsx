import type { IllustrationProps } from '../frame'
import { CollectionScene, SceneCloud, sceneColors as c } from './collection-scene'

export function MountainIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="177" cy="49" r="18" fill={c.tint} stroke={c.line} />
      <path d="m40 150 58-92 58 92H40Z" fill={c.tint} stroke={c.line} />
      <path d="m91 150 66-117 66 117H91Z" fill={c.surface} />
      <path d="m137 68 12 7 8-11 10 13 12-5-22-39-20 35Z" fill={c.tint} />
      <path d="m157 64-13 49 17-10-4 47" stroke={c.line} />
      <path d="m78 90 20-32 20 32-13-5-7 8-7-9-13 6Z" fill={c.surface} stroke={c.line} />
      <path d="M36 151h190m-107 0c2-15 16-23 18-37m-81 29v-17m-6 9 6-6 6 6" />
      <SceneCloud x={46} y={35} scale={0.75} />
      <path d="m194 100 5-4 5 4m-14 13 5-4 5 4" stroke={c.line} />
    </CollectionScene>
  )
}

export function ForestIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m49 128 24-39H62l18-31 18 31H87l24 39H49Zm112 5 25-41h-12l20-34 20 34h-12l25 41h-66Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M80 127v28m114-24v24" stroke={c.line} />
      <path d="m94 131 29-47h-14l23-43 24 43h-15l28 47H94Z" fill={c.surface} />
      <path d="M132 154v-47m-12 8 12 10 13-12" />
      <path d="M53 154h156m-104 0c5-8 15-11 15-17m26 17c-2-7-4-10-4-16" stroke={c.line} />
      <path
        d="M64 152c-9-9-3-16 0-19 5 7 7 12 0 19Zm111 0c-9-9-3-16 0-19 5 7 7 12 0 19Z"
        fill={c.tint}
        stroke={c.line}
      />
      <SceneCloud x={158} y={24} scale={0.6} />
    </CollectionScene>
  )
}

export function SunriseIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M82 98a48 48 0 0 1 96 0" fill={c.tint} />
      <path
        d="M130 34V23m-42 25-8-8m92 8 8-8M67 82H55m138 0h12"
        stroke={c.accent}
        strokeWidth="3"
      />
      <path d="M38 100c34-16 56-8 86 0s61 15 98-3v44H38v-41Z" fill={c.surface} stroke={c.line} />
      <path d="M39 128c39-22 57-9 87 3s60 21 96-2v23H39v-24Z" fill={c.tint} stroke={c.line} />
      <path d="M106 110h47m-37 10h25m-14 21h34m-20 9h14" stroke={c.accent} />
      <path d="m55 65 6-4 6 4m113 50 6-4 6 4" stroke={c.line} />
      <path d="M38 153h184" />
    </CollectionScene>
  )
}

export function FlowerGardenIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M76 138V75m54 66V56m50 82V84" />
      <path
        d="M76 116c-20 0-25-12-25-18 14 0 25 7 25 18Zm54-26c17 0 24-10 24-17-15 0-24 7-24 17Zm50 36c20 0 27-12 27-19-17 0-27 7-27 19Z"
        fill={c.tint}
        stroke={c.line}
      />
      <g fill={c.surface}>
        <path d="M76 48c12-15 25 1 14 11 18 3 12 23-3 20 1 18-20 18-22 1-16 7-25-11-9-19-14-10-1-25 12-14l8 1Z" />
        <path d="M130 29c11-13 23 1 13 10 17 3 11 21-2 18 1 16-18 16-20 1-14 6-22-10-8-17-12-9-1-23 11-13l6 1Z" />
        <path d="M180 62c10-13 23 1 13 10 17 3 11 21-2 18 1 16-18 16-20 1-14 6-22-10-8-17-12-9-1-23 11-13l6 1Z" />
      </g>
      <g fill={c.accent} stroke="none">
        <circle cx="76" cy="65" r="7" />
        <circle cx="130" cy="44" r="7" />
        <circle cx="180" cy="77" r="7" />
      </g>
      <path d="m48 134 7 24h147l7-24H48Z" fill={c.tint} />
      <path d="M58 144h141" stroke={c.line} />
    </CollectionScene>
  )
}

export function CactusIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M110 119V52a19 19 0 0 1 38 0v38h13V73a9 9 0 0 1 18 0v24a11 11 0 0 1-11 11h-20v11h-38Z"
        fill={c.tint}
      />
      <path d="M110 91H92a12 12 0 0 1-12-12V63a8 8 0 0 1 16 0v13h14" fill={c.tint} />
      <path
        d="M123 47v67m11-64v64m-45-47v13m80-7v22m-54-33 5-1m16 20 6-1m-27 18 5-1"
        stroke={c.line}
      />
      <path d="m98 119 8 38h49l8-38H98Z" fill={c.surface} />
      <path d="M101 129h59m-47 7 2 13m32-13-2 13" stroke={c.line} />
      <path
        d="M129 33c-14-4-15-14-6-17l6 8 6-8c10 3 8 13-6 17Z"
        fill={c.surface}
        stroke={c.accent}
      />
      <path d="M55 157h141m-6-15h10m-150 3h8" stroke={c.line} />
    </CollectionScene>
  )
}

export function TreeHouseIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M107 153v-50l-16-17 9-8 24 21 14-12 9 6-17 21v39" fill={c.tint} stroke={c.line} />
      <path
        d="M84 94C46 99 44 65 62 56c-8-27 28-44 46-26 12-26 52-22 58 0 29-13 54 14 42 36 25 18 7 44-20 36"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M88 67h86v53H88V67Z" fill={c.surface} />
      <path d="m76 70 55-37 55 37H76Z" fill={c.surface} />
      <path d="M82 63h96m-78 21h62m-62 15h62" stroke={c.line} />
      <rect x="118" y="81" width="25" height="39" rx="2" fill={c.tint} />
      <rect x="96" y="80" width="15" height="16" fill={c.tint} stroke={c.line} />
      <path d="M82 121h100m-15 0 8 34m-25-34 8 34m-6-25h17m-14 10h17m-14 10h16" />
      <path d="M58 156h146m-127-3 4-9 4 9m106-6 4-8 4 8" stroke={c.line} />
    </CollectionScene>
  )
}

export function WaterfallIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m51 149 9-48 18-12 5-49 35-8 24 14 28-12 25 16 10 100H51Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M108 44h40l-6 97c-8 17-32 17-40 0l6-97Z" fill={c.surface} />
      <path d="m118 52-5 75m23-72-5 65m-9-42-3 55" stroke={c.line} />
      <path
        d="M99 139c-21-13-33 1-20 12-7 9 12 15 27 10 12 10 26 7 31 1 26 5 46-4 33-14 13-13-5-22-22-12"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M111 147h23m-17 10h27M72 82h20m65-12h31m-28 42h31" stroke={c.line} />
      <path d="m64 45 9-19 9 19H64Zm111-12 8-17 8 17h-16Z" fill={c.surface} stroke={c.line} />
      <path d="M92 132v-5m53 10 2-5m-42 5-2-5" stroke={c.accent} />
    </CollectionScene>
  )
}

export function OceanIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M41 113c32-2 45-18 50-45 14-6 46 10 43 39 14 11 29 11 45 0 18 13 32 12 43 4v40H41v-38Z"
        fill={c.tint}
      />
      <path
        d="M90 69c19 0 35 15 31 35-7-12-19-13-29-7 17-4 22 13 14 21-9 7-28 10-43 11"
        fill={c.surface}
        stroke={c.line}
      />
      <path
        d="M40 140c15 10 26 9 39 0 14 10 28 10 41 0 14 10 27 10 41 0 14 10 29 10 43 0m-143 13h29m31 0h22m29 0h25"
        stroke={c.line}
      />
      <circle cx="164" cy="49" r="17" fill={c.surface} stroke={c.line} />
      <path d="M164 23v-7m21 16 5-5m-52 5-5-5" stroke={c.accent} />
      <SceneCloud x={49} y={28} scale={0.6} />
      <path d="m184 82 6-4 6 4m-39 7 5-3 5 3" stroke={c.line} />
    </CollectionScene>
  )
}

export function CampingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m68 147 56-89 58 89H68Z" fill={c.surface} />
      <path d="m124 58 18 89h40l-58-89Z" fill={c.tint} />
      <path d="m93 147 31-66 18 66H93Z" fill={c.tint} stroke={c.line} />
      <path d="M124 81v66M58 149h132m-66-91-6-9m64 98 9 7" />
      <path d="m169 111 20-34h-9l15-28 16 28h-9l20 34h-53Z" fill={c.tint} stroke={c.line} />
      <path d="M195 111v28" stroke={c.line} />
      <path d="M62 137c-14-12 7-15 4-31 20 17 20 24 10 31H62Z" fill={c.tint} stroke={c.accent} />
      <path d="m54 144 32-7m-30 0 29 8" strokeWidth="3" />
      <path
        d="M77 27c-7 14 3 25 17 22-7 11-25 9-28-4-2-9 3-16 11-18Z"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M140 28v6m-3-3h6m-34 12v5m-3-2h6" stroke={c.accent} />
    </CollectionScene>
  )
}

export function RainbowIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M54 128V99a76 76 0 0 1 152 0v29" fill={c.tint} />
      <path d="M68 128V99a62 62 0 0 1 124 0v29" fill={c.surface} stroke={c.line} />
      <path d="M83 128V99a47 47 0 0 1 94 0v29" fill={c.tint} stroke={c.line} />
      <path d="M98 128V99a32 32 0 0 1 64 0v29" fill={c.surface} stroke={c.accent} />
      <SceneCloud x={35} y={112} scale={1.2} />
      <SceneCloud x={166} y={112} scale={1.2} />
      <path d="m114 145-3 7m34-7 3 7M35 46v10m-5-5h10m169-20v8m-4-4h8" stroke={c.accent} />
      <path d="M111 122h38" stroke={c.line} />
    </CollectionScene>
  )
}
