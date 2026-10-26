import { useI18n } from '../../../../src/template/i18n'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Package } from 'lucide-react'
import { useWorkspace } from '../../workspace/workspace-context'
import { stockStatus } from '../../lib/utils'
export function StockAttention() {
  const { t: tr } = useI18n()

  const { products } = useWorkspace()
  const attention = products.filter((product) => stockStatus(product) !== 'in-stock')
  return (
    <section className="panel attention-panel">
      <div className="panel-heading">
        <div>
          <h3>{tr('A little stock check')}</h3>
          <p>{tr('Keep the essentials within reach.')}</p>
        </div>
        <span className="notification-count">{attention.length}</span>
      </div>
      <div className="attention-list">
        {attention.slice(0, 4).map((product) => (
          <Link to={`/stocks?tab=inventory&q=${encodeURIComponent(product.sku)}`} key={product.id}>
            <span className={`product-icon product-icon--${product.color}`}>
              <Package size={18} />
            </span>
            <span>
              <strong>{product.name}</strong>
              <small>
                {product.stock === 0 ? tr('Out of stock') : `${product.stock} units remaining`}
              </small>
            </span>
            <ChevronRight size={15} />
          </Link>
        ))}
      </div>
      <Link className="panel-footer-link" to="/stocks?tab=inventory&status=attention">
        {tr('View inventory')}
        <ArrowRight size={15} />
      </Link>
    </section>
  )
}
