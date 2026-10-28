import { HandshakeIllustration } from '@templates/ui/illustrations/business/handshake.illustration'
import { ProjectPlanningIllustration } from '@templates/ui/illustrations/business/project.planning.illustration'
import { TasksIllustration } from '@templates/ui/illustrations/workspace/tasks.illustration'
import { CalendarIllustration } from '@templates/ui/illustrations/workspace/calendar.illustration'
import { AnalyticsIllustration } from '@templates/ui/illustrations/workspace/analytics.illustration'
import { SettingsIllustration } from '@templates/ui/illustrations/workspace/settings.illustration'
import { InvoiceIllustration } from '@templates/ui/illustrations/commerce/invoice.illustration'
import { ShippingBoxIllustration } from '@templates/ui/illustrations/commerce/shipping.box.illustration'
import { ShoppingCartIllustration } from '@templates/ui/illustrations/commerce/shopping.cart.illustration'
import { PalletStackIllustration } from '@templates/ui/illustrations/commerce/pallet.stack.illustration'
import { DocumentsIllustration } from '@templates/ui/illustrations/files/documents.illustration'
import { FolderIllustration } from '@templates/ui/illustrations/files/folder.illustration'
import { CoursePlaylistIllustration } from '@templates/ui/illustrations/education/course.playlist.illustration'
import { NotebookIllustration } from '@templates/ui/illustrations/education/notebook.illustration'
import { AttendanceIllustration } from '@templates/ui/illustrations/education/attendance.illustration'
import { LearningAppIllustration } from '@templates/ui/illustrations/education/learning.app.illustration'
import { DesignToolsIllustration } from '@templates/ui/illustrations/creative/design.tools.illustration'
import type { ComponentType } from 'react'
import type { IllustrationProps } from '@templates/ui/illustrations/illustration.types'

/** Small demo registry; business choices stay out of the portable kit. */
const artwork: Record<string, ComponentType<IllustrationProps>> = {
  'Your workspace, connected.': AnalyticsIllustration,
  Clients: HandshakeIllustration,
  Customers: HandshakeIllustration,
  Projects: ProjectPlanningIllustration,
  Tasks: TasksIllustration,
  Calendar: CalendarIllustration,
  Invoices: InvoiceIllustration,
  Documents: DocumentsIllustration,
  Products: ShippingBoxIllustration,
  Orders: ShoppingCartIllustration,
  Inventory: PalletStackIllustration,
  Courses: CoursePlaylistIllustration,
  Students: NotebookIllustration,
  Users: AttendanceIllustration,
  Enrollments: AttendanceIllustration,
  Classroom: LearningAppIllustration,
  'Course builder': CoursePlaylistIllustration,
  'Learning overview': LearningAppIllustration,
  'Store overview': ShoppingCartIllustration,
  Home: AnalyticsIllustration,
  Dashboard: AnalyticsIllustration,
  Settings: SettingsIllustration,
  Activity: AnalyticsIllustration,
  Components: DesignToolsIllustration,
  Icons: DesignToolsIllustration,
  Illustrations: DesignToolsIllustration,
}
export function ModuleArtwork({ subject }: { subject: string }) {
  const Illustration = artwork[subject] ?? FolderIllustration
  return <Illustration size="100%" />
}
