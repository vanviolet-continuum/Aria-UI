import { AnnouncementIllustration } from '../../../template/ui/illustrations/communication/announcement.illustration'
import { EmailSentIllustration } from '../../../template/ui/illustrations/communication/email.sent.illustration'
import { InboxIllustration } from '../../../template/ui/illustrations/communication/inbox.illustration'
import { MessagesIllustration } from '../../../template/ui/illustrations/communication/messages.illustration'
import { NotificationsIllustration } from '../../../template/ui/illustrations/communication/notifications.illustration'
import { PostOfficeIllustration } from '../../../template/ui/illustrations/communication/post.office.illustration'
import type { IllustrationEntry } from './illustration.types'

export const communicationIllustrations: IllustrationEntry[] = [
  {
    id: 'announcement',
    name: 'Announcement',
    componentName: 'AnnouncementIllustration',
    description: 'A megaphone for news worth sharing.',
    category: 'communication',
    isNew: true,
    component: AnnouncementIllustration,
  },
  {
    id: 'email-sent',
    name: 'Email sent',
    componentName: 'EmailSentIllustration',
    description: 'Messages and invitations on their way.',
    category: 'communication',
    isNew: true,
    component: EmailSentIllustration,
  },
  {
    id: 'inbox',
    name: 'Inbox',
    componentName: 'InboxIllustration',
    description: 'Incoming requests and a fresh inbox.',
    category: 'communication',
    isNew: true,
    component: InboxIllustration,
  },
  {
    id: 'messages',
    name: 'Messages',
    componentName: 'MessagesIllustration',
    description: 'Conversations, comments, and support.',
    category: 'communication',
    isNew: true,
    component: MessagesIllustration,
  },
  {
    id: 'notifications',
    name: 'Notifications',
    componentName: 'NotificationsIllustration',
    description: 'Updates, reminders, and unread activity.',
    category: 'communication',
    isNew: true,
    component: NotificationsIllustration,
  },
  {
    id: 'extended-post-office',
    name: 'Post office',
    componentName: 'PostOfficeIllustration',
    description: 'A neighborhood post office with a letter sign and small mailbox.',
    category: 'communication',
    isNew: true,
    component: PostOfficeIllustration,
  },
]
