import { z } from 'zod'

const title = z
  .string()
  .trim()
  .min(2, 'Enter at least 2 characters.')
  .max(120, 'Use no more than 120 characters.')
const text = z.string().max(5000, 'Use no more than 5000 characters.')
const date = z.iso.date('Choose a valid date.')
const base = { id: z.string(), createdAt: z.iso.datetime(), updatedAt: z.iso.datetime() }

export const clientValuesSchema = z.object({
  name: title,
  contact: title,
  email: z.email('Enter a valid email address.'),
  phone: z.string(),
  industry: z.string(),
  status: z.enum(['lead', 'active', 'inactive']),
  address: z.string(),
  notes: text,
})
export const projectValuesSchema = z.object({
  name: title,
  clientId: z.string(),
  ownerId: z.string(),
  status: z.enum(['planning', 'active', 'completed', 'archived']),
  dueDate: date,
  budget: z.number().min(0, 'Enter a positive amount.'),
  description: text,
})
export const taskValuesSchema = z.object({
  name: title,
  projectId: z.string(),
  assigneeId: z.string(),
  status: z.enum(['todo', 'in.progress', 'done']),
  priority: z.enum(['low', 'medium', 'high']),
  dueDate: date,
  description: text,
})
export const invoiceValuesSchema = z
  .object({
    number: title,
    clientId: z.string().min(1, 'Choose a client.'),
    projectId: z.string(),
    status: z.enum(['draft', 'sent', 'paid']),
    amount: z.number().min(1, 'Enter an amount greater than zero.'),
    issuedDate: date,
    dueDate: date,
    notes: text,
  })
  .refine((value) => value.dueDate >= value.issuedDate, {
    path: ['dueDate'],
    message: 'The due date must be on or after the issue date.',
  })
export const documentValuesSchema = z.object({
  name: title,
  category: z.enum(['guide', 'policy', 'design', 'meeting']),
  authorId: z.string(),
  status: z.enum(['draft', 'published']),
  body: z
    .string()
    .trim()
    .min(10, 'Write at least 10 characters.')
    .max(20000, 'Use no more than 20000 characters.'),
})
export const meetingValuesSchema = z.object({
  name: title,
  projectId: z.string(),
  day: date,
  time: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'Choose a valid time.'),
  duration: z
    .number()
    .min(15, 'Use at least 15 minutes.')
    .max(480, 'Use no more than 480 minutes.'),
  location: z.string(),
  attendees: z.array(z.string()),
  description: text,
})

export const recordSchemas = {
  clients: clientValuesSchema.extend(base),
  projects: projectValuesSchema.extend(base),
  tasks: taskValuesSchema.extend(base),
  invoices: invoiceValuesSchema.safeExtend(base),
  documents: documentValuesSchema.extend(base),
  meetings: meetingValuesSchema.extend(base),
}
export const valueSchemas = {
  clients: clientValuesSchema,
  projects: projectValuesSchema,
  tasks: taskValuesSchema,
  invoices: invoiceValuesSchema,
  documents: documentValuesSchema,
  meetings: meetingValuesSchema,
}
export const operationsSchema = z.object({
  version: z.literal(1),
  clients: z.array(recordSchemas.clients),
  projects: z.array(recordSchemas.projects),
  tasks: z.array(recordSchemas.tasks),
  invoices: z.array(recordSchemas.invoices),
  documents: z.array(recordSchemas.documents),
  meetings: z.array(recordSchemas.meetings),
})
export type OperationsData = z.infer<typeof operationsSchema>
export type Collection = keyof typeof recordSchemas
export type Records = { [K in Collection]: z.infer<(typeof recordSchemas)[K]> }
export type Values = { [K in Collection]: z.infer<(typeof valueSchemas)[K]> }
export type Client = Records['clients']
export type Project = Records['projects']
export type Task = Records['tasks']
export type Invoice = Records['invoices']
export type DocumentRecord = Records['documents']
export type Meeting = Records['meetings']
export type BaseRecord = { id: string; createdAt: string; updatedAt: string }
export const operationsStorageKey = 'aria-teams-operations-v1'

