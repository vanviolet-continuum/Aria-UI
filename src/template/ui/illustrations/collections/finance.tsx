import type { IllustrationProps } from '../frame'
import { CollectionScene, sceneColors as c } from './collection-scene'

export function SavingsIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="M78 77c-11-14-17-4-11 6-16 16-16 43 3 56v15h17l3-9h63l4 9h17v-18c12-8 15-13 17-24h13V91h-17c-5-13-16-21-33-24l-7-15-21 12c-21-2-36 2-48 13Z"
        fill={c.surface}
      />
      <path d="M94 77h38" strokeWidth="4" stroke={c.line} />
      <circle cx="167" cy="91" r="3" fill={c.ink} stroke="none" />
      <path d="M61 102c-16 5-22-9-12-13 10-2 13 11 5 13m50 33h35" stroke={c.line} />
      <circle cx="119" cy="37" r="19" fill={c.tint} />
      <path d="M124 30h-7c-8 0-8 8 0 8h4c8 0 8 8 0 8h-8m6-20v24" stroke={c.accent} />
      <path d="M187 44v10m-5-5h10m-132 7v6m-3-3h6" stroke={c.line} />
    </CollectionScene>
  )
}

export function WalletIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M64 68V52a8 8 0 0 1 7-8l105-14v38H64Z" fill={c.tint} stroke={c.line} />
      <path d="m81 61 23-34 53 32-4 9H81v-7Z" fill={c.surface} />
      <path d="m96 57 10-16 31 18" stroke={c.line} />
      <rect x="56" y="64" width="143" height="88" rx="11" fill={c.surface} />
      <path d="M65 74h123m-123 67h123" stroke={c.line} strokeDasharray="3 5" />
      <path d="M167 93h39v32h-39a10 10 0 0 1-10-10v-12a10 10 0 0 1 10-10Z" fill={c.tint} />
      <circle cx="173" cy="109" r="4" fill={c.surface} />
      <path d="M77 112h29m-29 9h17m93-76 7-6m8 20h9" stroke={c.line} />
      <circle cx="64" cy="33" r="6" fill={c.tint} stroke={c.line} />
    </CollectionScene>
  )
}

export function InvestmentIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M55 43v108h155" stroke={c.line} />
      <rect x="70" y="116" width="24" height="35" rx="3" fill={c.tint} />
      <rect x="107" y="91" width="24" height="60" rx="3" fill={c.surface} />
      <rect x="144" y="65" width="24" height="86" rx="3" fill={c.tint} />
      <path d="m68 91 40-28 30 10 47-44m-17 0h17v17" stroke={c.accent} strokeWidth="3" />
      <circle cx="108" cy="63" r="4" fill={c.surface} />
      <circle cx="138" cy="73" r="4" fill={c.surface} />
      <ellipse cx="188" cy="143" rx="22" ry="7" fill={c.surface} />
      <path d="M166 143v9c0 9 44 9 44 0v-9" fill={c.tint} />
      <ellipse cx="188" cy="134" rx="22" ry="7" fill={c.surface} />
      <path d="M166 134v9c0 9 44 9 44 0v-9" fill={c.tint} stroke={c.line} />
      <ellipse cx="188" cy="134" rx="22" ry="7" fill={c.surface} stroke={c.line} />
    </CollectionScene>
  )
}

export function BudgetIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="62" y="35" width="113" height="122" rx="8" fill={c.surface} />
      <rect x="91" y="27" width="54" height="17" rx="5" fill={c.tint} />
      <path d="M102 27a16 16 0 0 1 32 0" stroke={c.line} />
      <path d="M82 64h62m-62 13h43m-21 18h40m-40 21h40m-40 21h28" stroke={c.line} strokeWidth="3" />
      <path d="m81 94 4 4 8-9m-12 26 4 4 8-9m-12 26 4 4 8-9" stroke={c.accent} />
      <circle cx="181" cy="118" r="29" fill={c.tint} />
      <path d="M181 89v29h29" fill={c.surface} />
      <path d="m181 118-20 21m-103-8H47m6-23H42" stroke={c.line} />
    </CollectionScene>
  )
}

export function BankingIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="m49 65 81-37 81 37H49Z" fill={c.surface} />
      <path d="M58 71h144v13H58V71Z" fill={c.tint} stroke={c.line} />
      <circle cx="130" cy="52" r="8" fill={c.tint} stroke={c.line} />
      <path d="M70 84h16v54H70V84Zm52 0h16v54h-16V84Zm52 0h16v54h-16V84Z" fill={c.surface} />
      <path d="M65 91h25m27 0h25m27 0h25m-129 40h25m27 0h25m27 0h25" stroke={c.line} />
      <path d="M58 138h144v10H58v-10Zm-10 10h164v10H48v-10Z" fill={c.tint} stroke={c.line} />
      <path d="M40 88v9m-4-4h8m174 15v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}

