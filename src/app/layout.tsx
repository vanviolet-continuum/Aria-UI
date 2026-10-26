import { useI18n } from '../template/i18n'
import { Blocks, Settings2 } from 'lucide-react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AdminLayout, IconButton, ThemeToggle, LanguageSwitcher } from '../template'
import { navigation } from './config/navigation'

export function StarterLayout() {
  const { t: tr, text: localize } = useI18n()

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const title = navigation.find((item) => item.href === pathname)?.label ?? 'Page not found'
  return (
    <AdminLayout
      title={localize(title)}
      routeKey={pathname}
      onNavigate={navigate}
      brand={{ name: 'Admin', href: '/', mark: <Blocks className="brand-mark" /> }}
      workspace={{ name: tr('Your workspace'), description: tr('React admin starter') }}
      navigation={[
        {
          items: navigation.map(({ icon: Icon, ...item }) => ({
            ...item,
            icon: <Icon size={18} />,
            active: pathname === item.href,
          })),
        },
      ]}
      sidebarFooter={
        <>
          <span className="workspace-indicator" />
          <span>{tr('Ready to build')}</span>
        </>
      }
      headerActions={
        <>
          <LanguageSwitcher />
          <ThemeToggle />
          <IconButton
            label={tr('Theme settings')}
            variant="text"
            color="secondary"
            onClick={() => navigate('/settings/appearance')}
          >
            <Settings2 size={18} />
          </IconButton>
        </>
      }
    >
      <Outlet />
    </AdminLayout>
  )
}
