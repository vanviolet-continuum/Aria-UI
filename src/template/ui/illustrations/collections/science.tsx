import type { IllustrationProps } from '../frame'
import { CollectionScene, sceneColors as c } from './collection-scene'

export function MicroscopeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M92 141c-4-11 1-20 14-23l12-8 18 8 8 23H92Z" fill={c.tint} stroke={c.line} />
      <path d="M145 124c36-11 40-65 4-80l-8 15c24 11 20 43-2 48" fill={c.surface} />
      <path
        d="m104 40 11-16 45 31-11 16-45-31Zm-5 9 10-14 28 19-10 14-28-19Zm17 21 9-12 9 6-9 12-9-6Z"
        fill={c.tint}
        stroke={c.line}
      />
      <circle cx="148" cy="79" r="9" fill={c.surface} />
      <circle cx="148" cy="79" r="3" stroke={c.line} />
      <path d="M77 98h65v7H77v-7Zm23 7v21m-26 15h99v14H74v-14Z" fill={c.surface} />
      <path d="m92 96 11-7h17v7m-37 53h81" stroke={c.line} />
      <path d="M184 108h23m-18 12h14M61 57v9m-4-4h8" stroke={c.line} />
    </CollectionScene>
  )
}

export function TelescopeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m73 86 98-41 12 30-98 41-12-30Z" fill={c.surface} />
      <path d="m153 53 12 30m-6-35 14 34m-96 10-15 6 6 15 15-6" fill={c.tint} stroke={c.line} />
      <path d="m170 45 8-3 13 31-8 3-13-31Z" fill={c.tint} />
      <path d="M127 98v19m0 0-35 39m35-39 36 39m-36-39v39" />
      <path d="M110 124h34m-8-24 13 11" stroke={c.line} />
      <circle cx="127" cy="110" r="6" fill={c.surface} />
      <path d="M85 25v10m-5-5h10m119 17v8m-4-4h8M48 120v8m-4-4h8" stroke={c.accent} />
      <path
        d="M120 24c-9 13 1 25 14 22-10 12-27 4-27-7 0-7 6-13 13-15Z"
        fill={c.tint}
        stroke={c.line}
      />
    </CollectionScene>
  )
}

export function ChemistryIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M88 39v51l-31 48c-5 8-1 17 8 17h72c9 0 13-9 8-17l-31-48V39m-32 0h38"
        fill={c.surface}
      />
      <path
        d="M75 119c15-9 27 9 46 0l18 25c2 3 1 5-3 5H66c-4 0-5-2-3-5l12-25Z"
        fill={c.tint}
        stroke={c.line}
      />
      <path d="M163 63v64a18 18 0 0 0 36 0V63m-42 0h48" fill={c.surface} />
      <path d="M167 99c8 5 18-5 28 0v28c0 18-28 18-28 0V99Z" fill={c.tint} stroke={c.line} />
      <path d="M184 77h10m-6 12h6m-6 22h6m-6 11h6" stroke={c.line} />
      <circle cx="99" cy="100" r="4" stroke={c.accent} />
      <circle cx="110" cy="135" r="5" stroke={c.accent} />
      <circle cx="92" cy="73" r="3" stroke={c.accent} />
      <circle cx="180" cy="43" r="7" fill={c.tint} stroke={c.line} />
      <circle cx="163" cy="28" r="4" stroke={c.line} />
    </CollectionScene>
  )
}

export function AtomIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="130" cy="88" rx="84" ry="30" stroke={c.line} />
      <ellipse cx="130" cy="88" rx="84" ry="30" transform="rotate(60 130 88)" />
      <ellipse cx="130" cy="88" rx="84" ry="30" transform="rotate(120 130 88)" stroke={c.line} />
      <circle cx="130" cy="88" r="16" fill={c.tint} />
      <circle cx="120" cy="83" r="7" fill={c.surface} />
      <circle cx="138" cy="83" r="7" fill={c.surface} />
      <circle cx="130" cy="98" r="7" fill={c.tint} />
      <circle cx="210" cy="80" r="7" fill={c.surface} stroke={c.accent} />
      <circle cx="87" cy="32" r="7" fill={c.surface} stroke={c.accent} />
      <circle cx="92" cy="148" r="7" fill={c.surface} stroke={c.accent} />
      <path d="M52 46v8m-4-4h8m144 80v8m-4-4h8M120 158h20" stroke={c.line} />
    </CollectionScene>
  )
}

export function DnaIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M94 20c0 35 72 35 72 70s-72 35-72 70m72-140c0 35-72 35-72 70s72 35 72 70"
        stroke={c.surface}
        strokeWidth="9"
      />
      <path d="M94 20c0 35 72 35 72 70s-72 35-72 70" strokeWidth="5" />
      <path d="M166 20c0 35-72 35-72 70s72 35 72 70" stroke={c.accent} strokeWidth="5" />
      <path
        d="M98 32h64m-51 13h38m-34 14h30m-42 14h54m-62 14h70m-66 14h62m-50 14h38m-33 14h28m-41 14h55"
        stroke={c.line}
      />
      <path d="M53 65v35h18m117-34h18v35m-5 31v9m-4-4h8M63 34l5 5" stroke={c.line} />
      <circle cx="68" cy="122" r="8" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}

