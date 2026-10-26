import { useI18n } from '../../../../src/template/i18n'
import { CircleDollarSign, TrendingUp } from 'lucide-react'
import { useWorkspace } from '../../workspace/workspace-context'
import { currency, stockStatus } from '../../lib/utils'

export function StockSummary() {
  const { t: tr, text: localize } = useI18n()

  const { products } = useWorkspace()
  const inStock = products.filter((product) => stockStatus(product) === 'in-stock').length
  const lowStock = products.filter((product) => stockStatus(product) === 'low-stock').length
  const outOfStock = products.filter((product) => stockStatus(product) === 'out-of-stock').length
  const value = products.reduce((sum, product) => sum + product.price * product.stock, 0)
  const formattedValue = currency(value, 2)
  return (
    <section className="stock-summary" aria-label={tr('Stock overview')}>
      <div className="asset-summary">
        <span className="asset-icon">
          <CircleDollarSign size={23} strokeWidth={1.7} />
        </span>
        <div>
          <span className="eyebrow">{tr('Total asset value')}</span>
          <div className="asset-value">
            {formattedValue.slice(0, -3)}
            <span className="asset-decimals">{formattedValue.slice(-3)}</span>
          </div>
          <span className="asset-caption">
            <TrendingUp size={12} />
            {' ' + tr('Your inventory, at a glance')}
          </span>
        </div>
      </div>
      <div className="stock-distribution">
        <div className="stock-count">
          <strong>{products.length}</strong>
          <span>{tr('products in your inventory')}</span>
          <span className="live-label">
            <span />
            {tr('Live overview')}
          </span>
        </div>
        <div
          className="distribution-bar"
          role="img"
          aria-label={tr('{{value0}} in stock, {{value1}} low stock, {{value2}} out of stock', {
            value0: localize(inStock),
            value1: localize(lowStock),
            value2: localize(outOfStock),
          })}
        >
          <span style={{ flex: inStock }} className="distribution-bar--in" />
          <span style={{ flex: lowStock }} className="distribution-bar--low" />
          <span style={{ flex: outOfStock }} className="distribution-bar--out" />
        </div>
        <div className="distribution-legend">
          <span>
            <i className="dot dot--mint" />
            {tr('In stock:')}
            <strong>{inStock}</strong>
          </span>
          <span>
            <i className="dot dot--amber" />
            {tr('Low stock:')}
            <strong>{lowStock}</strong>
          </span>
          <span>
            <i className="dot dot--rose" />
            {tr('Out of stock:')}
            <strong>{outOfStock}</strong>
          </span>
        </div>
      </div>
      <div className="summary-note">
        <span className="summary-note-icon">✦</span>
        <span>
          {tr('A well-stocked clinic.')}
          <br />
          <strong>{tr('A little less to worry about.')}</strong>
        </span>
      </div>
    </section>
  )
}
