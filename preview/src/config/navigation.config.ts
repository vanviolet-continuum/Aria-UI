import {
  LayoutDashboard,
  Blocks,
  Image,
  Palette,
  Sparkles,
  Users,
  Clock,
  Settings,
  Building2,
  FolderOpen,
  ListChecks,
  CalendarDays,
  Receipt,
  FileText,
  Store,
  Package,
  ShoppingCart,
  Layers,
  Play,
  Home,
  type AriaIcon,
} from '@templates/icons'

export interface DemoMenu {
  label: string
  href: string
  icon: AriaIcon
}
export interface DemoMenuGroup {
  label: string
  href?: string
  items: DemoMenu[]
}
/** Every visible item points to a working page in pages/. The layout only adapts these entries. */
export const menuGroups: DemoMenuGroup[] = [
  { label: 'Overview', items: [{ label: 'Home', href: '/preview/', icon: Home }] },
  {
    label: 'Team operations',
    href: '/preview/workspace',
    items: [
      { label: 'Workspace overview', href: '/preview/workspace', icon: LayoutDashboard },
      { label: 'Projects', href: '/preview/workspace/projects', icon: FolderOpen },
      { label: 'Tasks', href: '/preview/workspace/tasks', icon: ListChecks },
      { label: 'Calendar', href: '/preview/workspace/calendar', icon: CalendarDays },
      { label: 'Clients', href: '/preview/workspace/clients', icon: Building2 },
      { label: 'Invoices', href: '/preview/workspace/invoices', icon: Receipt },
      { label: 'Documents', href: '/preview/workspace/documents', icon: FileText },
      { label: 'Users', href: '/preview/workspace/users', icon: Users },
    ],
  },
  {
    label: 'Commerce',
    href: '/preview/commerce',
    items: [
      { label: 'Store overview', href: '/preview/commerce', icon: Store },
      { label: 'Products', href: '/preview/commerce/products', icon: Package },
      { label: 'Orders', href: '/preview/commerce/orders', icon: ShoppingCart },
      { label: 'Inventory', href: '/preview/commerce/inventory', icon: Layers },
      { label: 'Customers', href: '/preview/commerce/customers', icon: Users },
    ],
  },
  {
    label: 'Learning',
    href: '/preview/learning',
    items: [
      { label: 'Learning overview', href: '/preview/learning', icon: LayoutDashboard },
      { label: 'Courses', href: '/preview/learning/courses', icon: FileText },
      { label: 'Students', href: '/preview/learning/students', icon: Users },
      { label: 'Enrollments', href: '/preview/learning/enrollments', icon: ListChecks },
      { label: 'Classroom', href: '/preview/learning/classroom', icon: Play },
      { label: 'Course builder', href: '/preview/learning/course.builder', icon: Layers },
    ],
  },
  {
    label: 'Workspace',
    items: [
      { label: 'Activity', href: '/preview/workspace/activity', icon: Clock },
      { label: 'Settings', href: '/preview/workspace/settings', icon: Settings },
    ],
  },
  {
    label: 'Built with Aria UI',
    href: '/preview/catalog/overview',
    items: [
      { label: 'Kit overview', href: '/preview/catalog/overview', icon: Blocks },
      { label: 'Components', href: '/preview/catalog/components', icon: Blocks },
      { label: 'Icons', href: '/preview/catalog/icons', icon: Sparkles },
      { label: 'Illustrations', href: '/preview/catalog/illustrations', icon: Image },
      { label: 'Theme Studio', href: '/preview/catalog/theme', icon: Palette },
    ],
  },
]
export const navigation = menuGroups.flatMap((group) => group.items)
