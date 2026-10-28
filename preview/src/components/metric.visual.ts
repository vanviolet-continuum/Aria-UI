import {
  Users,
  UserCheck,
  UserPlus,
  FolderOpen,
  ListChecks,
  CircleCheck,
  Clock,
  CalendarDays,
  TriangleAlert,
  Receipt,
  Wallet,
  Banknote,
  FileText,
  Layers,
  Package,
  Percent,
  Building2,
  Truck,
  Mail,
  type AriaIcon,
} from '@templates/icons'
import type { StatCardProps } from '@templates/ui/stat.card'
type MetricColor = NonNullable<StatCardProps['color']>

const icons: Record<string, AriaIcon> = {
  'Total clients': Building2,
  'Active clients': UserCheck,
  'Prospective clients': UserPlus,
  'Client projects': FolderOpen,
  'Total projects': FolderOpen,
  'Active projects': FolderOpen,
  'Completed projects': CircleCheck,
  'Total tasks': ListChecks,
  'Open tasks': ListChecks,
  'In progress': Clock,
  'Completed tasks': CircleCheck,
  'Overdue tasks': TriangleAlert,
  'Total invoices': Receipt,
  Outstanding: Wallet,
  'Overdue invoices': TriangleAlert,
  'Paid amount': Banknote,
  'Total documents': FileText,
  Drafts: FileText,
  Published: CircleCheck,
  'Knowledge categories': Layers,
  'Scheduled events': CalendarDays,
  Today: CalendarDays,
  Upcoming: CalendarDays,
  'Meeting hours': Clock,
  'Catalog products': Package,
  'Active products': Package,
  'Low stock': TriangleAlert,
  'Inventory value': Banknote,
  'Units in stock': Package,
  'Out of stock': TriangleAlert,
  'Needs restocking': Package,
  'Total orders': Receipt,
  'Open orders': Receipt,
  'Awaiting fulfillment': Clock,
  'In transit': Truck,
  'Order value': Wallet,
  Customers: Users,
  'Active customers': UserCheck,
  Cities: Building2,
  'Repeat customers': Users,
  Courses: FileText,
  'Published courses': CircleCheck,
  Lessons: Layers,
  Enrollments: Mail,
  Students: Users,
  'Active learners': UserCheck,
  Organizations: Building2,
  'Completed courses': CircleCheck,
  'Lessons completed': CircleCheck,
  'Average progress': Percent,
}
export function metricVisual(label: string): { icon: AriaIcon; color: MetricColor } {
  const color: MetricColor = /Overdue|Out of stock/.test(label)
    ? 'error'
    : /Low stock|Needs restocking|Outstanding|Awaiting/.test(label)
      ? 'warning'
      : /Active|Completed|Published|Paid|completed/.test(label)
        ? 'success'
        : 'primary'
  return { icon: icons[label] ?? Layers, color }
}
