import type { ReactNode } from 'react'

export interface NavigationItem {
  label: string
  href: string
  icon?: ReactNode
  badge?: ReactNode
  active?: boolean
}
export interface NavigationGroup {
  label?: string
  items: NavigationItem[]
}
export interface SidebarBrand {
  name: string
  href: string
  mark?: ReactNode
}
export interface SidebarWorkspace {
  name: string
  description?: string
  icon?: ReactNode
  onClick?: () => void
}
export interface SidebarProps {
  brand: SidebarBrand
  workspace?: SidebarWorkspace
  navigation: NavigationGroup[]
  footer?: ReactNode
  collapsed: boolean
  mobileOpen: boolean
  onClose: () => void
  onCollapse: () => void
  onNavigate?: (href: string) => void
}
