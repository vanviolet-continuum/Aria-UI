import { Eye } from 'lucide-react'
import { I18nText, useI18n } from '@/template/i18n'
import { Badge, IconButton, toast, type ColumnDef, type TableFilterDef } from '@/template/ui'
import { members, type Member } from '../data/members'

export interface ProjectMember extends Member {
  department: string
  joined: string
}
function MemberAction({ member }: { member: ProjectMember }) {
  const { t } = useI18n()
  return (
    <IconButton
      label={t('View {{name}}', { name: member.name })}
      size="sm"
      variant="text"
      onClick={() =>
        toast.info(member.name, { description: `${t(member.role)} · ${t(member.department)}` })
      }
    >
      <Eye size={15} />
    </IconButton>
  )
}
export const projectMembers: ProjectMember[] = members.map((member, index) => ({
  ...member,
  department: ['Product', 'Engineering', 'Operations'][index % 3],
  joined: `2026-${String((index % 9) + 1).padStart(2, '0')}-${String((index % 25) + 1).padStart(2, '0')}`,
}))
export const memberFilters: TableFilterDef<ProjectMember>[] = [
  {
    id: 'status',
    label: 'Status',
    type: 'choice',
    options: [...new Set(members.map((row) => row.status))].map((value) => ({
      value,
      label: value,
    })),
  },
  {
    id: 'department',
    label: 'Department',
    type: 'choice',
    options: ['Product', 'Engineering', 'Operations'].map((value) => ({ value, label: value })),
  },
  { id: 'joined', label: 'Joined', type: 'date' },
]
export const memberColumns: ColumnDef<ProjectMember>[] = [
  {
    id: 'name',
    header: 'Member',
    accessor: 'name',
    sortable: true,
    width: 210,
    enableHiding: false,
    cell: (row) => <strong>{row.name}</strong>,
  },
  { id: 'email', header: 'Email address', accessor: 'email', width: 245 },
  {
    id: 'role',
    header: 'Role',
    accessor: 'role',
    sortable: true,
    width: 175,
    cell: (row) => <I18nText>{row.role}</I18nText>,
  },
  {
    id: 'department',
    header: 'Department',
    accessor: 'department',
    sortable: true,
    width: 165,
    cell: (row) => <I18nText>{row.department}</I18nText>,
  },
  {
    id: 'status',
    header: 'Status',
    accessor: 'status',
    sortable: true,
    width: 130,
    cell: (row) => (
      <Badge
        dot
        variant={row.status === 'Active' ? 'success' : row.status === 'Away' ? 'warning' : 'violet'}
      >
        {row.status}
      </Badge>
    ),
  },
  {
    id: 'projects',
    header: 'Projects',
    accessor: 'projects',
    sortable: true,
    width: 105,
    align: 'center',
  },
  { id: 'joined', header: 'Joined', accessor: 'joined', sortable: true, width: 145 },
  {
    id: 'actions',
    header: 'Actions',
    width: 90,
    align: 'center',
    cell: (row) => <MemberAction member={row} />,
  },
]
