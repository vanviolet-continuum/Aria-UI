import { I18nText } from '../../../../src/template/i18n'
import { Pencil, Trash2 } from 'lucide-react'
import type { DirectoryConfig } from '../../data/directories'
import type { DirectoryRecord } from '../../types'
import { ActionMenu } from '@/template/ui/action-menu/action-menu'
import { StatusBadge } from '@/template/ui/status-badge/status-badge'
import type { ColumnDef } from '@/template/ui/data-table/types'
import { currentLocale } from '../../lib/utils'

export function directoryColumns(
  config: DirectoryConfig,
  onEdit: (record: DirectoryRecord) => void,
  onDelete: (record: DirectoryRecord) => void,
): ColumnDef<DirectoryRecord>[] {
  return [
    {
      id: 'name',
      header: config.nameLabel,
      accessor: 'name',
      sortable: true,
      cell: (record, index) => (
        <button className="directory-name" onClick={() => onEdit(record)}>
          <span className={`initial-avatar initial-avatar--${index % 4}`}>
            {record.name
              .split(' ')
              .filter((part) => part !== 'Dr.')
              .map((part) => part[0])
              .slice(0, 2)
              .join('')}
          </span>
          <span>
            <strong>{record.name}</strong>
            <small>{record.id}</small>
          </span>
        </button>
      ),
    },
    { id: 'detail', header: config.detailLabel, accessor: 'detail', sortable: true },
    {
      id: 'value',
      header: config.valueLabel,
      accessor: 'value',
      cell: (record) =>
        record.value.includes('T') && /^\d{4}-\d{2}-\d{2}T/.test(record.value)
          ? new Date(record.value).toLocaleString(currentLocale(), {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
            })
          : record.value,
    },
    {
      id: 'status',
      header: 'Status',
      accessor: 'status',
      sortable: true,
      cell: (record) => (
        <StatusBadge
          status={record.status.toLowerCase().replaceAll(' ', '-')}
          label={record.status}
        />
      ),
    },
    {
      id: 'actions',
      header: (
        <span className="sr-only">
          <I18nText>Actions</I18nText>
        </span>
      ),
      width: 45,
      cell: (record) => (
        <ActionMenu
          label={`Actions for ${record.name}`}
          items={[
            {
              id: 'edit',
              label: 'Edit record',
              icon: <Pencil size={15} />,
              onSelect: () => onEdit(record),
            },
            {
              id: 'delete',
              label: 'Delete record',
              icon: <Trash2 size={15} />,
              destructive: true,
              onSelect: () => onDelete(record),
            },
          ]}
        />
      ),
    },
  ]
}