export function CoinsIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M57 118v31c0 13 54 13 54 0v-31H57Z" fill={c.tint} />
      <ellipse cx="84" cy="118" rx="27" ry="9" fill={c.surface} />
      <path d="M57 129c0 13 54 13 54 0m-54 10c0 13 54 13 54 0" stroke={c.line} />
      <path d="M115 86v62c0 13 54 13 54 0V86h-54Z" fill={c.tint} />
      <ellipse cx="142" cy="86" rx="27" ry="9" fill={c.surface} />
      <path
        d="M115 98c0 13 54 13 54 0m-54 12c0 13 54 13 54 0m-54 12c0 13 54 13 54 0m-54 12c0 13 54 13 54 0m-54 12c0 13 54 13 54 0"
        stroke={c.line}
      />
      <circle cx="191" cy="129" r="27" fill={c.surface} />
      <circle cx="191" cy="129" r="20" stroke={c.line} />
      <path d="M196 119h-7c-9 0-9 10 0 10h4c9 0 9 10 0 10h-8m6-24v28" stroke={c.accent} />
      <circle cx="113" cy="42" r="18" fill={c.tint} />
      <path d="M113 31v22m-6-11h12m59 9v10m-5-5h10" stroke={c.line} />
    </CollectionScene>
  )
}

export function ReceiptIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path
        d="m79 29 10 6 10-6 10 6 10-6 10 6 10-6 10 6 10-6 10 6 10-6v124l-10-6-10 6-10-6-10 6-10-6-10 6-10-6-10 6-10-6-10 6V29Z"
        fill={c.surface}
      />
      <path
        d="M96 51h65m-65 11h39m-39 17h40m13 0h12m-65 14h27m26 0h12m-65 14h37m16 0h12m-65 13h65"
        stroke={c.line}
      />
      <path d="M96 132h31m21 0h13" strokeWidth="3" />
      <path d="M61 102H49v40h17m133-89h13v39h-13" stroke={c.line} />
      <circle cx="196" cy="119" r="16" fill={c.tint} />
      <path d="m189 119 5 5 10-11" stroke={c.accent} />
    </CollectionScene>
  )
}

export function CalculatorIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <rect x="81" y="26" width="99" height="132" rx="10" fill={c.surface} />
      <rect x="93" y="39" width="75" height="30" rx="4" fill={c.tint} stroke={c.line} />
      <path d="M145 51v8m10-8v8m-22 0h3" stroke={c.accent} strokeWidth="3" />
      <g fill={c.tint} stroke={c.line}>
        <rect x="95" y="83" width="14" height="12" rx="3" />
        <rect x="123" y="83" width="14" height="12" rx="3" />
        <rect x="151" y="83" width="14" height="12" rx="3" />
        <rect x="95" y="107" width="14" height="12" rx="3" />
        <rect x="123" y="107" width="14" height="12" rx="3" />
        <rect x="151" y="107" width="14" height="35" rx="3" />
        <rect x="95" y="131" width="14" height="12" rx="3" />
        <rect x="123" y="131" width="14" height="12" rx="3" />
      </g>
      <path
        d="M52 65v14m-7-7h14m139 41h14m-12-41 8 8m-8 0 8-8M49 123h13m-13 6h13"
        stroke={c.accent}
      />
    </CollectionScene>
  )
}

export function CurrencyExchangeIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <circle cx="94" cy="92" r="36" fill={c.surface} />
      <circle cx="94" cy="92" r="28" stroke={c.line} />
      <path d="M102 80H90c-12 0-12 12 0 12h8c12 0 12 12 0 12H85m9-30v37" stroke={c.accent} />
      <circle cx="167" cy="116" r="36" fill={c.tint} />
      <circle cx="167" cy="116" r="28" stroke={c.line} />
      <path d="M180 101c-23-13-30 25-8 31l9-3m-30-18h22m-22 9h19" />
      <path
        d="M80 44c37-21 77-12 105 12m-2-16 3 17-17-1M178 158c-43 14-85 7-112-15m2 17-3-18 17 2"
        stroke={c.line}
      />
      <path d="M211 81v10m-5-5h10M47 120v8m-4-4h8" stroke={c.accent} />
    </CollectionScene>
  )
}

export function FinancialGoalIllustration(props: IllustrationProps) {
  return (
    <CollectionScene {...props}>
      <path d="M64 154v-28h31v-26h31V74h32V47h33v107H64Z" fill={c.surface} />
      <path d="M64 126h31m0-26h31m0-26h32m0-27h33" stroke={c.line} />
      <path d="M174 47V19m0 0 25 5-25 11" fill={c.tint} />
      <circle cx="79" cy="95" r="20" fill={c.tint} />
      <path d="M84 88h-7c-8 0-8 8 0 8h4c8 0 8 8 0 8h-8m6-21v24" stroke={c.accent} />
      <path d="m102 61 21-22 10 8 24-25m-12 0h12v13M45 155h170" stroke={c.line} />
      <path d="M199 119v-11m-5 6h10" stroke={c.accent} />
    </CollectionScene>
  )
}
