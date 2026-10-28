import { z } from 'zod'

export const roles = ['admin', 'member', 'viewer'] as const
export const statuses = ['active', 'invited', 'inactive'] as const
export const departments = ['design', 'engineering', 'product', 'operations'] as const
export const roleLabels = { admin: 'Administrator', member: 'Member', viewer: 'Viewer' }
export const statusLabels = { active: 'Active', invited: 'Invited', inactive: 'Inactive' }
export const departmentLabels = {
  design: 'Design',
  engineering: 'Engineering',
  product: 'Product',
  operations: 'Operations',
}

export const userValuesSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Enter at least 2 characters.')
    .max(80, 'Use no more than 80 characters.'),
  email: z.string().trim().toLowerCase().pipe(z.email('Enter a valid email address.')),
  role: z.enum(roles),
  status: z.enum(statuses),
  department: z.enum(departments),
  position: z.string().trim().max(80, 'Use no more than 80 characters.'),
  location: z.string().trim().max(80, 'Use no more than 80 characters.'),
  phone: z
    .string()
    .trim()
    .max(30, 'Use no more than 30 characters.')
    .refine((value) => !value || /^[+\d ()-]{6,30}$/.test(value), 'Enter a valid phone number.'),
  notes: z.string().trim().max(500, 'Use no more than 500 characters.'),
})
export type UserValues = z.infer<typeof userValuesSchema>
export const userSchema = userValuesSchema.extend({
  id: z.string().min(1),
  joinedAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
})
export type User = z.infer<typeof userSchema>
export const activitySchema = z.object({
  id: z.string(),
  action: z.enum(['created', 'updated', 'deleted', 'settings']),
  name: z.string(),
  at: z.iso.datetime(),
  entity: z
    .enum([
      'clients',
      'projects',
      'tasks',
      'invoices',
      'documents',
      'meetings',
      'products',
      'customers',
      'orders',
      'courses',
      'students',
      'enrollments',
    ])
    .optional(),
})
export type Activity = z.infer<typeof activitySchema>
export const settingsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Enter at least 2 characters.')
    .max(80, 'Use no more than 80 characters.'),
  description: z.string().max(240, 'Use no more than 240 characters.'),
  notifications: z.boolean(),
})
export const workspaceSchema = z.object({
  version: z.literal(1),
  users: z.array(userSchema),
  activities: z.array(activitySchema),
  settings: settingsSchema,
})
export type WorkspaceData = z.infer<typeof workspaceSchema>

export const emptyUser: UserValues = {
  name: '',
  email: '',
  role: 'member',
  status: 'active',
  department: 'design',
  position: '',
  location: '',
  phone: '',
  notes: '',
}
export const workspaceStorageKey = 'aria-teams-workspace-v1'

export function createWorkspace(now = new Date()): WorkspaceData {
  const names = [
    'Nadia Putri',
    'Rafi Pratama',
    'Maya Sari',
    'Dimas Wijaya',
    'Alya Rahma',
    'Bima Saputra',
    'Intan Permata',
    'Fajar Hidayat',
    'Citra Dewi',
    'Arga Kusuma',
    'Salsa Amalia',
    'Raka Aditya',
  ]
  const users: User[] = names.map((name, index) => {
    const department = departments[index % departments.length]
    const date = new Date(now.getTime() - (index * 3 + 1) * 86400000).toISOString()
    return {
      ...emptyUser,
      id: `user-${index + 1}`,
      name,
      email: `${name.split(' ')[0].toLowerCase()}@northstudio.example`,
      role: index < 2 ? 'admin' : index === 9 ? 'viewer' : 'member',
      status: index === 3 ? 'inactive' : [4, 7, 10].includes(index) ? 'invited' : 'active',
      department,
      position: [
        'Product designer',
        'Frontend engineer',
        'Product manager',
        'Operations specialist',
      ][index % 4],
      location: ['Jakarta', 'Bandung', 'Surabaya'][index % 3],
      joinedAt: date,
      updatedAt: date,
    }
  })
  return {
    version: 1,
    users,
    activities: users.slice(0, 5).map((user) => ({
      id: `activity-${user.id}`,
      action: 'created',
      name: user.name,
      at: user.joinedAt,
    })),
    settings: {
      name: 'North Studio',
      description: 'Designing useful things, together.',
      notifications: true,
    },
  }
}

export class UserValidationError extends Error {
  field: 'email' | undefined
  constructor(message: string, field?: 'email') {
    super(message)
    this.field = field
  }
}

export function saveUser(
  data: WorkspaceData,
  input: UserValues,
  id?: string,
  now = new Date(),
): WorkspaceData {
  const values = userValuesSchema.parse(input)
  if (id && !data.users.some((user) => user.id === id))
    throw new UserValidationError('This user no longer exists.')
  if (data.users.some((user) => user.id !== id && user.email.toLowerCase() === values.email))
    throw new UserValidationError('This email is already used by another user.', 'email')
  const at = now.toISOString()
  const existing = data.users.find((user) => user.id === id)
  const user: User = {
    ...values,
    id: id ?? crypto.randomUUID(),
    joinedAt: existing?.joinedAt ?? at,
    updatedAt: at,
  }
  return {
    ...data,
    users: existing
      ? data.users.map((item) => (item.id === id ? user : item))
      : [user, ...data.users],
    activities: [
      {
        id: crypto.randomUUID(),
        action: (id ? 'updated' : 'created') as Activity['action'],
        name: user.name,
        at,
      },
      ...data.activities,
    ].slice(0, 100),
  }
}

export function deleteUsers(data: WorkspaceData, ids: string[], now = new Date()): WorkspaceData {
  const deleted = data.users.filter((user) => ids.includes(user.id))
  return {
    ...data,
    users: data.users.filter((user) => !ids.includes(user.id)),
    activities: [
      ...deleted.map((user) => ({
        id: crypto.randomUUID(),
        action: 'deleted' as const,
        name: user.name,
        at: now.toISOString(),
      })),
      ...data.activities,
    ].slice(0, 100),
  }
}
