import { useI18n } from '../../../../src/template/i18n'
import { Check, FileText, Users } from 'lucide-react'
import type { DirectoryRecord } from '../../types'

export function DirectoryStats({
  records,
  primaryStatus,
}: {
  records: DirectoryRecord[]
  primaryStatus: string
}) {
  const { text: localize } = useI18n()

  const primary = records.filter((record) => record.status === primaryStatus).length
  return (
    <div className="mini-stats">
      {[
        { label: 'Total records', value: records.length, icon: Users, color: 'blue' },
        { label: primaryStatus, value: primary, icon: Check, color: 'mint' },
        {
          label: 'Other statuses',
          value: records.length - primary,
          icon: FileText,
          color: 'violet',
        },
      ].map(({ label, value, icon: Icon, color }) => (
        <div key={label}>
          <span className={`stat-icon stat-icon--${color}`}>
            <Icon size={20} />
          </span>
          <span>
            <small>{localize(label)}</small>
            <strong>{value}</strong>
          </span>
        </div>
      ))}
    </div>
  )
}
