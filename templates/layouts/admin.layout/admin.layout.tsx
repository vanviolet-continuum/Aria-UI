import { useI18n } from '../../i18n/use.i18n'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { useMediaQuery } from '../../hooks/use.media.query'
import { Sidebar, type SidebarProps } from '../sidebar'
import { AdminHeader, type AdminHeaderProps } from '../header'
import { useOptionalTheme } from '../../theme/theme.provider'
import { Breadcrumb } from '../../ui/breadcrumb/breadcrumb'

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
  command?: AdminHeaderProps['command']
  breadcrumb?: ReactNode
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
  command,
  breadcrumb,
}: AdminLayoutProps) {
  const { text: localize } = useI18n()

  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useOptionalTheme()
  const [localCollapsed, setLocalCollapsed] = useState(false)
  const main = useRef<HTMLElement>(null)
  const isMobile = useMediaQuery('(max-width: 850px)')
  const preferredCollapsed = theme?.config.sidebarCollapsed ?? localCollapsed
  const collapsed = preferredCollapsed && !isMobile
  const close = useCallback(() => setMobileOpen(false), [])
  const activeItem = navigation.flatMap((group) => group.items).find((item) => item.active)
  const outletBreadcrumb =
    breadcrumb === undefined ? (
      <Breadcrumb
        items={
          activeItem
            ? [{ label: brand.name, href: brand.href }, { label: localize(activeItem.label) }]
            : [{ label: localize(title) }]
        }
        renderLink={(item) => (
          <a
            className="ui-breadcrumb-link"
            href={item.href}
            onClick={(event) => {
              if (onNavigate && item.href) {
                event.preventDefault()
                onNavigate(item.href)
              }
            }}
          >
            {item.label}
          </a>
        )}
      />
    ) : (
      breadcrumb
    )
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
        onCollapse={() =>
          theme
            ? theme.updateConfig({ sidebarCollapsed: !preferredCollapsed })
            : setLocalCollapsed((previous) => !previous)
        }
        onNavigate={onNavigate}
      />
      <div className="main-shell" inert={mobileOpen && isMobile ? true : undefined}>
        <AdminHeader
          title={localize(title)}
          onMenu={() => setMobileOpen(true)}
          actions={headerActions}
          command={
            command ?? {
              items: navigation.flatMap((group) =>
                group.items.map((item) => ({
                  id: item.href,
                  label: item.label,
                  group: group.label,
                  icon: item.icon,
                  onSelect: () =>
                    onNavigate ? onNavigate(item.href) : window.location.assign(item.href),
                })),
              ),
            }
          }
        />
        <main id="main-content" ref={main} tabIndex={-1}>
          {outletBreadcrumb && <div className="outlet-breadcrumb">{outletBreadcrumb}</div>}
          {children}
        </main>
      </div>
    </div>
  )
}
