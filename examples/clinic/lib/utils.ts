import type { OrderStatus, Product, StockOrder, StockStatus } from '../types'
import { exampleI18n } from '../../app/i18n'
import { localeOf } from '../../../src/template/i18n'

const currencyFormatters = new Map<string, Intl.NumberFormat>()
const dateFormatters = new Map<string, Intl.DateTimeFormat>()
export const currentLocale = () => localeOf(exampleI18n.resolvedLanguage ?? 'id')

export const currency = (amount: number, decimals = 0) => {
  const key = `${currentLocale()}:${decimals}`
  let formatter = currencyFormatters.get(key)
  if (!formatter) {
    formatter = new Intl.NumberFormat(currentLocale(), {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
    currencyFormatters.set(key, formatter)
  }
  return formatter.format(amount)
}

export const dateLabel = (date: string) => {
  const locale = currentLocale()
  let formatter = dateFormatters.get(locale)
  if (!formatter) {
    formatter = new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
    dateFormatters.set(locale, formatter)
  }
  return formatter.format(new Date(`${date}T12:00:00`))
}

export const localDate = () => {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export const orderQuantity = (order: StockOrder) =>
  order.items.reduce((sum, item) => sum + item.quantity, 0)
export const orderTotal = (order: StockOrder) =>
  order.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
export const orderStatus = (order: StockOrder): OrderStatus =>
  order.received >= orderQuantity(order) ? 'complete' : order.received > 0 ? 'partial' : 'pending'
export const stockStatus = (product: Product): StockStatus =>
  product.stock === 0
    ? 'out-of-stock'
    : product.stock <= product.minimumStock
      ? 'low-stock'
      : 'in-stock'

/** Allocate a delivery across the order lines, preserving previously received units. */
export function receiveDelivery(order: StockOrder, products: Product[], quantity: number) {
  const remaining = orderQuantity(order) - order.received
  if (!Number.isInteger(quantity) || quantity <= 0 || quantity > remaining) {
    throw new Error(
      String(exampleI18n.t('Enter a quantity between 1 and {{remaining}}.', { remaining })),
    )
  }
  let position = 0
  const added = new Map<string, number>()
  for (const item of order.items) {
    const end = position + item.quantity
    const units = Math.max(
      0,
      Math.min(end, order.received + quantity) - Math.max(position, order.received),
    )
    if (units) added.set(item.productId, (added.get(item.productId) ?? 0) + units)
    position = end
  }
  return {
    order: { ...order, received: order.received + quantity },
    products: products.map((product) => ({
      ...product,
      stock: product.stock + (added.get(product.id) ?? 0),
    })),
  }
}

export function downloadCsv(filename: string, headers: string[], rows: (string | number)[][]) {
  const escape = (value: string | number) => {
    const string = String(value)
    const safe = /^[=+\-@\t\r]/.test(string) ? `'${string}` : string
    return `"${safe.replaceAll('"', '""')}"`
  }
  const blob = new Blob(
    ['\uFEFF' + [headers, ...rows].map((row) => row.map(escape).join(',')).join('\r\n')],
    { type: 'text/csv;charset=utf-8;' },
  )
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
