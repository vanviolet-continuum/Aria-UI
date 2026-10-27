import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AdminLayout } from '@templates/layouts/admin.layout'
import { AriaLogo } from '@templates/branding'
import { LanguageSwitcher, useI18n } from '@templates/i18n'
import { ThemeToggle } from '@templates/theme'
import { appConfig } from '@/config/app.config'
import { navigationConfig } from '@/config/navigation.config'

export function AdminRoot() {
  const { t } = useI18n()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const current = navigationConfig.find((item) => item.href === pathname)

  return (
    <AdminLayout
      title={t(current?.label ?? 'Home')}
      brand={{ name: appConfig.name, href: appConfig.home, mark: <AriaLogo /> }}
      navigation={[
        {
          items: navigationConfig.map(({ icon: Icon, ...item }) => ({
            ...item,
            label: t(item.label),
            icon: <Icon size={18} />,
            active: pathname === item.href,
          })),
        },
      ]}
      routeKey={pathname}
      onNavigate={navigate}
      headerActions={
        <>
          <LanguageSwitcher />
          <ThemeToggle />
        </>
      }
    >
      <Outlet />
    </AdminLayout>
  )
}
