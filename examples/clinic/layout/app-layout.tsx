import { useI18n } from '../../../src/template/i18n'
import { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AdminLayout } from '@/template/layouts'
import { AriaLogo } from '@/template/branding'
import { useWorkspace } from '../workspace/workspace-context'
import { navigationGroups, navigationItems } from '../data/navigation'
import { directories } from '../data/directories'
import { HeaderActions } from './header'
import { SettingsDrawer } from './settings-drawer'

export function AppLayout() {
  const { t: tr, text: localize } = useI18n()

  const [settingsOpen, setSettingsOpen] = useState(false)
  const { settings, records } = useWorkspace()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const navigation = navigationGroups.map((group) => ({
    label: group.label,
    items: group.items.map(({ title, path, icon: Icon }) => ({
      label: title,
      href: path,
      active: pathname === path,
      icon: <Icon size={18} strokeWidth={1.8} />,
      badge:
        path === '/reservations'
          ? (records.reservations ?? directories.reservations.records).length
          : undefined,
    })),
  }))
  return (
    <>
      <AdminLayout
        title={localize(
          navigationItems.find((item) => item.path === pathname)?.title ?? 'Page not found',
        )}
        routeKey={pathname}
        onNavigate={navigate}
        navigation={navigation}
        compact={settings.compactRows}
        brand={{ name: 'Aria UI', href: '/dashboard', mark: <AriaLogo /> }}
        workspace={{
          name: settings.clinicName,
          description: settings.address,
          onClick: () => setSettingsOpen(true),
        }}
        sidebarFooter={
          <>
            <span className="workspace-indicator" />
            <span>{tr('All systems operational')}</span>
          </>
        }
        headerActions={<HeaderActions onSettings={() => setSettingsOpen(true)} />}
      >
        <Outlet />
      </AdminLayout>
      <SettingsDrawer open={settingsOpen} onOpenChange={setSettingsOpen} />
    </>
  )
}
