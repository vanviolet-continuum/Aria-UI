import type { ComponentType } from 'react'
import {
  AccessDeniedIllustration, AnalyticsIllustration, CalendarIllustration,
  EmptyIllustration, ErrorIllustration, LoadingIllustration, MessagesIllustration,
  NotificationsIllustration, NotFoundIllustration, OfflineIllustration,
  SearchIllustration, SuccessIllustration, TeamIllustration, UploadIllustration,
  WelcomeIllustration, type IllustrationProps,
} from '../../template/ui/illustrations'

export type IllustrationCategory = 'states' | 'workspace' | 'files' | 'communication' | 'security'
export interface IllustrationEntry {
  id: string
  name: string
  componentName: string
  description: string
  category: IllustrationCategory
  component: ComponentType<IllustrationProps>
  isNew?: boolean
}

export const illustrationCategories: { id: 'all' | IllustrationCategory; label: string }[] = [
  { id: 'all', label: 'All illustrations' },
  { id: 'states', label: 'States & feedback' },
  { id: 'workspace', label: 'Workspace' },
  { id: 'files', label: 'Files' },
  { id: 'communication', label: 'Communication' },
  { id: 'security', label: 'Security' },
]

export const illustrationCatalog: IllustrationEntry[] = [
  { id: 'welcome', name: 'Welcome', componentName: 'WelcomeIllustration', description: 'Onboarding and new beginnings.', category: 'workspace', component: WelcomeIllustration, isNew: true },
  { id: 'success', name: 'Success', componentName: 'SuccessIllustration', description: 'Completed tasks and successful actions.', category: 'states', component: SuccessIllustration, isNew: true },
  { id: 'error', name: 'Error', componentName: 'ErrorIllustration', description: 'Failed requests and unexpected problems.', category: 'states', component: ErrorIllustration, isNew: true },
  { id: 'offline', name: 'Offline', componentName: 'OfflineIllustration', description: 'Connection lost or a service unavailable.', category: 'states', component: OfflineIllustration, isNew: true },
  { id: 'access-denied', name: 'Access denied', componentName: 'AccessDeniedIllustration', description: 'Restricted pages and protected workspaces.', category: 'security', component: AccessDeniedIllustration, isNew: true },
  { id: 'notifications', name: 'Notifications', componentName: 'NotificationsIllustration', description: 'Updates, reminders, and unread activity.', category: 'communication', component: NotificationsIllustration, isNew: true },
  { id: 'messages', name: 'Messages', componentName: 'MessagesIllustration', description: 'Conversations, comments, and support.', category: 'communication', component: MessagesIllustration, isNew: true },
  { id: 'team', name: 'Team', componentName: 'TeamIllustration', description: 'Members, invitations, and collaboration.', category: 'workspace', component: TeamIllustration, isNew: true },
  { id: 'analytics', name: 'Analytics', componentName: 'AnalyticsIllustration', description: 'Reports, insights, and growing numbers.', category: 'workspace', component: AnalyticsIllustration, isNew: true },
  { id: 'calendar', name: 'Calendar', componentName: 'CalendarIllustration', description: 'Events, bookings, and upcoming plans.', category: 'workspace', component: CalendarIllustration, isNew: true },
  { id: 'empty', name: 'Empty state', componentName: 'EmptyIllustration', description: 'A fresh start before the first record.', category: 'states', component: EmptyIllustration },
  { id: 'search', name: 'No search results', componentName: 'SearchIllustration', description: 'A helpful pause when nothing matches.', category: 'states', component: SearchIllustration },
  { id: 'upload', name: 'Upload', componentName: 'UploadIllustration', description: 'Documents, images, and files on their way.', category: 'files', component: UploadIllustration },
  { id: 'not-found', name: 'Page not found', componentName: 'NotFoundIllustration', description: 'A friendly way back from a missing page.', category: 'states', component: NotFoundIllustration },
  { id: 'loading', name: 'Loading', componentName: 'LoadingIllustration', description: 'A little movement while work happens.', category: 'states', component: LoadingIllustration },
]
