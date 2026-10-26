import { describe, expect, it } from 'vitest'
import { initialOrders, initialProducts } from '../data/stock'
import { orderQuantity, orderStatus, orderTotal, receiveDelivery, stockStatus } from './utils'

describe('stock order workflow', () => {
  it('calculates totals from actual line quantities and unit prices', () => {
    expect(orderQuantity(initialOrders[0])).toBe(3)
    expect(orderTotal(initialOrders[0])).toBe(133)
  })
  it('identifies pending, partial, and complete deliveries', () => {
    expect(orderStatus(initialOrders[0])).toBe('pending')
    expect(orderStatus(initialOrders[4])).toBe('partial')
    expect(orderStatus(initialOrders[2])).toBe('complete')
  })
  it('allocates partial deliveries across line boundaries without receiving earlier units twice', () => {
    const original = initialOrders[0]
    const first = receiveDelivery(original, initialProducts, 1)
    const second = receiveDelivery(first.order, first.products, 2)
    expect(first.products[0].stock).toBe(initialProducts[0].stock + 1)
    expect(first.products[2].stock).toBe(initialProducts[2].stock)
    expect(second.products[0].stock).toBe(initialProducts[0].stock + 2)
    expect(second.products[2].stock).toBe(initialProducts[2].stock + 1)
    expect(orderStatus(second.order)).toBe('complete')
    expect(original.received).toBe(0)
  })
  it('rejects zero, negative, fractional, non-finite, and excessive receipts', () => {
    for (const quantity of [0, -1, 1.5, NaN, Infinity, 4]) {
      expect(() => receiveDelivery(initialOrders[0], initialProducts, quantity)).toThrow()
    }
  })
  it('does not receive any units into an already completed order', () => {
    expect(() => receiveDelivery(initialOrders[2], initialProducts, 1)).toThrow()
  })
  it('classifies zero stock before the low stock threshold', () => {
    expect(stockStatus({ ...initialProducts[0], stock: 0 })).toBe('out-of-stock')
    expect(stockStatus({ ...initialProducts[0], stock: 10 })).toBe('low-stock')
    expect(stockStatus({ ...initialProducts[0], stock: 11 })).toBe('in-stock')
  })
})
