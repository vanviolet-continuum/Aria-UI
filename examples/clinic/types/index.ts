export type StockStatus = 'in-stock' | 'low-stock' | 'out-of-stock'
export type OrderStatus = 'pending' | 'partial' | 'complete'

export interface Product {
  id: string
  name: string
  sku: string
  category: string
  stock: number
  minimumStock: number
  price: number
  color: string
}

export interface OrderItem {
  productId: string
  quantity: number
  unitPrice: number
}
export interface StockOrder {
  id: string
  createdAt: string
  vendor: string
  items: OrderItem[]
  received: number
  emailSent: boolean
}

export interface DirectoryRecord {
  id: string
  name: string
  detail: string
  value: string
  status: string
}

export interface WorkspaceSettings {
  clinicName: string
  address: string
  emailNotifications: boolean
  compactRows: boolean
}
