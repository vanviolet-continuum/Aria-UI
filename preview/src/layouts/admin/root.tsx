import { CalendarDays } from '@templates/icons/layout/calendar.days.icon'
import { Suspense, useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AdminLayout } from '@templates/layouts/admin.layout'
import { AriaLogo } from '@templates/branding'
import { LanguageSwitcher, useI18n } from '@templates/i18n'
import { ThemeToggle } from '@templates/theme'
import { Badge } from '@templates/ui/badge'
import { Avatar } from '@templates/ui/avatar'
import { Breadcrumb } from '@templates/ui/breadcrumb'
import { Text } from '@templates/ui/text'
import {
  Building2,
  FolderOpen,
  FileText,
  ListChecks,
  Package,
  ShoppingCart,
  Users,
} from '@templates/icons'
import { useWorkspace } from '../../data/workspace/workspace.provider'
import { useOperations } from '../../data/operations/operations.provider'
import { useScenarios } from '../../data/scenarios/scenarios.provider'
import { menuGroups, navigation } from '../../config/navigation.config'
import { LoadingPage } from '../../components/route.fallback'

export default function DemoLayout() {
  const { t, language } = useI18n(),
    { pathname, search } = useLocation(),
    navigate = useNavigate()
  const { data } = useWorkspace(),
    { data: operations } = useOperations(),
    { data: scenarios } = useScenarios()
  const current = navigation.find((item) => item.href === pathname),
    group = menuGroups.find((group) => group.items.some((item) => item === current))
  useEffect(() => {
    document.title = t(current?.label ?? 'Page not found') + ' · Aria Workspace'
  }, [current, language, t])
  const openRecord = (path: string, id: string, param = 'record') => {
    const params = new URLSearchParams(pathname === path ? search : '')
    params.set('panel', 'detail')
    params.set(param, id)
    navigate(path + '?' + params.toString())
  }
  const badge = (label: string) =>
    label === 'Tasks'
      ? operations.tasks.filter((item) => item.status !== 'done').length
      : label === 'Orders'
        ? scenarios.orders.filter((item) => item.status === 'pending').length
        : undefined
  return (
    <AdminLayout
      title={<span>{data.settings.name}</span>}
      brand={{ name: 'Aria Workspace', href: '/preview/', mark: <AriaLogo /> }}
      workspace={{
        name: data.settings.name,
        description: t('Demo workspace'),
        icon: <Building2 size={19} />,
      }}
      breadcrumb={
        <Breadcrumb
          items={[
            { label: t('Home'), href: '/preview/' },
            ...(group?.href && group.href !== current?.href
              ? [{ label: t(group.label), href: group.href }]
              : []),
            ...(pathname !== '/preview/' ? [{ label: t(current?.label ?? 'Page not found') }] : []),
          ]}
          renderLink={(item) => (
            <Link className="ui-breadcrumb-link" to={item.href ?? '/preview/'}>
              {item.label}
            </Link>
          )}
        />
      }
      navigation={menuGroups.map((group) => ({
        label: t(group.label),
        items: group.items.map(({ icon: Icon, ...item }) => ({
          ...item,
          label: t(item.label),
          icon: <Icon size={18} />,
          active: pathname === item.href,
          badge: badge(item.label),
        })),
      }))}
      onNavigate={navigate}
      routeKey={pathname}
      command={{
        items: [
          ...navigation.map(({ icon: Icon, ...item }) => ({
            id: item.href,
            label: t(item.label),
            group: t('Pages'),
            icon: <Icon size={17} />,
            onSelect: () => navigate(item.href),
          })),
          ...data.users.map((user) => ({
            id: 'user:' + user.id,
            label: user.name,
            description: user.email,
            group: t('Users'),
            icon: <Avatar name={user.name} size="xs" />,
            onSelect: () => openRecord('/preview/workspace/users', user.id, 'user'),
          })),
          ...operations.projects.map((item) => ({
            id: 'project:' + item.id,
            label: item.name,
            group: t('Projects'),
            icon: <FolderOpen size={17} />,
            onSelect: () => openRecord('/preview/workspace/projects', item.id),
          })),
          ...operations.tasks.map((item) => ({
            id: 'task:' + item.id,
            label: item.name,
            group: t('Tasks'),
            icon: <ListChecks size={17} />,
            onSelect: () => openRecord('/preview/workspace/tasks', item.id),
          })),
          ...operations.clients.map((item) => ({
            id: 'client:' + item.id,
            label: item.name,
            description: item.email,
            group: t('Clients'),
            icon: <Building2 size={17} />,
            onSelect: () => openRecord('/preview/workspace/clients', item.id),
          })),
          ...operations.documents.map((item) => ({
            id: 'document:' + item.id,
            label: item.name,
            group: t('Documents'),
            icon: <FileText size={17} />,
            onSelect: () => openRecord('/preview/workspace/documents', item.id),
          })),
          ...operations.invoices.map((item) => ({
            id: 'invoice:' + item.id,
            label: item.number,
            group: t('Invoices'),
            icon: <FileText size={17} />,
            onSelect: () => openRecord('/preview/workspace/invoices', item.id),
          })),
          ...scenarios.products.map((item) => ({
            id: 'product:' + item.id,
            label: item.name,
            description: item.sku,
            group: t('Products'),
            icon: <Package size={17} />,
            onSelect: () => openRecord('/preview/commerce/products', item.id),
          })),
          ...scenarios.orders.map((item) => ({
            id: 'order:' + item.id,
            label: item.number,
            description: item.customerName,
            group: t('Orders'),
            icon: <ShoppingCart size={17} />,
            onSelect: () => openRecord('/preview/commerce/orders', item.id),
          })),
          ...scenarios.courses.map((item) => ({
            id: 'course:' + item.id,
            label: item.name,
            description: item.instructor,
            group: t('Courses'),
            icon: <FileText size={17} />,
            onSelect: () => openRecord('/preview/learning/courses', item.id),
          })),
          ...scenarios.customers.map((item) => ({
            id: 'customer:' + item.id,
            label: item.name,
            description: item.email,
            group: t('Customers'),
            icon: <Users size={17} />,
            onSelect: () => openRecord('/preview/commerce/customers', item.id),
          })),
          ...operations.meetings.map((item) => ({
            id: 'event:' + item.id,
            label: item.name,
            description: item.day + ' · ' + item.time,
            group: t('Calendar'),
            icon: <CalendarDays size={17} />,
            onSelect: () => openRecord('/preview/workspace/calendar', item.id),
          })),
          ...scenarios.students.map((item) => ({
            id: 'student:' + item.id,
            label: item.name,
            description: item.email,
            group: t('Students'),
            icon: <Users size={17} />,
            onSelect: () => openRecord('/preview/learning/students', item.id),
          })),
        ],
      }}
      headerActions={
        <>
          <Badge variant="success" dot>
            {t('Demo workspace')}
          </Badge>
          <LanguageSwitcher />
          <ThemeToggle />
        </>
      }
      sidebarFooter={
        <div className="flex min-w-0 items-center gap-aria-sm">
          <Avatar name="Nadia Putri" size="sm" />
          <div className="min-w-0">
            <Text variant="label">Nadia Putri</Text>
            <Text variant="caption">{t('Workspace administrator')}</Text>
          </div>
        </div>
      }
    >
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </AdminLayout>
  )
}
