import { z } from 'zod'
import { createZodSearchCodec } from '@templates/integrations/zod'
import { roles, statuses, departments } from '../../../data/workspace/model'

export const usersSearchCodec = createZodSearchCodec(
  z.object({
    q: z.string().catch(''),
    status: z.array(z.enum(statuses)).catch([]),
    role: z.array(z.enum(roles)).catch([]),
    department: z.array(z.enum(departments)).catch([]),
    joinedFrom: z.iso.date().or(z.literal('')).catch(''),
    joinedTo: z.iso.date().or(z.literal('')).catch(''),
    sort: z.enum(['name', 'role', 'joinedAt']).catch('joinedAt'),
    order: z.enum(['asc', 'desc']).catch('desc'),
    page: z.coerce.number().int().min(1).catch(1),
    pageSize: z.coerce
      .number()
      .refine((value) => [5, 8, 10, 20, 50].includes(value))
      .catch(8),
    panel: z.enum(['', 'add', 'edit', 'detail']).catch(''),
    user: z.string().catch(''),
  }),
  {
    q: '',
    status: [],
    role: [],
    department: [],
    joinedFrom: '',
    joinedTo: '',
    sort: 'joinedAt',
    order: 'desc',
    page: 1,
    pageSize: 8,
    panel: '',
    user: '',
  },
)
