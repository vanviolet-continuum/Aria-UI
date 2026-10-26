import { useI18n } from '../../../../src/template/i18n'
import { Link } from 'react-router-dom'
import { ArrowDownRight, Plus } from 'lucide-react'
import { useWorkspace } from '../../workspace/workspace-context'
import { Button } from '@/template/ui'
import { DashboardStats } from '../components/dashboard-stats'
import { RevenueChart } from '../components/revenue-chart'
import { StockAttention } from '../components/stock-attention'
import { UpcomingReservations } from '../components/upcoming-reservations'
export function DashboardPage() {
  const { t: tr } = useI18n()

  const { settings } = useWorkspace()
  return (
    <div className="standard-page dashboard-page page-enter">
      <div className="dashboard-welcome">
        <div>
          <span className="eyebrow">
            {settings.clinicName}
            {' ' + tr('workspace')}
          </span>
          <h2>
            {tr('Welcome back, Darrell') + ' '}
            <span className="welcome-star">✦</span>
          </h2>
          <p>{tr('Here’s what’s happening at your practice.')}</p>
        </div>
        <Link className="button button--primary button--md" to="/reservations?new=1">
          <Plus size={15} />
          {tr('New reservation')}
        </Link>
      </div>
      <DashboardStats />
      <div className="dashboard-grid">
        <RevenueChart />
        <StockAttention />
      </div>
      <UpcomingReservations />
      <div className="dashboard-note">
        <ArrowDownRight size={14} />
        {tr('A clear head starts with a clear workspace.')}
        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' })
          }
        >
          {tr('Back to top')}
        </Button>
      </div>
    </div>
  )
}
