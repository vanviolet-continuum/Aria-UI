import { useI18n } from '../../../../src/template/i18n'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Download, FileChartColumn, PackageCheck, Timer, Wallet } from 'lucide-react'
import { useWorkspace } from '../../workspace/workspace-context'
import { currency, downloadCsv, orderStatus, orderTotal } from '../../lib/utils'
import { Button } from '@/template/ui/button/button'

export function ReportsPage() {
  const { t: tr } = useI18n()

  const { products, orders } = useWorkspace()
  const categories = [...new Set(products.map((product) => product.category))].map((name) => {
    const items = products.filter((product) => product.category === name)
    return {
      name,
      products: items.length,
      units: items.reduce((sum, item) => sum + item.stock, 0),
      value: items.reduce((sum, item) => sum + item.stock * item.price, 0),
    }
  })
  return (
    <div className="standard-page page-enter">
      <div className="dashboard-welcome">
        <div>
          <span className="eyebrow">{tr('The bigger picture')}</span>
          <h2>{tr('A clearer view of your practice.')}</h2>
          <p>{tr('Your live inventory and order report, all in one place.')}</p>
        </div>
        <Button
          onClick={() =>
            downloadCsv(
              'zendenta-inventory-report.csv',
              ['Category', 'Products', 'Units', 'Value (USD)'],
              categories.map((category) => [
                category.name,
                category.products,
                category.units,
                category.value,
              ]),
            )
          }
        >
          <Download size={15} />
          {tr('Export report')}
        </Button>
      </div>
      <div className="mini-stats">
        <div>
          <span className="stat-icon stat-icon--blue">
            <Wallet size={20} />
          </span>
          <span>
            <small>{tr('Total order value')}</small>
            <strong>{currency(orders.reduce((sum, order) => sum + orderTotal(order), 0))}</strong>
          </span>
        </div>
        <div>
          <span className="stat-icon stat-icon--mint">
            <PackageCheck size={20} />
          </span>
          <span>
            <small>{tr('Completed orders')}</small>
            <strong>{orders.filter((order) => orderStatus(order) === 'complete').length}</strong>
          </span>
        </div>
        <div>
          <span className="stat-icon stat-icon--violet">
            <Timer size={20} />
          </span>
          <span>
            <small>{tr('Awaiting deliveries')}</small>
            <strong>{orders.filter((order) => orderStatus(order) !== 'complete').length}</strong>
          </span>
        </div>
      </div>
      <section className="panel">
        <div className="panel-heading">
          <div>
            <h3>{tr('Inventory value by category')}</h3>
            <p>{tr('Calculated from the current unit prices and stock quantities.')}</p>
          </div>
          <FileChartColumn size={20} className="muted" />
        </div>
        <div className="report-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categories} margin={{ top: 10, right: 25, left: 5, bottom: 20 }}>
              <CartesianGrid vertical={false} strokeDasharray="4 5" stroke="var(--border)" />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: 'var(--muted)' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: 'var(--muted)' }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                cursor={{ fill: 'var(--border)' }}
                formatter={(value) => [currency(Number(value)), 'Stock value']}
                contentStyle={{
                  borderRadius: 'calc(10px * var(--radius-scale))',
                  borderColor: 'var(--border)',
                  background: 'var(--surface)',
                  color: 'var(--text)',
                  fontSize: 'calc(12px * var(--font-scale))',
                }}
              />
              <Bar dataKey="value" fill="var(--primary)" radius={[5, 5, 0, 0]} maxBarSize={65} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="table-scroll">
          <table className="data-table report-table">
            <thead>
              <tr>
                <th>{tr('Category')}</th>
                <th>{tr('Products')}</th>
                <th>{tr('Available units')}</th>
                <th>{tr('Total stock value')}</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.name}>
                  <td>
                    <strong>{category.name}</strong>
                  </td>
                  <td>{category.products}</td>
                  <td>{category.units}</td>
                  <td>{currency(category.value, 2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
