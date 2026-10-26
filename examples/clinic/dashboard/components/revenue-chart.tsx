import { useI18n } from '../../../../src/template/i18n'
import { useState } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { currency } from '../../lib/utils'
import { Combobox } from '@/template/ui/combobox/combobox'
const weekly = [
  { day: 'Mon', revenue: 1240 },
  { day: 'Tue', revenue: 1820 },
  { day: 'Wed', revenue: 1460 },
  { day: 'Thu', revenue: 2590 },
  { day: 'Fri', revenue: 2180 },
  { day: 'Sat', revenue: 3120 },
  { day: 'Sun', revenue: 2680 },
]
const monthly = [
  { day: 'Week 1', revenue: 8240 },
  { day: 'Week 2', revenue: 9820 },
  { day: 'Week 3', revenue: 7460 },
  { day: 'Week 4', revenue: 12590 },
]
export function RevenueChart() {
  const { t: tr } = useI18n()

  const [period, setPeriod] = useState('week')
  return (
    <section className="panel revenue-panel">
      <div className="panel-heading">
        <div>
          <h3>{tr('Revenue overview')}</h3>
          <p>{tr('A healthy practice, one day at a time.')}</p>
        </div>
        <Combobox
          aria-label={tr('Revenue period')}
          value={period}
          onChange={setPeriod}
          options={[
            { value: 'week', label: 'This week' },
            { value: 'month', label: 'This month' },
          ]}
        />
      </div>
      <div className="chart-value">
        {currency(
          (period === 'week' ? weekly : monthly).reduce((sum, day) => sum + day.revenue, 0),
        )}
        <span>{tr('Sample data · October 2026')}</span>
      </div>
      <div className="revenue-chart">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={period === 'week' ? weekly : monthly}
            margin={{ left: -21, right: 10, top: 15, bottom: 0 }}
          >
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.2} />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 5" vertical={false} stroke="var(--border)" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--muted)', fontSize: 11 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'var(--muted)', fontSize: 10 }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              formatter={(value) => [currency(Number(value)), 'Revenue']}
              contentStyle={{
                borderRadius: 'calc(10px * var(--radius-scale))',
                borderColor: 'var(--border)',
                background: 'var(--surface)',
                color: 'var(--text)',
                fontSize: 'calc(12px * var(--font-scale))',
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--primary)"
              strokeWidth={2.5}
              fill="url(#revenueFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
