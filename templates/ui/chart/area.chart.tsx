import { useId, type HTMLAttributes } from 'react'
import {
  AreaChart as Chart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import clsx from 'clsx'

export interface AreaChartProps<T extends object> extends HTMLAttributes<HTMLDivElement> {
  data: T[]
  categoryKey: Extract<keyof T, string>
  valueKey: Extract<keyof T, string>
  label: string
  formatValue?: (value: number) => string
  formatAxisValue?: (value: number) => string
  height?: number
  color?: 'primary' | 'success' | 'info' | 'warning' | 'violet'
}
/** One series, theme-aware axes and tooltip. Compose a native chart for multiple series. */
export function AreaChart<T extends object>({
  data,
  categoryKey,
  valueKey,
  label,
  formatValue = String,
  formatAxisValue = formatValue,
  height = 260,
  color = 'primary',
  className,
  ...props
}: AreaChartProps<T>) {
  const gradient = 'chart-' + useId().replace(/[^a-zA-Z0-9]/g, '')
  return (
    <div {...props} role="group" aria-label={label} className={clsx('ui-area-chart', className)}>
      <ResponsiveContainer width="100%" height={height} minWidth={0}>
        <Chart data={data} margin={{ top: 12, right: 12, left: 8, bottom: 0 }} accessibilityLayer>
          <defs>
            <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={'var(--' + color + ')'} stopOpacity={0.22} />
              <stop offset="100%" stopColor={'var(--' + color + ')'} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="var(--border)" strokeDasharray="4 4" />
          <XAxis
            dataKey={categoryKey}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--muted)', fontSize: 'var(--typography-caption-size)' }}
            minTickGap={24}
            tickMargin={12}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'var(--muted)', fontSize: 'var(--typography-caption-size)' }}
            tickFormatter={(value) => formatAxisValue(Number(value))}
            width={64}
          />
          <Tooltip
            cursor={{ stroke: 'var(--primary)', strokeDasharray: '4 4' }}
            formatter={(value) => [formatValue(Number(value)), label]}
            contentStyle={{
              background: 'var(--surface)',
              border: 'var(--border-width) solid var(--border)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text)',
              boxShadow: 'var(--layout-shadow-md)',
            }}
            labelStyle={{ color: 'var(--text-secondary)' }}
          />
          <Area
            dataKey={valueKey}
            name={label}
            type="monotone"
            stroke={'var(--' + color + ')'}
            strokeWidth={2}
            fill={'url(#' + gradient + ')'}
            isAnimationActive={false}
          />
        </Chart>
      </ResponsiveContainer>
    </div>
  )
}
