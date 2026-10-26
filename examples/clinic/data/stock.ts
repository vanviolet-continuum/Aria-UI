import type { Product, StockOrder } from '../types'

export const vendors = [
  'Barone LLC.',
  'Acme Co.',
  'Abstergo Ltd.',
  'Binford Ltd.',
  'Dentalku',
  'Biffco Enterprises',
]

const names = [
  'Dental examination gloves',
  'Surgical face masks',
  'Dental composite resin',
  'Disposable saliva ejectors',
  'Dental cotton rolls',
  'Sterilization pouches',
  'Local anesthetic cartridges',
  'Dental impression material',
  'Fluoride varnish',
  'Prophy polishing paste',
  'Dental bibs',
  'Disposable microbrushes',
  'Orthodontic brackets',
  'Dental bonding agent',
  'Etching gel',
  'Gutta-percha points',
  'Endodontic files',
  'Dental cement',
  'Disposable impression trays',
  'Articulating paper',
  'Dental floss',
  'Surface disinfectant',
  'Nitrile examination gloves',
  'Disposable syringes',
  'Dental mirror heads',
  'Ultrasonic scaler tips',
  'Diamond burs',
  'Dental suction tips',
  'Cheek retractors',
  'X-ray sensor sleeves',
  'Surgical sutures',
  'Handpiece lubricant',
]
const prices = [
  24, 18, 85, 12, 9, 32, 65, 48, 42, 28, 16, 14, 120, 56, 22, 35, 68, 45, 19, 15, 8, 26, 29, 17, 22,
  95, 38, 18, 25, 14, 36, 32,
]
const categories = ['Consumables', 'Protective equipment', 'Restorative', 'Instruments']
const colors = ['blue', 'violet', 'mint', 'peach']

export const initialProducts: Product[] = names.map((name, index) => ({
  id: `product-${index + 1}`,
  name,
  sku: `ZD-${String(1001 + index)}`,
  category: categories[index % categories.length],
  stock: index < 20 ? 28 + index * 7 : index < 24 ? index - 17 : 0,
  minimumStock: 10,
  price: prices[index],
  color: colors[index % colors.length],
}))

export const initialOrders: StockOrder[] = [
  {
    id: 'OS12K0S',
    createdAt: '2026-10-24',
    vendor: 'Barone LLC.',
    items: [
      { productId: 'product-1', quantity: 2, unitPrice: 24 },
      { productId: 'product-3', quantity: 1, unitPrice: 85 },
    ],
    received: 0,
    emailSent: true,
  },
  {
    id: 'OS19K0K',
    createdAt: '2026-10-23',
    vendor: 'Acme Co.',
    items: [
      { productId: 'product-2', quantity: 2, unitPrice: 18 },
      { productId: 'product-4', quantity: 1, unitPrice: 12 },
    ],
    received: 0,
    emailSent: true,
  },
  {
    id: 'OS14K0C',
    createdAt: '2026-10-22',
    vendor: 'Abstergo Ltd.',
    items: [
      { productId: 'product-5', quantity: 2, unitPrice: 9 },
      { productId: 'product-6', quantity: 1, unitPrice: 32 },
    ],
    received: 3,
    emailSent: true,
  },
  {
    id: 'OS10K0T',
    createdAt: '2026-10-21',
    vendor: 'Binford Ltd.',
    items: [
      { productId: 'product-7', quantity: 2, unitPrice: 65 },
      { productId: 'product-8', quantity: 1, unitPrice: 48 },
    ],
    received: 0,
    emailSent: false,
  },
  {
    id: 'OS01K0H',
    createdAt: '2026-10-20',
    vendor: 'Acme Co.',
    items: [
      { productId: 'product-9', quantity: 2, unitPrice: 42 },
      { productId: 'product-10', quantity: 2, unitPrice: 28 },
    ],
    received: 2,
    emailSent: true,
  },
  {
    id: 'OS18K0G',
    createdAt: '2026-10-19',
    vendor: 'Dentalku',
    items: [
      { productId: 'product-11', quantity: 2, unitPrice: 16 },
      { productId: 'product-12', quantity: 1, unitPrice: 14 },
    ],
    received: 3,
    emailSent: true,
  },
  {
    id: 'OS21K0D',
    createdAt: '2026-10-18',
    vendor: 'Acme Co.',
    items: [
      { productId: 'product-13', quantity: 2, unitPrice: 120 },
      { productId: 'product-14', quantity: 1, unitPrice: 56 },
    ],
    received: 3,
    emailSent: false,
  },
  {
    id: 'OS22K0F',
    createdAt: '2026-10-17',
    vendor: 'Biffco Enterprises',
    items: [
      { productId: 'product-15', quantity: 2, unitPrice: 22 },
      { productId: 'product-16', quantity: 1, unitPrice: 35 },
    ],
    received: 3,
    emailSent: false,
  },
]