export function dayKey(value = new Date()) {
  return [
    value.getFullYear(),
    String(value.getMonth() + 1).padStart(2, '0'),
    String(value.getDate()).padStart(2, '0'),
  ].join('-')
}
export function dayAfter(days: number) {
  const value = new Date()
  value.setDate(value.getDate() + days)
  return dayKey(value)
}
export const statusLabels: Record<string, string> = {
  lead: 'Lead',
  active: 'Active',
  inactive: 'Inactive',
  planning: 'Planning',
  completed: 'Completed',
  archived: 'Archived',
  todo: 'To do',
  'in.progress': 'In progress',
  done: 'Done',
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  draft: 'Draft',
  sent: 'Sent',
  paid: 'Paid',
  overdue: 'Overdue',
  guide: 'Guide',
  policy: 'Policy',
  design: 'Design',
  meeting: 'Meeting notes',
  published: 'Published',
}
export function invoiceStatus(invoice: Invoice) {
  return invoice.status === 'sent' && invoice.dueDate < dayKey() ? 'overdue' : invoice.status
}
export function displayName(record: Records[Collection]) {
  return 'number' in record ? record.number : record.name
}
export function createOperations(users: readonly { id: string }[]): OperationsData {
  const stamp = new Date().toISOString()
  const meta = (id: string) => ({ id, createdAt: stamp, updatedAt: stamp })
  const owner = (index: number) => users[index % Math.max(1, users.length)]?.id ?? ''
  return {
    version: 1,
    clients: [
      {
        ...meta('client-1'),
        name: 'Luma Coffee',
        contact: 'Aditya Rahman',
        email: 'aditya@luma.example',
        phone: '+62 812 3344 5566',
        industry: 'Food & beverage',
        status: 'active',
        address: 'Jakarta, Indonesia',
        notes: 'Brand and e-commerce partner since 2025.',
      },
      {
        ...meta('client-2'),
        name: 'Orbit Labs',
        contact: 'Clara Wijaya',
        email: 'clara@orbit.example',
        phone: '+62 811 2200 8899',
        industry: 'Technology',
        status: 'active',
        address: 'Bandung, Indonesia',
        notes: 'Quarterly product design and engineering support.',
      },
      {
        ...meta('client-3'),
        name: 'Nusa Living',
        contact: 'Kevin Saputra',
        email: 'kevin@nusa.example',
        phone: '+62 813 7788 9900',
        industry: 'Retail',
        status: 'active',
        address: 'Surabaya, Indonesia',
        notes: 'Focus on a simpler shopping experience.',
      },
      {
        ...meta('client-4'),
        name: 'Bloom Studio',
        contact: 'Sofia Putri',
        email: 'sofia@bloom.example',
        phone: '+62 815 2233 4455',
        industry: 'Creative',
        status: 'lead',
        address: 'Bali, Indonesia',
        notes: 'Discovery call scheduled for next week.',
      },
    ],
    projects: [
      {
        ...meta('project-1'),
        name: 'Luma online store',
        clientId: 'client-1',
        ownerId: owner(0),
        status: 'active',
        dueDate: dayAfter(18),
        budget: 48000000,
        description:
          'A warm, welcoming storefront for Luma Coffee. Includes product pages, checkout, and a subscription flow.',
      },
      {
        ...meta('project-2'),
        name: 'Orbit product dashboard',
        clientId: 'client-2',
        ownerId: owner(1),
        status: 'active',
        dueDate: dayAfter(10),
        budget: 72000000,
        description:
          'Bring reporting, team collaboration, and daily operations into one clear product dashboard.',
      },
      {
        ...meta('project-3'),
        name: 'Nusa brand refresh',
        clientId: 'client-3',
        ownerId: owner(2),
        status: 'planning',
        dueDate: dayAfter(35),
        budget: 32000000,
        description:
          'A refreshed visual identity and a practical design system for every customer touchpoint.',
      },
      {
        ...meta('project-4'),
        name: 'Workspace onboarding',
        clientId: '',
        ownerId: owner(0),
        status: 'completed',
        dueDate: dayAfter(-5),
        budget: 8000000,
        description: 'Improve the first-week experience for new teammates.',
      },
    ],
    tasks: [
      {
        ...meta('task-1'),
        name: 'Finalize storefront wireframes',
        projectId: 'project-1',
        assigneeId: owner(0),
        status: 'done',
        priority: 'high',
        dueDate: dayAfter(-1),
        description:
          'Review the homepage, product detail, and checkout wireframes with the client.',
      },
      {
        ...meta('task-2'),
        name: 'Build product page components',
        projectId: 'project-1',
        assigneeId: owner(1),
        status: 'in.progress',
        priority: 'high',
        dueDate: dayAfter(3),
        description: 'Create reusable product cards, image gallery, and delivery details.',
      },
      {
        ...meta('task-3'),
        name: 'Prepare coffee product photography',
        projectId: 'project-1',
        assigneeId: owner(2),
        status: 'todo',
        priority: 'medium',
        dueDate: dayAfter(7),
        description: 'Collect final assets and write accessible image descriptions.',
      },
      {
        ...meta('task-4'),
        name: 'Design reporting widgets',
        projectId: 'project-2',
        assigneeId: owner(0),
        status: 'in.progress',
        priority: 'high',
        dueDate: dayAfter(2),
        description: 'Cover revenue trends, usage summaries, and team performance.',
      },
      {
        ...meta('task-5'),
        name: 'Review table interactions',
        projectId: 'project-2',
        assigneeId: owner(1),
        status: 'todo',
        priority: 'medium',
        dueDate: dayAfter(5),
        description: 'Confirm filters, sorting, pagination, and empty states.',
      },
      {
        ...meta('task-6'),
        name: 'Document API requirements',
        projectId: 'project-2',
        assigneeId: owner(3),
        status: 'done',
        priority: 'medium',
        dueDate: dayAfter(-2),
        description: 'Write down data contracts and integration questions.',
      },
      {
        ...meta('task-7'),
        name: 'Collect brand references',
        projectId: 'project-3',
        assigneeId: owner(2),
        status: 'todo',
        priority: 'low',
        dueDate: dayAfter(12),
        description: 'Create a focused mood board for the discovery workshop.',
      },
      {
        ...meta('task-8'),
        name: 'Publish onboarding checklist',
        projectId: 'project-4',
        assigneeId: owner(0),
        status: 'done',
        priority: 'low',
        dueDate: dayAfter(-5),
        description: 'Share the checklist in the document library.',
      },
    ],
    invoices: [
      {
        ...meta('invoice-1'),
        number: 'INV-2026-001',
        clientId: 'client-1',
        projectId: 'project-1',
        status: 'paid',
        amount: 24000000,
        issuedDate: dayAfter(-20),
        dueDate: dayAfter(-10),
        notes: 'Initial project deposit. This is sample data, not a real payment.',
      },
      {
        ...meta('invoice-2'),
        number: 'INV-2026-002',
        clientId: 'client-2',
        projectId: 'project-2',
        status: 'sent',
        amount: 36000000,
        issuedDate: dayAfter(-15),
        dueDate: dayAfter(-2),
        notes: 'First delivery milestone.',
      },
      {
        ...meta('invoice-3'),
        number: 'INV-2026-003',
        clientId: 'client-3',
        projectId: 'project-3',
        status: 'draft',
        amount: 16000000,
        issuedDate: dayKey(),
        dueDate: dayAfter(14),
        notes: 'Discovery and brand strategy.',
      },
      {
        ...meta('invoice-4'),
        number: 'INV-2026-004',
        clientId: 'client-1',
        projectId: 'project-1',
        status: 'sent',
        amount: 24000000,
        issuedDate: dayAfter(-3),
        dueDate: dayAfter(11),
        notes: 'Final storefront delivery milestone.',
      },
    ],
    documents: [
      {
        ...meta('document-1'),
        name: 'Welcome to North Studio',
        category: 'guide',
        authorId: owner(0),
        status: 'published',
        body: '# A good first week\n\nStart by meeting your project team and reviewing the current priorities. Your workspace brings people, projects, and decisions together.\n\n## Your checklist\n\n1. Complete your profile.\n2. Review your assigned tasks.\n3. Read the project brief.\n4. Join the weekly planning session.\n\nAsk questions early. Good collaboration starts with clear expectations.',
      },
      {
        ...meta('document-2'),
        name: 'Design handoff checklist',
        category: 'design',
        authorId: owner(2),
        status: 'published',
        body: '# Ready for handoff\n\nUse shared components, theme tokens, and meaningful names. Include mobile layouts and the loading, empty, and error states.\n\n## Before sharing\n\n- Describe the interaction.\n- Link the relevant project.\n- Add accessible labels.\n- Record any open questions.\n\nKeep the brief clear enough for someone new to the project.',
      },
      {
        ...meta('document-3'),
        name: 'Remote collaboration policy',
        category: 'policy',
        authorId: owner(0),
        status: 'published',
        body: '# Working together\n\nShare your priorities at the start of the week. Use task comments for decisions and meeting notes for longer discussions.\n\n## Communication\n\nProtect focus time, make meeting agendas clear, and leave useful context for teammates in other time zones.\n\nThis document contains sample workspace content for the demo.',
      },
      {
        ...meta('document-4'),
        name: 'Orbit weekly planning',
        category: 'meeting',
        authorId: owner(1),
        status: 'draft',
        body: '# Weekly planning\n\nReview the reporting widgets and confirm the delivery plan.\n\n## Open questions\n\n- Which metrics are required for the first release?\n- Who will review the integration contracts?\n- Are the empty states ready for content review?',
      },
    ],
    meetings: [
      {
        ...meta('meeting-1'),
        name: 'Luma design review',
        projectId: 'project-1',
        day: dayAfter(1),
        time: '10:00',
        duration: 60,
        location: 'Google Meet · demo',
        attendees: [owner(0), owner(2)].filter(Boolean),
        description: 'Walk through the storefront direction and collect feedback.',
      },
      {
        ...meta('meeting-2'),
        name: 'Orbit sprint planning',
        projectId: 'project-2',
        day: dayAfter(2),
        time: '09:00',
        duration: 45,
        location: 'Meeting room A',
        attendees: [owner(0), owner(1), owner(3)].filter(Boolean),
        description: 'Confirm this week’s priorities and ownership.',
      },
      {
        ...meta('meeting-3'),
        name: 'Studio weekly sync',
        projectId: '',
        day: dayKey(),
        time: '14:00',
        duration: 30,
        location: 'Studio lounge',
        attendees: users.slice(0, 5).map((user) => user.id),
        description: 'A quick update on projects, capacity, and upcoming work.',
      },
    ],
  }
}
