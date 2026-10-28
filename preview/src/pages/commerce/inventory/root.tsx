import { useId, useState } from 'react'
import { z } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import { useI18n } from '@templates/i18n'
import { useUrlState, useUnsavedRouteGuard } from '@templates/integrations/react.router'
import {
  createZodSearchCodec,
  searchStringArray,
  useZodValidation,
} from '@templates/integrations/zod'
import { DataTable, createActionsColumn } from '@templates/ui/data.table'
import { Dialog } from '@templates/ui/dialog'
import { Field } from '@templates/ui/field'
import { NumericInput } from '@templates/ui/number.input'
import { Button } from '@templates/ui/button'
import { Text } from '@templates/ui/text'
import { Progress } from '@templates/ui/progress'
import { Alert } from '@templates/ui/alert'
import { Package, Plus, Eye } from '@templates/icons'
import { toast } from '@templates/ui/toast'
import { CasePage } from '../../../components/scenario.shared'
import { RecordMetrics, RecordStatus, money } from '../../../components/record.display'
import { useScenarios } from '../../../data/scenarios/scenarios.provider'
import { stockStatus, type Product } from '../../../data/scenarios/model'

const codec = createZodSearchCodec(
  z.object({
    q: z.string().catch(''),
    status: searchStringArray,
    page: z.coerce.number().int().min(1).catch(1),
    pageSize: z.coerce.number().int().min(1).max(100).catch(8),
    sort: z.string().catch('stock'),
    order: z.enum(['asc', 'desc']).catch('asc'),
  }),
  { q: '', status: [], page: 1, pageSize: 8, sort: 'stock', order: 'asc' },
)
const schema = z.object({
  amount: z
    .number()
    .int()
    .min(1, 'Choose at least one item.')
    .max(10000, 'Use no more than 10000 units.'),
})
export default function InventoryPage() {
  const { t, locale } = useI18n(),
    { data, adjustStock } = useScenarios(),
    url = useUrlState(codec)
  const [selected, setSelected] = useState<Product | null>(null),
    [open, setOpen] = useState(false),
    [amount, setAmount] = useState(10),
    [error, setError] = useState('')
  const validation = useZodValidation(schema, { amount }),
    guard = useUnsavedRouteGuard(open && amount !== 10)
  const formId = useId(),
    navigate = useNavigate()
  const filtered = data.products
    .filter(
      (item) =>
        (!url.state.status.length || url.state.status.includes(stockStatus(item))) &&
        [item.name, item.sku]
          .join(' ')
          .toLocaleLowerCase(locale)
          .includes(url.state.q.toLocaleLowerCase(locale)),
    )
    .sort((a, b) => {
      const left =
          url.state.sort === 'name'
            ? a.name
            : url.state.sort === 'price'
              ? a.stock * a.price
              : a.stock,
        right =
          url.state.sort === 'name'
            ? b.name
            : url.state.sort === 'price'
              ? b.stock * b.price
              : b.stock
      return (
        (typeof left === 'number' && typeof right === 'number'
          ? left - right
          : String(left).localeCompare(String(right), locale)) *
        (url.state.order === 'asc' ? 1 : -1)
      )
    })
  const page = Math.min(
    url.state.page,
    Math.max(1, Math.ceil(filtered.length / url.state.pageSize)),
  )
  const restock = (product: Product) => {
    setSelected(product)
    setAmount(10)
    setError('')
    validation.reset()
    setOpen(true)
  }
  return (
    <CasePage
      title="Inventory"
      eyebrow="Commerce"
      description="Know what is available, what is running low, and what needs attention."
    >
      <RecordMetrics
        items={[
          {
            label: 'Units in stock',
            value: data.products.reduce((sum, item) => sum + item.stock, 0),
          },
          {
            label: 'Low stock',
            value: data.products.filter((item) => item.stock > 0 && item.stock <= item.reorderAt)
              .length,
          },
          { label: 'Out of stock', value: data.products.filter((item) => item.stock === 0).length },
          {
            label: 'Inventory value',
            value: money(
              data.products.reduce((sum, item) => sum + item.stock * item.price, 0),
              locale,
            ),
          },
        ]}
      />
      <Alert
        severity="info"
        description={t(
          'Available stock already excludes reserved orders. Cancelling an order returns its units automatically.',
        )}
      />
      <DataTable
        data={filtered.slice((page - 1) * url.state.pageSize, page * url.state.pageSize)}
        getRowId={(item) => item.id}
        columns={[
          {
            id: 'name',
            header: t('Product'),
            sortable: true,
            width: 260,
            defaultPin: 'left',
            pinable: false,
            enableHiding: false,
            cell: (item) => (
              <div className="space-y-aria-xs">
                <Text variant="label">{item.name}</Text>
                <Text variant="caption">{item.sku}</Text>
              </div>
            ),
          },
          {
            id: 'stock',
            header: t('Available stock'),
            sortable: true,
            width: 230,
            cell: (item) => (
              <div className="space-y-aria-sm">
                <div className="flex items-center justify-between gap-aria-sm">
                  <Text variant="label">{item.stock}</Text>
                  <RecordStatus value={stockStatus(item)} />
                </div>
                <Progress
                  value={Math.min(100, (item.stock / Math.max(1, item.reorderAt * 3)) * 100)}
                  size="sm"
                  color={
                    item.stock === 0
                      ? 'error'
                      : item.stock <= item.reorderAt
                        ? 'warning'
                        : 'success'
                  }
                  aria-label={t('Stock level')}
                />
              </div>
            ),
          },
          { id: 'threshold', header: t('Low stock threshold'), cell: (item) => item.reorderAt },
          {
            id: 'price',
            header: t('Stock value'),
            sortable: true,
            cell: (item) => money(item.stock * item.price, locale),
          },
          createActionsColumn<Product>(
            (item) => [
              {
                id: 'restock',
                label: t('Replenish stock'),
                icon: <Plus size={16} />,
                onSelect: () => restock(item),
              },
              {
                id: 'view',
                label: t('Product details'),
                icon: <Eye size={16} />,
                onSelect: () =>
                  navigate(
                    '/preview/commerce/products?view=table&panel=detail&record=' +
                      encodeURIComponent(item.id),
                  ),
              },
            ],
            { header: t('Actions') },
          ),
        ]}
        filters={[
          {
            id: 'status',
            label: t('Stock status'),
            type: 'choice',
            accessor: (item) => stockStatus(item),
            options: ['in.stock', 'low.stock', 'out.of.stock'].map((value) => ({
              value,
              label: t(value),
            })),
          },
        ]}
        filterValue={{ status: url.state.status }}
        onFilterChange={(value) =>
          url.setState({ status: Array.isArray(value.status) ? (value.status as string[]) : [] })
        }
        search={{
          value: url.state.q,
          onChange: (q) => url.setState({ q }),
          placeholder: t('Search products…'),
        }}
        server={{
          page,
          pageSize: url.state.pageSize,
          totalItems: filtered.length,
          onPageChange: (page) => url.setState({ page }),
          onPageSizeChange: (pageSize) => url.setState({ pageSize }),
          sort: { column: url.state.sort, direction: url.state.order },
          onSortChange: (sort) => url.setState({ sort: sort.column, order: sort.direction }),
        }}
      />
      <Dialog
        open={open}
        onOpenChange={setOpen}
        onBeforeClose={guard.confirmDiscard}
        title={t('Replenish stock')}
        description={selected?.name}
        footer={
          <>
            <Button onClick={() => guard.requestClose(() => setOpen(false))}>{t('Cancel')}</Button>
            <Button variant="contained" type="submit" form={formId}>
              <Package size={16} />
              {t('Add stock')}
            </Button>
          </>
        }
      >
        <form
          id={formId}
          noValidate
          className="space-y-aria-md"
          onSubmit={(event) => {
            event.preventDefault()
            const parsed = validation.validate()
            if (!parsed.success) return
            try {
              if (selected) adjustStock(selected.id, parsed.data.amount)
              setOpen(false)
              toast.success(t('Inventory updated'), {
                description: t('{{count}} units added to available stock.', {
                  count: parsed.data.amount,
                }),
              })
            } catch (error) {
              setError(error instanceof Error ? t(error.message) : t('Please try again.'))
            }
          }}
        >
          <Field
            label={t('Units to add')}
            required
            error={validation.errors.amount ? t(validation.errors.amount) : undefined}
          >
            <NumericInput
              autoFocus
              value={amount}
              onChange={(next) => {
                validation.touch('amount')
                setAmount(Number(next))
              }}
              decimalScale={0}
            />
          </Field>
          <Text variant="description">
            {t('This updates demo inventory only; no supplier is contacted.')}
          </Text>
          {error && <Alert severity="error" description={error} />}
        </form>
      </Dialog>
      {guard.confirmation}
      <Link to="/preview/commerce/products" className="inline-flex text-primary hover:underline">
        {t('Manage product catalog')}
      </Link>
    </CasePage>
  )
}
