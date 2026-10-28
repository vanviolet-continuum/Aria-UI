import { Link } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { Card, CardBody, CardHeader } from '@templates/ui/card'
import { Button } from '@templates/ui/button'
import { Text } from '@templates/ui/text'
import { AreaChart } from '@templates/ui/chart'
import { ShoppingCartIllustration } from '@templates/ui/illustrations/commerce/shopping.cart.illustration'
import { Package, ShoppingCart, Users, Store, ArrowRight } from '@templates/icons'
import { CasePage, CaseHero, CaseLink } from '../../../components/scenario.shared'
import { RecordMetrics, RecordStatus, money } from '../../../components/record.display'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import { dayKey, dayAfter } from '../../../data/operations/model'

export default function CommerceOverview() {
  const { t, locale } = useI18n(),
    { data } = useScenarios()
  const active = data.orders.filter((item) => item.status !== 'cancelled')
  const volume = active.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
  const revenue = Array.from({ length: 7 }, (_, n) => {
    const day = dayAfter(n - 6)
    return {
      day: new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(
        new Date(day + 'T12:00:00'),
      ),
      value: active
        .filter((item) => dayKey(new Date(item.createdAt)) === day)
        .reduce((sum, item) => sum + item.quantity * item.unitPrice, 0),
    }
  })
  return (
    <CasePage
      title="Store overview"
      eyebrow="Commerce"
      description="A small store with all the moving parts connected."
    >
      <CaseHero
        eyebrow="Aria Supply"
        title="Good things, thoughtfully delivered."
        description="Manage a curated product catalog, follow every order, and keep inventory ready for what comes next."
        art={<ShoppingCartIllustration size={250} />}
      >
        <Link to="/preview/commerce/products">
          <Button variant="outlined">{t('Explore the catalog')}</Button>
        </Link>
      </CaseHero>
      <RecordMetrics
        items={[
          { label: 'Order value', value: money(volume, locale) },
          {
            label: 'Open orders',
            value: active.filter((item) => ['pending', 'processing'].includes(item.status)).length,
          },
          { label: 'Customers', value: data.customers.length },
          {
            label: 'Needs restocking',
            value: data.products.filter((item) => item.stock <= item.reorderAt).length,
          },
        ]}
      />
      <div className="grid items-start gap-aria-lg xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Card>
          <CardHeader
            title={t('Order value over time')}
            description={t('Last 7 days · excludes cancelled orders')}
            titleAs="h2"
          />
          <CardBody>
            <AreaChart
              data={revenue}
              categoryKey="day"
              valueKey="value"
              label={t('Order value')}
              formatValue={(value) => money(value, locale)}
              formatAxisValue={(value) =>
                new Intl.NumberFormat(locale, { notation: 'compact' }).format(value)
              }
            />
          </CardBody>
        </Card>
        <Card>
          <CardHeader
            title={t('Recent orders')}
            titleAs="h2"
            actions={
              <div className="flex flex-wrap items-center gap-aria-sm">
                <Link
                  to="/preview/commerce/orders?panel=add"
                  className="inline-flex items-center gap-aria-sm rounded-aria-md bg-primary px-aria-md py-aria-sm text-aria-button text-on-primary hover:opacity-90"
                >
                  {t('Create an order')}
                  <ArrowRight size={16} />
                </Link>
                {
                  <Link className="text-primary hover:underline" to="/preview/commerce/orders">
                    {t('View all')}
                  </Link>
                }
              </div>
            }
          />
          <CardBody className="space-y-aria-md">
            {[...data.orders]
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
              .slice(0, 4)
              .map((order) => (
                <Link
                  key={order.id}
                  to={
                    '/preview/commerce/orders?panel=detail&record=' + encodeURIComponent(order.id)
                  }
                  className="flex items-center justify-between gap-aria-md border-b border-outline pb-aria-md last:border-0 last:pb-0"
                >
                  <div className="min-w-0 space-y-aria-xs">
                    <Text variant="label">{order.number}</Text>
                    <Text variant="caption">
                      {order.customerName} · {money(order.unitPrice * order.quantity, locale)}
                    </Text>
                  </div>
                  <RecordStatus value={order.status} />
                </Link>
              ))}
          </CardBody>
        </Card>
      </div>
      <div className="grid gap-aria-md sm:grid-cols-2 xl:grid-cols-4">
        <CaseLink
          to="/preview/commerce/products"
          title="Product catalog"
          description="Create, price, and organize the products you sell."
          icon={<Package size={22} />}
        />
        <CaseLink
          to="/preview/commerce/orders"
          title="Order management"
          description="Reserve stock and move orders through fulfillment."
          icon={<ShoppingCart size={22} />}
        />
        <CaseLink
          to="/preview/commerce/inventory"
          title="Inventory"
          description="Spot low stock and replenish available units."
          icon={<Store size={22} />}
        />
        <CaseLink
          to="/preview/commerce/customers"
          title="Customers"
          description="See contact details, addresses, and order history."
          icon={<Users size={22} />}
        />
      </div>
    </CasePage>
  )
}
