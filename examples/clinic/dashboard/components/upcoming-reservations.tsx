import { useI18n } from '../../../../src/template/i18n'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { DataTable, type ColumnDef } from '@/template/ui'
import { StatusBadge } from '@/template/ui/status-badge/status-badge'
import { useWorkspace } from '../../workspace/workspace-context'
import { directories } from '../../data/directories'
import type { DirectoryRecord } from '../../types'

export function UpcomingReservations() {
  const { t: tr, text: localize, locale } = useI18n()

  const { records } = useWorkspace()
  const reservations = records.reservations ?? directories.reservations.records
  const columns: ColumnDef<DirectoryRecord>[] = [
    {
      id: 'patient',
      header: 'Patient',
      accessor: 'name',
      cell: (record, index) => (
        <span className="directory-name">
          <span className={`initial-avatar initial-avatar--${index}`}>
            {record.name
              .split(' ')
              .map((part) => part[0])
              .slice(0, 2)
              .join('')}
          </span>
          <strong>{record.name}</strong>
        </span>
      ),
    },
    { id: 'treatment', header: 'Treatment', accessor: 'detail' },
    {
      id: 'appointment',
      header: 'Appointment',
      accessor: 'value',
      cell: (record) =>
        /^\d{4}-\d{2}-\d{2}T/.test(record.value)
          ? new Date(record.value).toLocaleString(locale, {
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
            })
          : record.value,
    },
    {
      id: 'status',
      header: 'Status',
      cell: (record) => (
        <StatusBadge status={record.status.toLowerCase()} label={localize(record.status)} />
      ),
    },
  ]
  return (
    <section className="panel appointments-panel">
      <div className="panel-heading">
        <div>
          <h3>{tr('Upcoming reservations')}</h3>
          <p>{tr('A warm welcome starts with a little preparation.')}</p>
        </div>
        <Link to="/reservations" className="text-link">
          {tr('View all')}
          <ArrowUpRight size={14} />
        </Link>
      </div>
      <DataTable
        data={reservations.slice(0, 4)}
        columns={columns}
        getRowId={(record) => record.id}
        pagination={false}
        aria-label={tr('Upcoming reservations')}
      />
    </section>
  )
}
