import {
  Armchair,
  Banknote,
  Blocks,
  CalendarCheck,
  CalendarDays,
  ChartNoAxesCombined,
  CircleHelp,
  CreditCard,
  LayoutDashboard,
  ListChecks,
  Monitor,
  Package,
  Palette,
  PanelsTopLeft,
  ReceiptText,
  Stethoscope,
  Users,
  UsersRound,
  WalletCards,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
  title: string
  path: string
  icon: LucideIcon
}
export const navigationGroups: { label?: string; items: NavigationItem[] }[] = [
  { items: [{ title: 'Dashboard', path: '/dashboard', icon: LayoutDashboard }] },
  {
    label: 'Clinic',
    items: [
      { title: 'Reservations', path: '/reservations', icon: CalendarCheck },
      { title: 'Calendar', path: '/calendar', icon: CalendarDays },
      { title: 'Patients', path: '/patients', icon: Users },
      { title: 'Treatments', path: '/treatments', icon: Stethoscope },
      { title: 'Staff List', path: '/staff', icon: UsersRound },
    ],
  },
  {
    label: 'Finance',
    items: [
      { title: 'Accounts', path: '/accounts', icon: WalletCards },
      { title: 'Sales', path: '/sales', icon: ChartNoAxesCombined },
      { title: 'Purchases', path: '/purchases', icon: ReceiptText },
      { title: 'Payment Method', path: '/payment-methods', icon: CreditCard },
    ],
  },
  {
    label: 'Physical asset',
    items: [
      { title: 'Stocks', path: '/stocks', icon: Package },
      { title: 'Peripherals', path: '/peripherals', icon: Armchair },
    ],
  },
  {
    items: [
      { title: 'Report', path: '/reports', icon: Banknote },
      { title: 'Customer Support', path: '/support', icon: CircleHelp },
      { title: 'UI Components', path: '/components', icon: Blocks },
      { title: 'Detail example', path: '/details', icon: PanelsTopLeft },
      { title: 'Wizard Example', path: '/wizard', icon: ListChecks },
      { title: 'Theme settings', path: '/settings/appearance', icon: Palette },
    ],
  },
]
export const navigationItems = navigationGroups.flatMap((group) => group.items)
export const workspaceIcon = Monitor
