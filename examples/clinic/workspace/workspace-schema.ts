import { initialOrders, initialProducts } from '../data/stock'
import type { DirectoryRecord, Product, StockOrder, WorkspaceSettings } from '../types'
export interface WorkspaceData {
  orders: StockOrder[]
  products: Product[]
  records: Record<string, DirectoryRecord[]>
  settings: WorkspaceSettings
}
export const initial: WorkspaceData = {
  orders: initialOrders,
  products: initialProducts,
  records: {},
  settings: {
    clinicName: 'Avicena Clinic',
    address: '845 Euclid Avenue, CA',
    emailNotifications: true,
    compactRows: false,
  },
}
export function isWorkspace(value: unknown): value is WorkspaceData {
  if (!value || typeof value !== 'object') return false
  const data = value as WorkspaceData
  return (
    Array.isArray(data.orders) &&
    data.orders.every(
      (order) =>
        typeof order.id === 'string' &&
        typeof order.createdAt === 'string' &&
        typeof order.vendor === 'string' &&
        typeof order.received === 'number' &&
        typeof order.emailSent === 'boolean' &&
        Array.isArray(order.items) &&
        order.items.every(
          (item) =>
            typeof item.productId === 'string' &&
            Number.isInteger(item.quantity) &&
            item.quantity > 0 &&
            typeof item.unitPrice === 'number',
        ),
    ) &&
    Array.isArray(data.products) &&
    data.products.every(
      (product) =>
        typeof product.id === 'string' &&
        typeof product.name === 'string' &&
        typeof product.sku === 'string' &&
        typeof product.category === 'string' &&
        typeof product.stock === 'number' &&
        typeof product.minimumStock === 'number' &&
        typeof product.price === 'number',
    ) &&
    !!data.records &&
    typeof data.records === 'object' &&
    Object.values(data.records).every(
      (records) =>
        Array.isArray(records) &&
        records.every(
          (record) =>
            typeof record.id === 'string' &&
            typeof record.name === 'string' &&
            typeof record.detail === 'string' &&
            typeof record.value === 'string' &&
            typeof record.status === 'string',
        ),
    ) &&
    !!data.settings &&
    typeof data.settings.clinicName === 'string' &&
    typeof data.settings.address === 'string' &&
    typeof data.settings.emailNotifications === 'boolean' &&
    typeof data.settings.compactRows === 'boolean'
  )
}