export function PlanetIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="130" cy="89" r="48" fill={c.tint} />
      <path
        d="M91 62c24 15 48 3 68 15m-74 6c17 5 26 1 40 8m-25 32c26-9 42 7 65-6"
        stroke={c.line}
      />
      <path
        d="M86 73c-30 10-48 22-44 31 6 14 49 13 97 0s83-34 78-47c-3-8-20-10-42-7m1 9c15-1 24 0 25 4 3 7-25 22-65 33s-74 15-78 8c-2-4 9-11 26-18"
        fill={c.surface}
        stroke={c.line}
      />
      <path d="M85 91a48 48 0 0 0 91-19" />
      <circle cx="63" cy="38" r="8" fill={c.surface} stroke={c.line} />
      <path d="M182 126v10m-5-5h10m9-96v8m-4-4h8m-104 100v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}

export function SolarSystemIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <ellipse cx="130" cy="90" rx="91" ry="52" stroke={c.line} />
      <ellipse cx="130" cy="90" rx="67" ry="38" stroke={c.line} />
      <ellipse cx="130" cy="90" rx="42" ry="24" stroke={c.line} />
      <circle cx="130" cy="90" r="19" fill={c.tint} />
      <path
        d="M130 65v-5m0 60v-5m-25-25h-5m60 0h-5m-43-17-4-4m40 38 4 4m-40-4-4 4m40-38 4-4"
        stroke={c.accent}
      />
      <circle cx="88" cy="88" r="6" fill={c.surface} />
      <circle cx="160" cy="56" r="9" fill={c.tint} />
      <circle cx="204" cy="121" r="13" fill={c.surface} />
      <path d="m196 122 17-4" stroke={c.line} />
      <circle cx="60" cy="57" r="9" fill={c.surface} stroke={c.line} />
      <path d="M75 141v8m-4-4h8m109-113v6m-3-3h6" stroke={c.line} />
      <circle cx="133" cy="142" r="3" fill={c.accent} stroke="none" />
    </CollectionScene>
  )
}

export function LaboratoryIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M43 137h174v8H43v-8Zm12 8v13m150-13v13M64 136V51m-8 0h53" fill={c.surface} />
      <path d="M79 51v22m16-22v22" stroke={c.line} />
      <path d="M78 73h19v12l15 37c3 8-39 8-37 0l13-37V73" fill={c.surface} />
      <path d="M81 113h23l4 10H78l3-10Z" fill={c.tint} stroke={c.line} />
      <path d="M133 69h67m-62 0v44a8 8 0 0 0 16 0V69m13 0v44a8 8 0 0 0 16 0V69" fill={c.surface} />
      <path d="M140 95h12m17-10h12m-50-23v73m69-73v73m-75-23h80m-80 23h80" stroke={c.line} />
      <path d="M144 114h4m25-17h4m-93 35h17" stroke={c.accent} strokeWidth="3" />
      <rect x="122" y="28" width="60" height="24" rx="4" fill={c.surface} stroke={c.line} />
      <path d="M131 40h12l4-5 7 11 5-6h14" stroke={c.accent} />
    </CollectionScene>
  )
}

export function MagnetIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M75 57h30v45a25 25 0 0 0 50 0V57h30v45a55 55 0 0 1-110 0V57Z" fill={c.tint} />
      <path d="M75 57h30v25H75V57Zm80 0h30v25h-30V57Z" fill={c.surface} />
      <path d="M86 66v9m-4-4h8m76 0h9" stroke={c.accent} />
      <path
        d="M103 38c13-10 41-10 54 0m-62-8c19-16 51-16 70 0m-77-9c23-20 61-20 84 0M61 74l-10-5m8 26H45m15 21-13 5m152-47 10-5m-8 26h14m-15 21 13 5"
        stroke={c.line}
      />
      <path d="m122 65 10-17-1 13h11l-14 20 2-16h-8Z" fill={c.surface} stroke={c.accent} />
      <path d="M114 157h32" stroke={c.line} />
    </CollectionScene>
  )
}

export function LightBulbIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M109 122c-1-25-26-29-26-55a47 47 0 0 1 94 0c0 26-25 30-26 55h-42Z"
        fill={c.surface}
      />
      <path d="M111 122h38v23h-38v-23Zm8 23v11h22v-11" fill={c.tint} />
      <path d="M112 131h36m-36 7h36m-26-17V93l-11-14h17l4 8 4-8h17l-12 14v28" stroke={c.line} />
      <path
        d="M130 12V4m59 62h12M59 66h12m105-43 9-9m-101 9-9-9m-13 92 9-5m119 5-9-5"
        stroke={c.accent}
        strokeWidth="3"
      />
      <path d="M97 60c1-12 10-22 21-25" stroke={c.line} strokeWidth="3" />
      <path d="M100 148H83v-13H61m99 13h17v-13h22" stroke={c.line} />
      <circle cx="61" cy="135" r="4" fill={c.tint} stroke={c.line} />
      <circle cx="199" cy="135" r="4" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}
