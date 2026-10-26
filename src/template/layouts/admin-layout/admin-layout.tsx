import { useI18n } from '../../i18n/use-i18n'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useMediaQuery } from '../../hooks/use-media-query'
import { Sidebar, type SidebarProps } from '../sidebar'
import { AdminHeader } from '../header'

export interface AdminLayoutProps extends Pick<
  SidebarProps,
  'brand' | 'workspace' | 'navigation' | 'onNavigate'
> {
  title: ReactNode
  children: ReactNode
  headerActions?: ReactNode
  sidebarFooter?: ReactNode
  routeKey?: string
  compact?: boolean
}
export function AdminLayout({
  title,
  brand,
  workspace,
  navigation,
  onNavigate,
  children,
  headerActions,
  sidebarFooter,
  routeKey,
  compact,
}: AdminLayoutProps) {
  const { text: localize } = useI18n()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const main = useRef<HTMLElement>(null)
  const isMobile = useMediaQuery('(max-width: 850px)')
  const close = useCallback(() => setMobileOpen(false), [])
  useEffect(() => {
    setMobileOpen(false)
    main.current?.scrollTo({ top: 0 })
  }, [routeKey])
  return (
    <div
      className={`app-shell${collapsed ? ' app-shell--collapsed' : ''}${compact ? ' app-shell--compact' : ''}`}
    >
      <Sidebar
        brand={brand}
        workspace={workspace}
        navigation={navigation}
        footer={sidebarFooter}
        mobileOpen={mobileOpen}
        collapsed={collapsed}
        onClose={close}
        onCollapse={() => setCollapsed((previous) => !previous)}
        onNavigate={onNavigate}
      />
      <div className="main-shell" inert={mobileOpen && isMobile ? true : undefined}>
        <AdminHeader
          title={localize(title)}
          onMenu={() => setMobileOpen(true)}
          actions={headerActions}
        />
        <main id="main-content" ref={main} tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  )
}
