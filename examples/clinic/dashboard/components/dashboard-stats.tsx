import { useI18n } from '../../../../src/template/i18n'
import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, CircleDollarSign, Package, Users } from 'lucide-react'
import { useWorkspace } from '../../workspace/workspace-context'
import { directories } from '../../data/directories'
import { currency } from '../../lib/utils'
export function DashboardStats() {
  const { t: tr, text: localize } = useI18n()

  const { products, records } = useWorkspace()
  const patients = records.patients ?? directories.patients.records
  const reservations = records.reservations ?? directories.reservations.records
  const value = products.reduce((sum, product) => sum + product.stock * product.price, 0)
  return (
    <div className="dashboard-stats">
      {[
        {
          label: 'Sample revenue',
          value: '$12,840',
          change: '12.8%',
          icon: CircleDollarSign,
          color: 'blue',
          path: '/sales',
        },
        {
          label: 'Reservations',
          value: String(reservations.length).padStart(2, '0'),
          change: 'View schedule',
          icon: CalendarDays,
          color: 'mint',
          path: '/reservations',
        },
        {
          label: 'Total patients',
          value: String(patients.length).padStart(2, '0'),
          change: 'Patient directory',
          icon: Users,
          color: 'violet',
          path: '/patients',
        },
        {
          label: 'Inventory value',
          value: currency(value),
          change: `${products.length} products`,
          icon: Package,
          color: 'peach',
          path: '/stocks',
        },
      ].map(({ label, value: statValue, change, icon: Icon, color, path }) => (
        <Link to={path} className="dashboard-stat" key={label}>
          <div>
            <span>{localize(label)}</span>
            <span className={`stat-icon stat-icon--${color}`}>
              <Icon size={19} />
            </span>
          </div>
          <strong>{statValue}</strong>
          <span className="stat-description">
            {label === 'Sample revenue' ? (
              <span className="positive">
                <ArrowUpRight size={13} />
                {change}
                <small>{' ' + tr('sample comparison')}</small>
              </span>
            ) : (
              <>
                {change}
                <ArrowUpRight size={13} />
              </>
            )}
          </span>
        </Link>
      ))}
    </div>
  )
}
